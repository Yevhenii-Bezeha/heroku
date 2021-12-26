"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const commentsController_1 = require("../controllers/commentsController");
const router = express.Router();
router.post('/', commentsController_1.default.create);
router.patch('/:commentId', commentsController_1.default.update);
router.delete('/:commentId', commentsController_1.default.remove);
exports.default = router;
//# sourceMappingURL=commentApi.js.map