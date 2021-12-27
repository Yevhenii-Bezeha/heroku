"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('dist/appName')));
app.get('/posts', (req, res) => {
    res.json('it works');
    console.log('-----------------------posts');
});
app.use('*', (req, res, next) => {
    res.sendFile(path.resolve('dist/appName/index.html'));
});
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json(message);
});
app.listen(3000, () => console.log('server started'));
//# sourceMappingURL=app.js.map