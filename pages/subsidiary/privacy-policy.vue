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
      
      <h1 class="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
      <p class="text-gray-300 mb-8">Effective Date: July 4, 2025</p>
      
      <div class="space-y-6 text-white">
        <section>
          <h2 class="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>Welcome to Imagen 4 Ultra. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered image generation service.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul class="list-disc pl-6 mt-2">
            <li><strong>Account Information:</strong> Email, password, and profile details when you register.</li>
            <li><strong>User Content:</strong> Text prompts and uploaded images you provide for image generation.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our service, including generation parameters, device information, and IP address.</li>
            <li><strong>Payment Information:</strong> Credit card details and billing information if you subscribe to premium features.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Provide and improve our image generation services</li>
            <li>Process your requests and transactions</li>
            <li>Train and improve our AI models</li>
            <li>Send service notifications and updates</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Enforce our terms of service and prevent prohibited use</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">4. Data Retention</h2>
          <p>We retain your account information as long as your account is active. Generated images are stored for 30 days unless you choose to save them to your personal gallery. Text prompts may be retained for service improvement purposes but will be anonymized after 90 days.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">5. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Service providers who help us operate our platform</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties in connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Access personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Export your data in a portable format</li>
            <li>Opt out of certain processing activities</li>
          </ul>
          <p class="mt-2">To exercise these rights, please contact us at support@aimagen4.com.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">7. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">8. Children's Privacy</h2>
          <p>Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes through our website or email.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: support@aimagen4.com</p>
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
  name: 'privacy-policy'
})

useSeo({
  title: 'Imagen 4 Ultra AI | Privacy Policy',
  description: 'Read our privacy policy for using Imagen 4 Ultra AI - the leading AI image generation platform powered by advanced AI technology.'
})
</script>

<style>
body {
  background-color: #111827; /* bg-blue-pale */
  color: #F3F4F6; /* text-gray-100 */
}
</style> 
