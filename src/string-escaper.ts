export class QueryStringEscaper {
  static escapeSpecialChars(str: string) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/\:/gis, '\\:')
      .replace(/\"/gis, '\\"')
      .replace(/\&/gis, '\\&')
      .replace(/,/gis, '\\,');
  }

  static unescapeSpecialChars(str: string) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/\\:/gis, ':')
      .replace(/\"/gis, '"')
      .replace(/\\&/gis, '&');
  }

  static unescapeListChars(str: string) {
    if (typeof str != 'string') return str;
    return str.replace(/\\,/gis, ',');
  }
}
