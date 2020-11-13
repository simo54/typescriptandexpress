"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
const path = __importStar(require("path"));
// Importing Express
const express_1 = __importDefault(require("express"));
// Declaring port where server is going to run
const port = 5000;
// Initialization of app
const app = express_1.default();
// Route of our request, in this case we send our public html file
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});
// Running Listen method
app.listen(port, () => console.log("Server running on port " + port));
