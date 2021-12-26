"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./../controllers/postsController/index");
const router = express.Router();
router.get('/', index_1.default.get);
router.get('/:postId', index_1.default.getById);
router.post('/', index_1.default.create);
router.patch('/:postId', index_1.default.update);
router.delete('/:postId', index_1.default.remove);
exports.default = router;
//# sourceMappingURL=postApi.js.map