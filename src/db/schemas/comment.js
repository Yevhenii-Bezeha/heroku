"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const comment = new Schema({
    message: {
        type: String,
        required: [true, 'Set message'],
    },
    postId: {
        type: ObjectId,
        ref: 'posts',
        required: [true, 'Set postId'],
    },
    userId: {
        type: ObjectId,
        ref: 'posts',
        required: [true, 'Set userId'],
    },
}, { versionKey: false, timestamps: true });
const Comment = mongoose.model('comments', comment);
exports.default = Comment;
//# sourceMappingURL=comment.js.map