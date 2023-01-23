import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        user_id: {
            type: ObjectId,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model('Post', postSchema, "posts");
