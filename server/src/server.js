"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var io = require("socket.io");
var http_1 = require("http");
var ChatServer = (function () {
    function ChatServer() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = http_1.createServer(this.app);
        this.io = io(this.server);
        this.addConnection();
    }
    ChatServer.prototype.addConnection = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Listening port " + _this.port);
        });
        this.io.on('connect', function (socket) {
            var _this = this;
            console.log("Client connected..");
            socket.on('message', function (message) {
                _this.io.emit('message', message);
            });
            socket.on('disconnect', function () {
                console.log("Client disconnected");
            });
        });
    };
    ChatServer.prototype.getAplication = function () {
        return this.app;
    };
    ChatServer.PORT = 8080;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
