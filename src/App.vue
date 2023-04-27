<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout/Header.vue'

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
