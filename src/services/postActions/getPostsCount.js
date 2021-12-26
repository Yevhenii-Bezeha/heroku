"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsCount = void 0;
const post_1 = require("../../db/schemas/post");
const getPostsCount = () => post_1.default.countDocuments();
exports.getPostsCount = getPostsCount;
//# sourceMappingURL=getPostsCount.js.map