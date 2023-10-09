"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_http_1 = __importDefault(require("node:http"));
const node_path_1 = __importDefault(require("node:path"));
node_http_1.default.createServer((req, res) => {
    node_fs_1.default.readFile(node_path_1.default.join(__dirname, 'index.html'), (err, data) => {
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080, () => {
    console.log('서버 시작됨');
});
