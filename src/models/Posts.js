"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    image: String,
    post: { type: String, required: true },
    tags: [String],
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    views: { type: Number, default: 0, min: 0 },
});
var Posts = mongoose_1.default.model("blogs", postSchema);
exports.default = Posts;
