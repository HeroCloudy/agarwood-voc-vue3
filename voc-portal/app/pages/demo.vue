<!--
 @name: demo.vue
 @description: 测试页
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/28 00:24
-->
<template>
  <div>
    <div>
      <div>1. 直接使用原子类</div>
      <div class="flex items-center justify-center h-[300px] bg-gray-100">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h1 class="text-2xl font-bold text-gray-800">Hello UnoCSS</h1>
        </div>
      </div>

      <div>2.使用 @apply 指令</div>
      <div class="container">
        <button class="btn-primary">测试按钮</button>
      </div>

      <div>3. 测试 Pinia</div>
      <button class="btn-primary" @click="demoStore.increment">Click to Add</button>
      <span>{{ demoStore.count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '~/store/demo'

const demoStore = useDemoStore()
</script>
<style scoped>
.container {
  @apply w-[80%] max-w-[1300px] mx-auto px-5;
}

.btn-primary {
  @apply bg-[var(--wm-color-primary)] text-white px-4 py-2 rounded hover:bg-blue-600;
}
</style>
