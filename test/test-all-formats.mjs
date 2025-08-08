// 测试 CommonJS 导入
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

console.log('=== 测试 CommonJS 导入 ===');
try {
    const { StringCaseUtils } = require('../dist/cjs/index.js');
    console.log('✅ CommonJS 导入成功');
    console.log('toCamelCase:', StringCaseUtils.toCamelCase('hello_world'));
} catch (error) {
    console.error('❌ CommonJS 导入失败:', error.message);
}

console.log('\n=== 测试 ESM 导入 ===');
try {
    const { StringCaseUtils } = await import('../dist/esm/index.js');
    console.log('✅ ESM 导入成功');
    console.log('toPascalCase:', StringCaseUtils.toPascalCase('hello_world'));
} catch (error) {
    console.error('❌ ESM 导入失败:', error.message);
}

console.log('\n=== 测试对象转换功能 ===');
const { StringCaseUtils } = await import('../dist/esm/index.js');

const testObj = {
    user_name: 'Alice',
    user_age: 30,
    nested_data: {
        user_id: 'abc123',
        created_at: '2023-01-01'
    }
};

console.log('原始对象:', testObj);

console.log('\n转换为驼峰命名（深度转换）:');
const camelResult = StringCaseUtils.convertObjectKeys(testObj, {
    caseStyle: 'camel',
    deep: true
});
console.log(camelResult);

console.log('\n转换为蛇形命名，添加前缀:');
const snakeResult = StringCaseUtils.convertObjectKeys(testObj, {
    caseStyle: 'snake',
    prefix: 'api_',
    deep: true
});
console.log(snakeResult);

console.log('\n✅ 所有测试通过！');
