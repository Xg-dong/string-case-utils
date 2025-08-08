// TypeScript Vue 3 项目集成示例
// examples/vue3-typescript.ts

// 注意：在实际项目中，需要先安装 Vue 3 和相关类型
// npm install vue@3
// npm install @vue/runtime-core @vue/runtime-dom --save-dev

import { StringCaseUtils } from "string-case-utils";

// 1. 类型定义
interface User {
  userName: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

interface ApiUser {
  user_name: string;
  email_address: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
}

interface ConversionOptions {
  caseStyle:
    | "camel"
    | "pascal"
    | "snake"
    | "screamingSnake"
    | "kebab"
    | "train"
    | "dot";
  prefix?: string;
  suffix?: string;
  prefixToRemove?: string;
  suffixToRemove?: string;
  deep?: boolean;
}

// 2. TypeScript 帮助函数
export function useStringCaseConverter() {
  // 泛型转换函数
  const convertKeys = <T extends Record<string, any>, R = any>(
    obj: T,
    options: ConversionOptions
  ): R => {
    return StringCaseUtils.convertObjectKeys(obj, options) as R;
  };

  // 字符串转换函数
  const convertString = (
    str: string,
    caseStyle: ConversionOptions["caseStyle"]
  ): string => {
    switch (caseStyle) {
      case "camel":
        return StringCaseUtils.toCamelCase(str);
      case "pascal":
        return StringCaseUtils.toPascalCase(str);
      case "snake":
        return StringCaseUtils.toSnakeCase(str);
      case "screamingSnake":
        return StringCaseUtils.toScreamingSnakeCase(str);
      case "kebab":
        return StringCaseUtils.toKebabCase(str);
      case "train":
        return StringCaseUtils.toTrainCase(str);
      case "dot":
        return StringCaseUtils.toDotCase(str);
      default:
        return str;
    }
  };

  return {
    convertKeys,
    convertString,
  };
}

// 3. API 数据转换函数
export function useApiDataConverter() {
  const { convertKeys } = useStringCaseConverter();

  // 前端数据转后端格式
  const toBackendFormat = <T extends Record<string, any>>(
    data: T
  ): Record<string, any> => {
    return convertKeys(data, {
      caseStyle: "snake",
      deep: true,
    });
  };

  // 后端数据转前端格式
  const toFrontendFormat = <T extends Record<string, any>>(
    data: T
  ): Record<string, any> => {
    return convertKeys(data, {
      caseStyle: "camel",
      deep: true,
    });
  };

  return {
    toBackendFormat,
    toFrontendFormat,
  };
}

// 4. 带类型安全的 API 服务类
class StringCaseApiService {
  private converter = useStringCaseConverter();

  async get<T = any>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return this.converter.convertKeys(data, {
      caseStyle: "camel",
      deep: true,
    });
  }

  async post<T extends Record<string, any>, R = any>(
    url: string,
    data: T
  ): Promise<R> {
    const backendData = this.converter.convertKeys(
      data as Record<string, any>,
      {
        caseStyle: "snake",
        deep: true,
      }
    );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendData),
    });

    const result = await response.json();
    return this.converter.convertKeys(result, {
      caseStyle: "camel",
      deep: true,
    });
  }

  async put<T extends Record<string, any>, R = any>(
    url: string,
    data: T
  ): Promise<R> {
    const backendData = this.converter.convertKeys(
      data as Record<string, any>,
      {
        caseStyle: "snake",
        deep: true,
      }
    );

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendData),
    });

    const result = await response.json();
    return this.converter.convertKeys(result, {
      caseStyle: "camel",
      deep: true,
    });
  }
}

// 6. Pinia Store with TypeScript
/*
// stores/user.ts
import { defineStore } from 'pinia';
import { TypedApiService } from '../utils/stringCaseHelpers';

interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchUsers(): Promise<void> {
      this.loading = true;
      this.error = null;
      
      try {
        const apiService = new TypedApiService();
        this.users = await apiService.get<User[]>('/api/users');
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },

    async createUser(userData: Omit<User, 'id'>): Promise<User | null> {
      this.loading = true;
      this.error = null;

      try {
        const apiService = new TypedApiService();
        const newUser = await apiService.post<Omit<User, 'id'>, User>('/api/users', userData);
        this.users.push(newUser);
        return newUser;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
        return null;
      } finally {
        this.loading = false;
      }
    }
  }
});
*/

// 7. 组件示例
/*
// components/UserForm.vue
<template>
  <div class="user-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>用户名:</label>
        <input 
          v-model="formData.userName" 
          type="text" 
          required 
        />
      </div>
      
      <div class="form-group">
        <label>邮箱:</label>
        <input 
          v-model="formData.emailAddress" 
          type="email" 
          required 
        />
      </div>
      
      <div class="form-group">
        <label>名字:</label>
        <input 
          v-model="formData.firstName" 
          type="text" 
          required 
        />
      </div>
      
      <div class="form-group">
        <label>姓氏:</label>
        <input 
          v-model="formData.lastName" 
          type="text" 
          required 
        />
      </div>
      
      <button type="submit" :disabled="loading">
        {{ loading ? '提交中...' : '提交' }}
      </button>
    </form>
    
    <div v-if="error" class="error">
      错误: {{ error }}
    </div>
    
    <div class="preview">
      <h3>后端数据格式预览:</h3>
      <pre>{{ JSON.stringify(backendData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserForm } from '../composables/useUserForm';

const { formData, backendData, submitForm, resetForm } = useUserForm();
const loading = ref(false);
const error = ref<string | null>(null);

const handleSubmit = async (): Promise<void> => {
  loading.value = true;
  error.value = null;
  
  try {
    const result = await submitForm();
    if (result) {
      console.log('用户创建成功:', result);
      resetForm();
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : '提交失败';
  } finally {
    loading.value = false;
  }
};
</script>
*/

// 8. 路由守卫与参数转换
/*
// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { StringCaseUtils } from 'string-case-utils';

const routes: RouteRecordRaw[] = [
  {
    path: '/user-profile/:user_id',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue'),
    beforeEnter: (to, from, next) => {
      // 转换路由参数为驼峰命名
      const camelParams = StringCaseUtils.convertObjectKeys(to.params, {
        caseStyle: 'camel'
      });
      
      // 将转换后的参数添加到 meta 中
      to.meta.processedParams = camelParams;
      next();
    }
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
*/

export { User, ApiUser, ConversionOptions, StringCaseApiService };
