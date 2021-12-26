"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePost = exports.updatePost = exports.getPostById = exports.createPost = exports.getAllPosts = void 0;
const post_1 = require("./schemas/post");
const getAllPosts = () => post_1.default.find();
exports.getAllPosts = getAllPosts;
const createPost = (post) => post_1.default.create(post);
exports.createPost = createPost;
const getPostById = (id) => post_1.default.findOne({ _id: id });
exports.getPostById = getPostById;
const updatePost = (postId, { authorAvatar, authorName, title, description, likes }) => post_1.default.findOneAndUpdate({ _id: postId }, {
    $set: { authorAvatar, authorName, title, description, likes },
});
exports.updatePost = updatePost;
const removePost = (id) => post_1.default.findByIdAndRemove({ _id: id });
exports.removePost = removePost;
//# sourceMappingURL=postActions.js.map