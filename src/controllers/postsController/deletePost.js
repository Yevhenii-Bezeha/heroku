"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const removePost_1 = require("../../services/postActions/removePost");
const remove = async (req, res, next) => {
    var _a;
    const { postId } = req.params;
    const [_, userId] = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    try {
        const result = await (0, removePost_1.removePost)(postId);
        if (!result) {
            next(new NotFoundException_1.default('Post', postId));
            return;
        }
        await (0, removePost_1.removeLikes)(postId);
        await (0, removePost_1.removeComments)(postId);
        res.json(new SuccessResponse_1.default(200, 'Success', result));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = remove;
//# sourceMappingURL=deletePost.js.map