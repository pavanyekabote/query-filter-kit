"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilterParser = void 0;
var string_escaper_1 = require("./string-escaper");
var string_to_object_1 = require("./string-to-object");
var QueryFilterParser = /** @class */ (function () {
    function QueryFilterParser(queryString) {
        this.queryString = queryString;
        this.CHAR_SPLITTER = /(?<!\\):/gis;
        this.QUERY_SPLITTER = /(?<!\\)&/gis;
    }
    QueryFilterParser.prototype.parse = function () {
        var lines = this.raw();
        return new string_to_object_1.QueryStringToObject(lines).build();
    };
    QueryFilterParser.prototype.raw = function () {
        var _this = this;
        var queries = this.queryString.split(this.QUERY_SPLITTER);
        var qmap = queries.map(function (q) {
            return q.split(_this.CHAR_SPLITTER).map(_this.unescapeStr);
        });
        return qmap;
    };
    QueryFilterParser.prototype.unescapeStr = function (str) {
        return string_escaper_1.QueryStringEscaper.unescapeSpecialChars(str);
    };
    return QueryFilterParser;
}());
exports.QueryFilterParser = QueryFilterParser;
//# sourceMappingURL=parser.js.map