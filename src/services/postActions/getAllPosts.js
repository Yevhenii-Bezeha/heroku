"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
const post_1 = require("../../db/schemas/post");
const getAllPosts = (skip, limit, sortObj) => post_1.default.aggregate([
    { $sort: sortObj },
    { $skip: skip },
    { $limit: limit },
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user',
        },
    },
    {
        $lookup: {
            from: 'likes',
            localField: '_id',
            foreignField: 'postId',
            as: 'likes',
        },
    },
    {
        $lookup: {
            from: 'comments',
            localField: '_id',
            foreignField: 'postId',
            as: 'comments',
        },
    },
    {
        $lookup: {
            from: 'tags',
            localField: '_id',
            foreignField: 'postId',
            as: 'tags',
        },
    },
    {
        $project: {
            'user.password': 0,
            'likes.createdAt': 0,
            'likes.updatedAt': 0,
            'tags.createdAt': 0,
            'tags.updatedAt': 0,
        },
    },
]);
exports.getAllPosts = getAllPosts;
//# sourceMappingURL=getAllPosts.js.map