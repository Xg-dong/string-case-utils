export function splitWords(str: string): string[] {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-.]+/g, " ")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function toCamelCase(str: string): string {
  const words = splitWords(str);
  return words[0] + words.slice(1).map(capitalize).join("");
}

export function toPascalCase(str: string): string {
  return splitWords(str).map(capitalize).join("");
}

export function toSnakeCase(str: string): string {
  return splitWords(str).join("_");
}

export function toScreamingSnakeCase(str: string): string {
  return toSnakeCase(str).toUpperCase();
}

export function toKebabCase(str: string): string {
  return splitWords(str).join("-");
}

export function toTrainCase(str: string): string {
  return splitWords(str).map(capitalize).join("-");
}

export function toDotCase(str: string): string {
  return splitWords(str).join(".");
}
