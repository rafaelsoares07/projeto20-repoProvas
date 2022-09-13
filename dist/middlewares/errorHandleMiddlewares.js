"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandleMiddleware(err, req, res, next) {
    console.log(err);
    if (err.type === "bad_request") {
        return res.status(400).send(err.message);
    }
}
exports.default = errorHandleMiddleware;
