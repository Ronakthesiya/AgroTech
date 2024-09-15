import mongoose from "mongoose";
import { Post } from "../models/post.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const getPost = asyncHandler(async(req, res) => {
    const {id} = req.params
    console.log(id);

    const posts = await Post.aggregate([
        {
            $match: {
                _id : new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
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
                foreignField: "postId",
                as: "likes",
            },
        },
        {
            $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "postId",
                as: "comment"
            }
        },
        {
            $addFields: {
                likesCount: { $size: "$likes" },
                commentCount: {$size: "$comment"},
                username: "$user.username",
                avatar: "$user.avatar",
            },
        },
        {
            $project: {
                comment:0,
                likes: 0,
                user: 0,
            },
        }
    ]);

    if (!posts) {
        throw new ApiError(500, "Failed to retrieved posts");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                posts,
                "All Post for community retrieved successfully"
            )
        );

})

const getCurrentUserAllPost = asyncHandler(async (req, res) => {
    // const posts = await Post.find(
    //     {
    //         userID : req.user._id
    //     }
    // )

    const { userId } = req.params;

    const posts = await Post.aggregate([
        {
            $match: {
                userId : new mongoose.Types.ObjectId(userId),
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
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
                foreignField: "postId",
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

const getAllPost = asyncHandler(async (req, res) => {
    const posts = await Post.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "userId",
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
                foreignField: "postId",
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
        }
    ]);

    if (!posts) {
        throw new ApiError(500, "Failed to retrieved posts");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                posts,
                "All Post for community retrieved successfully"
            )
        );
});

const addPost = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    
    const { userId } = req.params;

    console.log(req.body)
    // console.log(req)

    if (!(title || description)) {
        throw new ApiError(400, "Title and Description is required");
    }
    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, "Image is required");
    }

    const image = await uploadOnCloudinary(imageLocalPath);

    const post = await Post.create({
        title,
        description,
        image: image.url,
        userId,
    });

    if (!post) {
        throw new ApiError(500, "Failed to create post");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post create successfully"));
});

const editPostImage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const image = req.file?.path;

    if (!image) {
        throw new ApiError(400, "Image is required");
    }

    const post = await Post.findOneAndUpdate(
        id,
        {
            $set: {
                image: image.url,
            },
        },
        { new: true }
    );

    if (!post) {
        throw new ApiError(500, "Failed to change post image");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post image updated successfully"));
});

const editPostDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
        throw new ApiError(400, "Title and description are required");
    }

    const post = await Post.findByIdAndUpdate(
        id,
        {
            $set: {
                title,
                description,
            },
        },
        { new: true }
    );

    if (!post) {
        throw new ApiError(500, "Failed to change post details");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post details updated successfully"));
});

const deletePost = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
        throw new ApiError(404, "Post not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post deleted successfully"));
});

export {
    addPost, deletePost, editPostDetail, editPostImage, getAllPost, getCurrentUserAllPost, getPost
};

