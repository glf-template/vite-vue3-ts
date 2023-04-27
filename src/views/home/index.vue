<template>
  <div >主页</div>

  <div>{{ userStore.name }}</div>
  <ElButton type="primary" @click="setName">设置名称</ElButton>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const setName = () => {
  userStore.updateName('李四')
}
</script>

<style lang="scss"></style>
