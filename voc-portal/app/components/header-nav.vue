<!--
 @name: header-nav.vue
 @description: 通用顶部沉浸式导航
 @author: 程序员优雅哥 youyacoder
 @time: 2026/3/9 21:22
-->
<template>
  <!--  <header :class="['navbar', scrolled || isScrolled ? 'scrolled' : '']">-->
  <header :class="{ navbar: true, scrolled: scrolled || isScrolled }">
    <div class="container">
      <div class="left">
        <nuxt-link href="/" class="logo">
          <img src="~/assets/images/logo.png" class="logo-img" alt="Agarwood VOC" />
          <span>Agarwood 问卷</span>
        </nuxt-link>
        <nav class="main-nav" v-show="showMenu">
          <ul class="flex">
            <li class="nav-item" v-for="(item, index) in navList" :key="index">
              <a class="nav-link" @click="onNavItemClick(item)">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-right">
        <template v-if="false">
          <nuxt-link href="#" class="btn btn-text">我的问卷</nuxt-link>
          <span @click="onLogoutBtnClick" class="btn btn-text">退出</span>
        </template>
        <template v-else-if="!scrolled">
          <nuxt-link href="#" class="btn btn-text">登录</nuxt-link>
          <span class="btn btn-register" @click="onRegBtnClick">立即体验</span>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'
import { useScroll } from '~/hooks/use-scroll'

const navList: NavItem[] = [
  { title: '首页', targetRef: 'heroRef' },
  { title: '功能介绍', targetRef: 'featureRef' },
  { title: '使用技术', targetRef: 'techRef' },
  { title: '问卷广场', to: '/square' },
]

withDefaults(
  defineProps<{
    scrolled?: boolean
    showMenu?: boolean
  }>(),
  {
    scrolled: false,
    showMenu: true,
  },
)

const emits = defineEmits<{
  'item-click': [item: NavItem]
}>()

const router = useRouter()
const route = useRoute()

const { isScrolled } = useScroll(60)

const onNavItemClick = async (item: NavItem) => {
  if (item.to) {
    if (route.path !== item.to) {
      await router.push(item.to)
    }
  } else {
    if (route.path !== '/') {
      await router.push('/')
    }
    emits('item-click', item)
  }
}

const onRegBtnClick = () => {}

const onLogoutBtnClick = () => {}
</script>
<style scoped lang="scss">
// 颜色变量（保持与原始一致）
$primary: var(--wm-color-primary);
$text-light: #fff;

/* 沉浸式导航栏 - 完全还原原始样式 */
.navbar {
  @apply bg-transparent fixed top-0 left-0 right-0 bottom-0 z-999 h-[80px];
  transition: all 0.8s ease;

  // 滚动状态
  &.scrolled {
    @apply bg-white text-[#333] opacity-80;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    .logo {
      color: $primary !important;
    }

    .nav-link {
      @apply text-[#333];

      &::after {
        background-color: $primary;
      }

      &:hover {
        color: $primary;
      }
    }

    .btn-text {
      @apply text-[#666];
    }

    .btn-register {
      @apply bg-[#1c9399] text-white border-none;
    }
  }

  .container {
    @apply flex items-center justify-between h-full;
  }

  .left {
    @apply flex-1 flex items-center;

    .logo {
      @apply flex items-center mr-20 text-20px font-700 text-[var(--wm-color-primary-light-7)];

      img {
        @apply h-40px mr-8px;
      }
    }

    .nav-list {
      @apply flex;
    }
  }

  .nav-item {
    @apply relative mr-40px;
  }

  .nav-link {
    @apply block py-10px px-0 text-white decoration-none relative text-16px font-500 cursor-pointer;
    transition: all 0.3s ease;

    &::after {
      @apply content-empty absolute bottom-0 left-0 w-0 h-[2px];
      background-color: $text-light;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  // 按钮基础样式
  .btn-text {
    @apply cursor-pointer;
    color: $text-light;
  }

  .btn-register {
    @apply cursor-pointer font-800;
    background-color: rgba(255, 255, 255, 0.2);
    color: $text-light;
    border: 1px solid $text-light;
  }
}
</style>
