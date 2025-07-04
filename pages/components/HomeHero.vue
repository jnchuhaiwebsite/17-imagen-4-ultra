<template>
    <div class="relative w-full flex flex-col items-center justify-start overflow-x-hidden">
      <!-- 标题区 -->
      <div class="mt-[64px] mb-10 flex flex-col items-center relative z-10">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-[#ec2657] via-[#990066] to-[#ec2657] bg-clip-text text-transparent drop-shadow-2xl tracking-tight animate-gradient-x">
          Veo3-AI Video Generation with Realistic Sound
        </h1>
        <p class="mt-4 text-base text-gray-200 text-center max-w-4xl font-medium">
          Professional AI-powered video creation tool for high-quality content generation and editing
        </p>
        <p class="mt-2 text-base text-gray-200 text-center max-w-4xl font-medium">
          Create stunning videos with perfect audio sync
        </p>
      </div>

      <!-- 主体区 -->
      <div class="w-full max-w-[1360px] flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-stretch px-2 sm:px-3 lg:px-4 pb-12 lg:pb-20">
        <!-- 左侧表单 -->
        <div :class="[
          'w-full mx-auto lg:mx-0 lg:w-[50%] max-w-[576px] lg:max-w-none bg-[#1a1a1a] backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]  border border-[#8a8c90]/30 p-6 xl:p-8 flex flex-col gap-2 sm:gap-3 lg:gap-4 relative',
          containerHeight.base,
          containerHeight.sm,
          containerHeight.lg
        ]">
          <!-- 提示词输入框 -->
          <div>
            <div class="flex items-center justify-between">
              <label class="block text-sm lg:text-base font-semibold text-gray-300 mb-1">
                Prompt
              </label>
            </div>
            <textarea 
              v-model="prompt"
              maxlength="2000"
              class="w-full rounded-lg bg-[#111111] border border-gray-700 text-gray-200 px-2 py-1.5 focus:ring-2 focus:ring-[#ec2657] focus:border-transparent transition placeholder-gray-500 text-sm lg:text-base h-32 resize-none" 
              placeholder="Describe the video you want to generate..."
              @click="handleAction('prompt')"
            ></textarea>
            <div class="flex justify-between items-center mt-1">
              <div class="flex items-center gap-2">
                <p class="text-xs text-gray-400">Be detailed and specific about what you want to see in the veo3 video.</p>
                <button 
                  @click="getRandomPrompt"
                  class="flex items-center gap-1 px-2 py-1 text-xs bg-[#ec2657]/10 hover:bg-[#ec2657]/20 text-[#ec2657] rounded-md transition-colors"
                >
                  <SparklesIcon class="h-3.5 w-3.5" />
                  <span>Inspiration</span>
                </button>
              </div>
              <span class="text-xs text-gray-400">{{ prompt.length }}/2000</span>
            </div>
          </div>

          <!-- 生成模式开关 -->
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-between w-full bg-[#111111] rounded-lg px-3 py-2">
              <div class="flex items-center">
                <label class="text-xs text-gray-400 mr-2">Fast Generation</label>
                <div class="group relative">
                  <InformationCircleIcon class="h-4 w-4 text-gray-400 cursor-help" />
                  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1.5 bg-[#ec2657] text-black text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
                    Fast generation mode only supports text-to-video generation.
                  </div>
                </div>
              </div>
              <!-- 开关按钮 -->
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isFastMode" class="sr-only peer">
                <div class="relative w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#ec2657] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#ec2657]"></div>
              </label>
            </div>
          </div>

          <!-- 图片上传区域 - 只在非快速模式下显示 -->
          <div v-if="!isFastMode">
            <label class="block text-sm lg:text-base font-semibold text-gray-300 mb-2">
              Upload Image (Optional)
            </label>
            <div class="w-full border-2 border-dashed border-gray-700 rounded-lg p-3 hover:border-[#ec2657] transition-colors cursor-pointer mb-3 relative bg-[#111111]">
              
              <input 
                type="file" 
                accept=".jpg,.jpeg,.png"
                class="hidden" 
                ref="fileInput"
                @change="handleImageUpload"
              />
              <div 
                v-if="selectedImage === null" 
                class="flex flex-col items-center justify-center gap-1.5 py-4 sm:py-6"
                @click="handleImageUploadClick"
              >
                <ArrowUpOnSquareIcon class="h-8 w-8 text-gray-400" />
                <div class="text-center">
                  <p class="text-sm sm:text-base text-gray-300">Click to upload image</p>
                  <p class="text-xs sm:text-sm text-gray-500 mt-1">Supports JPG/JPEG/PNG format, up to 10MB</p>
                  <p class="text-xs sm:text-sm text-gray-500 mt-1">Aspect Ratio: 16:9</p>

                </div>
              </div>
              <div v-else class="relative w-full h-[200px] sm:h-[240px]">
                <img 
                  :src="imagePreview" 
                  class="w-full h-full object-contain rounded-lg"
                  alt="Preview"
                />
                <button 
                  @click="removeSelectedImage"
                  class="absolute -top-1.5 -right-1.5 p-0.5 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                >
                  <XMarkIcon class="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <!-- 分享到作品展示选项 -->
          <!-- <div class="flex items-center gap-1.5 mt-3">
            <div class="flex items-center gap-1.5">
              <input 
                type="checkbox" 
                id="showInGallery" 
                v-model="isShow"
                class="w-3 h-3 rounded border-gray-600 bg-gray-700 text-[#ec2657] focus:ring-[#ec2657] focus:ring-offset-gray-800"
              />
              <label for="showInGallery" class="text-sm text-gray-300">Share to Gallery</label>
            </div>
            <div class="group relative">
              <InformationCircleIcon class="h-4 w-4 text-gray-400 cursor-help" />
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1.5 bg-[#ec2657] text-black text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
                Your work will be displayed in the gallery when checked
              </div>
            </div>
          </div> -->

          <!-- 生成按钮 -->
          <button 
            class="w-full flex items-center justify-center gap-1.5 px-3 mt-3 lg:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white rounded-lg font-extrabold text-base sm:text-lg lg:text-xl shadow-xl transition relative" 
            @click="handleAction('generate')"
            :disabled="isGenerating"
          >
            <ArrowUpTrayIcon class="h-4 w-4 lg:h-5 lg:w-5" />
            <span class="whitespace-nowrap">{{ isGenerating ? 'Generating...' : 'Generate Video' }}</span>
            <span class="absolute -top-1.5 -right-1.5 bg-[#00b8ff] text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow border-2 border-white/50 shadow-[0_0_15px_rgba(0,184,255,0.3)]">{{ needCredits }} credits</span>
          </button>
        </div>
        <!-- 右侧视频预览 -->
        <div :class="[
          'w-full mx-auto lg:mx-0 lg:w-[50%] max-w-[576px] lg:max-w-none flex flex-col items-center p-2 sm:p-3 lg:p-4 xl:p-6 bg-[#1a1a1a] backdrop-blur-sm rounded-2xl shadow-2xl border border-[#8a8c90]/30',
          containerHeight.base.replace('min-', ''),
          containerHeight.sm.replace('sm:min-', 'sm:'),
          containerHeight.lg.replace('lg:min-', 'lg:')
        ]">
          <div class="flex flex-col justify-center items-center w-full h-full bg-gradient-to-br from-[#1a1a1a]/10 via-[#990066]/8 to-[#ec2657]/10 rounded-[16px]">
            <div class="relative w-full h-[480px] flex items-center justify-center">
              <!-- 进度条 -->
              <div v-if="isGenerating" class="absolute inset-0 flex items-center justify-center">
                <div v-if="progress > 0&&progress<100" class="relative w-24 h-24">
                  <svg class="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      class="text-gray-700"
                      stroke-width="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      class="text-[#ec2657]"
                      stroke-width="8"
                      stroke-dasharray="251.2"
                      stroke-dashoffset="251.2"
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      :style="{
                        strokeDashoffset: 251.2 - (251.2 * progress) / 100
                      }"
                    />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center text-[#ec2657] font-bold text-lg">
                    {{ progress.toFixed(0) }}%
                  </div>
                  <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[#ec2657] text-base font-medium">Generating your video<span class="loading-dots">...</span></span>
                </div>
                <div v-else class="flex flex-col items-center justify-center">
                  <div class="animate-spin rounded-full h-10 w-10 border-4 border-[#ec2657] border-t-transparent"></div>
                  <span class="mt-3 text-[#ec2657] text-base font-medium whitespace-nowrap">Generating your video<span class="loading-dots">...</span></span>
                </div>
                
                <!-- 继续制作按钮 -->
                <button 
                  @click="handleContinueCreating"
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ec2657] hover:bg-[#ec2657]/80 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg flex items-center gap-2"
                >
                  <ArrowUpTrayIcon class="h-4 w-4" />
                  <span>Keep making</span>
                </button>
              </div>
              <!-- 预览视频 -->
              <div v-else-if="!generatedVideoUrl" class="w-full h-full relative">
                <div class="w-full h-full flex items-center justify-center relative">
                  <video 
                    :src="previewVideoUrl" 
                    :poster="previewVideoPoster"
                    class="w-full h-full object-contain rounded-xl" 
                    autoplay 
                    loop 
                    controls
                    preload="none"
                    playsinline
                    @loadstart="handleVideoLoadStart($event.target)"
                    @canplay="handleVideoCanPlay($event.target)"
                    ref="previewVideo"
                  ></video>
                  <!-- 自定义播放/暂停按钮 -->
                  <button 
                    @click="toggleVideoPlayPause"
                    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                    v-show="!isVideoPlaying"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </button>
                </div>
                <div class="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 text-[#ec2657] px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-sm sm:text-base font-semibold shadow-lg pointer-events-none select-none whitespace-nowrap z-10">
                  AI Video Generation Demo
                </div>
              </div>
              <!-- 结果视频 -->
              <div v-else-if="generatedVideoUrl" class="w-full h-full relative">
                <video 
                  :src="generatedVideoUrl" 
                  class="w-full h-full object-contain rounded-xl" 
                  autoplay 
                  loop 
                  muted
                  controls
                  preload="none"
                  @loadeddata="videoLoading = false"
                ></video>
                <button 
                  @click="handleDownload"
                  class="absolute top-0 right-0 bg-black/60 text-[#ec2657] px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center gap-1.5 transition-all duration-300 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-sm hover:shadow-[#ec2657]"
                  :disabled="isDownloading"
                >
                  <ArrowDownTrayIcon v-if="!isDownloading" class="w-4 h-4" />
                  <ArrowPathIcon v-else class="w-4 h-4 animate-spin" />
                  {{ isDownloading ? 'Downloading...' : 'Download' }}
                </button>
                <!-- 添加提示文本 -->
                <div class="absolute top-0 left-0 bg-[#ec2657] text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <span>Video has been generated, visit</span>
                  <NuxtLink to="/profile" class="text-black hover:text-gray-800 transition-colors font-semibold">
                    profile-My Works
                  </NuxtLink>
                  <span>to view</span>
                </div>
              </div>
              <!-- 视频加载中 -->
              <div v-else class="absolute inset-0 flex items-center justify-center">
                <div class="animate-spin rounded-full h-10 w-10 border-4 border-[#ec2657] border-t-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ArrowUpTrayIcon, ArrowUpOnSquareIcon, XMarkIcon, InformationCircleIcon, ArrowDownTrayIcon, ArrowPathIcon, SparklesIcon } from '@heroicons/vue/24/outline'
  import { ref, computed, watch, onUnmounted, onMounted } from 'vue'
  import { useUserStore } from '~/stores/user'
  import { useRoute } from 'vue-router'
  import { useNuxtApp } from 'nuxt/app'
  import { useVideoTaskStore } from '~/stores/videoTask'
  import { useNotificationStore } from '~/stores/notification'
  
  // 图片方向纠正
  import { correctImageOrientation } from '~/utils/imageOrientation'
  
  // 接口
  import { createTaskImgVideo, createTaskTextVideo, upload, getScore } from '~/api'
  
  const { $toast } = useNuxtApp() as any
  
  const route = useRoute()
  const prompt = ref('')
  const isGenerating = ref(false)//是否正在生成
  const selectedImage = ref<File | null>(null)//选择的图片
  const imagePreview = ref<string>('')//图片预览
  const fileInput = ref<HTMLInputElement | null>(null)
  // const isShow = ref(false) // 是否分享到作品展示
  const progress = ref(0) // 进度条进度
  const videoLoading = ref(false) // 视频加载状态
  const generatedVideoUrl = ref('') // 生成的视频URL
  const isDownloading = ref(false) // 下载状态
  const previewVideoLoading = ref<{ [key: string]: boolean }>({}) // 预览视频加载状态
  let progressInterval: number | null = null // 进度条定时器
  const isFastMode = ref(false) // 快速生成模式开关
  
  // 分辨率选项
  const resolution = ref('768p')
  
  // 时长选项
  const duration = ref('6')

  const model = ref('1')//模型
  // 模型选项
  const modelOptions = [
    { value: '1', label: 'Model 1' },
    { value: '2', label: 'Model 2' },
  ]
  ///////////////////////////////积分配置///////////////////////////////
  const scoreData = ref<{ [key: string]: number }>({})
  
  const needCredits = computed(() => {
    return scoreData.value?.[isFastMode.value ? 'veo3_fast' : 'veo3'] ?? 1
  })
  
  // 获取积分数据的函数
  const fetchScoreData = async () => {
    try {
      const response = await getScore()
      if (response.code === 200 && Array.isArray(response.data)) {
        const data = response.data.reduce((acc: { [key: string]: number }, item: any) => {
          if (item.model === 'veo3_fast') {
            acc.veo3_fast = item.score
          } else if (item.model === 'veo3') {
            acc.veo3 = item.score
          }
          return acc
        }, {})
        scoreData.value = data
      }
    } catch (error) {
      console.error('Failed to fetch score data:', error)
    }
  }
  
  /////////////////////////////////////////////////////////////////
  
  // 在 setup 中添加
  const videoTaskStore = useVideoTaskStore()
  const notificationStore = useNotificationStore()
  
  // 监听所有任务完成的事件
  const handleAllTasksCompleted = () => {
    console.log('All tasks completed, hiding loading and progress')
    stopProgressAnimation()
    isGenerating.value = false
  }
  
  // 监听单个任务完成的事件
  const handleTaskCompleted = (event: Event) => {
    const customEvent = event as CustomEvent
    console.log('Task completed event received:', customEvent.detail)
    const { taskId, videoUrl, prompt: taskPrompt, origin } = customEvent.detail
    
    // 检查是否是当前页面的任务
    const currentTask = videoTaskStore.latestTask
    if (currentTask && currentTask.taskId === taskId) {
      console.log('当前任务完成，更新视频URL:', videoUrl)
      
      // 更新生成的视频URL
      generatedVideoUrl.value = videoUrl
      
      // 停止进度条动画
      stopProgressAnimation()
      
      // 设置生成状态为false
      isGenerating.value = false
      
      // 显示成功提示
      $toast.success('Video generation completed!')
    }
  }
  
  // 恢复任务状态
  const restoreTaskState = async () => {
    const latestTask = videoTaskStore.latestTask
    if (latestTask) {
      console.log('恢复任务状态:', latestTask)
      
      // 恢复表单状态
      prompt.value = latestTask.prompt
      // isShow.value = latestTask.isShow
      
      if (latestTask.imageUrls) {
        selectedImage.value = latestTask.imageUrls[0] ? new File([], latestTask.imageUrls[0]) : null
        imagePreview.value = latestTask.imageUrls[0] || ''
      }
      
      // 如果任务还在进行中，只恢复生成状态，不显示进度条
      if (latestTask.isGenerating) {
        isGenerating.value = true
        
        // 重新开始任务检查 - 只使用通知系统
        if (latestTask.taskId) {
          notificationStore.startCheckingTask(latestTask.taskId)
        }
      }
    }
  }
  
  // 修改 onMounted
  onMounted(async () => {
    // 初始化store状态
    videoTaskStore.initializeStore()
  
    // 处理URL参数
    const { prompt: urlPrompt, origin: urlOrigin } = route.query
    
    if (urlPrompt) {
      prompt.value = urlPrompt as string
    }
  
    if (urlOrigin) {
      selectedImage.value = urlOrigin as any;
      imagePreview.value = urlOrigin as string;
    }
    
    // 恢复任务状态（不显示进度条）
    await restoreTaskState()
    
    // 监听所有任务完成的事件
    window.addEventListener('allTasksCompleted', handleAllTasksCompleted)
    
    // 监听单个任务完成的事件
    window.addEventListener('taskCompleted', handleTaskCompleted)

    // 获取积分数据
    fetchScoreData()

    // 添加视频播放状态监听
    if (previewVideo.value) {
      previewVideo.value.addEventListener('play', () => {
        isVideoPlaying.value = true
      })
      previewVideo.value.addEventListener('pause', () => {
        isVideoPlaying.value = false
      })
    }
  })
  
  // 修改 onUnmounted
  onUnmounted(() => {
    // 移除事件监听器
    window.removeEventListener('allTasksCompleted', handleAllTasksCompleted)
    window.removeEventListener('taskCompleted', handleTaskCompleted)
    
    // 清理视频资源
    if (generatedVideoUrl.value) {
      URL.revokeObjectURL(generatedVideoUrl.value)
    }
    // 清理预览视频资源
    if (previewVideoUrl) {
      URL.revokeObjectURL(previewVideoUrl)
    }
    // 暂停所有视频
    const videos = document.querySelectorAll('video')
    videos.forEach(video => {
      video.pause()
    })
    
    // 清理图片预览
    if (imagePreview.value) {
      URL.revokeObjectURL(imagePreview.value)
    }
    
    // 重置进度条状态（页面离开时）
    progress.value = 0
    isGenerating.value = false
  })
  
  // 预览视频URL
  const previewVideoUrl = 'https://resource.aimagen43.com/veo3/veo3demo.mp4'
  const previewVideoPoster = 'https://resource.aimagen43.com/veo3/veo3-video-generated-image-demonstration.jpg'
  
  // 处理视频加载事件
  const handleVideoLoadStart = (target: EventTarget | null) => {
    if (target && target instanceof HTMLVideoElement) {
      previewVideoLoading.value[target.src] = true
    }
  }
  
  const handleVideoCanPlay = (target: EventTarget | null) => {
    if (target && target instanceof HTMLVideoElement) {
      previewVideoLoading.value[target.src] = false
    }
  }
  
  // 处理图片上传区域点击
  const handleImageUploadClick = async () => {
    if (!await checkLoginStatus()) return
    fileInput.value?.click()
  }
  
  // 处理图片上传
  const handleImageUpload = async (event: Event) => {
    const input = event.target as HTMLInputElement
    if (!input.files?.length) return
    
    const file = input.files[0]
    if (file.size > 10 * 1024 * 1024) { // 10MB
      $toast.error('Image size should be less than 10MB')
      return
    }
    
    // 验证文件格式
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      $toast.error('Only JPG/JPEG and PNG images are supported')
      return
    }

    // 检查图片尺寸和宽高比
    const img = new Image()
    img.onload = () => {
      const width = img.width
      const height = img.height
      const aspectRatio = width / height
      
      // 检查宽高比 (0.4, 2.5)
      if (aspectRatio <= 0.4 || aspectRatio >= 2.5) {
        $toast.error('Image aspect ratio must be between 0.4 and 2.5')
        return
      }
      
      // 检查边长 (300, 6000) - 短边大于300px，长边小于6000px
      const minSide = Math.min(width, height)
      const maxSide = Math.max(width, height)
      
      if (minSide <= 300) {
        $toast.error('Image minimum side must be greater than 300px')
        return
      }
      
      if (maxSide >= 6000) {
        $toast.error('Image maximum side must be less than 6000px')
        return
      }
      
      // 验证通过，设置图片
      selectedImage.value = file
      imagePreview.value = URL.createObjectURL(file)
    }
    
    img.onerror = () => {
      $toast.error('Failed to load image for validation')
    }
    
    img.src = URL.createObjectURL(file)
  }
  
  // 移除已选择的图片
  const removeSelectedImage = () => {
    if (imagePreview.value) {
      URL.revokeObjectURL(imagePreview.value)
    }
    selectedImage.value = null
    imagePreview.value = ''
  }

  // 继续制作，清除所有状态
  const handleContinueCreating = () => {
    progress.value = 0
    isGenerating.value = false
    generatedVideoUrl.value = ''
    selectedImage.value = null
    imagePreview.value = ''
    // 清空表单
    prompt.value = ''
    // 进度条归零
    stopProgressAnimation()
    progress.value = 0
  }
  
  // 监听快速模式变化
  watch(isFastMode, (newValue) => {
    if (newValue) {
      // 切换到快速模式时，清除已选择的图片
      removeSelectedImage()
    }
  })
  
  // 统一的事件处理方法
  const handleAction = (action: string, ...args: any[]) => {
    switch (action) {
      case 'prompt':
        withLoginCheck(() => {
          // TODO: 处理提示词输入逻辑
        })
        break
      case 'generate':
        withLoginCheck(async () => {
          // 检查使用限制
          if (!checkUsageLimit()) return;

          // 验证提示词
          if (!prompt.value.trim()) {
            $toast.warning('Please enter a prompt')
            return
          }

          // 立即设置生成状态，显示loading
          isGenerating.value = true

          try {
            // 准备基础请求数据
            let requestData = {
              prompt: prompt.value.trim(),
              model: isFastMode.value ? 'veo3_fast' : 'veo3'
            }

            let response: any

            // 判断是否需要上传图片
            if (!isFastMode.value && selectedImage.value) {
              // 普通模式且有上传图片，使用图生视频API
              try {
                // 上传图片并获取URL
                const uploadResponse = await upload({
                  file: selectedImage.value
                })

                if (uploadResponse.code === 200) {
                  // 上传成功，将返回的图片URL添加到请求数据中
                  requestData = {
                    ...requestData,
                    image_url: uploadResponse.data
                  }
                  console.log('普通模式有上传图片',requestData)
                  // return
                  // 调用图生视频API
                  response = await createTaskImgVideo(requestData)
                } else {
                  throw new Error(uploadResponse.msg || 'Failed to upload image')
                }
              } catch (error) {
                console.error('Image upload failed:', error)
                $toast.error(error instanceof Error ? error.message : 'Failed to upload image')
                isGenerating.value = false
                return
              }
            } else {
              console.log('普通模式没有上传图片',requestData)
              // return
              // 快速模式或普通模式没有上传图片，使用文生视频API
              response = await createTaskTextVideo(requestData)
            }

            // 更新用户信息以刷新使用次数
            await userStore.fetchUserInfo(true)
            
            if (response.code === 200) {
              // 保存任务信息到 store
              videoTaskStore.addTask({
                taskId: response.data.task_id,
                startTime: Date.now(),
                isGenerating: true,
                prompt: prompt.value.trim(),
                type: selectedImage.value ? 'image' : 'text',
                imageUrl: selectedImage.value ? imagePreview.value : undefined,
                model: isFastMode.value ? 'veo3_fast' : 'veo3'
              })
              
              // 开始检查任务状态
              if (response.data?.task_id) {
                notificationStore.startCheckingTask(response.data.task_id)
              }
              
              // 如果是第一个任务，开始进度条动画
              if (videoTaskStore.activeTaskCount === 1) {
                startProgressAnimation()
              }
            } else {
              throw new Error(response.msg || 'Video generation failed')
            }
          } catch (error) {
            console.error('Task creation failed:', error)
            $toast.error(error instanceof Error ? error.message : 'Failed to create video generation task')
            isGenerating.value = false
          }
        })
        break
      case 'selectModel':
        withLoginCheck(async () => {
          model.value = args[0]
        })
        break
    }
  }
  
  // 使用用户信息 store
  const userStore = useUserStore()
  const userInfo = computed(() => userStore.userInfo)
  const remainingTimes = ref(userStore.userInfo?.free_limit+userStore.userInfo?.remaining_limit|| 0)
  
  // 修改 checkLoginStatus 函数
  const checkLoginStatus = async () => {
    if (!userInfo.value) {
      const loginButton = document.getElementById('bindLogin')
      if (loginButton) {
        loginButton.click()
      }
      return false
    }
    return true
  }
  
  // 监听登录状态变化
  watch(
    userInfo,
    (newUserInfo: any) => {
      remainingTimes.value = newUserInfo?.free_limit + newUserInfo?.remaining_limit || 0
    },
    { immediate: true }
  )
  
  // 检查使用限制
  const checkUsageLimit = () => {
    // 检查是否有可用次数
    if (remainingTimes.value <= 0) {
      $toast.warning('Usage limit reached. Please upgrade to premium for more credits')
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
      return false
    }
  
    // 检查用户积分是否足够
    if (remainingTimes.value < needCredits.value) {
      $toast.error(`Insufficient credits. The current operation requires ${needCredits.value} credits, and your account only has ${remainingTimes.value} credits`)
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' })
      }
      return false
    }
    
    return true
  }
  
  // 下载视频
  const handleDownload = async () => {
    if (!generatedVideoUrl.value) return
    const videoUrl = generatedVideoUrl.value;
    if (!videoUrl || isDownloading.value) return
    isDownloading.value = true
    try {
      const response = await fetch(videoUrl)
      if (!response.ok) {
        throw new Error('Download failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${Date.now()}.mp4`
      
      document.body.appendChild(link)
      link.click()
      
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      $toast.error('Download failed, please try again later')
    } finally {
      isDownloading.value = false
    }
  }
  
  // 动态计算容器高度
  const containerHeight = computed(() => {
    return {
      base: 'min-h-[520px]',
      sm: 'sm:min-h-[560px]',
      lg: 'lg:min-h-[600px]'
    }
  })

  // 修改 startProgressAnimation 函数 - 进度是假的，只用于UI展示
  const startProgressAnimation = (startFromProgress = 0) => {
    progress.value = startFromProgress
    const totalDuration = 300000 // 300秒，约40-50秒的平均值
    const totalSteps = 95 // 总共95步
    const stepDuration = totalDuration / totalSteps
    const remainingSteps = totalSteps - startFromProgress
    const remainingDuration = (remainingSteps / totalSteps) * totalDuration
  
    let lastTime = Date.now()
    const animate = () => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
  
      if (progress.value < 99) {
        const increment = (deltaTime / remainingDuration) * remainingSteps
        progress.value = Math.min(95, progress.value + increment)
        progressInterval = requestAnimationFrame(animate)
      }
    }
  
    progressInterval = requestAnimationFrame(animate)
  }
  
  // 停止进度条动画
  const stopProgressAnimation = () => {
    if (progressInterval) {
      cancelAnimationFrame(progressInterval)
      progressInterval = null
    }
    // 添加过渡动画到100
    const animateTo100 = () => {
      if (progress.value < 100) {
        progress.value = Math.min(100, progress.value + 0.5)
        requestAnimationFrame(animateTo100)
      }
    }
    requestAnimationFrame(animateTo100)
  }

  // 统一的登录检查方法
  const withLoginCheck = async (callback: () => void | Promise<void>) => {
    if (!await checkLoginStatus()) return
    await callback()
  }

  // 在 script 部分添加类型定义
  interface RequestData {
    prompt: string;
    model: string;
    image_url?: string;
  }

  // 修改请求数据的类型
  let requestData: RequestData = {
    prompt: prompt.value.trim(),
    model: isFastMode.value ? 'veo3_fast' : 'veo3'
  }

  // 修改 VideoTask 接口（如果存在的话）
  interface VideoTask {
    taskId: string;
    startTime: number;
    isGenerating: boolean;
    prompt: string;
    type: 'image' | 'text';
    imageUrl?: string;
    model: string;
  }

  // 灵感提示词列表
  const inspirationPrompts = [
    "A close up in a smooth, slow pan focuses intently on diced onions hitting a scorching hot pan, instantly creating a dramatic sizzle. Audio: distinct sizzle.",
    "In rural Ireland, circa 1860s, two women, their long, modest dresses of homespun fabric whipping gently in the strong coastal wind, walk with determined strides across a windswept cliff top. The ground is carpeted with hardy wildflowers in muted hues. They move steadily towards the precipitous edge, where the vast, turbulent grey-green ocean roars and crashes against the sheer rock face far below, sending plumes of white spray into the air.",
    "A woman, classical violinist with intense focus plays a complex, rapid passage from a Vivaldi concerto in an ornate, sunlit baroque hall during a rehearsal. Their bow dances across the strings with virtuosic speed and precision. Audio: Bright, virtuosic violin playing, resonant acoustics of the hall, distant footsteps of crew, conductor's occasional soft count-in (muffled), rustling sheet music.",
  ]

  // 随机获取灵感提示词
  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * inspirationPrompts.length)
    prompt.value = inspirationPrompts[randomIndex]
  }

  // 在 script setup 部分添加以下代码
  const previewVideo = ref<HTMLVideoElement | null>(null)
  const isVideoPlaying = ref(true)

  // 切换视频播放/暂停
  const toggleVideoPlayPause = () => {
    if (!previewVideo.value) return
    
    if (previewVideo.value.paused) {
      previewVideo.value.play()
      isVideoPlaying.value = true
    } else {
      previewVideo.value.pause()
      isVideoPlaying.value = false
    }
  }
  </script>

<style scoped>
/* 加载动画点 */
.loading-dots::after {
  content: '';
  animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
  0%, 20% { content: ''; }
  40% { content: '.'; }
  60% { content: '..'; }
  80%, 100% { content: '...'; }
}

/* 渐变动画 */
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 平滑进入动画 */
.animate-smooth-in {
  animation: smoothIn 0.3s ease-out;
}

@keyframes smoothIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 平滑退出动画 */
.animate-smooth-out {
  animation: smoothOut 0.2s ease-in;
}

@keyframes smoothOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
