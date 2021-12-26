"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const tagActions_1 = require("../../services/tagActions");
const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const { tagId } = req.params;
    const tag = req.body;
    try {
        const result = await (0, tagActions_1.updateTag)(tagId, tag);
        result
            ? res.json(new SuccessResponse_1.default(200, 'Success', result))
            : next(new NotFoundException_1.default('Tag', tagId));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = update;
//# sourceMappingURL=updateTag.js.map