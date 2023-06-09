"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStringEscaper = void 0;
var QueryStringEscaper = /** @class */ (function () {
    function QueryStringEscaper() {
    }
    QueryStringEscaper.escapeSpecialChars = function (str) {
        if (typeof str !== 'string')
            return str;
        return str
            .replace(/\:/gis, '\\:')
            .replace(/\"/gis, '\\"')
            .replace(/\&/gis, '\\&');
    };
    QueryStringEscaper.unescapeSpecialChars = function (str) {
        if (typeof str !== 'string')
            return str;
        return str
            .replace(/\\:/gis, ':')
            .replace(/\"/gis, '"')
            .replace(/\\&/gis, '&');
    };
    return QueryStringEscaper;
}());
exports.QueryStringEscaper = QueryStringEscaper;
//# sourceMappingURL=string-escaper.js.map