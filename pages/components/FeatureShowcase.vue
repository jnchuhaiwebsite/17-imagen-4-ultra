<template>
  <section class="py-20 bg-blue-pale">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-[#ec2657] sm:text-5xl">
          Imagen 4 Ultra Features
        </h2>
        <p class="mt-4 text-xl text-gray-300">
          Professional AI Image Generation with Advanced Controls
        </p>
      </div>

      <!-- Feature showcase list -->
      <div class="space-y-24 mb-24">
        <div v-for="(feature, index) in mainFeatures" :key="index" 
             class="flex flex-col md:flex-row gap-12 items-center"
             :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
          <!-- Text content -->
          <div class="w-full md:w-1/2 space-y-6">
            <div class="inline-block p-3 bg-gradient-to-r from-[#ec2657] to-[#ec2657] rounded-lg">
              <component :is="feature.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-[#ec2657]">{{ feature.title }}</h3>
            <p class="text-gray-300 text-lg">{{ feature.description }}</p>
            <ul class="space-y-3">
              <li v-for="(point, pIndex) in feature.points" :key="pIndex" 
                  class="flex items-center text-gray-300">
                <span class="mr-2 text-[#ec2657]">✓</span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Image showcase -->
          <div class="w-full md:w-1/2">
            <div class="relative bg-blue-pale/80 shadow-xl w-full max-w-md mx-auto rounded-xl overflow-hidden">
              <img 
                :src="feature.image" 
                :alt="feature.title"
                class="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <!-- <div class="text-center mt-16">
        <button
          @click="scrollToHero"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
        >
          Start Creating Now
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  SparklesIcon,
  VideoCameraIcon,
  CursorArrowRaysIcon,
  ArrowPathIcon,
  FilmIcon,
  CommandLineIcon,
  ArrowsPointingOutIcon,
  ClockIcon,
  BoltIcon,
  PhotoIcon
} from '@heroicons/vue/24/outline'

defineOptions({
  name: 'FeatureShowcase'
})

// Main feature data with image demonstrations
const mainFeatures = [
  {
    title: "Multiple Aspect Ratio Support",
    description: "Choose from five professional aspect ratios for your generated images, with 1:1 square format as the default setting.",
    icon: CommandLineIcon,
    points: [
      "Square format (1:1) - Default",
      "Portrait options (3:4, 9:16)",
      "Landscape options (4:3, 16:9)",
      "Maintains quality across all ratios"
    ],
    image: "https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-ratio.webp"
  },
  {
    title: "Historical Art Reference",
    description: "Create images inspired by famous art movements and historical styles with simple prompts. Just include 'in the style of [art period or movement]' in your request.",
    icon: PhotoIcon,
    points: [
      "Access to diverse historical art styles",
      "Perfect for educational and creative projects",
      "Generate images with iconic aesthetic qualities",
      "Example: 'generate an image in the style of impressionism: a wind farm'"
    ],
    image: "https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-style.webp"
  },
  {
    title: "Text Integration Feature",
    description: "Easily add text to your generated images, providing additional expressiveness for creative projects and marketing materials.",
    icon: SparklesIcon,
    points: [
      "Generate posters, logos, and ads with integrated text",
      "Control text length (recommended under 25 characters) for optimal results",
      "Specify font styles and sizes to enhance visual impact",
      "Use parameterized prompts for precise control over text appearance and placement"
    ],
    image: "https://resource.aimagen4.com/aimagen4/demo/Imagen-4-Ultra-imageText.webp"
  }
];

// 跳转到首页
const scrollToHero = () => {
  const heroSection = document.getElementById('prompt-image-generator');
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* 渐变背景动画 */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style> 