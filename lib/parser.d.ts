export declare class QueryFilterParser {
    private queryString;
    private readonly CHAR_SPLITTER;
    private readonly QUERY_SPLITTER;
    constructor(queryString: string);
    parse(): any;
    raw(): string[][];
    private unescapeStr;
}
