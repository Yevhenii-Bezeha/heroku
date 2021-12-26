"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const likesController_1 = require("../controllers/likesController");
const router = express.Router();
router.post('/like', likesController_1.default.create);
router.post('/:postId/like', likesController_1.default.create);
router.patch('/like/:likeId', likesController_1.default.toggle);
router.patch('/:postId/like/:likeId', likesController_1.default.toggle);
exports.default = router;
//# sourceMappingURL=likeApi.js.map