"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
const bold_1 = __importStar(require("./bold"));
const italic_1 = __importStar(require("./italic"));
let isBold = true;
function sayHello(name) {
    const formatter = isBold ? bold_1.default : italic_1.default;
    isBold = !isBold;
    return `Hello! ${formatter(name)}!`;
}
exports.sayHello = sayHello;
console.log(sayHello("정환")); // 'Hello! <b>정환</b>!'
console.log(sayHello("정환")); // 'Hello! <i>정환</i>!'
console.log(bold_1.boldTagName); // 'b'
console.log(italic_1.italicTagName); // 'i'
[1, 2, 3].map((n) => n + 1);
