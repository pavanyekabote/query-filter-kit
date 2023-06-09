import { Operators } from './constants';
import { QueryStringEscaper } from './string-escaper';

export class QueryFilterBuilder {
  private filters: string[];

  constructor() {
    this.filters = [];
  }

  withGreaterThanEquals(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const q = `${k}:${Operators.GTE}:${value}`;
    this.filters.push(q);
    return this;
  }

  withGreaterThan(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const q = `${k}:${Operators.GT}:${value}`;
    this.filters.push(q);
    return this;
  }

  withLessThanEquals(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const q = `${k}:${Operators.LTE}:${value}`;
    this.filters.push(q);
    return this;
  }

  withLessThan(key: string, value: number | Date) {
    const k = QueryStringEscaper.escapeSpecialChars(key);
    const q = `${k}:${Operators.LT}:${value}`;
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
    const q = `${k}:${Operators.CONTAINS}:${value}`;
    this.filters.push(q);
    return this;
  }

  build() {
    return this.filters.join('&');
  }
}
