<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Navbar />
    <main class="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="space-y-12">
        <h1 class="text-4xl font-extrabold text-center text-[#ec2657]">精通 Imagen 4 Ultra 提示词：从入门到大师</h1>
        <div class="prose prose-invert lg:prose-xl mx-auto">
          <p>欢迎来到 Imagen 4 Ultra 的世界！这款强大的AI图像生成工具，能将你的想象力变为惊人的视觉艺术。然而，要真正释放其潜力，关键在于掌握<strong>提示词（Prompt）</strong>的艺术。一个精心设计的提示词，就像是给AI画家的精确指令；而一个模糊的提示，则可能导致结果不尽人意。本指南将带你从零开始，逐步掌握从基础到高级的提示词技巧，助你成为一名真正的AI视觉艺术家。</p>

          <h2>提示词的五大核心要素</h2>
          <p>一个出色的提示词，如同为AI准备的一份详尽的"创作菜谱"。它应该包含以下五个核心要素，要素越具体，生成结果就越贴近你的构想。</p>
          <ol>
            <li><strong>主体 (Subject)</strong>：这是你画面的绝对核心。描述要清晰、具体。不要只说"一辆车"，而是"一辆红色的1960年代经典款跑车"。</li>
            <li><strong>环境 (Environment)</strong>：主体所处的背景。是"在赛博朋克城市的霓虹灯街道上"，还是"在宁静的乡村公路上"?"环境为你的故事搭建舞台。</li>
            <li><strong>媒介与风格 (Medium & Style)</strong>：你希望以何种艺术形式呈现?"是"超现实主义油画"、"日式动漫素描"，还是"复古胶片摄影"?"风格定义了作品的灵魂。</li>
            <li><strong>构图与视角 (Composition & Angle)</strong>：你希望观众从哪个角度看?"广角镜头下的宏大场景"、"特写镜头捕捉面部细节"，还是"无人机俯瞰视角"?"构图决定了画面的观感和冲击力。</li>
            <li><strong>光线与氛围 (Lighting & Mood)</strong>：光是情感的画笔。是"清晨柔和的金色阳光"、"戏剧性的伦勃朗式布光"，还是"夜晚诡秘的月光"?"光线能为画面注入生命和深度。</li>
          </ol>

          <figure>
            <img alt="强调主体、背景和风格的提示" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/style-subject-context.png?hl=zh-cn">
            <figcaption>一个优秀提示词的构成：现代风格的公寓楼 (<b>主体</b>)，周围摩天大楼环绕 (<b>环境</b>)，以一幅草图的形式呈现 (<b>媒介与风格</b>)。</figcaption>
          </figure>

          <h2>迭代为王：逐步完善你的创意</h2>
          <p>很少有人能一次就写出完美的提示词。真正的魔法在于<strong>迭代</strong>——从一个简单的核心概念开始，像雕塑家一样，不断增添细节，直到作品成型。</p>

          <div class="devsite-table-wrapper border border-gray-700 rounded-lg p-4 my-8">
            <table class="w-full table-fixed">
              <tbody>
                <tr>
                  <td class="p-2 align-top text-center">
                    <figure>
                    <img alt="逼真的示例图片 1" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/0_prompt-writing-basics_park_short.png?hl=zh-cn">
                    <figcaption><b>第1步 (核心概念)</b>: <br/>春天湖边的一个公园</figcaption>
                    </figure>
                  </td>
                  <td class="p-2 align-top text-center">
                    <figure>
                      <img alt="逼真的示例图片 2" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/0_prompt-writing-basics_park_medium.png?hl=zh-cn">
                    <figcaption><b>第2步 (增加光线与氛围)</b>: <br/>春天湖边的一个公园, <b>夕阳越过湖面, 黄金时刻</b></figcaption>
                    </figure>
                  </td>
                  <td class="p-2 align-top text-center">
                    <figure>
                      <img alt="逼真的示例图片 3" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/0_prompt-writing-basics_park_long.png?hl=zh-cn">
                    <figcaption><b>第3步 (添加更多细节)</b>: <br/>春天湖边的一个公园, 夕阳越过湖面, 黄金时刻, <i><b>点缀着红色的野花</b></i></figcaption>
                    </figure>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>观察这个过程：我们从一个宽泛的场景开始，然后通过添加具体的时间("黄金时刻")和光线效果来营造氛围，最后通过加入前景细节("红色的野花")来丰富画面层次感。每一次迭代都让图像更生动、更具体。</p>

          <h2>长短提示词的艺术</h2>
          <p>提示词并非越长越好，长与短各有其用武之地。</p>
          <div class="devsite-table-wrapper border border-gray-700 rounded-lg p-4 my-8">
            <table class="columns w-full table-fixed">
              <tbody>
                <tr>
                  <td class="p-2 align-top">
                    <div class="text-center">
                    <p><strong>短提示词：激发意外之喜</strong><br/>当你想要快速探索、寻找灵感时，短小精悍的提示词是最佳选择。它给予AI更多自由发挥的空间，常常能带来意想不到的惊喜。</p>
                    <figure>
                      <img alt="Imagen 3 短提示示例" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_short-prompt.png?hl=zh-cn">
                      <figcaption>提示：特写照片，一位20多岁的女性，街头摄影风格，电影剧照质感，柔和的橙色暖色调</figcaption>
                    </figure>
                    </div>
                  </td>
                  <td class="p-2 align-top">
                    <div class="text-center">
                    <p><strong>长提示词：实现精准控制</strong><br/>当你心中已有明确的画面时，详细的长提示词则是实现你愿景的利器。通过添加更多细节，你可以精确地指导AI，构建出你想要的复杂场景。</p>
                    <figure>
                      <img alt="Imagen 3 长提示示例" class="screenshot" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/imagen3_long-prompt.png?hl=zh-cn">
                      <figcaption>提示：一张引人入胜的照片，主角是一位20多岁的女性，采用街头摄影风格。图像应如同电影剧照，带有柔和的橙色暖色调。</figcaption>
                    </figure>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>进阶技巧：化身提示词魔法师</h2>
          <p>掌握了基础之后，让我们来学习一些能让你的作品脱颖而出的"魔法"技巧：</p>
          <ul>
            <li><strong>使用负向提示词 (Negative Prompts)</strong>：不想要什么，就告诉AI。例如，在生成人像时，你可以在提示词末尾或使用专门的负向提示词字段加入 `low quality, blurry, extra limbs` (低质量，模糊，多余的肢体)，以避免生成不理想的结果。</li>
            <li><strong>融合风格 (Style Blending)</strong>：不要局限于单一风格。尝试将两种或多种风格结合起来，创造独特的视觉效果。例如："一只宇航猫，浮世绘与赛博朋克风格的融合"。</li>
            <li><strong>控制权重 (Controlling Weight)</strong>：想强调某个元素?"在某些平台上，你可以用 `()` 增加关键词的权重，用 `[]` 降低权重。例如 `(hyperrealistic) cat in a [messy] room` 会更强调"超真实"，而弱化"凌乱"。请查阅你所使用平台的具体语法。</li>
            <li><strong>善用"魔法词" (Using "Magic Words")</strong>：有些词汇能显著提升图像的质量感和细节。在提示词中加入如 `masterpiece` (杰作), `8K`, `Unreal Engine` (虚幻引擎渲染), `award-winning photography` (获奖摄影作品), `hyperdetailed` (超高细节) 等词语，往往能让画面质量更上一层楼。</li>
          </ul>

          <h2>你的创作之旅</h2>
          <p>撰写提示词是一门融合了技术与艺术的学问。它需要精确的描述，也需要天马行空的想象力。最重要的是，不要害怕尝试！不断试验、调整、学习，你将发现自己能用Imagen 4 Ultra创造出无限可能。现在，开启你的创作之旅吧！</p>
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
  title: '精通Imagen 4 Ultra提示词 - 释放你的创意',
  meta: [
    { name: 'description', content: '从基础到高级，学习为 Imagen 4 Ultra 撰写专业级提示词的艺术。掌握核心要素、迭代技巧和高级策略，释放你的全部创意潜能。' }
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
.screenshot {
  max-width: 100%;
  border-radius: 0.5rem;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style> 