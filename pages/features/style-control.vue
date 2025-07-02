<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Navbar />
    <main class="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="space-y-12">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-[#ec2657] sm:text-5xl">释放想象，掌控风格</h1>
          <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">欢迎来到 Imagen 4 Ultra 的创意世界！本指南将带您深入了解如何精确掌控艺术风格，将脑海中的概念转化为惊艳的视觉杰作。</p>
        </div>
        
        <div class="p-6 rounded-lg border border-gray-800 bg-gray-900/50 prose prose-invert lg:prose-xl mx-auto">
          <h2 id="style-illustration-art">从草图到杰作：驾驭插画与艺术媒介</h2>
          <p>每一幅伟大的作品都始于一个媒介。Imagen 4 Ultra 能够理解并模拟各种传统与现代的艺术媒介。通过在提示词中指定媒介，您可以为您的图像设定基调和质感。</p>
          <p><strong>核心技巧：</strong> 在您的描述中加入 <code>"...的 [艺术风格或创作技巧]"</code>。</p>
          <p>想象一下，我们想创作一辆"背景是摩天大楼的棱角分明的运动型电动轿车"。看看不同的艺术媒介如何赋予它截然不同的生命力：</p>
          
          <div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration1A.png?hl=zh-cn" alt="技术铅笔素描示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>技术铅笔素描 (technical pencil drawing)</b>：营造出工程蓝图般的精确与细节感。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration1B.png?hl=zh-cn" alt="炭笔画示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>炭笔画 (charcoal drawing)</b>：带来强烈的光影对比和粗犷的艺术质感。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration1C.png?hl=zh-cn" alt="彩色铅笔画示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>彩色铅笔画 (color pencil drawing)</b>：展现柔和、细腻的色彩层次。</figcaption>
            </figure>
          </div>
          <div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration2E.png?hl=zh-cn" alt="蜡笔画示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>蜡笔画 (pastel painting)</b>: 色彩鲜艳饱和，质地柔软。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration2F.png?hl=zh-cn" alt="数字艺术示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>数字艺术 (digital art)</b>: 开启通往超现实、光怪陆离视觉效果的大门。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/2_style-illustration2G.png?hl=zh-cn" alt="装饰风艺术海报示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[4rem] flex items-center justify-center"><b>装饰风艺术海报 (art deco poster)</b>: 赋予图像复古、几何化的优雅与力量。</figcaption>
            </figure>
          </div>
          <p class="font-semibold text-rose-400">专业提示：</p>
          <p>不用局限于单一媒介。尝试组合！例如，"一幅结合了水彩和钢笔线条的城市风光画" (<code>a cityscape painting combining watercolor and ink lines</code>)，探索更丰富的视觉层次。</p>
        </div>

        <div class="p-6 rounded-lg border border-gray-800 bg-gray-900/50 prose prose-invert lg:prose-xl mx-auto">
          <h2 id="shapes-materials">重塑现实：玩转物体形态与超凡材质</h2>
          <p>AI 艺术最激动人心的一点，便是能够打破物理定律，创造出现实中不存在的奇妙组合。想过一个由奶酪制成的手提包，或是一只由霓虹灯管构成的鸟吗？Imagen 4 Ultra 让这一切成为可能。</p>
          <p><strong>核心技巧：</strong> 使用 <code>"由...制成的... (made of...)"</code> 或 <code>"...形状的... (in the shape of...)"</code> 句式。</p>
          <p>这项技术是超现实主义创作的利器，能将平凡物体变得非凡：</p>
          <div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/9_shapes-materials_duffel.png?hl=zh-cn" alt="奶酪手提包示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>一个由奶酪制成的手提包</b>：将柔软的食物与功能性物品结合，充满趣味和荒诞感。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/9_shapes-materials_bird.png?hl=zh-cn" alt="霓虹灯鸟示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>一只小鸟形状的霓虹灯管</b>：融合了自然生命与人造光源，产生赛博朋克式的诗意。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/9_shapes-materials_paper.png?hl=zh-cn" alt="纸扶手椅示例">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>一把纸做的扶手椅, studio photo, origami style</b>：加入补充提示，可极大提升真实感和风格明确性。</figcaption>
            </figure>
          </div>
          <p class="font-semibold text-rose-400">专业提示：</p>
          <p>将材质与环境结合，可以讲述一个更完整的故事。例如，"一个漂浮在宇宙中的玻璃茶壶" (<code>a glass teapot floating in space</code>)，比简单的"玻璃茶壶"更具想象空间。</p>
        </div>

        <div class="p-6 rounded-lg border border-gray-800 bg-gray-900/50 prose prose-invert lg:prose-xl mx-auto">
          <h2 id="art-references">穿越时空：借鉴经典艺术流派</h2>
          <p>人类艺术史是一座取之不尽的灵感宝库。从文艺复兴的庄重到波普艺术的大胆，每一种艺术流派都代表着独特的审美范式和视觉语言。Imagen 4 Ultra 可以让您"穿越"到任意时代，用大师的风格进行创作。</p>
          <p><strong>核心技巧：</strong> 使用 <code>"...[艺术时期或流派]风格的... (in the style of [art period or movement])"</code>。</p>
          <p>让我们以"一个风力发电场"为例，看看不同艺术流派的"滤镜"效果：</p>
          <div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/10_historical-ref1_impressionism.png?hl=zh-cn" alt="印象派风力发电场">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>印象派绘画 (impressionist painting)</b> 风格：注重光影的变幻和瞬间的捕捉，笔触明显，色彩跳跃。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/10_historical-ref1_renaissance.png?hl=zh-cn" alt="文艺复兴风力发电场">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>文艺复兴绘画 (renaissance painting)</b> 风格：构图均衡，色彩和谐，带有一种古典的庄严和理想化的美。</figcaption>
            </figure>
            <figure class="p-2 border border-gray-700 rounded-lg">
              <img class="w-full rounded-lg shadow-md aspect-square object-cover" src="https://ai.google.dev/static/gemini-api/docs/images/imagen/10_historical-ref1_pop-art.png?hl=zh-cn" alt="波普艺术风力发电场">
              <figcaption class="mt-2 text-sm text-center text-gray-400 min-h-[6rem] flex items-center justify-center"><b>波普艺术 (pop art)</b> 风格：运用明亮、大胆的色彩和重复的图像，充满现代感和商业气息。</figcaption>
            </figure>
          </div>
          <p class="font-semibold text-rose-400">专业提示：</p>
          <p>除了宏观的艺术流派，您还可以尝试模仿特定艺术家的风格，例如 <code>"in the style of Vincent van Gogh"</code>。这能让您的作品更具辨识度。同时，探索一些小众的艺术流派，如"未来主义 (Futurism)"或"超现实主义 (Surrealism)"，可能会带来意想不到的惊喜。</p>
        </div>

        <div class="text-center p-6 rounded-lg border border-dashed border-gray-700">
          <h2 class="text-2xl font-bold text-rose-400">释放您的创造力</h2>
          <p class="mt-2 text-gray-300 max-w-xl mx-auto">掌握风格控制是 AI 艺术创作从"可用"到"卓越"的关键一步。我们今天介绍的只是冰山一角。真正的进步源于不断的尝试和探索。去组合不同的技巧，挑战不可能的想象，用 Imagen 4 Ultra 作为您的画笔，在数字画布上挥洒您的无限创意吧！</p>
        </div>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

useHead({
  title: '风格掌控：Imagen 4 Ultra AI 艺术创作指南',
  meta: [
    { name: 'description', content: '学习如何使用 Imagen 4 Ultra 控制艺术风格。本指南涵盖了从艺术媒介、材质形态到历史流派的各种高级提示技巧，助您成为 AI 创作大师。' }
  ]
})
</script>

<style scoped>
/* Scoped styles can be added here if needed for further customization. */
</style> 