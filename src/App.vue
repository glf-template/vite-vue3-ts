<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="@/assets/images/logo.png" class="logo" />
      <div>{{ userStore.name }}</div>
      <ElButton @click="setName">设置名称</ElButton>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import { ElButton } from 'element-plus'

const userStore = useUserStore()

const setName = () => {
  userStore.updateName('李四')
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    .logo {
      width: 50px;
    }
  }

  .container {
    padding: 20px;
  }
}
</style>
