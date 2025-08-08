// Vue 3 项目中使用 String Case Utils 的完整示例

// 1. 安装依赖
// npm install string-case-utils

// 2. 在 Vue 3 项目中使用

// utils/stringCaseHelpers.js
import { StringCaseUtils } from 'string-case-utils';

/**
 * Vue 3 Composition API 帮助函数
 */
export function useStringCase() {
    // 创建响应式转换器
    const createConverter = (caseStyle) => {
        return (input) => {
            if (typeof input === 'string') {
                switch (caseStyle) {
                    case 'camel': return StringCaseUtils.toCamelCase(input);
                    case 'pascal': return StringCaseUtils.toPascalCase(input);
                    case 'snake': return StringCaseUtils.toSnakeCase(input);
                    case 'kebab': return StringCaseUtils.toKebabCase(input);
                    default: return input;
                }
            }
            return StringCaseUtils.convertObjectKeys(input, { caseStyle });
        };
    };

    return {
        toCamelCase: createConverter('camel'),
        toPascalCase: createConverter('pascal'),
        toSnakeCase: createConverter('snake'),
        toKebabCase: createConverter('kebab'),
        convertObjectKeys: StringCaseUtils.convertObjectKeys
    };
}

// 3. 在组件中使用
// components/UserForm.vue
/*
<template>
  <div class="user-form">
    <h2>{{ title }}</h2>
    
    <!-- 表单输入 -->
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>用户名:</label>
        <input v-model="userForm.userName" />
      </div>
      <div class="form-group">
        <label>邮箱:</label>
        <input v-model="userForm.emailAddress" />
      </div>
      <button type="submit">提交</button>
    </form>
    
    <!-- 转换结果预览 -->
    <div class="preview">
      <h3>发送给后端的数据:</h3>
      <pre>{{ backendData }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStringCase } from '../utils/stringCaseHelpers';

// 使用 String Case Utils
const { convertObjectKeys } = useStringCase();

// 表单数据
const userForm = ref({
  userName: '',
  emailAddress: '',
  phoneNumber: '',
  firstName: '',
  lastName: ''
});

// 计算属性：转换为后端格式
const backendData = computed(() => {
  return convertObjectKeys(userForm.value, {
    caseStyle: 'snake'
  });
});

// 提交处理
const handleSubmit = async () => {
  try {
    // 发送转换后的数据到后端
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(backendData.value)
    });
    
    // 处理响应（通常是snake_case格式）
    const result = await response.json();
    
    // 转换响应数据为前端格式
    const frontendData = convertObjectKeys(result, {
      caseStyle: 'camel',
      deep: true
    });
    
    console.log('前端格式数据:', frontendData);
  } catch (error) {
    console.error('提交失败:', error);
  }
};

const title = computed(() => {
  return toPascalCase('user registration form');
});
</script>
*/

// 4. API 数据处理工具
export class ApiHelper {
    constructor() {
        this.stringCase = useStringCase();
    }

    // 处理 API 响应
    processApiResponse(data) {
        return this.stringCase.convertObjectKeys(data, {
            caseStyle: 'camel',
            deep: true
        });
    }

    // 准备发送给 API 的数据
    prepareApiData(data) {
        return this.stringCase.convertObjectKeys(data, {
            caseStyle: 'snake',
            deep: true
        });
    }

    // 处理 GraphQL 响应
    processGraphQLResponse(data) {
        return this.stringCase.convertObjectKeys(data, {
            caseStyle: 'camel',
            deep: true
        });
    }
}

// 5. Pinia Store 集成示例
// stores/user.js
/*
import { defineStore } from 'pinia';
import { StringCaseUtils } from 'string-case-utils';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null
  }),

  actions: {
    async fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      
      // 转换后端数据为前端格式
      this.users = data.map(user => 
        StringCaseUtils.convertObjectKeys(user, {
          caseStyle: 'camel',
          deep: true
        })
      );
    },

    async createUser(userData) {
      // 转换前端数据为后端格式
      const backendData = StringCaseUtils.convertObjectKeys(userData, {
        caseStyle: 'snake',
        deep: true
      });

      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backendData)
      });

      const result = await response.json();
      
      // 转换响应并添加到状态
      const newUser = StringCaseUtils.convertObjectKeys(result, {
        caseStyle: 'camel',
        deep: true
      });
      
      this.users.push(newUser);
      return newUser;
    }
  }
});
*/

// 6. Vue Router 集成
// router/index.js
/*
import { createRouter, createWebHistory } from 'vue-router';
import { StringCaseUtils } from 'string-case-utils';

const routes = [
  {
    path: '/user-profile/:userId',
    name: 'userProfile',
    component: () => import('../views/UserProfile.vue'),
    // 使用 String Case Utils 处理路由参数
    beforeEnter: (to, from, next) => {
      // 转换路由参数命名
      const params = StringCaseUtils.convertObjectKeys(to.params, {
        caseStyle: 'camel'
      });
      
      // 将转换后的参数传递给组件
      to.meta.processedParams = params;
      next();
    }
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
*/

// 7. 插件形式使用
// plugins/stringCase.js
/*
export default {
  install(app) {
    app.config.globalProperties.$stringCase = StringCaseUtils;
    
    // 提供全局方法
    app.provide('stringCase', StringCaseUtils);
  }
};
*/

// 8. 在 main.js 中注册
/*
import { createApp } from 'vue';
import App from './App.vue';
import stringCasePlugin from './plugins/stringCase';

const app = createApp(App);
app.use(stringCasePlugin);
app.mount('#app');
*/

export default {
    useStringCase,
    ApiHelper
};
