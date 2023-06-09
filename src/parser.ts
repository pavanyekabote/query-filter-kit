import { QueryStringEscaper } from './string-escaper';
import { QueryStringToObject } from './string-to-object';

export class QueryFilterParser {
  private readonly CHAR_SPLITTER = /(?<!\\):/gis;
  private readonly QUERY_SPLITTER = /(?<!\\)&/gis;

  constructor(private queryString: string) {}

  parse() {
    const lines = this.raw();
    return new QueryStringToObject(lines).build();
  }

  raw() {
    const queries = this.queryString.split(this.QUERY_SPLITTER);
    const qmap = queries.map(q =>
      q.split(this.CHAR_SPLITTER).map(this.unescapeStr),
    );
    return qmap;
  }

  private unescapeStr(str: string) {
    return QueryStringEscaper.unescapeSpecialChars(str);
  }
}
