import { StringCaseUtils } from "../dist/esm/index.js";

const input = "helloWorldExample";
console.log(StringCaseUtils.toCamelCase(input));
console.log(StringCaseUtils.toPascalCase(input));
console.log(StringCaseUtils.toSnakeCase(input));
console.log(StringCaseUtils.toScreamingSnakeCase(input));
console.log(StringCaseUtils.toKebabCase(input));
console.log(StringCaseUtils.toTrainCase(input));
console.log(StringCaseUtils.toDotCase(input));

const obj = {
  user_name: "Alice",
  user_age: 30,
  nested_info: {
    user_id: "abc123"
  }
};

console.log(StringCaseUtils.convertObjectKeys(obj, {
  caseStyle: "camel",  // 修复: caseType -> caseStyle
  deep: true,
  prefixToRemove: "user_",
  suffix: "_field"  // 修复: suffixToAdd -> suffix
}));