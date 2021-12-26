"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class NotFoundException extends HttpException_1.default {
    constructor(field, id) {
        super(404, `${field} with id ${id} not found`);
    }
}
exports.default = NotFoundException;
//# sourceMappingURL=NotFoundException.js.map