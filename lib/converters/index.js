"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterFactory = void 0;
var constants_1 = require("../constants");
var ArrayConverter = /** @class */ (function () {
    function ArrayConverter() {
    }
    ArrayConverter.prototype.convert = function (value, delimiter) {
        if (delimiter === void 0) { delimiter = ','; }
        return value.split(delimiter);
    };
    return ArrayConverter;
}());
var NullConverter = /** @class */ (function () {
    function NullConverter() {
    }
    NullConverter.prototype.convert = function (value) {
        return value;
    };
    return NullConverter;
}());
var ConverterFactory = /** @class */ (function () {
    function ConverterFactory() {
    }
    ConverterFactory.getConverter = function (operator) {
        if (operator === constants_1.Operators.IN ||
            operator === constants_1.Operators.NOT_IN ||
            operator === constants_1.Operators.BETWEEN) {
            return new ArrayConverter();
        }
        return new NullConverter();
    };
    return ConverterFactory;
}());
exports.ConverterFactory = ConverterFactory;
//# sourceMappingURL=index.js.map