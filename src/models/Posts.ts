import mongoose from "mongoose";
interface Posts {
  post: string;
  image: string;
  title: string;
  tags: string[];
  author: string;
  date: Date;
  views: Number;
}

const postSchema = new mongoose.Schema<Posts>({
  title: { type: String, required: true },
  image: String,
  post: { type: String, required: true },
  tags: [String],
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0, min: 0 },
});
const Posts = mongoose.model("blogs", postSchema);

export default Posts;
