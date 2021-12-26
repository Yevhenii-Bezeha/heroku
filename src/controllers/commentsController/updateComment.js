"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const commentActions_1 = require("../../services/commentActions");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const { commentId } = req.params;
    const comment = req.body;
    try {
        const result = await (0, commentActions_1.updateComment)(commentId, comment);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Comment', commentId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = update;
//# sourceMappingURL=updateComment.js.map