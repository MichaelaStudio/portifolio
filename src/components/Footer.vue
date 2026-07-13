<script setup>
import { ref } from 'vue'
import { Github, Linkedin, Mail, MessageSquare, ArrowUp, Heart } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socials = [
  { icon: Github, href: 'https://github.com/MichaelaStudio', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/michaela-masresha', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:michaelamasresha@gmail.com', label: 'Email' },
  { icon: MessageSquare, href: 'https://t.me/michaelamasresha', label: 'Telegram' },
]

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <footer class="relative pt-16 pb-8 overflow-hidden border-t border-white/5">
    <!-- Gradient Line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

    <!-- Background Subtle -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />

    <div class="container-custom relative z-10">
      <!-- Top Section -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center font-bold text-white text-lg font-['Space_Grotesk'] shadow-lg shadow-purple-500/25">
              M
            </div>
            <span class="text-xl font-bold font-['Space_Grotesk'] gradient-text">Michaela Masresha</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-500 leading-relaxed max-w-xs">
            CS Student building modern digital experiences.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3 mt-6">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4 font-['Space_Grotesk']">Quick Links</h4>
          <nav class="grid grid-cols-2 gap-2">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              @click.prevent="scrollToSection(link.href)"
              class="text-sm text-slate-600 dark:text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 py-1"
            >
              {{ link.name }}
            </a>
          </nav>
        </div>

        <!-- Availability Card -->
        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4 font-['Space_Grotesk']">Currently</h4>
          <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-500/5 border border-purple-100 dark:border-purple-500/15 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span class="text-sm text-slate-600 dark:text-slate-400">Open to internships</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span class="text-sm text-slate-600 dark:text-slate-400">Studying CS @ DBU</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
              <span class="text-sm text-slate-600 dark:text-slate-400">Building side projects</span>
            </div>

            <a
              href="mailto:michaelamasresha@gmail.com"
              class="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail :size="15" />
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/5 mb-8" />

      <!-- Bottom Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slate-600 flex items-center gap-1.5">
          © {{ currentYear }} Michaela Masresha. Made with
          <Heart :size="14" class="text-pink-500 fill-pink-500" />
          and clean code.
        </p>

        <!-- Back to Top -->
        <button
          @click="scrollToTop"
          class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300"
        >
          <ArrowUp :size="14" class="group-hover:-translate-y-0.5 transition-transform duration-300" />
          Back to top
        </button>
      </div>
    </div>
  </footer>
</template>
