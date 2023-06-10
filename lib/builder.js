"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilterBuilder = void 0;
var constants_1 = require("./constants");
var string_escaper_1 = require("./string-escaper");
var QueryFilterBuilder = /** @class */ (function () {
    function QueryFilterBuilder() {
        this.filters = [];
    }
    QueryFilterBuilder.prototype.withGreaterThanEquals = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = typeof value == 'string'
            ? string_escaper_1.QueryStringEscaper.escapeSpecialChars(value)
            : value;
        var q = "".concat(k, ":").concat(constants_1.Operators.GTE, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withGreaterThan = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = typeof value == 'string'
            ? string_escaper_1.QueryStringEscaper.escapeSpecialChars(value)
            : value;
        var q = "".concat(k, ":").concat(constants_1.Operators.GT, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withLessThanEquals = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = typeof value == 'string'
            ? string_escaper_1.QueryStringEscaper.escapeSpecialChars(value)
            : value;
        var q = "".concat(k, ":").concat(constants_1.Operators.LTE, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withLessThan = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = typeof value == 'string'
            ? string_escaper_1.QueryStringEscaper.escapeSpecialChars(value)
            : value;
        var q = "".concat(k, ":").concat(constants_1.Operators.LT, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withEquals = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = string_escaper_1.QueryStringEscaper.escapeSpecialChars(value);
        var q = "".concat(k, ":").concat(constants_1.Operators.EQUALS, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withNotEquals = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = string_escaper_1.QueryStringEscaper.escapeSpecialChars(value);
        var q = "".concat(k, ":").concat(constants_1.Operators.NOT_EQUALS, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withIn = function (key, values) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = values
            .map(function (a) { return string_escaper_1.QueryStringEscaper.escapeSpecialChars(a); })
            .join(',');
        var q = "".concat(k, ":").concat(constants_1.Operators.IN, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withNotIn = function (key, values) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = values
            .map(function (a) { return string_escaper_1.QueryStringEscaper.escapeSpecialChars(a); })
            .join(',');
        var q = "".concat(k, ":").concat(constants_1.Operators.NOT_IN, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withInRange = function (key, minValue, maxValue) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var minv = string_escaper_1.QueryStringEscaper.escapeSpecialChars(minValue);
        var maxv = string_escaper_1.QueryStringEscaper.escapeSpecialChars(maxValue);
        var q = "".concat(k, ":").concat(constants_1.Operators.BETWEEN, ":").concat(minv, ",").concat(maxv);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withContains = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = string_escaper_1.QueryStringEscaper.escapeSpecialChars(value);
        var q = "".concat(k, ":").concat(constants_1.Operators.CONTAINS, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withStartsWith = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = string_escaper_1.QueryStringEscaper.escapeSpecialChars(value);
        var q = "".concat(k, ":").concat(constants_1.Operators.STARTS_WITH, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.withEndsWith = function (key, value) {
        var k = string_escaper_1.QueryStringEscaper.escapeSpecialChars(key);
        var v = string_escaper_1.QueryStringEscaper.escapeSpecialChars(value);
        var q = "".concat(k, ":").concat(constants_1.Operators.ENDS_WITH, ":").concat(v);
        this.filters.push(q);
        return this;
    };
    QueryFilterBuilder.prototype.build = function () {
        return this.filters.join('&');
    };
    return QueryFilterBuilder;
}());
exports.QueryFilterBuilder = QueryFilterBuilder;
//# sourceMappingURL=builder.js.map