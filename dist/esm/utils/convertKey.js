export function splitWords(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/[_\-.]+/g, " ")
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
}
export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
export function toCamelCase(str) {
    const words = splitWords(str);
    return words[0] + words.slice(1).map(capitalize).join("");
}
export function toPascalCase(str) {
    return splitWords(str).map(capitalize).join("");
}
export function toSnakeCase(str) {
    return splitWords(str).join("_");
}
export function toScreamingSnakeCase(str) {
    return toSnakeCase(str).toUpperCase();
}
export function toKebabCase(str) {
    return splitWords(str).join("-");
}
export function toTrainCase(str) {
    return splitWords(str).map(capitalize).join("-");
}
export function toDotCase(str) {
    return splitWords(str).join(".");
}
//# sourceMappingURL=convertKey.js.map