import * as ConvertKey from "./utils/convertKey.js";
import { convertObjectKeys } from "./utils/objectKeyConverter.js";
// 直接创建 StringCaseUtils 类
class StringCaseUtils {
}
StringCaseUtils.toCamelCase = ConvertKey.toCamelCase;
StringCaseUtils.toPascalCase = ConvertKey.toPascalCase;
StringCaseUtils.toSnakeCase = ConvertKey.toSnakeCase;
StringCaseUtils.toScreamingSnakeCase = ConvertKey.toScreamingSnakeCase;
StringCaseUtils.toKebabCase = ConvertKey.toKebabCase;
StringCaseUtils.toTrainCase = ConvertKey.toTrainCase;
StringCaseUtils.toDotCase = ConvertKey.toDotCase;
StringCaseUtils.convertObjectKeys = convertObjectKeys;
// 确保在全局作用域中正确暴露
if (typeof window !== 'undefined') {
    window.StringCaseUtils = StringCaseUtils;
}
if (typeof global !== 'undefined') {
    global.StringCaseUtils = StringCaseUtils;
}
// 导出
export default StringCaseUtils;
//# sourceMappingURL=umd.js.map