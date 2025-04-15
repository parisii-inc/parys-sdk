"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GebError = exports.GebErrorTypes = void 0;
var GebErrorTypes;
(function (GebErrorTypes) {
    GebErrorTypes["DOES_NOT_OWN_HAVE_PROXY"] = "The specified address does not own a proxy";
    GebErrorTypes["NO_ETHSEND_WITH_MULTICALL"] = "Multicall only supports functions of type \"view\"";
    GebErrorTypes["INVALID_FUNCTION_INPUT"] = "Invalid function input";
    GebErrorTypes["SAFE_DOES_NOT_EXIST"] = "The safe does not exist";
    GebErrorTypes["INVALID_PROVIDER"] = "The provider specified is not valid";
})(GebErrorTypes = exports.GebErrorTypes || (exports.GebErrorTypes = {}));
var GebError = /** @class */ (function (_super) {
    __extends(GebError, _super);
    function GebError(code, message) {
        var _this = _super.call(this, message ? code + ' -> ' + message : code) || this;
        _this.code = code;
        _this.name = 'Geb Error';
        return _this;
    }
    return GebError;
}(Error));
exports.GebError = GebError;
//# sourceMappingURL=errors.js.map