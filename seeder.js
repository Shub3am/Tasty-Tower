import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  slug: { type: String, unique: true, required: true },
  post: { type: String, required: true },
  tags: [String],
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0, min: 0 },
});

async function seedData() {
  mongoose.connect("mongodb://127.0.0.1:27017/tasty_tower");
  mongoose.connection.on("open", () => console.log("Connected"));
  const Posts = mongoose.model("blogs", postSchema);
  let data = await getData();
  const result = await Posts.insertMany(data);
  console.log("Done");
}

async function getData() {
  const data = await fetch("https://dummyjson.com/posts?limit=15").then((res) =>
    res.json()
  );
  let final = data.posts.map((post) => {
    
    return {
      slug: post.title.slice(0, 10).replaceAll(" ", "-"),
      title: post.title,
      post: post.body,
      author: "Shubham",
      tags: post.tags,
    };
  });

  return final;
}

seedData();
