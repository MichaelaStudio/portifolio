<script setup>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'
import { Code2, Server, Wrench } from 'lucide-vue-next'

const store = usePortfolioStore()
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Skills', icon: null },
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'tools', label: 'Tools', icon: Wrench },
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return store.skills
  return store.skills.filter(skill => skill.category === activeCategory.value)
})

function getCategoryColor(category) {
  const colors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-emerald-500 to-green-500',
    tools: 'from-orange-500 to-red-500',
  }
  return colors[category] || 'from-purple-500 to-violet-500'
}
</script>

<template>
  <section id="skills" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background -->
    <div class="blob blob-blue w-[400px] h-[400px] top-1/4 -left-40 absolute opacity-10" />

    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          Skills & Tech
        </span>
        <h2 class="section-title text-slate-900 dark:text-white">
          Technical <span class="gradient-text">Expertise</span>
        </h2>
        <p class="section-subtitle">
          Technologies and tools I use to build robust solutions.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          :class="[
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300',
            activeCategory === cat.id
              ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-purple-500/30 dark:hover:text-white',
          ]"
        >
          <span class="flex items-center gap-2">
            <component :is="cat.icon" v-if="cat.icon" :size="16" />
            {{ cat.label }}
          </span>
        </button>
      </div>

      <!-- Skills Grid -->
      <transition-group
        name="staggered-fade"
        tag="div"
        class="flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.name"
          class="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-purple-500/25 dark:hover:bg-purple-500/5 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-2 cursor-default shadow-sm"
          :data-aos="activeCategory === 'all' ? 'fade-up' : ''"
          :data-aos-delay="activeCategory === 'all' ? index * 50 : 0"
          :title="skill.name"
        >
          <!-- Skill Icon -->
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative z-10">
            <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" :alt="skill.name" class="w-full h-full object-contain drop-shadow-md" />
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(100px circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%);" />
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.staggered-fade-move,
.staggered-fade-enter-active,
.staggered-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.staggered-fade-leave-active {
  position: absolute;
}
</style>
