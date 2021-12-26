"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const post = new Schema({
    title: {
        type: String,
        required: [true, 'Set title'],
    },
    description: {
        type: String,
        required: [true, 'Set description'],
    },
    userId: {
        type: ObjectId,
        ref: 'users',
        required: [true, 'Set userId'],
    },
}, { versionKey: false, timestamps: true });
const Post = mongoose.model('posts', post);
exports.default = Post;
//# sourceMappingURL=post.js.map