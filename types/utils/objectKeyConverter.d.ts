type CaseStyle = "camel" | "pascal" | "snake" | "screamingSnake" | "kebab" | "train" | "dot";
interface KeyConvertOptions {
    caseStyle?: CaseStyle;
    prefix?: string;
    suffix?: string;
    prefixToRemove?: string;
    suffixToRemove?: string;
    deep?: boolean;
}
export declare function convertObjectKeys<T extends object>(obj: T, options?: KeyConvertOptions): Record<string, any>;
export {};
