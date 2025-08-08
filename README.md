# String Case Utils

一个用于转换字符串命名风格和对象键名的 TypeScript 工具库，支持前后缀处理和多种环境。

## ✨ 特性

- 🔄 支持多种命名风格转换（camelCase、PascalCase、snake_case等）
- 🎯 对象键名批量转换，支持深度转换
- 🛠️ 前后缀的添加与移除
- 📦 支持 ESM、CommonJS 和 UMD 格式
- 🌐 兼容 Node.js 和浏览器环境
- 💪 完整的 TypeScript 类型支持
- ⚡ 零依赖，体积小巧

## 📦 安装

```bash
npm install string-case-utils
```

## 🚀 使用方法

### ES Modules (推荐)

```javascript
import { StringCaseUtils } from 'string-case-utils';

// 字符串转换
const result = StringCaseUtils.toCamelCase('hello_world'); // 'helloWorld'
```

### CommonJS

```javascript
const { StringCaseUtils } = require('string-case-utils');

// 字符串转换
const result = StringCaseUtils.toSnakeCase('helloWorld'); // 'hello_world'
```

### 浏览器 (UMD)

```html
<script src="https://unpkg.com/string-case-utils/dist/umd/string-case-utils.min.js"></script>
<script>
  const result = StringCaseUtils.toPascalCase('hello-world'); // 'HelloWorld'
</script>
```

## 📋 API 文档

### 字符串转换方法

| 方法 | 输入示例 | 输出示例 | 说明 |
|------|----------|----------|------|
| `toCamelCase` | `'hello_world'` | `'helloWorld'` | 驼峰命名 |
| `toPascalCase` | `'hello_world'` | `'HelloWorld'` | 帕斯卡命名 |
| `toSnakeCase` | `'helloWorld'` | `'hello_world'` | 蛇形命名 |
| `toScreamingSnakeCase` | `'helloWorld'` | `'HELLO_WORLD'` | 大写蛇形命名 |
| `toKebabCase` | `'helloWorld'` | `'hello-world'` | 短横线命名 |
| `toTrainCase` | `'hello_world'` | `'Hello-World'` | 列车命名 |
| `toDotCase` | `'helloWorld'` | `'hello.world'` | 点分命名 |

### 对象键名转换

```javascript
const obj = {
  user_name: 'Alice',
  user_age: 30,
  nested_data: {
    user_id: 'abc123'
  }
};

// 基本转换
const result1 = StringCaseUtils.convertObjectKeys(obj, {
  caseStyle: 'camel'
});
// 结果: { userName: 'Alice', userAge: 30, nestedData: { user_id: 'abc123' } }

// 深度转换
const result2 = StringCaseUtils.convertObjectKeys(obj, {
  caseStyle: 'camel',
  deep: true
});
// 结果: { userName: 'Alice', userAge: 30, nestedData: { userId: 'abc123' } }

// 前后缀处理
const result3 = StringCaseUtils.convertObjectKeys(obj, {
  caseStyle: 'camel',
  prefixToRemove: 'user_',
  suffix: '_field',
  deep: true
});
// 结果: { name_field: 'Alice', age_field: 30, nestedData_field: { id_field: 'abc123' } }
```

### 转换选项

```typescript
interface KeyConvertOptions {
  caseStyle?: 'camel' | 'pascal' | 'snake' | 'screamingSnake' | 'kebab' | 'train' | 'dot';
  prefix?: string;           // 添加前缀
  suffix?: string;           // 添加后缀
  prefixToRemove?: string;   // 移除前缀
  suffixToRemove?: string;   // 移除后缀
  deep?: boolean;            // 是否深度转换嵌套对象
}
```

## 🛠️ 开发

```bash
# 克隆项目
git clone <repository-url>
cd string-case-utils

# 安装依赖
npm install

# 构建所有格式
npm run build

# 运行测试
npm test

# 清理构建文件
npm run clean
```

## 📁 构建输出

```
dist/
├── esm/          # ES Modules 格式
├── cjs/          # CommonJS 格式  
├── umd/          # UMD 格式（浏览器）
└── types/        # TypeScript 类型声明
```

## 🌍 环境支持

- ✅ Node.js 14+
- ✅ 现代浏览器（ES2020+）
- ✅ TypeScript
- ✅ Webpack / Vite / Rollup
- ✅ React / Vue / Angular
- ✅ **Vue 3 + Composition API**
- ✅ **Vue 3 + TypeScript**
- ✅ **Pinia / Vuex**

## 🚀 Vue 3 集成示例

### Composition API 使用

```typescript
// Vue 3 + TypeScript
import { ref, computed } from 'vue';
import { StringCaseUtils } from 'string-case-utils';

export default {
  setup() {
    const apiData = ref({
      user_name: 'Alice',
      email_address: 'alice@example.com'
    });
    
    // 响应式转换
    const frontendData = computed(() => {
      return StringCaseUtils.convertObjectKeys(apiData.value, {
        caseStyle: 'camel',
        deep: true
      });
    });
    
    return {
      apiData,
      frontendData
    };
  }
};
```

### API 数据处理

```javascript
// 组合式函数
export function useApiConverter() {
  const toBackend = (data) => {
    return StringCaseUtils.convertObjectKeys(data, {
      caseStyle: 'snake',
      deep: true
    });
  };
  
  const toFrontend = (data) => {
    return StringCaseUtils.convertObjectKeys(data, {
      caseStyle: 'camel', 
      deep: true
    });
  };
  
  return { toBackend, toFrontend };
}
```

### Pinia Store 集成

```javascript
// stores/user.js
import { defineStore } from 'pinia';
import { StringCaseUtils } from 'string-case-utils';

export const useUserStore = defineStore('user', {
  actions: {
    async fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      
      // 自动转换 API 响应格式
      this.users = data.map(user => 
        StringCaseUtils.convertObjectKeys(user, {
          caseStyle: 'camel',
          deep: true
        })
      );
    }
  }
});
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎贡献代码！请确保：

1. 运行测试：`npm test`
2. 构建成功：`npm run build`
3. 遵循现有代码风格

## 📚 更多示例

查看 [test/](./test/) 和 [examples/](./examples/) 目录中的完整示例：

- [基础测试](./test/test.js) - 基本功能演示
- [CommonJS 测试](./test/test-cjs.cjs) - CommonJS 环境使用
- [浏览器测试](./test/browser-test.html) - 浏览器环境演示
- [Vue 3 演示](./test/vue3-demo.html) - Vue 3 + Composition API 完整示例
- [全格式测试](./test/test-all-formats.mjs) - 所有模块格式测试
- [Vue 3 集成代码](./examples/vue3-integration.js) - Vue 3 项目集成示例
- [TypeScript 示例](./examples/vue3-typescript.ts) - Vue 3 + TypeScript 集成
