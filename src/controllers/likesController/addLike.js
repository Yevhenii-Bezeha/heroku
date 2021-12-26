"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const likeActions_1 = require("../../services/likeActions");
const create = async (req, res, next) => {
    var _a;
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const [_, userId] = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    const like = Object.assign(Object.assign({}, req.body), { userId: userId });
    try {
        const result = await (0, likeActions_1.createLike)(like);
        res.json(new SuccessResponse_1.default(201, 'Success', result));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = create;
//# sourceMappingURL=addLike.js.map