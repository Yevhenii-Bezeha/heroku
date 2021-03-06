"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const uri = process.env.MONGODB_URI;
const mongooseOptions = {
    promiseLibrary: global.Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connect = () => {
    mongoose
        .connect(uri, mongooseOptions)
        .then(() => {
        const PORT = process.env['PORT'] || '3000';
        app_1.default.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
        console.log('DB successfully connected');
    })
        .catch((error) => {
        console.log('Error connecting to database');
    });
};
connect();
//# sourceMappingURL=index.js.map
