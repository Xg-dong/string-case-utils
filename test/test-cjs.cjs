const { StringCaseUtils } = require('../dist/cjs/index.js');

console.log('=== CommonJS 测试 ===');
console.log('toCamelCase:', StringCaseUtils.toCamelCase('hello_world'));
console.log('toPascalCase:', StringCaseUtils.toPascalCase('hello_world'));
console.log('toSnakeCase:', StringCaseUtils.toSnakeCase('helloWorld'));

const testObj = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log('对象转换:', StringCaseUtils.convertObjectKeys(testObj, {
    caseStyle: 'snake'
}));

console.log('✅ CommonJS 测试通过！');
