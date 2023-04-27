<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :router="true" :ellipsis="false">
    <div class="left">
      <img class="logo" src="@/assets/images/logo.png" @click="goHome" />
    </div>
    <el-menu-item v-for="(item, index) in navMenu" :key="index" :index="item.path">{{ item.meta?.name }}</el-menu-item>
    <div class="right">
      <div>
        <el-icon><Setting /></el-icon>
      </div>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import navMenu from '@/router/navMenu'
import router from '@/router'

const activeIndex = ref('1')
const goHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.left {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;

  .logo {
    width: 40px;
  }
}
.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
}
</style>
