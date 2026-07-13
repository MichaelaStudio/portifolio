<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import { Menu, X, Moon, Sun } from 'lucide-vue-next'

const store = usePortfolioStore()
const isScrolled = ref(false)
const activeLink = ref('home')

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = ['home', 'about', 'skills', 'projects', 'contact']
  for (const section of sections.reverse()) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150) {
        activeLink.value = section
        break
      }
    }
  }
}

function scrollToSection(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  store.closeNav()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'py-3 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-purple-500/10 shadow-lg'
        : 'py-5 bg-transparent',
    ]"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#home"
        @click.prevent="scrollToSection('#home')"
        class="relative group flex items-center gap-2"
      >
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center font-bold text-white text-lg font-['Space_Grotesk'] shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
          M
        </div>
        <span class="text-xl font-bold font-['Space_Grotesk'] text-slate-900 dark:text-white hidden sm:block">
          <span class="gradient-text">Michaela</span>
        </span>
      </a>

      <!-- Desktop Navigation & Theme Toggle -->
      <div class="hidden lg:flex items-center gap-6">
        <!-- Navigation Links -->
        <div class="flex items-center gap-1 bg-slate-100/50 dark:bg-white/[0.02] p-1 rounded-xl border border-slate-200/50 dark:border-white/5">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            :class="[
              'relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group',
              activeLink === link.href.replace('#', '')
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
            ]"
          >
            {{ link.name }}
            <!-- Active/Hover underline -->
            <span
              :class="[
                'absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-violet-400 transition-all duration-300',
                activeLink === link.href.replace('#', '')
                  ? 'w-6'
                  : 'w-0 group-hover:w-6',
              ]"
            />
          </a>
        </div>

        <!-- Dark Mode Toggle -->
        <button
          @click="store.toggleDarkMode"
          class="ml-8 p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300"
          title="Toggle Theme"
        >
          <Sun v-if="!store.isDarkMode" :size="18" />
          <Moon v-else :size="18" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="store.toggleNav"
        class="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
      >
        <X v-if="store.isNavOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-400 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="store.isNavOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-purple-500/10 shadow-2xl"
      >
        <div class="container-custom py-6 flex flex-col gap-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            :class="[
              'px-4 py-3 rounded-xl text-base font-medium transition-all duration-300',
              activeLink === link.href.replace('#', '')
                ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5',
            ]"
          >
            {{ link.name }}
          </a>
          <button
            @click="store.toggleDarkMode"
            class="mt-2 px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <Moon :size="18" />
            Toggle Theme
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>
