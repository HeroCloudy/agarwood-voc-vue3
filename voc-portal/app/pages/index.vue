<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/28 00:24
-->
<template>
  <div>
    <div ref="heroRef">
      <home-hero />
    </div>

    <div ref="featureRef">
      <home-feature />
    </div>

    <div ref="techRef">
      <home-tech-stack />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
