"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function XOR(a, b) {
    if (a === b) {
        return false;
    }
    else {
        return Boolean(+a + +b);
    }
}
exports.default = XOR;
