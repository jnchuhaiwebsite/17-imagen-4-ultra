<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Navbar />
    <main class="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="space-y-8">
        <h1 class="text-4xl font-extrabold text-center text-[#ec2657]">Imagen 4 Ultra - 图像内文字渲染</h1>
        <div class="prose prose-invert lg:prose-xl mx-auto">
          <h2 class="!text-3xl !font-bold !mb-4 !text-gray-100">让您的图片“会说话”：Imagen 4 Ultra 图内文字生成指南</h2>
          <p>欢迎探索 Imagen 4 Ultra 强大的图内文字渲染功能。这项创新技术能将您的文字创意与视觉艺术无缝融合，无论是制作引人注目的海报、独一无二的社交媒体帖子，还是个性化的品牌 Logo，Imagen 4 Ultra 都能助您轻松实现。本文将为您提供一份全面的实战指南，从基础操作到高级技巧，助您完全掌握在图片中生成清晰、美观文字的艺术。</p>

          <h3 class="!text-2xl !font-bold !mb-4 !mt-8 !text-gray-100">核心技巧：精准控制文字效果</h3>

          <h4 class="!text-xl !font-semibold !mt-6 !text-gray-200">1. 提示词的艺术：简洁与结构</h4>
          <ul>
            <li><strong>保持简洁</strong>: 为获得最佳效果，建议将文本内容控制在 25 个字符以内。简短的文字更容易被模型理解和渲染。</li>
            <li>
              <strong>多短语组合</strong>: 您可以尝试使用 2-3 个独立的短语来传达更丰富的信息。为了确保语义清晰，请避免使用超过三个短语。
              <figure class="my-6">
                <img alt="Imagen 3 生成文本示例" class="rounded-lg shadow-lg mx-auto block" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_generate-text.png?hl=zh-cn">
                <figcaption class="text-center text-sm italic mt-2 text-gray-400">
                  提示：A poster with the text "Summerland" in bold font as a
                  title, underneath this text is the slogan "Summer never felt so good"
                </figcaption>
              </figure>
            </li>
          </ul>

          <h4 class="!text-xl !font-semibold !mt-6 !text-gray-200">2. 风格与布局：定义视觉呈现</h4>
          <ul>
            <li><strong>字体风格引导</strong>: 您可以通过描述字体风格（如“粗体”、“手写风”、“复古风”）来影响生成效果。请注意，模型会进行创意诠释，而非精确复制特定字体。</li>
            <li><strong>控制字体大小</strong>: 在提示中明确指定“大号字体”、“小号标题”或具体尺寸描述，可以有效控制文字的相对大小。</li>
            <li><strong>建议文本位置</strong>: 您可以尝试在提示词中描述文本的位置（例如，“在图片顶部”、“在主角下方”）。虽然模型会尽力遵循，但其定位功能仍在持续优化中，结果可能存在一定偏差。</li>
          </ul>

          <h4 class="!text-xl !font-semibold !mt-6 !text-gray-200">3. 耐心迭代与优化</h4>
          <p>图内文字生成是一项前沿技术，可能需要多次尝试才能达到您理想中的完美效果。请保持耐心，通过不断调整提示词进行迭代，您将解锁最佳的创作成果。</p>


          <h3 class="!text-2xl !font-bold !mb-4 !mt-8 !text-gray-100">高阶玩法：参数化提示实现动态生成</h3>
          <p>当您需要批量生成风格统一但内容变化的图片时（例如为不同客户生成 Logo），参数化提示是您的得力助手。通过创建一个包含变量的模板，您可以高效地生成大量定制化图像。</p>
          <p>例如，您可以创建一个模板来生成不同风格和行业的公司 Logo：</p>
          <pre class="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto"><code class="language-text">A {logo_style} logo for a {company_area} company on a solid color background. Include the text {company_name}.</code></pre>
          <p>在您的应用中，用户可以通过简单的选择来填充这些参数，从而生成符合其需求的定制化 Logo。</p>
          <p>例如：</p>
          <ol class="space-y-8">
            <li class="border border-gray-700 rounded-lg p-6">
              <p>提示：<code>A <var>minimalist</var> logo for a <var>health care</var> company on a solid color background. Include the text <var>Journey</var>.</code></p>
              <p class="mt-4"><img alt="Imagen 3 提示参数化示例 1" class="rounded-lg shadow-lg mx-auto block" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_prompt-param_healthcare.png?hl=zh-cn"></p>
            </li>
            <li class="border border-gray-700 rounded-lg p-6">
              <p>提示：<code>A <var>modern</var> logo for a <var>software</var> company on a solid color background. Include the text <var>Silo</var>.</code></p>
              <p class="mt-4"><img alt="Imagen 3 提示参数化示例 2" class="rounded-lg shadow-lg mx-auto block" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_prompt-param_software.png?hl=zh-cn"></p>
            </li>
            <li class="border border-gray-700 rounded-lg p-6">
              <p>提示：<code>A <var>traditional</var> logo for a <var>baking</var> company on a solid color background. Include the text <var>Seed</var>.</code></p>
              <p class="mt-4"><img alt="Imagen 3 提示参数化示例 3" class="rounded-lg shadow-lg mx-auto block" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_prompt-param_baking.png?hl=zh-cn"></p>
            </li>
          </ol>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { useHead } from '#imports'

useHead({
  title: 'In-Image Text - Imagen 4 Ultra AI',
  meta: [
    { name: 'description', content: 'Learn about generating images with integrated and readable text using Imagen 4 Ultra AI.' }
  ]
})
</script>

<style scoped>
.prose {
  color: #d1d5db;
}
.prose h1, .prose h2, .prose h3 {
  color: #f3f4f6;
}
</style> 