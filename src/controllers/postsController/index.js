"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPosts_1 = require("./getPosts");
const getPost_1 = require("./getPost");
const updatePost_1 = require("./updatePost");
const addPost_1 = require("./addPost");
const deletePost_1 = require("./deletePost");
exports.default = { get: getPosts_1.default, getById: getPost_1.default, update: updatePost_1.default, create: addPost_1.default, remove: deletePost_1.default };
//# sourceMappingURL=index.js.map