<template>
  <section class="py-20 bg-blue-pale">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ec2657] to-[#ec2657] sm:text-5xl animate-fade-in">
          How to Create AI Images with Imagen 4 Ultra
        </h2>
        <p class="mt-4 text-xl text-gray-300 animate-slide-up">
          Transform Your Ideas into Professional AI-Generated Images in Three Simple Steps
        </p>
      </div>

      <div class="flex flex-row flex-wrap justify-center gap-4">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl border border-gray-700/50 hover:border-[#ec2657]/50 transition-all duration-300 hover:transform hover:scale-105 group flex-1 min-w-[250px] max-w-[300px]">
          <div class="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ec2657] to-[#ec2657] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:shadow-[#ec2657]/25 transition-all duration-300">
            {{ index + 1 }}
          </div>
          
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-700/50 rounded-full mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
              <component :is="step.icon" class="w-5 h-5 sm:w-6 sm:h-6 text-[#ec2657]" />
            </div>
            
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">{{ step.title }}</h2>
            <p class="text-gray-300 mb-4">{{ step.description }}</p>
          </div>
          
          <!-- Animated underline -->
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec2657] to-[#ec2657] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CommandLineIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PencilIcon,
  CpuChipIcon,
  LanguageIcon,
  CloudArrowDownIcon
} from '@heroicons/vue/24/outline'

const steps = [
  {
    title: "Write Your Prompt in English",
    description: "Create a detailed description of your desired image in English. The more specific your prompt, the better your results will be. Include style, mood, and key elements.",
    icon: PencilIcon
  },
  {
    title: "Customize Your Image Settings",
    description: "Select your ideal image dimensions from multiple aspect ratios (1:1, 3:4, 4:3, 9:16, or 16:9). Adjust person generation settings to match your regional requirements.",
    icon: AdjustmentsHorizontalIcon
  },
  {
    title: "Generate and Save Your Creation",
    description: "Click the generate button to create your AI masterpiece using our advanced Imagen 4 Ultra technology. Once verified, download your high-quality image instantly.",
    icon: CloudArrowDownIcon
  }
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 