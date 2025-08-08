"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertKey = __importStar(require("./utils/convertKey"));
const objectKeyConverter_1 = require("./utils/objectKeyConverter");
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
StringCaseUtils.convertObjectKeys = objectKeyConverter_1.convertObjectKeys;
// 确保在全局作用域中正确暴露
if (typeof window !== 'undefined') {
    window.StringCaseUtils = StringCaseUtils;
}
if (typeof global !== 'undefined') {
    global.StringCaseUtils = StringCaseUtils;
}
// 导出
exports.default = StringCaseUtils;
//# sourceMappingURL=umd.js.map