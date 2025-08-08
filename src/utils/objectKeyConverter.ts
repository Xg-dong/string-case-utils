import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toScreamingSnakeCase,
  toKebabCase,
  toTrainCase,
  toDotCase,
} from "./convertKey";
type CaseStyle =
  | "camel"
  | "pascal"
  | "snake"
  | "screamingSnake"
  | "kebab"
  | "train"
  | "dot";

interface KeyConvertOptions {
  caseStyle?: CaseStyle;
  prefix?: string;
  suffix?: string;
  prefixToRemove?: string;
  suffixToRemove?: string;
  deep?: boolean; // 添加深度转换选项
}

export function convertObjectKeys<T extends object>(
  obj: T,
  options: KeyConvertOptions = {}
): Record<string, any> {
  const result: Record<string, any> = {};
  const {
    caseStyle = "camel",
    prefix = "",
    suffix = "",
    prefixToRemove = "",
    suffixToRemove = "",
    deep = false, // 默认不深度转换
  } = options;

  Object.entries(obj).forEach(([key, value]) => {
    let newKey: string = key;

    if (prefixToRemove && newKey.startsWith(prefixToRemove)) {
      newKey = newKey.slice(prefixToRemove.length);
    }
    if (suffixToRemove && newKey.endsWith(suffixToRemove)) {
      newKey = newKey.slice(0, -suffixToRemove.length);
    }

    switch (caseStyle) {
      case "camel":
        newKey = toCamelCase(newKey);
        break;
      case "pascal":
        newKey = toPascalCase(newKey);
        break;
      case "snake":
        newKey = toSnakeCase(newKey);
        break;
      case "screamingSnake":
        newKey = toScreamingSnakeCase(newKey);
        break;
      case "kebab":
        newKey = toKebabCase(newKey);
        break;
      case "train":
        newKey = toTrainCase(newKey);
        break;
      case "dot":
        newKey = toDotCase(newKey);
        break;
    }

    newKey = `${prefix}${newKey}${suffix}`;

    if (
      deep &&
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      result[newKey] = convertObjectKeys(value, options); // 递归转换
    } else {
      result[newKey] = value;
    }
  });

  return result;
}
