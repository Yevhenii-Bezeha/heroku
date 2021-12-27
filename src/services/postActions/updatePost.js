"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = void 0;
const post_1 = require("../../db/schemas/post");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const updatePost = (postId, { title, description, tags }) => post_1.default.findOneAndUpdate({ _id: new ObjectId(postId) }, {
    $set: { title, description, tags },
});
exports.updatePost = updatePost;
//# sourceMappingURL=updatePost.js.map