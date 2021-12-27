"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsCount = void 0;
const post_1 = require("../../db/schemas/post");
const getPostsCount = (filter) => post_1.default.countDocuments(filter);
exports.getPostsCount = getPostsCount;
//# sourceMappingURL=getPostsCount.js.map