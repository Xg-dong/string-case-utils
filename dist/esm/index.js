import * as ConvertKey from "./utils/convertKey.js";
import { convertObjectKeys } from "./utils/objectKeyConverter.js";
export class StringCaseUtils {
}
StringCaseUtils.toCamelCase = ConvertKey.toCamelCase;
StringCaseUtils.toPascalCase = ConvertKey.toPascalCase;
StringCaseUtils.toSnakeCase = ConvertKey.toSnakeCase;
StringCaseUtils.toScreamingSnakeCase = ConvertKey.toScreamingSnakeCase;
StringCaseUtils.toKebabCase = ConvertKey.toKebabCase;
StringCaseUtils.toTrainCase = ConvertKey.toTrainCase;
StringCaseUtils.toDotCase = ConvertKey.toDotCase;
StringCaseUtils.convertObjectKeys = convertObjectKeys;
// 默认导出，用于UMD构建
export default StringCaseUtils;
//# sourceMappingURL=index.js.map