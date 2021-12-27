"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuccessResponse_1 = require("../../models/SuccessResponse");
const HttpException_1 = require("../../exceptions/HttpException");
const getAllPosts_1 = require("../../services/postActions/getAllPosts");
const getPostsCount_1 = require("../../services/postActions/getPostsCount");
const get = async (req, res, next) => {
    //pagination part
    const { page = 0, perPage = 5 } = req.query;
    let limit = parseInt(perPage.toString());
    limit = limit > 10 ? 5 : limit;
    let skip = parseInt(page.toString()) * limit;
    //sorting part
    const { sortBy = 'updatedAt', order = -1 } = req.query;
    const sortStr = sortBy.toString();
    const sortOrder = parseInt(order.toString());
    const sortObj = { [sortStr]: sortOrder };
    //filter part
    let { filter } = req.query;
    if (filter) {
        filter = { title: filter };
    }
    else {
        filter = {};
    }
    try {
        const posts = await (0, getAllPosts_1.getAllPosts)(skip, limit, sortObj, filter);
        const totalCount = await (0, getPostsCount_1.getPostsCount)(filter);
        res.json(new SuccessResponse_1.default(200, 'Success', posts, totalCount));
    }
    catch (e) {
        next(new HttpException_1.default(400, e.message));
    }
};
exports.default = get;
//# sourceMappingURL=getPosts.js.map