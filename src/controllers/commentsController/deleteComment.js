"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const commentActions_1 = require("../../services/commentActions");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const remove = async (req, res, next) => {
    const { commentId } = req.params;
    try {
        const result = await (0, commentActions_1.removeComment)(commentId);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Comment', commentId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = remove;
//# sourceMappingURL=deleteComment.js.map