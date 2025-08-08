// Vite + Vue 3 项目配置示例
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ['string-case-utils']
    },
    build: {
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    }
})

// package.json (Vite + Vue 3 项目)
/*
{
  "name": "vue3-string-case-demo",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "string-case-utils": "^1.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.0",
    "vite": "^4.3.0"
  }
}
*/

// main.js
/*
import { createApp } from 'vue'
import App from './App.vue'

// 全局注册 String Case Utils
import { StringCaseUtils } from 'string-case-utils'

const app = createApp(App)

// 可选：全局属性注册
app.config.globalProperties.$stringCase = StringCaseUtils

app.mount('#app')
*/

// composables/useStringCase.js
/*
import { StringCaseUtils } from 'string-case-utils';
import { ref, computed } from 'vue';

export function useStringCase() {
  return {
    // 字符串转换方法
    toCamelCase: StringCaseUtils.toCamelCase,
    toPascalCase: StringCaseUtils.toPascalCase,
    toSnakeCase: StringCaseUtils.toSnakeCase,
    toKebabCase: StringCaseUtils.toKebabCase,

    // 对象转换方法
    convertObjectKeys: StringCaseUtils.convertObjectKeys,

    // 响应式转换器
    createReactiveConverter: (options) => {
      return (source) => computed(() =>
        StringCaseUtils.convertObjectKeys(source.value, options)
      );
    }
  };
}
*/

// App.vue
/*
<template>
  <div id="app">
    <h1>{{ pageTitle }}</h1>
    
    <div class="converter">
      <h2>字符串转换器</h2>
      <input v-model="inputString" placeholder="输入要转换的字符串" />
      <div class="results">
        <p>驼峰: {{ camelResult }}</p>
        <p>帕斯卡: {{ pascalResult }}</p>
        <p>蛇形: {{ snakeResult }}</p>
        <p>短横线: {{ kebabResult }}</p>
      </div>
    </div>
    
    <div class="object-converter">
      <h2>对象转换器</h2>
      <textarea v-model="jsonInput" rows="5"></textarea>
      <button @click="convertObject">转换对象</button>
      <pre v-if="convertedObject">{{ convertedObject }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStringCase } from './composables/useStringCase'

const { 
  toCamelCase, 
  toPascalCase, 
  toSnakeCase, 
  toKebabCase, 
  convertObjectKeys 
} = useStringCase()

// 响应式数据
const inputString = ref('hello_world_example')
const jsonInput = ref(JSON.stringify({ user_name: 'Alice', user_age: 30 }, null, 2))
const convertedObject = ref('')

// 计算属性
const pageTitle = computed(() => toPascalCase('vue3 string case demo'))
const camelResult = computed(() => toCamelCase(inputString.value))
const pascalResult = computed(() => toPascalCase(inputString.value))
const snakeResult = computed(() => toSnakeCase(inputString.value))
const kebabResult = computed(() => toKebabCase(inputString.value))

// 方法
const convertObject = () => {
  try {
    const obj = JSON.parse(jsonInput.value)
    const converted = convertObjectKeys(obj, {
      caseStyle: 'camel',
      deep: true
    })
    convertedObject.value = JSON.stringify(converted, null, 2)
  } catch (error) {
    convertedObject.value = `错误: ${error.message}`
  }
}
</script>

<style scoped>
.converter, .object-converter {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #369970;
}

.results p {
  background: #f5f5f5;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
}

pre {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
*/
