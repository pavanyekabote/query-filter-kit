"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStringToObject = void 0;
var converters_1 = require("./converters");
var QueryStringToObject = /** @class */ (function () {
    function QueryStringToObject(decodedQuery) {
        this.decodedQuery = decodedQuery;
    }
    QueryStringToObject.prototype.generateBlock = function (decodedLine) {
        var _a;
        var key = decodedLine[0], operator = decodedLine[1], value = decodedLine[2];
        var converter = converters_1.ConverterFactory.getConverter(operator);
        var convertedValue = converter.convert(value);
        return _a = {},
            _a[key] = {
                op: operator,
                value: convertedValue,
            },
            _a;
    };
    QueryStringToObject.prototype.build = function () {
        var newBlock = {};
        this.decodedQuery
            .filter(function (d) { return d && (d === null || d === void 0 ? void 0 : d.length) != 0; })
            .map(this.generateBlock)
            .forEach(function (d) {
            var k = Object.keys(d)[0];
            if (newBlock[k]) {
                newBlock[k].push(d[k]);
            }
            else {
                newBlock[k] = [d[k]];
            }
        });
        return newBlock;
    };
    return QueryStringToObject;
}());
exports.QueryStringToObject = QueryStringToObject;
//# sourceMappingURL=string-to-object.js.map