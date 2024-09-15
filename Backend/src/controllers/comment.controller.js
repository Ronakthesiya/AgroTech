import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getAllCommentOfPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const comments = await Comment.aggregate([
        {
            $match: {
                postId: new mongoose.Types.ObjectId(postId),
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
                            _id: 1,
                            username: 1,
                            avatar: 1,
                        },
                    },
                ],
            },
        },
        {
            $addFields : {
                username : "$user.username",
                avatar : "$user.avatar",
            }
        },
        {
            $project: {
                user: 0,
            }
        }
    ]);

    if (!comments) {
        throw new ApiError(404, "Comment not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, comments, "Comment fetch successfully"));
});

const addComment = asyncHandler(async (req, res) => {
    const { postId, userId } = req.params;
    const { content } = req.body;

  

    const comment = await Comment.create({
        postId,
        content,
        userId,
    });

    if (!comment) {
        throw new ApiError(400, "Failed to create comment");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, comment, "Comment created successfully"));
});

const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const comment = await Comment.findByIdAndDelete(id);

    if (!comment) {
        throw new ApiError(404, "Comment not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Comment delete successfully"));
});

export { addComment, deleteComment, getAllCommentOfPost };
