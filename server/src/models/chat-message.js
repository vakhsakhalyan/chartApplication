"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("./message");
var ChartMessage = (function (_super) {
    __extends(ChartMessage, _super);
    function ChartMessage(user, text) {
        return _super.call(this, user, text) || this;
    }
    return ChartMessage;
}(message_1.Message));
exports.ChartMessage = ChartMessage;
