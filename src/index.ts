import * as ConvertKey from "./utils/convertKey";
import { convertObjectKeys } from "./utils/objectKeyConverter";

export class StringCaseUtils {
  static toCamelCase = ConvertKey.toCamelCase;
  static toPascalCase = ConvertKey.toPascalCase;
  static toSnakeCase = ConvertKey.toSnakeCase;
  static toScreamingSnakeCase = ConvertKey.toScreamingSnakeCase;
  static toKebabCase = ConvertKey.toKebabCase;
  static toTrainCase = ConvertKey.toTrainCase;
  static toDotCase = ConvertKey.toDotCase;

  static convertObjectKeys = convertObjectKeys;
}

// 默认导出，用于UMD构建
export default StringCaseUtils;
