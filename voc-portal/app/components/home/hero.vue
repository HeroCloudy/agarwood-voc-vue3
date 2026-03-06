<!--
 @name: hero.vue
 @description: 首页首屏
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:59
-->
<template>
  <!-- 英雄区域 -->
  <section class="hero">
    <home-hero-animate />

    <div class="container">
      <div class="content">
        <h1 class="title">简单易用的在线问卷调查平台</h1>
        <p class="desc">
          300万+企业和国内90%高校的信赖之选，提供专业的问卷调查、在线考试、360度评估等一站式解决方案
        </p>
        <div class="actions">
          <div @click="onUseRightNowClick" class="btn btn-primary btn-large">立即使用</div>
        </div>

        <!-- 特色功能列表 -->
        <div class="features">
          <div class="feature-item" v-for="(item, index) in features" :key="index">
            <div class="icon">✓</div>
            <div class="text">{{ item }}</div>
          </div>
        </div>

        <!-- 统计数据 -->
        <div class="stats">
          <div class="stats-item" v-for="(item, index) in statList" :key="index">
            <div class="value">{{ item.value }} +</div>
            <div class="label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  'use-now': []
}>()
const features = ref<string[]>(['无需编程，拖拽创建', '多种题型，灵活配置', '实时统计，智能分析'])

const statList = ref<{ value: string; label: string }[]>([
  { value: '100', label: '注册用户' },
  { value: '300', label: '问卷数量' },
  { value: '4000', label: '答卷数量' },
])

const onUseRightNowClick = () => {
  emits('use-now')
}
</script>
<style scoped lang="scss">
/* 英雄区域样式 - 全屏炫酷效果 */
.hero {
  @apply h-screen flex items-center overflow-hidden w-full;
  background: linear-gradient(135deg, #1c9399 0%, #29b0b7 50%, #48c9d0 100%);
  background-size: 200% 200%;
  animation: gradientFlow 1.5s ease infinite;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);

  .container {
    @apply flex items-center justify-start z-3 relative h-full;

    .content {
      @apply flex-1 max-w-[60%] text-white;
    }
  }

  .title {
    @apply text-13 font-700 line-height-[2];
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    animation: fadeInUp 0.8s ease-out;
  }

  .desc {
    @apply text-18px mb-[20px] line-height-[1.6];
    opacity: 0.15;
    animation: fadeInUp 0.4s ease-out 0.6s both;
  }

  .actions {
    @apply flex gap-[20px];
    animation: fadeInUp 1s ease-out 0.8s both;

    .btn-primary {
      @apply bg-white text-[var(--wm-color-primary)] text-[18px] font-700;

      &:hover {
        background-color: var(--wm-color-primary-light-9);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .features {
    @apply mt-8 flex flex-wrap gap-10;
    animation: fadeInUp 0.8s ease-out 1.2s both;

    .feature-item {
      @apply flex items-center gap-3;

      .icon {
        @apply w-[32px] h-[32px] rd-[50%] flex items-center justify-center;
        background: rgba(255, 255, 255, 0.2);
      }

      .text {
        @apply font-300;
      }
    }
  }

  .stats {
    @apply mt-[32px] flex gap-[32px] opacity-80 text-16px;
    animation: fadeInUp 0.8s ease-out 1.6s both;

    .stats-item {
      @apply text-center;

      .value {
        @apply text-24px font-700 font-italic opacity-60;
      }
    }
  }
}
</style>
