<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/28 00:24
-->
<template>
  <div>
    <header-nav @item-click="onItemClick" />

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

<script setup lang="ts">
import type { NavItem } from '~/types'

const heroRef = useTemplateRef<HTMLDivElement>('heroRef')
const featureRef = useTemplateRef<HTMLDivElement>('featureRef')
const techRef = useTemplateRef<HTMLDivElement>('techRef')
const registerRef = useTemplateRef<HTMLDivElement>('registerRef')

const refMap = ref<any>({})

onMounted(() => {
  nextTick(() => {
    refMap.value = {
      heroRef,
      featureRef,
      techRef,
      registerRef,
    }
  })
})

const onItemClick = (item: NavItem) => {
  if (item.targetRef) {
    const target = refMap.value[item.targetRef]
    target?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped lang="scss"></style>
