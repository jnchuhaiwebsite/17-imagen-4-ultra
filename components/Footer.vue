<template>
  <footer class="relative bg-blue-pale text-gray-300 py-8 md:py-12">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
        <!-- 友情链接区域 -->
        <div>
          <h3 class="text-[#ec2657] font-medium mb-4 text-left text-sm md:text-lg">Partner Sites</h3>
          <div class="flex flex-wrap gap-3">
            <a v-for="(item,index) in partnerSites" :key="index" 
               :href="item.url" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="text-gray-400 hover:text-[#ec2657] transition-colors text-sm">
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- 首页导航 -->
        <div>
          <h3 class="text-[#ec2657] font-medium mb-4 text-sm md:text-lg">Features</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/" class="text-gray-400 hover:text-[#ec2657] transition-colors whitespace-nowrap">Imagen 4 Ultra</NuxtLink>
          </div>
        </div>

        <!-- 导航链接 -->
        <div>
          <h3 class="text-[#ec2657] font-medium mb-4 text-sm md:text-lg">Resources</h3>
          <div class="flex flex-col gap-2">
            <template v-for="(section, index) in footerSections" :key="index">
              <NuxtLink v-if="section.href" :to="section.href" 
                class="text-gray-400 hover:text-[#ec2657] transition-colors">
                {{ section.name }}
              </NuxtLink>
              <div v-else @click.prevent="handleNavClick(section.id)" 
                class="text-gray-400 hover:text-[#ec2657] transition-colors cursor-pointer">
                {{ section.name }}
              </div>
            </template>
          </div>
        </div>

        <!-- 法律条款 -->
        <div>
          <h3 class="text-[#ec2657] font-medium mb-4 text-sm md:text-lg">Legal</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/subsidiary/privacy-policy" class="text-gray-400 hover:text-[#ec2657] transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/subsidiary/terms-of-service" class="text-gray-400 hover:text-[#ec2657] transition-colors">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Logo 和描述 -->
      <div class="py-6 border-t border-gray-700">
        <div class="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Imagen 4 Ultra - Advanced AI Image Generation" loading="lazy" class="h-16 md:h-24 mb-4">
          <p class="text-sm text-gray-400 max-w-xl mb-4">
            Imagen 4 Ultra delivers stunning AI-generated images with advanced technology. Supporting English prompts with customizable aspect ratios (1:1, 3:4, 4:3, 9:16, 16:9) and advanced person generation controls for professional results.
          </p>
          <div class="flex flex-col items-center gap-2 text-sm text-gray-500">
            <p>© 2025 Imagen 4 Ultra. All rights reserved.</p>
            <div class="text-center">
              <p class="text-gray-400 text-sm">
                Need help? Contact us at 
                <a href="mailto:support@aimagen4.com" class=" transition-colors">support@aimagen4.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/utils/navigation'
import { getFriendLinkList } from '~/api'
import { useAsyncData } from 'nuxt/app'

interface PartnerSite {
  url: string
  name: string
}

const { activeSection, sections, footerSections, handleNavClick, handleScroll } = useNavigation()

// 服务端请求友情链接
const { data: partnerSites, error } = await useAsyncData('partnerSites'+Math.random(), async () => {
  const res = await getFriendLinkList()
  if (res.code === 200) {
    return res.data as PartnerSite[]
  }
  return []
})
</script>

<style scoped>
/* 导航链接悬停效果 */
a, .nuxt-link-exact-active {
  position: relative;
  display: inline-block;  /* 改为行内块级元素 */
  width: fit-content;     /* 宽度适应内容 */
}

a::after, .nuxt-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #ec2657;  /* theme color */
  transition: width 0.3s ease;
}

a:hover::after, .nuxt-link-exact-active:hover::after {
  width: 100%;
}
</style> 