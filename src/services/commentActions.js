"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComment = exports.updateComment = exports.createComment = void 0;
const mongoose = require("mongoose");
const comment_1 = require("../db/schemas/comment");
const ObjectId = mongoose.Types.ObjectId;
const createComment = (comment) => comment_1.default.create(comment);
exports.createComment = createComment;
const updateComment = (commentId, { message }) => comment_1.default.findOneAndUpdate({ _id: new ObjectId(commentId) }, {
    $set: { message },
});
exports.updateComment = updateComment;
const removeComment = (commentId) => comment_1.default.findByIdAndRemove({ _id: new ObjectId(commentId) });
exports.removeComment = removeComment;
//# sourceMappingURL=commentActions.js.map