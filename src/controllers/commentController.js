"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postActions_1 = require("../services/postActions");
const PostNotFoundException_1 = require("../exceptions/PostNotFoundException");
const HttpException_1 = require("../exceptions/HttpException");
const SuccessResponse_1 = require("../models/SuccessResponse");
const get = async (req, res, next) => {
    try {
        const results = await (0, postActions_1.getAllPosts)();
        res.json(new SuccessResponse_1.default(200, 'Success', results));
    }
    catch (e) {
        next(e);
    }
};
const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await (0, postActions_1.getPostById)(id);
        res.json(new SuccessResponse_1.default(200, 'Success', result));
    }
    catch (e) {
        next(new PostNotFoundException_1.default(id));
    }
};
const create = async (req, res, next) => {
    var _a;
    const [_, userId] = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    console.log(userId);
    const post = Object.assign(Object.assign({}, req.body), { userId: userId });
    if (!post.title || !post.description || !post.userId) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    try {
        const result = await (0, postActions_1.createPost)(post);
        res.json(new SuccessResponse_1.default(201, 'Success', result));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
const update = async (req, res, next) => {
    const { postId } = req.params;
    const post = req.body;
    if (Object.keys(post).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    try {
        const result = await (0, postActions_1.updatePost)(postId, post);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new PostNotFoundException_1.default(postId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
const remove = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const result = await (0, postActions_1.removePost)(postId);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new PostNotFoundException_1.default(postId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
const ctrlPosts = { get, create, getById, update, remove };
exports.default = ctrlPosts;
//# sourceMappingURL=commentController.js.map