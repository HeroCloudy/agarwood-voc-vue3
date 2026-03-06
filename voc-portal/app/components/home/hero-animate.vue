<!--
 @name: hero-animate.vue
 @description: 首页首屏动画特效
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 22:33
-->
<template>
  <div class="hero-animate">
    <div class="hero-wrapper">
      <!-- 装饰元素 -->
      <!-- 基础装饰 -->
      <div class="hero-decoration circle-1"></div>
      <div class="hero-decoration circle-2"></div>
      <div class="hero-decoration wave"></div>

      <!-- 增强装饰元素 -->
      <div class="hero-decoration orbs"></div>
      <div class="hero-decoration line-1"></div>
      <div class="hero-decoration line-2"></div>
      <div class="hero-decoration dots"></div>
      <div class="hero-decoration glare"></div>

      <!-- 光效元素 -->
      <div class="hero-light light-1"></div>
      <div class="hero-light light-2"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.hero-animate {
  @apply absolute top-0 bottom-0 left-0 right-0;

  .hero-wrapper {
    @apply h-full w-full overflow-hidden  absolute;

    /* 装饰元素 - 增强动态效果 */
    &::before {
      @apply absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center overflow-hidden z-1 opacity-80;
      animation: gridMove 10s linear infinite;
      content: '';
      background:
        linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.1) 25%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          rgba(255, 255, 255, 0.25) 100%
        ),
        radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
        linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.08) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.08) 50%,
          rgba(255, 255, 255, 0.08) 75%,
          transparent 75%,
          transparent
        ),
        radial-gradient(circle at 20% 30%, rgba(41, 176, 183, 0.2) 0%, transparent 40%);
      background-size:
        100% 100%,
        80px 80px,
        80px 80px,
        300px 300px;
    }

    &::after {
      @apply absolute top-0 right-0 bottom-0 left-0 z-2;
      content: '';
      background: linear-gradient(
        90deg,
        rgba(28, 147, 153, 0.95) 0%,
        rgba(28, 147, 153, 0.8) 35%,
        rgba(28, 147, 153, 0.6) 55%,
        rgba(28, 147, 153, 0.3) 75%,
        transparent 100%
      );
      background-size: 200% 200%;
      animation: overlayShift 4s ease infinite;
    }

    /* 装饰性气泡和形状 - 丰富的动态元素 */
    .hero-decoration {
      @apply absolute z-3;
      filter: blur(1px);

      /* 添加CSS装饰图形 - 增强光效 */
      &.orbs {
        @apply absolute w-[600px] h-[600px] right-[-200px] top-[50%] z-2;
        transform: translateY(-50%);
        border-radius: 50%;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        );
        box-shadow:
          inset 0 0 60px rgba(255, 255, 255, 0.1),
          0 0 120px rgba(255, 255, 255, 0.05),
          0 0 20px rgba(41, 176, 183, 0.3);
        animation: pulse 4s ease-in-out infinite;
        z-index: 2;
      }

      /* 圆形装饰 */
      &.circle-1 {
        @apply top-[20%] right-[15%] w-[120px] h-[120px];
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.05) 100%
        );
        border-radius: 50%;
        animation: float 4s ease-in-out infinite;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
      }

      &.circle-2 {
        @apply top-[15%] right-[25%] w-[80px] h-[80px];
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        border-radius: 50%;
        animation: float 3s ease-in-out infinite 0.5s;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
      }

      /* 波浪形装饰 */
      &.wave {
        @apply bottom-[10%] right-[40%] w-[140px] h-[40px];
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: wave 2s ease-in-out infinite;
      }

      /* 新增装饰元素 */
      &.line-1 {
        @apply top-[10%] right-[30%] w-[150px] h-[5px];
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        animation: lineFloat 4s ease-in-out infinite 0.25s;
      }

      &.line-2 {
        @apply bottom-[20%] right-[30%] w-[130px] h-[4px];
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(-30deg);
        animation: lineFloat 3.5s ease-in-out infinite 0.5s;
      }

      &.dots {
        @apply top-[40%] right-[5%] w-[80px] h-[80px];
        background-image: radial-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px);
        background-size: 10px 10px;
        animation: dotsRotate 7.5s linear infinite;
      }

      &.glare {
        @apply top-[-50px] right-[-50px] w-[300px] h-[300px] z-3;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
        animation: glareMove 5s ease-in-out infinite;
      }
    }

    /* 光效装饰 */
    .hero-light {
      @apply absolute w-[400px] h-[400px] z-1;
      border-radius: 50%;
      filter: blur(60px);

      &.light-1 {
        top: 20%;
        right: 10%;
        background: rgba(41, 176, 183, 0.3);
        animation: lightPulse 4s ease-in-out infinite;
      }

      &.light-2 {
        bottom: 10%;
        right: 30%;
        background: rgba(28, 147, 153, 0.2);
        animation: lightPulse 5s ease-in-out infinite 0.5s;
      }
    }
  }
}
</style>
