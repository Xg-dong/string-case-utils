"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitWords = splitWords;
exports.capitalize = capitalize;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
exports.toScreamingSnakeCase = toScreamingSnakeCase;
exports.toKebabCase = toKebabCase;
exports.toTrainCase = toTrainCase;
exports.toDotCase = toDotCase;
function splitWords(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/[_\-.]+/g, " ")
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function toCamelCase(str) {
    const words = splitWords(str);
    return words[0] + words.slice(1).map(capitalize).join("");
}
function toPascalCase(str) {
    return splitWords(str).map(capitalize).join("");
}
function toSnakeCase(str) {
    return splitWords(str).join("_");
}
function toScreamingSnakeCase(str) {
    return toSnakeCase(str).toUpperCase();
}
function toKebabCase(str) {
    return splitWords(str).join("-");
}
function toTrainCase(str) {
    return splitWords(str).map(capitalize).join("-");
}
function toDotCase(str) {
    return splitWords(str).join(".");
}
//# sourceMappingURL=convertKey.js.map