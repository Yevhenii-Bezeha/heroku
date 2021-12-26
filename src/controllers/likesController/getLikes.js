"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const getAllPosts_1 = require("../../services/postActions/getAllPosts");
const get = async (req, res, next) => {
    var _a;
    if (Object.keys(req.body).length === 0) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const [_, userId] = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    const postId = req.body;
    try {
        const results = await (0, getAllPosts_1.getAllPosts)(skip, limit, sortObj);
        res.json(new SuccessResponse_1.default(200, 'Success', results));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = get;
//# sourceMappingURL=getLikes.js.map