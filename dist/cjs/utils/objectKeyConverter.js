"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertObjectKeys = convertObjectKeys;
const convertKey_1 = require("./convertKey");
function convertObjectKeys(obj, options = {}) {
    const result = {};
    const { caseStyle = "camel", prefix = "", suffix = "", prefixToRemove = "", suffixToRemove = "", deep = false, // 默认不深度转换
     } = options;
    Object.entries(obj).forEach(([key, value]) => {
        let newKey = key;
        if (prefixToRemove && newKey.startsWith(prefixToRemove)) {
            newKey = newKey.slice(prefixToRemove.length);
        }
        if (suffixToRemove && newKey.endsWith(suffixToRemove)) {
            newKey = newKey.slice(0, -suffixToRemove.length);
        }
        switch (caseStyle) {
            case "camel":
                newKey = (0, convertKey_1.toCamelCase)(newKey);
                break;
            case "pascal":
                newKey = (0, convertKey_1.toPascalCase)(newKey);
                break;
            case "snake":
                newKey = (0, convertKey_1.toSnakeCase)(newKey);
                break;
            case "screamingSnake":
                newKey = (0, convertKey_1.toScreamingSnakeCase)(newKey);
                break;
            case "kebab":
                newKey = (0, convertKey_1.toKebabCase)(newKey);
                break;
            case "train":
                newKey = (0, convertKey_1.toTrainCase)(newKey);
                break;
            case "dot":
                newKey = (0, convertKey_1.toDotCase)(newKey);
                break;
        }
        newKey = `${prefix}${newKey}${suffix}`;
        if (deep &&
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)) {
            result[newKey] = convertObjectKeys(value, options); // 递归转换
        }
        else {
            result[newKey] = value;
        }
    });
    return result;
}
//# sourceMappingURL=objectKeyConverter.js.map