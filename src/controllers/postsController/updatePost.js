"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const HttpException_1 = require("../../exceptions/HttpException");
const updatePost_1 = require("../../services/postActions/updatePost");
const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const { postId } = req.params;
    const post = req.body;
    try {
        const result = await (0, updatePost_1.updatePost)(postId, post);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Post', postId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = update;
//# sourceMappingURL=updatePost.js.map