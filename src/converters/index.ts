import { Operators } from '../constants';

class ArrayConverter {
  convert(value: string, delimiter = ',') {
    return value.split(delimiter);
  }
}

class NullConverter {
  convert(value: string) {
    return value;
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
