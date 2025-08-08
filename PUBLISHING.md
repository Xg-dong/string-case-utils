# 发布指南 / Publishing Guide

## 准备工作

### 1. 更新版本号
```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 次要版本 (1.0.0 -> 1.1.0)
npm version minor

# 主要版本 (1.0.0 -> 2.0.0)
npm version major
```

### 2. 更新GitHub仓库信息
在 `package.json` 中更新以下字段：
```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/你的用户名/string-case-utils.git"
  },
  "homepage": "https://github.com/你的用户名/string-case-utils#readme",
  "bugs": {
    "url": "https://github.com/你的用户名/string-case-utils/issues"
  }
}
```

## 发布步骤

### 1. 登录NPM
```bash
npm login
```

### 2. 测试发布（推荐）
```bash
npm run publish:dry
```

### 3. 正式发布
```bash
npm run publish:npm
```

或者直接使用：
```bash
npm publish
```

## 自动化检查

发布前会自动执行：
1. `npm run clean` - 清理构建文件
2. `npm run build` - 重新构建所有格式
3. `npm test` - 运行测试

## 包内容

发布的包将包含：
- `dist/` - 所有构建文件（ESM、CommonJS、UMD、TypeScript 类型）
- `README.md` - 项目说明
- `README.zh.md` - 中文说明
- `LICENSE` - MIT许可证
- `package.json` - 包配置

## 验证发布

发布后可以通过以下方式验证：

### 安装测试
```bash
npm install string-case-utils
```

### 功能测试
```javascript
import { StringCaseUtils } from 'string-case-utils';
console.log(StringCaseUtils.toCamelCase('hello_world')); // 'helloWorld'
```

### 在线查看
访问：https://www.npmjs.com/package/string-case-utils

## 注意事项

1. 确保版本号符合语义化版本规范
2. 发布前测试所有构建格式
3. 更新CHANGELOG.md记录版本变更
4. 确保GitHub仓库信息正确
5. 发布是不可逆的，请谨慎操作
