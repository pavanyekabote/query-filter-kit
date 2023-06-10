import { Operators } from './constants';
import { QueryStringEscaper } from './string-escaper';

export class QueryFilterBuilder {
  private filters: string[];

  constructor() {
    this.filters = [];
  }

  withGreaterThanEquals(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    let v =
      typeof value == 'string'
        ? QueryStringEscaper.escapeSpecialChars(value)
        : value;
    const q = `${k}:${Operators.GTE}:${v}`;
    this.filters.push(q);
    return this;
  }

  withGreaterThan(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    let v =
      typeof value == 'string'
        ? QueryStringEscaper.escapeSpecialChars(value)
        : value;
    const q = `${k}:${Operators.GT}:${v}`;
    this.filters.push(q);
    return this;
  }

  withLessThanEquals(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    let v =
      typeof value == 'string'
        ? QueryStringEscaper.escapeSpecialChars(value)
        : value;
    const q = `${k}:${Operators.LTE}:${v}`;
    this.filters.push(q);
    return this;
  }

  withLessThan(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    let v =
      typeof value == 'string'
        ? QueryStringEscaper.escapeSpecialChars(value)
        : value;
    const q = `${k}:${Operators.LT}:${v}`;
    this.filters.push(q);
    return this;
  }

  withEquals(key: string, value: string | number) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = QueryStringEscaper.escapeSpecialChars(value as string);
    const q = `${k}:${Operators.EQUALS}:${v}`;
    this.filters.push(q);
    return this;
  }

  withNotEquals(key: string, value: string | number) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = QueryStringEscaper.escapeSpecialChars(value as string);
    const q = `${k}:${Operators.NOT_EQUALS}:${v}`;
    this.filters.push(q);
    return this;
  }

  withIn(key: string, values: (string | number)[]) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = values
      .map(a => QueryStringEscaper.escapeSpecialChars(a as string))
      .join(',');
    const q = `${k}:${Operators.IN}:${v}`;
    this.filters.push(q);
    return this;
  }

  withNotIn(key: string, values: (string | number)[]) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = values
      .map(a => QueryStringEscaper.escapeSpecialChars(a as string))
      .join(',');
    const q = `${k}:${Operators.NOT_IN}:${v}`;
    this.filters.push(q);
    return this;
  }

  withInRange(key: string, minValue: number | Date, maxValue: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const minv = QueryStringEscaper.escapeSpecialChars(minValue as any);
    const maxv = QueryStringEscaper.escapeSpecialChars(maxValue as any);
    const q = `${k}:${Operators.BETWEEN}:${minv},${maxv}`;
    this.filters.push(q);
    return this;
  }

  withContains(key: string, value: string) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = QueryStringEscaper.escapeSpecialChars(value);
    const q = `${k}:${Operators.CONTAINS}:${v}`;
    this.filters.push(q);
    return this;
  }

  withStartsWith(key: string, value: string) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = QueryStringEscaper.escapeSpecialChars(value);
    const q = `${k}:${Operators.STARTS_WITH}:${v}`;
    this.filters.push(q);
    return this;
  }

  withEndsWith(key: string, value: string) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const v = QueryStringEscaper.escapeSpecialChars(value);
    const q = `${k}:${Operators.ENDS_WITH}:${v}`;
    this.filters.push(q);
    return this;
  }

  build() {
    return this.filters.join('&');
  }
}
