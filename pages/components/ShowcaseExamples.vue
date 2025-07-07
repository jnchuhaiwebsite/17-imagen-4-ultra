<template>
  <div class="py-8 sm:py-12 lg:py-16 bg-[#1a1a1a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ec2657] bg-gradient-to-r from-[#ec2657] via-[#990066] to-[#ec2657] bg-clip-text text-transparent">
          Case Showcase - Explore Our Creative Works
        </h2>
        <p class="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-300">
          Browse the amazing works created with Imagen 4 Ultra and experience the limitless possibilities of AI image generation.
        </p>
      </div>

      <div class="mt-6 sm:mt-8 lg:mt-12 relative">
        <!-- 轮播容器 -->
        <div class="overflow-hidden relative rounded-lg shadow-lg bg-[#111111]" style="height: min(60vh, 600px);">
          <div 
            class="flex h-full transition-transform duration-500 ease-out" 
            :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)', transition: isAnimating ? 'transform 500ms ease-out' : 'none' }"
            @transitionend="handleTransitionEnd"
          >
            <!-- 末尾图片的克隆 -->
            <div class="w-full flex-shrink-0 relative bg-[#111111]">
              <img 
                :src="slides[slides.length - 1].image" 
                :alt="slides[slides.length - 1].name" 
                class="w-full h-full object-contain"
              >
              <button 
                @click="copyPrompt(slides[slides.length - 1].prompt)"
                class="absolute top-2 sm:top-4 right-2 sm:right-4 hover:opacity-80 p-2 rounded-full shadow-lg flex items-center space-x-2 transition-opacity duration-200 bg-black/30 backdrop-blur-sm"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="m4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"></path></svg>
              </button>
            </div>

            <!-- 主要图片 -->
            <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0 relative bg-[#111111]">
              <img 
                :src="slide.image" 
                :alt="slide.name" 
                class="w-full h-full object-contain"
              >
              <button 
                @click="copyPrompt(slide.prompt)"
                class="absolute top-2 sm:top-4 right-2 sm:right-4 hover:opacity-80 p-2 rounded-full shadow-lg flex items-center space-x-2 transition-opacity duration-200 bg-black/30 backdrop-blur-sm"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="m4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"></path></svg>
              </button>
            </div>

            <!-- 第一张图片的克隆 -->
            <div class="w-full flex-shrink-0 relative bg-[#111111]">
              <img 
                :src="slides[0].image" 
                :alt="slides[0].name" 
                class="w-full h-full object-contain"
              >
              <button 
                @click="copyPrompt(slides[0].prompt)"
                class="absolute top-2 sm:top-4 right-2 sm:right-4 hover:opacity-80 p-2 rounded-full shadow-lg flex items-center space-x-2 transition-opacity duration-200 bg-black/30 backdrop-blur-sm"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="m4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"></path></svg>
              </button>
            </div>
          </div>

          <!-- 轮播控制按钮 -->
          <button 
            @click="prevSlide" 
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#ec2657] hover:bg-[#990066] p-1.5 sm:p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide" 
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#ec2657] hover:bg-[#990066] p-1.5 sm:p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- 轮播指示器 -->
          <div class="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            <button 
              v-for="(_, index) in slides" 
              :key="index"
              @click="goToSlide(index + 1)"
              class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200"
              :class="(currentIndex === index + 1 || (currentIndex === slides.length + 1 && index === 0) || (currentIndex === 0 && index === slides.length - 1)) ? 'bg-[#ec2657]' : 'bg-[#ec2657]/50'"
            ></button>
          </div>
        </div>
      </div>

      <!-- 添加滚动按钮 -->
      <div class="flex justify-center mt-6 sm:mt-8">
        <button 
          @click="scrollToGenerator"
          class="bg-[#ec2657] hover:bg-[#990066] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 shadow-lg text-sm sm:text-base"
        >
          <span>Start Creating</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 13.707a1 1 0 01-1.414 0L11 9.414V21a1 1 0 11-2 0V9.414l-4.293 4.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp, navigateTo } from 'nuxt/app'

