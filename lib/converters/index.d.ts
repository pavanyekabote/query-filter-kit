declare class ArrayConverter {
    convert(value: string, delimiter?: string): string[];
}
declare class NullConverter {
    convert(value: string): string;
}
export declare class ConverterFactory {
    static getConverter(operator: string): ArrayConverter | NullConverter;
}
export {};
