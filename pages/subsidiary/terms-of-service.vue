<template>
  <div class="min-h-screen bg-blue-pale">
    <div class="max-w-4xl mx-auto px-4 py-12">
      <div class="mb-6">
        <NuxtLink to="/" class="flex items-center text-gray-400 hover:text-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </NuxtLink>
      </div>

      <h1 class="text-3xl font-bold mb-8 text-white">Terms of Service</h1>
      <p class="text-gray-300 mb-8">Effective Date: July 4, 2025</p>
      
      <div class="space-y-6 text-white">
        <section>
          <h2 class="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using Imagen 4 Ultra's image generation services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our service.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">2. Service Description</h2>
          <p>Imagen 4 Ultra provides AI-powered image generation services, including:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Text-to-image generation (available in both Normal and Ultra models)</li>
            <li>Generation of 1K resolution images</li>
            <li>Support for image uploads in JPG/JPEG/PNG formats (max 10MB)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>Users must:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Upload only appropriate and legal content</li>
            <li>Maintain the security of their account</li>
            <li>Comply with file format and size restrictions</li>
            <li>Process one image at a time for generation</li>
            <li>Not attempt to circumvent system limitations</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">4. Intellectual Property Rights</h2>
          <p>Users retain rights to their uploaded content. However, you grant Imagen 4 Ultra a license to use, process, and store your content for service provision. Generated images are subject to our fair use policy.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">5. Service Limitations</h2>
          <ul class="list-disc pl-6 mt-2">
            <li>One image generation per request</li>
            <li>Supported aspect ratios: 1:1 (1024x1024), 3:4 (896x1280), 4:3 (1280x896), 9:16 (768x1408), 16:9 (1408x768)</li>
            <li>Supported language: English</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">6. Prohibited Content</h2>
          <p>Users may not generate:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Illegal or harmful content</li>
            <li>Copyright-infringing materials</li>
            <li>Adult or explicit content</li>
            <li>Content that violates third-party rights</li>
            <li>Content that bypasses safety settings</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">7. Service Modifications</h2>
          <p>We reserve the right to modify or discontinue any aspect of our service at any time. We will provide reasonable notice of substantial changes.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at: support@aimagen4.com</p>
        </section>

        <section class="mt-8">
          <p class="text-sm">Last updated: July 4, 2025</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// @ts-ignore: Nuxt宏函数
definePageMeta({
  layout: false,
  name: 'terms-of-service'
})

useSeo({
  title: 'Imagen 4 Ultra AI | Terms of Service',
  description: 'Read our terms of service for using Imagen 4 Ultra AI - the leading AI image generation platform powered by advanced AI technology.'
})
</script>

<style>
body {
  background-color: #111827; /* bg-blue-pale */
  color: #F3F4F6; /* text-gray-100 */
}
</style> 
