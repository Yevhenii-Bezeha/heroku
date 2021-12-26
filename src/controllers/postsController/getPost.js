"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const getPostById_1 = require("../../services/postActions/getPostById");
const getById = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const result = await (0, getPostById_1.getPostById)(postId);
        res.json(new SuccessResponse_1.default(200, 'Success', result));
    }
    catch (e) {
        next(new NotFoundException_1.default('Post', postId));
    }
};
exports.default = getById;
//# sourceMappingURL=getPost.js.map