declare class ArrayConverter {
    private readonly COMMA_CHAR_SPLITTER;
    convert(value: string, delimiter?: RegExp): string[];
}
declare class NullConverter {
    convert(value: string): string;
}
export declare class ConverterFactory {
    static getConverter(operator: string): ArrayConverter | NullConverter;
}
export {};
