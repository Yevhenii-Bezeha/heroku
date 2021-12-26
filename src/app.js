"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const postApi_1 = require("./api/postApi");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const commentApi_1 = require("./api/commentApi");
const likeApi_1 = require("./api/likeApi");
const tagApi_1 = require("./api/tagApi");
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('dist/appName')));
app.use('/posts', postApi_1.default);
app.use('/posts', likeApi_1.default);
app.use('/posts/:id/comments', commentApi_1.default);
app.use('/posts/:id/tags', tagApi_1.default);
app.use('*', (req, res) => {
    res.sendFile(path.resolve('dist/appName/index.html'));
});
app.use(errorMiddleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map