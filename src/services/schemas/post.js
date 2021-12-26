"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = new Schema({
    authorAvatar: {
        type: String,
        required: [true, 'Set authorAvatar'],
    },
    authorName: {
        type: String,
        required: [true, 'Set authorAvatar'],
    },
    title: {
        type: String,
        required: [true, 'Set title'],
    },
    description: {
        type: String,
        required: [true, 'Set description'],
    },
    likes: {
        type: Number,
        required: [true, 'Set likes'],
        default: 0,
    },
}, { versionKey: false, timestamps: true });
const Post = mongoose.model('posts', post);
exports.default = Post;
//# sourceMappingURL=post.js.map