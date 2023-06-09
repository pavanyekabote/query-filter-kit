import { ConverterFactory } from './converters';

export class QueryStringToObject {
  constructor(private decodedQuery: string[][]) {}

  private generateBlock(decodedLine: string[]) {
    const [key, operator, value] = decodedLine;
    const converter = ConverterFactory.getConverter(operator);
    const convertedValue = converter.convert(value) as any;

    return {
      [key]: {
        op: operator,
        value: convertedValue,
      },
    };
  }

  build() {
    const newBlock = {} as any;
    this.decodedQuery
      .filter(d => d && d?.length != 0)
      .map(this.generateBlock)
      .forEach(d => {
        const k = Object.keys(d)[0];
        if (newBlock[k]) {
          newBlock[k].push(d[k]);
        } else {
          newBlock[k] = [d[k]];
        }
      });
    return newBlock;
  }
}
