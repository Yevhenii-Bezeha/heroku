"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const tagsController_1 = require("../controllers/tagsController");
const router = express.Router();
router.post('/', tagsController_1.default.create);
router.patch('/:tagId', tagsController_1.default.update);
router.delete('/:tagId', tagsController_1.default.remove);
exports.default = router;
//# sourceMappingURL=tagApi.js.map