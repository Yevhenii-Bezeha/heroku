"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComments = exports.removeLikes = exports.removePost = void 0;
const post_1 = require("../../db/schemas/post");
const mongoose = require("mongoose");
const like_1 = require("../../db/schemas/like");
const comment_1 = require("../../db/schemas/comment");
const ObjectId = mongoose.Types.ObjectId;
const removePost = (postId) => post_1.default.findByIdAndRemove({ _id: new ObjectId(postId) });
exports.removePost = removePost;
const removeLikes = (postId) => like_1.default.deleteMany({ postId: new ObjectId(postId) });
exports.removeLikes = removeLikes;
const removeComments = (postId) => comment_1.default.deleteMany({ postId: new ObjectId(postId) });
exports.removeComments = removeComments;
//# sourceMappingURL=removePost.js.map