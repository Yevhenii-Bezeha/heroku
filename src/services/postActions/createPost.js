"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const post_1 = require("../../db/schemas/post");
const createPost = (post) => post_1.default.create(post);
exports.createPost = createPost;
//# sourceMappingURL=createPost.js.map