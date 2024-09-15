import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
