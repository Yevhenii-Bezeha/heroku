"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const post_1 = require("../../db/schemas/post");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const getPostById = (postId) => post_1.default.aggregate([
    { $match: { _id: new ObjectId(postId) } },
    { $limit: 1 },
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
exports.getPostById = getPostById;
//# sourceMappingURL=getPostById.js.map