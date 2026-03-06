<!--
 @name: tech-stack.vue
 @description: 首页技术栈
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 14:56
-->
<template>
  <section class="technology-stack">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header">
        <h2 class="title">企业级技术架构体系</h2>
        <p class="desc">基于业界领先技术栈构建，确保系统高性能、高可用和可扩展性</p>
      </div>

      <!-- 技术栈详情 -->
      <div class="tech-stack-details">
        <!-- 前端技术栈 -->
        <div v-for="(group, index) in techGroupList" :key="index" class="tech-category">
          <div class="category-header">
            <div class="icon" :style="{ backgroundColor: group.iconBg }">
              <icon :name="group.icon" />
            </div>
            <h3 class="title">{{ group.title }}</h3>
          </div>
          <div class="tech-grid">
            <div v-for="(item, subIndex) in group.list" :key="subIndex" class="item">
              <div class="tech-logo">
                <icon :name="item.icon" />
              </div>
              <div class="flex-1">
                <h4 class="tech-name">{{ item.name }}</h4>
                <p class="tech-description">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techGroupList = [
  {
    icon: 'fa-desktop',
    iconBg: '#42b883',
    title: '前端技术体系',
    list: [
      {
        icon: 'fa-code',
        name: 'Vue 3 + Composition API',
        desc: '先进的响应式框架，提供组件化开发能力、优秀的性能表现和现代化的开发体验',
      },
      {
        icon: 'fa-bolt',
        name: 'Vite 构建工具',
        desc: '极速开发体验，毫秒级热更新，优化生产构建，支持多种现代框架',
      },
      {
        icon: 'fa-server',
        name: 'Nuxt.js 框架',
        desc: '基于Vue的服务端渲染框架，提供静态站点生成，SEO友好，提升首屏加载速度',
      },
      {
        icon: 'fa-sitemap',
        name: '微前端架构',
        desc: '支持多团队独立开发，提高代码可维护性，实现应用模块解耦和独立部署',
      },
    ],
  },
  {
    icon: 'fa-server',
    iconBg: '#61dafb',
    title: '后端技术体系',
    list: [
      {
        icon: 'fa-leaf',
        name: 'Spring Boot 框架',
        desc: '快速构建生产级应用，简化配置，内置Tomcat容器，提供强大的依赖管理',
      },
      {
        icon: 'fa-shield',
        name: 'Spring Security',
        desc: '企业级安全框架，提供全面的认证授权机制，支持OAuth2、JWT等安全协议',
      },
      {
        icon: 'fa-database',
        name: 'MySQL + Redis',
        desc: '高性能数据库组合，MySQL存储持久化数据，Redis提供缓存支持，提升系统响应速度',
      },
      {
        icon: 'fa-exchange',
        name: 'RESTful API',
        desc: '标准化的API设计，支持多端接入，便于系统集成和扩展',
      },
    ],
  },
  {
    icon: 'fa-git',
    iconBg: '#ff6b6b',
    title: '开发工具链',
    list: [
      {
        icon: 'fa7-regular:folder-open',
        name: 'PNPM 包管理器',
        desc: '高效的包管理工具，采用硬链接节省磁盘空间，提升依赖安装速度，支持workspace模式',
      },
      {
        icon: 'fa-code-fork',
        name: 'Monorepo 架构',
        desc: '集中管理多包项目，统一版本控制，简化依赖管理，便于代码共享和协作开发',
      },
      {
        icon: 'fa-cogs',
        name: '代码质量工具',
        desc: '集成代码检查、格式化、单元测试等工具，标准化开发流程，提高代码质量',
      },
      {
        icon: 'fa-shield',
        name: '全方位安全保障',
        desc: '多层安全防护机制，包括防火墙、数据加密、权限控制等，保障系统和数据安全',
      },
    ],
  },
]
</script>
<style scoped lang="scss">
.technology-stack {
  @apply bg-white text-[#333] py-[90px] relative;
}

/* 技术栈详情 */
.tech-stack-details {
  @apply mb-[60px];

  .tech-category {
    @apply mb-[40px] p-[30px] bg-[var(--bg-color)] rd-[12px];
    transition: all 0.3s ease;

    .category-header {
      @apply flex items-center mb-[28px] pl-16px text-24px;
      border-left: 4px solid var(--wm-color-primary);

      .icon {
        @apply w-[52px] h-[52px] rd-[50%] flex items-center justify-center mr-[16px] text-white;
        background-color: #3a5bbd;
        transition: all 0.3s ease;
      }

      .title {
        @apply text-[#333] font-600;
      }
    }

    /* 技术网格 */
    .tech-grid {
      @apply grid gap-[20px];
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      .item {
        @apply flex p-[20px] bg-white rd-8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        border: 1px solid #eaeaea;

        .tech-logo {
          @apply w-[48px] h-[48px] rd-[8px] bg-[#f0f2f5] flex items-center justify-center mr-16px text-[20px] text-[var(--wm-color-primary)];
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .tech-name {
          @apply text-[18px] font-600 mb-[8px];
        }

        .tech-description {
          @apply text-[14px] text-[#666];
          line-height: 1.5;
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--wm-color-primary);

          .tech-logo {
            @apply bg-[var(--wm-color-primary)] text-white;
            transform: scale(1.1);
          }
        }
      }
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

      .icon {
        transform: scale(1.1);
      }
    }
  }
}
</style>
