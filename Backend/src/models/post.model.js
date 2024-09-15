import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        image : {
            type : String, // Cloudinary URL
        },
    },
    {timestamps : true}
)

export const Post = mongoose.model("Post",postSchema)