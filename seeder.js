import mongoose from "mongoose";

import Posts from "./src/models/Posts.js";

async function getData() {
  const data = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );
  console.log(data);
}
getData();
