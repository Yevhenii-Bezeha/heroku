"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleLike = exports.createLike = void 0;
const mongoose = require("mongoose");
const like_1 = require("../db/schemas/like");
const ObjectId = mongoose.Types.ObjectId;
const createLike = (like) => like_1.default.create(like);
exports.createLike = createLike;
const toggleLike = (likeId, isLiked) => like_1.default.findOneAndUpdate({ _id: new ObjectId(likeId) }, {
    $set: { isLiked: isLiked },
});
exports.toggleLike = toggleLike;
//# sourceMappingURL=likeActions.js.map