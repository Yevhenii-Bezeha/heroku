"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const tagCategories_1 = require("../../models/tagCategories");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const tag = new Schema({
    text: {
        type: Array,
        enum: [...tagCategories_1.tagCategories],
        default: 'Reviews',
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
const Tag = mongoose.model('tags', tag);
exports.default = Tag;
//# sourceMappingURL=tag.js.map