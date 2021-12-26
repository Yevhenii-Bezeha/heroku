"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const tagActions_1 = require("../../services/tagActions");
const remove = async (req, res, next) => {
    const { tagId } = req.params;
    try {
        const result = await (0, tagActions_1.removeTag)(tagId);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Tag', tagId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = remove;
//# sourceMappingURL=deleteTag.js.map