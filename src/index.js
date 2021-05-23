"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blatant = exports.relative = void 0;
var path_1 = require("path");
var relative = function (fileName) {
    var root = path_1.dirname(fileName);
    return blatant(root);
};
exports.relative = relative;
var blatant = function (setThisPath) {
    var oldPath = process.env.NODE_PATH || '';
    if (oldPath.indexOf(setThisPath) === -1) {
        process.env.NODE_PATH = setThisPath + path_1.delimiter + oldPath;
    }
    require('module')._initPaths();
    return;
};
exports.blatant = blatant;
//# sourceMappingURL=index.js.map