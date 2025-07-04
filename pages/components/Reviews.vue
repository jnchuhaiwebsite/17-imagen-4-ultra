<template>
  <section class="py-24 bg-blue-pale" aria-labelledby="testimonials-title">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 id="testimonials-title" class="text-3xl font-extrabold text-white sm:text-4xl">
          What Our Users Say About Imagen 4 Ultra
        </h2>
        <p class="mt-4 text-lg text-gray-300">
          Discover how professionals are leveraging Imagen 4 Ultra's advanced AI capabilities to create stunning visuals with precision and ease.
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="review in reviews" 
          :key="review.author" 
          class="bg-gray-800 rounded-lg p-8 shadow-xl"
          itemscope 
          itemtype="https://schema.org/Review"
        >
          <div class="mb-6">
            <h3 class="text-lg font-bold text-white">
              <span itemprop="author">{{ review.author }}</span> - 
              <span itemprop="author" itemscope itemtype="https://schema.org/Person">
                <span itemprop="jobTitle">{{ review.title }}</span>
              </span>
            </h3>
            <p class="text-gray-400" itemprop="locationCreated">{{ review.location }}</p>
            <div class="flex items-center mt-2" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
              <meta itemprop="ratingValue" :content="review.rating" />
              <meta itemprop="bestRating" content="5" />
              <span class="text-yellow-400" aria-label="5 out of 5 stars">★★★★★</span>
            </div>
          </div>
          <p class="text-gray-300" itemprop="reviewBody">{{ review.content }}</p>
        </div>
      </div>
<!-- 
      <div class="text-center mt-16">
        <button
          @click="scrollToHero"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ec2657] to-[#ec2657] hover:from-[#ec2657]/90 hover:to-[#ec2657]/80 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
          aria-label="Start creating with Imagen 4 Ultra"
        >
          Start Creating Today
          <svg 
            class="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToHero = () => {
  const heroSection = document.getElementById('prompt-image-generator');
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const reviews = [
  {
    author: "Emily Anderson",
    title: "Digital Artist",
    location: "San Francisco, CA",
    content: "Imagen 4 Ultra's aspect ratio flexibility is a game-changer! I can seamlessly create content for any platform - from Instagram squares to YouTube thumbnails. The AI consistently delivers professional-quality results that exceed my expectations.",
    rating: 5
  },
  {
    author: "James Miller",
    title: "Creative Director",
    location: "New York City, NY",
    content: "The advanced person generation controls are incredibly sophisticated. I can create exactly the right imagery for our brand campaigns while maintaining full control over content appropriateness. The English prompt system is remarkably intuitive.",
    rating: 5
  },
  {
    author: "Sarah Thompson",
    title: "Marketing Strategist",
    location: "Austin, TX",
    content: "What sets Imagen 4 Ultra apart is its precision. The English prompts translate perfectly into visuals, and the customizable formats make it our go-to tool for cross-platform campaigns. It's revolutionized our content creation process.",
    rating: 5
  }
];
</script> 