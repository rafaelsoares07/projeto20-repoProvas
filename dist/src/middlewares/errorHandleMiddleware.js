"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandleMiddleware(err, req, res, next) {
    if (err.type === "bad_request") {
        return res.status(400).send(err.message);
    }
    if (err.type === "conflit") {
        return res.status(409).send(err.message);
    }
    if (err.type === "not_found") {
        return res.status(404).send(err.message);
    }
}
exports.default = errorHandleMiddleware;
