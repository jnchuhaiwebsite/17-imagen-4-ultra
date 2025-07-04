<template>
  <section id="faq" class="py-20 bg-blue-pale">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="faq-heading" class="text-3xl font-bold text-center mb-12 text-[#ec2657]">Frequently Asked Questions - Imagen 4 Ultra</h2>
  
    <div class="space-y-8">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="border-b border-gray-200 pb-6"
      >
        <button
          @click="toggleFaq(index)"
          class="flex justify-between items-start w-full text-left focus:outline-none group"
        >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-[#ec2657]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
          <h3 class="text-lg font-semibold text-white">{{ faq.question }}</h3>
        </div>
          <svg 
            :class="[
              'w-5 h-5 text-[#ec2657] transform transition-transform duration-200 mt-1',
              openFaqs[index] ? 'rotate-180' : ''
            ]"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          >
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
          
        <div 
          v-show="openFaqs[index]"
          class="mt-4 text-[#ec2657] space-y-3"
        >
          <div class="mt-4 text-gray-300 leading-relaxed">
            <div v-html="formatAnswer(faq.answer)"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <button
        @click="scrollToHero"
        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:opacity-90 text-white rounded-lg font-medium text-base transition-colors duration-200"
        aria-label="Start creating with Imagen 4 Ultra"
      >
        Start Creating Today
        <!-- <svg 
          class="ml-2 w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13l5-5m0 0l5 5M7 7l5-5m0 0l5 5"></path>
        </svg> -->
      </button>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigateTo } from 'nuxt/app';

defineOptions({
  name: 'FaqSection'
})

// FAQ dataasasasa
const faqs = [
  {
    question: "How can I use my free registration credits to generate images?",
    answer: "Every new user receives <strong>20 free credits</strong> upon signing up. You can use these credits on the image generation page by:<ul class='list-disc pl-5 mt-2 space-y-1'><li><strong>Normal model (8 credits):</strong> Standard quality images</li><li><strong>Ultra model (12 credits):</strong> High-quality, detailed images</li></ul>For example, you can generate one Ultra image and one Normal image, or generate two Normal images — the choice is yours."
  },
  {
    question: "What's the difference between the Ultra and Normal models? Which one should I choose?",
    answer: "The <strong>Ultra model</strong> is powered by Google's Imagen 4 Ultra and delivers: Sharper image quality with richer detail, clearer text rendering, perfect for posters, marketing materials, or presentations.<br><br>The <strong>Normal model</strong> is faster and uses fewer credits — ideal for quick drafts or casual creative use.<br><br>✅ <strong>Tip:</strong> Start with the Normal model to test your ideas. Once you're happy, switch to Ultra for your final version.<br><br>👉 <a href='/normal-vs-ultra' class='text-[#ec2657] hover:underline'>Imagen 4.0 vs Ultra →</a>"
  },
  {
    question: "How should I write a prompt to get the image I want?",
    answer: "A strong prompt gives you better results. Include:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Main subject (e.g., 'a retro-style coffee shop logo')</li><li>Style or mood (minimalist, surreal, photorealistic?)</li><li>Details (colors, environment, mood, text placement)</li><li>Aspect ratio (1:1, 16:9, or 3:4)</li></ul><br><strong>Example Prompt:</strong> 'Futuristic city at night, glowing neon lights, flying cars, ultra-detailed, cinematic, 16:9 aspect ratio'"
  },
  {
    question: "Where can I find my generated images? Can I download them later?",
    answer: "All your generated images are saved in your <strong>User Center</strong>. You can:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Browse and review all your previous images</li><li>See the exact prompt used for each</li><li>Download any image to your device anytime</li></ul><br>🔒 We don't auto-delete your history, but we recommend downloading your favorites for safekeeping."
  },
  {
    question: "What can I do when I run out of credits?",
 answer: "Once your credits are used up, you can <strong>purchase a credit pack</strong> to continue generating images. <br>Visit the <strong>pricing</strong> section in 👉 <a href='/pricing' class='text-[#ec2657] hover:underline'>Imagen 4 Ultra Pricing</a> to view available packages and pricing.<br>"
  },
  {
    question: "Can I use the images commercially? What about copyright?",
    answer: "Yes — all images generated with AIMage4 are safe for <strong>commercial use</strong>. Our platform uses Google's Imagen 4 Ultra, which includes <strong>SynthID</strong> digital watermarking, ensuring your content is secure and traceable.<br><br>✅ <strong>Note:</strong> If your prompt includes copyrighted names or likenesses (e.g., brands, celebrities), those outputs may carry legal risks. We recommend using original or generic terms for business-related creations."
  }
];

// Track expanded state of each FAQ item
const openFaqs = ref(Array(faqs.length).fill(false));

// Toggle the expanded/collapsed state of FAQ item
const toggleFaq = (index: number) => {
  openFaqs.value[index] = !openFaqs.value[index];
};

const scrollToHero = () => {
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Format answer text with HTML
const formatAnswer = (answer: string) => {
  return answer;
};
</script>

<style scoped>
.prose {
  color: #555;
  line-height: 1.6;
}

.prose strong {
  color: #333;
  font-weight: 600;
}

.prose ul {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose li {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

.transition-all {
  transition-property: all;
}

.duration-200 {
  transition-duration: 200ms;
}
</style> 