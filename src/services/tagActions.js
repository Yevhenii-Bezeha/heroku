"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTag = exports.updateTag = exports.createTag = void 0;
const mongoose = require("mongoose");
const tag_1 = require("../db/schemas/tag");
const ObjectId = mongoose.Types.ObjectId;
const createTag = (tag) => tag_1.default.create(tag);
exports.createTag = createTag;
const updateTag = (tagId, { text }) => tag_1.default.findOneAndUpdate({ _id: new ObjectId(tagId) }, {
    $set: { text },
});
exports.updateTag = updateTag;
const removeTag = (tagId) => tag_1.default.findByIdAndRemove({ _id: new ObjectId(tagId) });
exports.removeTag = removeTag;
//# sourceMappingURL=tagActions.js.map