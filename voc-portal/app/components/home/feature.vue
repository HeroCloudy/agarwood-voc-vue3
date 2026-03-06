<!--
 @name: feature.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 21:33
-->
<template>
  <!-- 核心优势 -->
  <section class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="title">核心优势</h2>
        <p class="desc">专业的在线问卷解决方案，满足您的多样化需求</p>
      </div>
      <div class="features-grid">
        <div v-for="(item, index) in features" :key="index" class="item">
          <div class="icon">
            <icon :name="item.icon" />
          </div>
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = ref([
  { icon: 'fa:edit', title: '简单易用', desc: '拖拽式设计，可视化编辑，几分钟即可完成专业问卷' },
  {
    icon: 'fa-solid:chart-line',
    title: '智能分析',
    desc: '自动生成各类统计图表，支持数据导出和交叉分析',
  },
  {
    icon: 'fa:users',
    title: '多种场景',
    desc: '问卷调查、考试测评、报名表单、满意度调查等多种应用',
  },
  { icon: 'fa:mobile', title: '多端适配', desc: '支持PC、移动端，随时随地进行问卷填写和管理' },
  { icon: 'fa:lock', title: '安全可靠', desc: '数据加密存储，权限严格控制，保障您的数据安全' },
  {
    icon: 'fa:headphones',
    title: '专业服务',
    desc: '7x24小时客服支持，提供专业的问卷设计咨询服务',
  },
])
</script>
<style scoped lang="scss">
/* 核心优势样式 */
.features {
  @apply min-h-screen pt-90px bg-[var(--bg-color)] relative pb-40px;

  &::before {
    @apply absolute top-[-50px] left-0 right-0 h-[100px] bg-white;
    content: '';
    transform: skewY(-2deg);
  }

  .features-grid {
    @apply grid gap-[35px] relative z-1;
    grid-template-columns: repeat(3, 1fr);

    .item {
      @apply bg-white px-[30px] py-[40px] rd-[8px] text-center relative overflow-hidden;
      transition: all 0.4s ease;
      border: 1px solid #e8e8e8;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      &::before {
        @apply absolute top-0 left-0 w-full h-[4px];
        content: '';
        background: linear-gradient(90deg, #1c9399, #29b0b7);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-15px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

        .icon {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 8px 25px rgba(255, 106, 0, 0.4);
          transition:
            transform 0.6s ease,
            box-shadow 0.3s ease;
        }
      }

      &:hover::before {
        transform: scaleX(1);
      }

      .icon {
        @apply w-90px h-90px rd-[50%] flex items-center justify-center mb-24px mx-auto text-[36px] text-[var(--wm-color-primary)];
        background: linear-gradient(135deg, #fff8f0, #fff);
        box-shadow: 0 6px 20px rgba(255, 106, 0, 0.2);
        transition: all 0.3s ease;
      }

      .title {
        @apply text-18px font-600 text-[#333] mb-12px;
      }

      .desc {
        @apply text-[14px] text-[#666];
        line-height: 1.6;
      }
    }
  }
}

.feature-item:hover .feature-icon {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 8px 25px rgba(255, 106, 0, 0.2);
  transition:
    transform 0.6s ease,
    box-shadow 0.3s ease;
}
</style>