const { $toast } = useNuxtApp()

// 轮播数据
const slides = [
  {
    name: 'Imagen-4-Ultra-image5',
    image: 'https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-image5.webp',
    prompt: 'Theme: 4-panel comic. Panel 1: An anime-style girl with short pink hair and a ribbon is running down a suburban Japanese road with a piece of toast in her mouth. The speech bubble reads "Late, late!" Panel 2: The girl collides with something. A loud sound effect suggests the collision. Sound effect: "Crash!" Panel 3: The girl has fallen and is sitting on the ground. She looks a little hurt. The speech bubble reads "Ouch, ouch, ouch..." Panel 4: A short distance away, a young man in a blazer uniform is sitting. The two have just bumped into each other around a corner and are looking at each other.'
  },
  {
    name: 'Imagen-4-Ultra-image4',
    image: 'https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-image4.webp',
    prompt: "A digital anime style illustration with a soft, hand-drawn, sketch-like aesthetic, watercolor and pastel textures, and a muted, desaturated, cool color palette of soft blues and grays. A light-skinned anime girl with long black hair and red eyes is sitting in a resting area of an abandoned village's unmanned train station. She is wearing a white summer dress that reaches to her knees and sandals. On her head, she wears a straw hat with a wide brim, adorned with a blue ribbon tied into a bow around the base of the crown. The train tracks, a clear blue sky, and clouds occupy more than half of the foreground, stretching out before her. Soft, diffused lighting creates a serene and somewhat melancholic mood."
  },
  {
    name: 'Imagen-4-Ultra-image3',
    image: 'https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-image3.webp',
    prompt: 'Avant-garde fashion editorial shot: a model in a voluminous, architectural gown standing on a shimmering, alien landscape under a binary sunset, surreal colors, high-concept, cinematic.'
  },
  {
    name: 'Imagen-4-Ultra-image1',
    image: 'https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-image1.webp',
    prompt: 'Front of a vintage travel postcard for Kyoto: iconic pagoda under cherry blossoms, snow-capped mountains in distance, clear blue sky, vibrant colors.'
  },
  {
    name: 'Imagen-4-Ultra-image2',
    image: 'https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-image2.webp',
    prompt: 'Photograph of an adventurous couple hiking on a mountain peak at sunrise, arms raised in triumph, epic panoramic view of valleys below, dramatic light.'
  }
]

const currentIndex = ref(1) // 从1开始，因为第一个是克隆的最后一张
const isAnimating = ref(true)
let autoplayInterval: NodeJS.Timeout | null = null

// 复制提示词到剪贴板
const copyPrompt = async (prompt: string) => {
  try {
    await navigator.clipboard.writeText(prompt)
    $toast.success('Prompt copied to clipboard!', 2000, 'center')
  } catch (err) {
    console.error('Failed to copy:', err)
    $toast.error('Failed to copy prompt', 2000, 'center')
  }
}

// 处理过渡结束事件
const handleTransitionEnd = () => {
  if (currentIndex.value >= slides.length + 1) {
    isAnimating.value = false
    currentIndex.value = 1
  } else if (currentIndex.value <= 0) {
    isAnimating.value = false
    currentIndex.value = slides.length
  }
  setTimeout(() => {
    isAnimating.value = true
  }, 50)
}

// 上一张
const prevSlide = () => {
  if (!isAnimating.value) return
  currentIndex.value--
}

// 下一张
const nextSlide = () => {
  if (!isAnimating.value) return
  currentIndex.value++
}

// 直接跳转到指定幻灯片
const goToSlide = (index: number) => {
  if (!isAnimating.value) return
  currentIndex.value = index
}

// 自动播放
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

// 组件挂载时启动自动播放
onMounted(() => {
  startAutoplay()
})

// 组件卸载时清除定时器
onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})

// 滚动到图片生成器组件
const scrollToGenerator = () => {
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style> 