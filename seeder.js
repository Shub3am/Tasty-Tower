import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  post: { type: String, required: true },
  tags: [String],
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0, min: 0 },
});
const Posts = mongoose.model("blogs", postSchema);

async function seedData() {
  mongoose.connect("mongodb://localhost:27017/tasty_tower");
  mongoose.connection.on("open", () => console.log("Connected"));
  let data = await getData();
  const result = await Posts.insertMany(data);
  console.log(result);
}

async function getData() {
  const data = await fetch("https://dummyjson.com/posts?limit=15").then((res) =>
    res.json()
  );
  let final = data.posts.map((post) => {
    console.log(post);
    return {
      id: post.id,
      title: post.title,
      post: post.body,
      author: "Shubham",
      tags: post.tags,
    };
  });
  return final;
}

seedData();
