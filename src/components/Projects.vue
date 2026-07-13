<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import { ExternalLink, Github } from 'lucide-vue-next'

const store = usePortfolioStore()
const hoveredProject = ref(null)
</script>

<template>
  <section id="projects" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background -->
    <div class="blob blob-pink w-[400px] h-[400px] top-1/4 -right-40 absolute opacity-10" />
    <div class="blob blob-purple w-[300px] h-[300px] bottom-40 -left-20 absolute opacity-8" />

    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          Projects
        </span>
        <h2 class="section-title text-slate-900 dark:text-white">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="section-subtitle">
          A selection of projects that showcase my skills and passion for building.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-8 sm:space-y-12">
        <div
          v-for="(project, index) in store.projects"
          :key="project.id"
          :class="[
            'group relative rounded-3xl overflow-hidden transition-all duration-700',
            'bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-purple-500/20',
            'hover:shadow-2xl hover:shadow-purple-500/10 shadow-sm',
          ]"
          @mouseenter="hoveredProject = project.id"
          @mouseleave="hoveredProject = null"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div :class="['grid lg:grid-cols-2 gap-0', index % 2 === 1 ? 'lg:direction-rtl' : '']">
            <!-- Project Image -->
            <div class="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
              <!-- Placeholder Visual -->
              <div class="absolute inset-0 bg-gradient-to-br from-purple-100 via-violet-100 to-slate-200 dark:from-purple-900/40 dark:via-violet-900/30 dark:to-slate-900/60 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                    <span class="text-3xl font-bold text-white font-['Space_Grotesk']">
                      {{ project.title.charAt(0) }}
                    </span>
                  </div>
                  <span class="text-sm font-medium text-slate-500 dark:text-slate-400">{{ project.title }}</span>
                </div>
              </div>
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent dark:from-[#0F172A] opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            <!-- Project Info -->
            <div class="p-8 sm:p-10 flex flex-col justify-center" :class="index % 2 === 1 ? 'lg:order-first' : ''">
              <!-- Project Number -->
              <span class="text-xs font-mono text-purple-600 dark:text-purple-500/50 mb-3 tracking-widest">
                PROJECT {{ String(index + 1).padStart(2, '0') }}
              </span>

              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-['Space_Grotesk'] mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                {{ project.title }}
              </h3>

              <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 rounded-lg text-xs font-medium bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/15 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors duration-200"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-4">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-purple-500/30 hover:bg-slate-200 dark:hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Github :size="16" />
                  Source Code
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ExternalLink :size="16" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style="background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.06), transparent 40%);" />
        </div>
      </div>
    </div>
  </section>
</template>
