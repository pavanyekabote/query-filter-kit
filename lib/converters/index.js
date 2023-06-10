"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterFactory = void 0;
var constants_1 = require("../constants");
var string_escaper_1 = require("../string-escaper");
var ArrayConverter = /** @class */ (function () {
    function ArrayConverter() {
        this.COMMA_CHAR_SPLITTER = /(?<!\\),/gis;
    }
    ArrayConverter.prototype.convert = function (value, delimiter) {
        if (delimiter === void 0) { delimiter = this.COMMA_CHAR_SPLITTER; }
        return value.split(delimiter).map(string_escaper_1.QueryStringEscaper.unescapeListChars);
    };
    return ArrayConverter;
}());
var NullConverter = /** @class */ (function () {
    function NullConverter() {
    }
    NullConverter.prototype.convert = function (value) {
        return string_escaper_1.QueryStringEscaper.unescapeListChars(value);
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