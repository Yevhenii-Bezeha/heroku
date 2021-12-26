"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const likeActions_1 = require("../../services/likeActions");
const toggle = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const { likeId } = req.params;
    const { isLiked } = req.body;
    try {
        const result = await (0, likeActions_1.toggleLike)(likeId, !isLiked);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Like', likeId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = toggle;
//# sourceMappingURL=toggleLike.js.map