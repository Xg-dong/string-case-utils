import * as ConvertKey from "./utils/convertKey";
import { convertObjectKeys } from "./utils/objectKeyConverter";
declare class StringCaseUtils {
    static toCamelCase: typeof ConvertKey.toCamelCase;
    static toPascalCase: typeof ConvertKey.toPascalCase;
    static toSnakeCase: typeof ConvertKey.toSnakeCase;
    static toScreamingSnakeCase: typeof ConvertKey.toScreamingSnakeCase;
    static toKebabCase: typeof ConvertKey.toKebabCase;
    static toTrainCase: typeof ConvertKey.toTrainCase;
    static toDotCase: typeof ConvertKey.toDotCase;
    static convertObjectKeys: typeof convertObjectKeys;
}
export default StringCaseUtils;
