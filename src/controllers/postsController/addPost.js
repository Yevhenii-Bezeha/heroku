"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const createPost_1 = require("../../services/postActions/createPost");
const create = async (req, res, next) => {
    var _a;
    if (!req.body.title || !req.body.description) {
        next(new HttpException_1.default(404, 'Provide values'));
        return;
    }
    const [_, userId] = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    const post = Object.assign(Object.assign({}, req.body), { userId: userId });
    try {
        const result = await (0, createPost_1.createPost)(post);
        res.json(new SuccessResponse_1.default(201, 'Success', result));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = create;
//# sourceMappingURL=addPost.js.map