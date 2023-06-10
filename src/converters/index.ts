import { Operators } from '../constants';
import { QueryStringEscaper } from '../string-escaper';

class ArrayConverter {
  private readonly COMMA_CHAR_SPLITTER = /(?<!\\),/gis;
  convert(value: string, delimiter = this.COMMA_CHAR_SPLITTER) {
    return value.split(delimiter).map(QueryStringEscaper.unescapeListChars);
  }
}

class NullConverter {
  convert(value: string) {
    return QueryStringEscaper.unescapeListChars(value);
  }
}

export class ConverterFactory {
  static getConverter(operator: string) {
    if (
      operator === Operators.IN ||
      operator === Operators.NOT_IN ||
      operator === Operators.BETWEEN
    ) {
      return new ArrayConverter();
    }
    return new NullConverter();
  }
}
