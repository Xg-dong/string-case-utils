import * as ConvertKey from "./utils/convertKey";
import { convertObjectKeys } from "./utils/objectKeyConverter";

// 直接创建 StringCaseUtils 类
class StringCaseUtils {
  static toCamelCase = ConvertKey.toCamelCase;
  static toPascalCase = ConvertKey.toPascalCase;
  static toSnakeCase = ConvertKey.toSnakeCase;
  static toScreamingSnakeCase = ConvertKey.toScreamingSnakeCase;
  static toKebabCase = ConvertKey.toKebabCase;
  static toTrainCase = ConvertKey.toTrainCase;
  static toDotCase = ConvertKey.toDotCase;
  static convertObjectKeys = convertObjectKeys;
}

// 确保在全局作用域中正确暴露
if (typeof window !== "undefined") {
  (window as any).StringCaseUtils = StringCaseUtils;
}
if (typeof global !== "undefined") {
  (global as any).StringCaseUtils = StringCaseUtils;
}

// 导出
export default StringCaseUtils;
