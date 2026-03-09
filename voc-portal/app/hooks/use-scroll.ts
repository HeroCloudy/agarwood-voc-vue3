export function useScroll(scrollY: number) {
  const isScrolled = ref(false)

  // 初始化导航栏状态
  function updateNavbarStyle() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    isScrolled.value = scrollTop > scrollY
  }

  onMounted(() => {
    // 监听滚动事件
    window.addEventListener('scroll', updateNavbarStyle)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateNavbarStyle)
  })

  return {
    isScrolled,
  }
}
