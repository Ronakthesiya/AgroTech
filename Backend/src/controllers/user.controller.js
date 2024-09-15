import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const options = {
    httpOnly: true,
    secure: true,
};

const generateAccessAndRefreshToken = async (userID) => {
    try {
        const user = await User.findById(userID);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access token"
        );
    }
};

const getAllUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    console.log(id)
    const users = await User.find({
        _id: {
            $ne: id,
        },
    }).select("-password -refreshToken");

    if(!users){
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(new ApiResponse(200,users,"Users get successfully"))
});


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, description } = req.body;

    if (
        [username, email, password, description].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All Fields Are Required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }],
    });

    if (existedUser) {
        throw new ApiError(
            400,
            "User with this email or username already exists"
        );
    }

    let avatarLocalPath;

    if (req.file) {
        avatarLocalPath = req.file.path;
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const user = await User.create({
        username,
        email,
        password,
        avatar: avatar?.url || "",
        description,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        );
    }

    return res
        .status(200)
        .json(new ApiResponse(200, createdUser, "User Register Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (!(email || username)) {
        throw new ApiError(400, "Email or Username is required");
    }

    const user = await User.findOne({
        $or: [{ email }, { username }],
    });

    if (!user) {
        throw new ApiError(401, "Invalid username or email");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
        user._id
    );

    const loggedUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedUser,
                    accessToken,
                    refreshToken,
                },
                "User logged in Successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const user = await User.findByIdAndUpdate(
        id,
        {
            $unset: {
                refreshToken: 1,
            },
        },
        {
            new: true,
        }
    );

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;
    const user = await User.findById(id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, {}, "Password"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
    const {
        username,
        email,
        description,
        firstName,
        lastName,
        dateOfBirth,
        city,
        state,
        village,
        gender,
        occupation,
    } = req.body;

    const { id } = req.params;
    if (
        [
            username,
            email,
            description,
            firstName,
            lastName,
            dateOfBirth,
            city,
            state,
            village,
            gender,
            occupation,
        ].some((item) => item?.trim() === "")
    ) {
        throw new ApiError(400, "Please fill all fields");
    }

    const user = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                username,
                email,
                description,
                firstName,
                lastName,
                dateOfBirth,
                city,
                state,
                village,
                gender,
                occupation,
            },
        },
        {
            new: true,
        }
    ).select("-password -refreshToken");

    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "Account Details Updated Successfully")
        );
});

const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;
    const { id } = req.params;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Please upload an image");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar.url) {
        throw new ApiError(500, "Failed to upload image");
    }

    const user = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                avatar: avatar.url,
            },
        },
        {
            new: true,
        }
    );

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Avatar Updated Successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        throw new ApiError(404, "User Not Found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "User Details Retrieved Successfully"
            )
        );
});

const getAllPost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const posts = await Post.aggregate([
        {
            $match: {
                userID: id,
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "userID",
                foreignField: "_id",
                as: "user",
                pipeline: [
                    {
                        $project: {
                            username: 1,
                            avatar: 1,
                        },
                    },
                ],
            },
        },
        {
            $addFields: {
                user: { $arrayElemAt: ["$user", 0] }, // Extract the first user document
            },
        },
        {
            $lookup: {
                from: "likes",
                localField: "_id",
                foreignField: "postID",
                as: "likes",
            },
        },
        {
            $addFields: {
                likesCount: { $size: "$likes" },
                username: "$user.username",
                avatar: "$user.avatar",
            },
        },
        {
            $project: {
                likes: 0,
                user: 0,
            },
        },
    ]);

    if (!posts) {
        throw new ApiError(500, "Failed to retrieved posts");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, posts, "All Post retrieved"));
});

const getExtraDetail = asyncHandler(async(req,res) => {
    const { id } = req.params;

    const post = await Post.find({
        userId : new mongoose.Types.ObjectId(id)
    })

    const scan = await Scan.find({
        userId : new mongoose.Types.ObjectId(id)
    })

    const like = await Like.find({
        userId : new mongoose.Types.ObjectId(id)
    })

    return res.status(200)
    .json(
        new ApiResponse(
            200,
            {
                posts : post.length,
                scan : scan.length,
                like : like.length
            },
            "get user statistics"
        )
    )
})

export {
    changeCurrentPassword, getAllPost, getCurrentUser, loginUser,
    logoutUser,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    getAllUser,
    getExtraDetail
};

