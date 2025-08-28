// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  ssr: true, // 启用服务端渲染
  compatibilityDate: '2025-05-28', // 兼容性日期
  devtools: { enabled: true }, // 启用 Nuxt DevTools
  css: [
    '~/assets/css/tailwind.css', // Tailwind CSS 样式
    '@/assets/css/main.css', // 主样式文件
  ],
  plugins: [
    '~/plugins/conditional-analytics.client.ts', // 条件加载 Google Analytics 插件
  ],
  runtimeConfig: {
    public: {
      appid: process.env.APPID, // 应用 ID
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL, // 基础URL
    },
  },
  modules: [
    '@clerk/nuxt', // Clerk 集成
    '@pinia/nuxt', // Pinia 状态管理
    '@nuxtjs/tailwindcss', // Tailwind CSS 集成
    '@nuxt/image', // Nuxt Image 模块
  ],
  app: {
    head: {
      title: 'Imagen 4 Ultra | Advanced AI Image Generation with Multi-Language Support',
      htmlAttrs: {
        lang: 'en' // 设置 HTML 语言
      },
      link: [
        // 预连接到重要域名
        {
          rel: 'preconnect',
          href: 'https://c.cnzz.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://v1.cnzz.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://www.googletagmanager.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://www.google-analytics.com',
          crossorigin: 'anonymous'
        },
        // DNS 预取
        {
          rel: 'dns-prefetch',
          href: 'https://c.cnzz.com'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://v1.cnzz.com'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://www.googletagmanager.com'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://www.google-analytics.com'
        },
        // 预加载关键字体 - 优化加载顺序
        {
          rel: 'preload',
          href: '/fonts/265822651.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
          fetchpriority: 'high'
        },
         {
          rel: 'preload',
          href: '/fonts/265822652.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
          fetchpriority: 'high'
        },
        {
          rel: 'preload',
          href: '/assets/css/main.css',
          as: 'style',
          fetchpriority: 'high'
        },
        {
          rel: 'preload',
          href: '/assets/css/tailwind.css',
          as: 'style',
          fetchpriority: 'high'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.aimagen4.com' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Imagen 4 Ultra - Advanced AI image generation with multi-language support. Create stunning images with digital watermarking and customizable safety settings.'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Imagen 4 Ultra - Next Generation AI Image Creation' },
        { property: 'og:description', content: 'Experience state-of-the-art AI image generation with Imagen 4 Ultra. Support for multiple languages, digital watermarking, and enhanced prompt rewriting.' },
        { property: 'og:image', content: '/img/imagen-4-ultra-og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Imagen 4 Ultra - Advanced AI Image Generation' },
        { name: 'twitter:description', content: 'Create professional quality images with Imagen 4 Ultra. Features multi-language support, digital watermarking, and customizable safety settings.' },
        { name: 'twitter:image', content: '/img/imagen-4-ultra-og-image.jpg' },
        // Keywords
        { name: 'keywords', content: 'Imagen 4 Ultra, AI image generation, digital watermarking, multi-language support, safety settings, prompt rewriting' },
        { name: 'author', content: 'Imagen 4 Ultra Team' },
        { name: 'application-name', content: 'Imagen 4 Ultra' },
      ],
      script: [
        { src: '/js/c6h.js', async: true },
        // Google Ads 转化跟踪代码
        { 
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-16699731013', 
          async: true 
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16699731013');
          `
        }
      ], // 外部脚本
    }
  },
  routeRules: {
    '/blog': { isr: true, prerender: true },
    '/blog/**': { isr: 60 },
  },
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    devProxy: {
      '/nuxtRequest': {
        target: process.env.NUXT_PUBLIC_API_BASE, // 从环境变量获取代理目标
        changeOrigin: true, // 允许跨域
        prependPath: false // 不添加代理路径前缀
      }
    },
    // 预渲染
    prerender: {
      // 预渲染路由
      routes: [
        // '/blog',
        '/subsidiary/privacy-policy',
        '/subsidiary/terms-of-service'
      ],
      crawlLinks: false,
      autoSubfolderIndex: false,
      failOnError: false,
      ignore: [
        '/api/**', // 忽略 API 路由
        '/admin/**' // 忽略管理后台路由
      ]
    },
  },
  // Nuxt3正确的Tailwind配置
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
  },
  // 使用vite的正确配置方式
  vite: {
    build: {
      cssCodeSplit: true,
      // 强制提取CSS到单独文件
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return '_nuxt/css/[name]-[hash][extname]';
            }
            return '_nuxt/assets/[name]-[hash][extname]';
          }
        }
      }
    },
    // 确保CSS的sourcemap
    css: {
      devSourcemap: true
    }
  },
  build: {
    analyze: true, // 启用打包分析
    // 代码压缩配置
    terser: {
      compress: {
        drop_console: true, // 移除 console 语句
        drop_debugger: true, // 移除 debugger 语句
        pure_funcs: ['console.log', 'console.info'], // 移除特定的函数调用
        passes: 3, // 增加压缩次数
        dead_code: true, // 移除未使用的代码
        global_defs: {
          'process.env.NODE_ENV': 'production' // 定义全局变量
        }
      },
      mangle: true, // 混淆变量名
      output: {
        comments: false // 移除注释
      }
    }
  },
  // 强制CSS提取的配置
  experimental: {
    // 强制禁用内联样式，将样式提取到外部文件
    inlineSSRStyles: false,
    // 启用vite特性兼容
    viteNode: true
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
})