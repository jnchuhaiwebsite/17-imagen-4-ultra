<template>
  <div class="relative w-full flex flex-col items-center justify-start overflow-x-hidden bg-blue-pale ">
    <!-- 标题区 -->
    <div class="mt-[40px] mb-10 flex flex-col items-center relative z-10">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ec2657] bg-gradient-to-r from-[#ec2657] via-[#990066] to-[#ec2657] bg-clip-text text-transparent py-4 leading-relaxed text-center max-w-[90%] mx-auto">
        Imagen 4 Ultra - Professional AI Art Generation Platform
      </h1>
      <p class="mt-4 text-base text-gray-200 text-center max-w-4xl font-medium">
        Create stunning, high-quality images instantly with our cutting-edge AI technology - Professional-grade art generation at your fingertips
      </p>
    </div>

    <!-- 主体区 -->
    <div class="w-full max-w-[1224px] flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-stretch px-2 sm:px-3 lg:px-4 pb-12 lg:pb-20">
      <!-- 左侧表单 -->
      <div
        class="w-full mx-auto lg:mx-0 lg:w-[50%] max-w-[576px] lg:max-w-none bg-[#1a1a1a] backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#8a8c90]/30 p-6 xl:p-8 flex flex-col gap-2 sm:gap-3 lg:gap-4 relative"
      >
        <!-- 提示词输入 -->
        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm lg:text-base font-semibold text-gray-300 mb-1">
              Prompt
            </label>
          </div>
          <SignInButton v-if="!isSignedIn" mode="modal">
            <textarea
              v-model="prompt"
              rows="6"
              :class="{'border-red-500 focus:ring-red-500': promptError}"
              class="w-full rounded-lg bg-[#111111] border border-gray-700 text-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#ec2657] focus:border-transparent transition placeholder-gray-500 text-sm lg:text-base resize-none"
              placeholder="Describe the image you want to generate..."
            ></textarea>
          </SignInButton>
          <textarea
            v-else
            v-model="prompt"
            rows="6"
            :class="{'border-red-500 focus:ring-red-500': promptError}"
            class="w-full rounded-lg bg-[#111111] border border-gray-700 text-gray-200 px-3 py-2 focus:ring-2 focus:ring-[#ec2657] focus:border-transparent transition placeholder-gray-500 text-sm lg:text-base resize-none"
            placeholder="Describe the image you want to generate..."
          ></textarea>
          <div class="flex justify-between items-center mt-1">
            <div>
              <p class="text-xs text-gray-400">
                Enter a detailed description (Please enter English description)
              </p>
              <p v-if="promptError" class="text-xs text-red-500 mt-1">
                Please enter a prompt to generate an image
              </p>
            </div>
          </div>
        </div>

        <!-- 高宽比例选择 -->
        <div>
          <label class="block text-sm lg:text-base font-semibold text-gray-300 mb-2">Aspect Ratio</label>
          <div class="flex flex-nowrap overflow-x-auto gap-3 pb-2">
            <div v-for="(size, ratio) in aspectRatios" :key="ratio" class="relative flex-shrink-0" style="width: calc(20% - 10px);">
              <button
                type="button"
                @click="selectedRatio = ratio.toString()"
                class="w-full h-24 flex flex-col items-center justify-center rounded-xl transition-colors"
                :class="selectedRatio === ratio ? 'bg-[#ec2657]/20 border-2 border-[#ec2657]' : 'bg-[#2a2a2a] border border-[#3a3a3a] hover:border-gray-600'"
              >
                <div class="relative mb-2">
                  <svg
                    class="w-8 h-8 md:w-10 md:h-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    :class="selectedRatio === ratio ? 'text-[#ec2657]' : 'text-gray-400'"
                  >
                    <rect
                      v-if="ratio === '1:1'"
                      x="10" y="10" width="20" height="20"
                    />
                    <rect
                      v-if="ratio === '3:4'"
                      x="13" y="8" width="14" height="24"
                    />
                    <rect
                      v-if="ratio === '4:3'"
                      x="8" y="13" width="24" height="14"
                    />
                    <rect
                      v-if="ratio === '9:16'"
                      x="15" y="5" width="10" height="30"
                    />
                    <rect
                      v-if="ratio === '16:9'"
                      x="5" y="15" width="30" height="10"
                    />
                  </svg>
                  <div v-if="selectedRatio === ratio" class="absolute -top-1 -left-1 w-4 h-4 bg-[#ec2657] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="white">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span class="text-sm text-center" :class="selectedRatio === ratio ? 'text-[#ec2657]' : 'text-gray-300'">
                  {{ getRatioLabel(ratio.toString()) }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- 模型选择 -->
        <div>
          <label class="block text-sm lg:text-base font-semibold text-gray-300 mb-2">Model</label>
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              @click="selectedModel = 'imagen-4-ultra'"
              class="h-8 px-3 text-sm border rounded-md transition-colors flex items-center gap-1"
              :class="selectedModel === 'imagen-4-ultra' ? 'border-[#ec2657] bg-[#ec2657]/10 text-[#ec2657]' : 'border-gray-700 text-gray-300 hover:border-gray-600'"
            >
            imagen 4 ultra
              <!-- <span v-if="modelScores['imagen-4-ultra']" class="ml-1 text-xs opacity-80">({{ modelScores['imagen-4-ultra'] }} points)</span> -->
            </button>
            <button
              type="button"
              @click="selectedModel = 'imagen-4'"
              class="h-8 px-3 text-sm border rounded-md transition-colors flex items-center gap-1"
              :class="selectedModel === 'imagen-4' ? 'border-[#ec2657] bg-[#ec2657]/10 text-[#ec2657]' : 'border-gray-700 text-gray-300 hover:border-gray-600'"
            >
            imagen 4
              <!-- <span v-if="modelScores['imagen-4']" class="ml-1 text-xs opacity-80">({{ modelScores['imagen-4'] }} points)</span> -->
            </button>
          </div>
        </div>

        <!-- 生成按钮 -->
        <SignInButton v-if="!isSignedIn" mode="modal">
          <button
            type="submit"
            class="w-full flex items-center justify-center gap-1.5 px-3 mt-3 lg:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white rounded-lg font-extrabold text-base sm:text-lg lg:text-xl shadow-xl transition relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span>Generate Image</span>
            <span class="absolute -top-1.5 -right-1.5 bg-[#00b8ff] text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow border-2 border-white/50 shadow-[0_0_15px_rgba(0,184,255,0.3)]">{{ currentModelScore }} points</span>
          </button>
        </SignInButton>
        <button
          v-else
          type="submit"
          @click="generateImage"
          class="w-full flex items-center justify-center gap-1.5 px-3 mt-3 lg:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white rounded-lg font-extrabold text-base sm:text-lg lg:text-xl shadow-xl transition relative"
          :disabled="isGenerating"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <span>{{ isGenerating ? 'Generating...' : 'Generate Image' }}</span>
          <span class="absolute -top-1.5 -right-1.5 bg-[#00b8ff] text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow border-2 border-white/50 shadow-[0_0_15px_rgba(0,184,255,0.3)]">{{ currentModelScore }} points</span>
        </button>
      </div>

      <!-- 右侧预览区域 -->
      <div class="w-full mx-auto lg:mx-0 lg:w-[50%] max-w-[576px] lg:max-w-none flex flex-col items-center p-2 sm:p-3 lg:p-4 xl:p-6 bg-[#1a1a1a] backdrop-blur-sm rounded-2xl shadow-2xl border border-[#8a8c90]/30">
        <div class="flex flex-col justify-center items-center w-full h-full bg-gradient-to-br from-[#1a1a1a]/10 via-[#990066]/8 to-[#ec2657]/10 rounded-[16px]">
          <div class="relative w-full h-[480px] flex items-center justify-center">
            <div v-if="generatedImage" class="w-full h-full">
              <img :src="generatedImage" alt="Generated Image" class="w-full h-full object-contain rounded-lg" crossorigin="anonymous">
              <button
                @click="downloadImage"
                class="absolute top-2 right-2 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-xl transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Download
              </button>
            </div>
            <div v-else-if="isGenerating" class="text-center">
              <div class="w-16 h-16 border-4 border-[#ec2657] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p class="text-[#ec2657] font-medium">Generating your image...</p>
              <p class="text-gray-400 text-sm mt-2">This may take a few moments</p>
            </div>
            <div v-else class="text-[#ec2657] text-center">
              <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-gray-400">Preview Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useClerkAuth } from '~/utils/auth'
import { useUserStore } from '~/stores/user';
import { createTasksText, getScore } from '~/api'
import { useNavigation } from '~/utils/navigation'
import { useSeo } from '~/composables/useSeo';

const prompt = ref('')
const selectedRatio = ref('1:1')
const selectedModel = ref('imagen-4-ultra')
const isGenerating = ref(false)
const generatedImage = ref('')
const displayedPrompt = ref('')
const promptError = ref(false)
const taskId = ref('')
const modelScores = ref<Record<string, number>>({})

// 引入auth认证
const { isSignedIn } = useClerkAuth();
const userStore = useUserStore();
const { handleNavClick } = useNavigation();

// 计算用户剩余积分
const remainingCredits = computed(() => {
  if (!userStore.userInfo) return 0;
  return userStore.userInfo.free_limit + userStore.userInfo.remaining_limit || 0;
});

const title = 'Imagen 4 Ultra | Free Online AI Image Generator'
const description = 'Create high-quality images with Imagen 4 Ultra\'s advanced AI. Instantly turn your ideas into stunning visuals with clear text—free image generation included.'
useSeo({
  title,
  description,
  title_template: title,
  meta_description: description,
  og_image: '/img/og-image.jpg', // Make sure to add an appropriate Open Graph image
  twitter_card: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/img/og-image.jpg',
  canonicalUrl: 'https://www.imagen4ultra.com/', // Replace with your actual domain
})

// 获取积分信息
const fetchScores = async () => {
  try {
    const response = await getScore() as ScoreResponse
    if (response && response.code === 200 && Array.isArray(response.data)) {
      // 将积分数据转换为以模型名称为键的对象
      const scores: Record<string, number> = {}
      response.data.forEach((item: ScoreItem) => {
        scores[item.model] = item.score
      })
      modelScores.value = scores
    } else {
      console.error('获取积分信息失败:', response)
    }
  } catch (error) {
    console.error('获取积分信息失败:', error)
  }
}

// 组件挂载时获取积分信息
onMounted(() => {
  fetchScores()
})

// 检查登录状态
const checkLoginStatus = () => {
  return isSignedIn.value;
}

// 检查积分是否足够
const checkCredits = () => {
  // 从modelScores中获取所需积分
  const requiredCredits = modelScores.value[selectedModel.value] || 0;
  
  console.log('remainingCredits', remainingCredits.value)
  console.log('requiredCredits', requiredCredits)
  
  if (remainingCredits.value < requiredCredits) {
    // 滚动到订阅模块
    handleNavClick('pricing');
    return false;
  }
  return true;
}

// 模型映射关系
const modelMap = {
  'normal': 'imagen-4',
  'ultra': 'imagen-4-ultra'
}

// 显示名称映射
const modelDisplayName: Record<string, string> = {
  'imagen-4': 'Normal',
  'imagen-4-ultra': 'Ultra'
}

// 计算当前选择模型的积分
const currentModelScore = computed(() => {
  return modelScores.value[selectedModel.value] || 0
})

interface AspectRatios {
  [key: string]: string;
}

const aspectRatios: AspectRatios = {
  '1:1': '1024 x 1024',
  '3:4': '896 x 1280',
  '4:3': '1280 x 896',
  '9:16': '768 x 1408',
  '16:9': '1408 x 768'
}

interface ApiResponse {
  code: number;
  msg: string;
  data?: {
    task_id: string;
    image_url: string;
  };
  success: boolean;
}

interface ScoreItem {
  id: number;
  model: string;
  score: number;
}

interface ScoreResponse {
  code: number;
  msg: string;
  data: ScoreItem[];
  success: boolean;
}

// 使用API生成图片
const generateImage = async () => {
  // 检查登录状态
  if (!checkLoginStatus()) {
    return;
  }
  
  // 检查积分是否足够
  if (!checkCredits()) {
    return;
  }
  
  // 验证提示词是否填写
  if (!prompt.value.trim()) {
    promptError.value = true
    return
  }
  
  // 清除错误状态
  promptError.value = false
  
  // 重置图片和设置生成状态
  isGenerating.value = true
  generatedImage.value = ''
  displayedPrompt.value = prompt.value
  
  try {
    // 调用API生成图片
    const response = await createTasksText({
      prompt: prompt.value,
      model: selectedModel.value,
      ratio: selectedRatio.value
    }) as ApiResponse
    
    if (response && (response.code === 0 || response.code === 200) && response.data) {
      // 保存任务ID
      taskId.value = response.data.task_id
      
      // 使用API返回的图片URL
      if (response.data.image_url) {
        generatedImage.value = response.data.image_url
      }
      
      // 记录生成的参数
      console.log('Image generated with:', {
        prompt: prompt.value,
        aspectRatio: selectedRatio.value,
        model: selectedModel.value,
        size: aspectRatios[selectedRatio.value],
        taskId: taskId.value,
        imageUrl: response.data.image_url
      })

      // 更新用户信息以刷新积分显示
      await userStore.fetchUserInfo()
    } else {
      console.error('图片生成失败:', response)
      throw new Error(response?.msg || '图片生成失败')
    }
  } catch (error) {
    console.error('图片生成失败:', error)
  } finally {
    isGenerating.value = false
  }
}

// 获取比例标签名称
const getRatioLabel = (ratio: string): string => {
  const ratioStr = String(ratio);
  switch(ratioStr) {
    case '1:1': return 'Square (1:1)';
    case '3:4': return 'Portrait (3:4)';
    case '4:3': return 'Standard (4:3)';
    case '9:16': return 'Mobile (9:16)';
    case '16:9': return 'Landscape (16:9)';
    default: return ratioStr;
  }
}

// 获取模型显示名称
const getModelDisplayName = (model: string): string => {
  return modelDisplayName[model] || model;
}

const downloadImage = async () => {
  try {
    // 创建一个新的a标签用于下载
    const link = document.createElement('a');
    
    // 使用fetch获取图片blob数据
    const response = await fetch(generatedImage.value, {
      mode: 'cors',
      credentials: 'same-origin'
    });
    const blob = await response.blob();
    
    // 创建blob URL
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    
    // 设置文件名
    const timestamp = new Date().getTime();
    link.download = `imagen-${timestamp}-${taskId.value}.png`;
    
    // 触发下载
    document.body.appendChild(link);
    link.click();
    
    // 清理
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('下载图片失败:', error);
  }
}
</script>

<style scoped>
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 15s ease infinite;
}

@keyframes gradient-x {
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