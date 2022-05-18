"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NOR_1 = __importDefault(require("./utils/NOR"));
const tableGen_1 = __importDefault(require("./utils/tableGen"));
function main() {
    (0, tableGen_1.default)(2, (a) => {
        return (0, NOR_1.default)(a[0], a[1]);
    });
}
main();
