<!--
 @name: default.vue
 @description: 默认布局文件
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/28 00:19
-->
<template>
  <div class="default">
    <div class="flex-1 h-full">
      <slot />
    </div>
    <el-footer class="footer" height="auto">
      Agarwood VOC &copy;2026 - present. Created By YouYaCoder
    </el-footer>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.default {
  @apply min-h-screen flex flex-col;

  .footer {
    @apply bg-[var(--wm-bg-color-base)] text-center text-gray-400 py-2;
    border-top: 1px solid var(--border-color);
  }
}
</style>
