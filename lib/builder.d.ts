export declare class QueryFilterBuilder {
    private filters;
    constructor();
    withGreaterThanEquals(key: string, value: number | Date): this;
    withGreaterThan(key: string, value: number | Date): this;
    withLessThanEquals(key: string, value: number | Date): this;
    withLessThan(key: string, value: number | Date): this;
    withEquals(key: string, value: string | number): this;
    withNotEquals(key: string, value: string | number): this;
    withIn(key: string, values: (string | number)[]): this;
    withNotIn(key: string, values: (string | number)[]): this;
    withInRange(key: string, minValue: number | Date, maxValue: number | Date): this;
    withContains(key: string, value: string): this;
    withStartsWith(key: string, value: string): this;
    withEndsWith(key: string, value: string): this;
    build(): string;
}
