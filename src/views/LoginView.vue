<template>
  <div class="login-view">
    <h1>{{ projectName }}</h1>
    <div class="login-card">
      <h2>登录</h2>
      <div class="login-form">
        <input v-model="model.username" placeholder="账号" />
        <input v-model="model.password" placeholder="密码" />
      </div>
      <button type="button" @click="handleLogin">登录</button>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getDoEnv } from '@/utils'

const projectName = getDoEnv().VITE_GLOB_APP_TITLE

const model = ref({
  username: '',
  password: ''
})

const handleLogin = async (e: Event): Promise<void> => {
  e.preventDefault()
}
</script>

<style lang="scss" scoped>
.login-view {
  h1 {
    margin: 20vh auto 20px;
    text-align: center;
    letter-spacing: 5px;
    opacity: 0.8;
  }
  .login-card {
    margin: 0 auto;
    max-width: 380px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
