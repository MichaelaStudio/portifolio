<script setup>
import { ref, reactive } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import { Mail, Linkedin, Github, Send, MessageSquare, MapPin, CheckCircle } from 'lucide-vue-next'

const store = usePortfolioStore()
const isSubmitting = ref(false)
const submitStatus = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return
  isSubmitting.value = true

  await new Promise(resolve => setTimeout(resolve, 1500))

  submitStatus.value = 'success'
  isSubmitting.value = false
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''

  setTimeout(() => { submitStatus.value = null }, 5000)
}

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'michaelamasresha@gmail.com',
    href: 'mailto:michaelamasresha@gmail.com',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50 dark:bg-rose-500/10',
    border: 'border-rose-100 dark:border-rose-500/20',
    text: 'text-rose-600 dark:text-rose-300',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/michaela-masresha',
    href: 'https://linkedin.com/in/michaela-masresha',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-100 dark:border-blue-500/20',
    text: 'text-blue-600 dark:text-blue-300',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'MichaelaStudio',
    href: 'https://github.com/MichaelaStudio',
    color: 'from-slate-400 to-slate-300',
    bg: 'bg-slate-100 dark:bg-white/5',
    border: 'border-slate-200 dark:border-white/10',
    text: 'text-slate-600 dark:text-slate-300',
  },
  {
    icon: MessageSquare,
    label: 'Telegram',
    value: '@michaelamasresha',
    href: 'https://t.me/michaelamasresha',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-50 dark:bg-sky-500/10',
    border: 'border-sky-100 dark:border-sky-500/20',
    text: 'text-sky-600 dark:text-sky-300',
  },
]
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background Blobs -->
    <div class="blob blob-purple w-[400px] h-[400px] top-0 -left-40 absolute opacity-10" />
    <div class="blob blob-blue w-[300px] h-[300px] bottom-20 -right-20 absolute opacity-8" />

    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          Contact
        </span>
        <h2 class="section-title text-slate-900 dark:text-white">
          Let's <span class="gradient-text">Work Together</span>
        </h2>
        <p class="section-subtitle">
          Have an idea or opportunity? Send me a message!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        <!-- Left: Contact Info -->
        <div class="space-y-6" data-aos="fade-right" data-aos-delay="100">
          <div class="glass p-8 rounded-3xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 mb-8">
              <span class="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
              <span class="text-sm font-medium text-green-700 dark:text-green-400">Available to hire</span>
            </div>

            <h3 class="text-2xl font-bold text-slate-900 dark:text-white font-['Space_Grotesk'] mb-3">
              Get in Touch
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I'm open to internships, junior roles, or exciting side projects. My inbox is always open!
            </p>

            <!-- Location -->
            <div class="flex items-center gap-3 mb-8 text-slate-600 dark:text-slate-400">
              <MapPin :size="18" class="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span>Debre Berhan, Ethiopia</span>
            </div>

            <!-- Contact Links -->
            <div class="space-y-3">
              <a
                v-for="contact in contacts"
                :key="contact.label"
                :href="contact.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-0.5',
                  contact.bg, contact.border,
                  'hover:shadow-lg',
                ]"
              >
                <div :class="['w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300', contact.color]">
                  <component :is="contact.icon" :size="18" />
                </div>
                <div class="overflow-hidden">
                  <div class="text-xs font-medium text-slate-500 mb-0.5">{{ contact.label }}</div>
                  <div :class="['text-sm font-medium truncate transition-colors duration-300', contact.text]">
                    {{ contact.value }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div data-aos="fade-left" data-aos-delay="150">
          <div class="glass p-8 rounded-3xl">
            <!-- Success Message -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="opacity-0 -translate-y-4"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div
                v-if="submitStatus === 'success'"
                class="mb-6 p-4 rounded-2xl bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center gap-3"
              >
                <CheckCircle :size="20" class="text-green-600 dark:text-green-400 flex-shrink-0" />
                <span class="text-sm text-green-700 dark:text-green-300">Message sent!</span>
              </div>
            </transition>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-['Space_Grotesk'] mb-6">Send a Message</h3>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary justify-center relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center gap-2 relative z-10">
                  <Send :size="18" />
                  Send
                </span>
                <span v-else class="flex items-center gap-2 relative z-10">
                  <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
