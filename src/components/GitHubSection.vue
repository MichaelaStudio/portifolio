<script setup>
import { Github, GitFork, Star, GitCommit, Code2 } from 'lucide-vue-next'

const stats = [
  { label: 'Repositories', value: '29', icon: Code2 },
  { label: 'Commits', value: '500+', icon: GitCommit },
  { label: 'Stars Earned', value: '20+', icon: Star },
  { label: 'Contributions', value: '200+', icon: GitFork },
]

const languages = [
  { name: 'JavaScript', percentage: 38, color: '#f7df1e' },
  { name: 'Vue', percentage: 25, color: '#42b883' },
  { name: 'Python', percentage: 18, color: '#3776ab' },
  { name: 'HTML/CSS', percentage: 12, color: '#e44d26' },
  { name: 'Other', percentage: 7, color: '#8b5cf6' },
]

const pinnedRepos = [
  { name: 'habesha-market', description: 'E-commerce platform for Ethiopian products', language: 'Vue', stars: 8, forks: 3 },
  { name: 'eventhub', description: 'Event management platform', language: 'React', stars: 5, forks: 2 },
  { name: 'portfolio-v3', description: 'Personal portfolio website', language: 'Vue', stars: 12, forks: 4 },
  { name: 'ai-chatbot', description: 'AI-powered chatbot', language: 'Python', stars: 6, forks: 1 },
]

// Contribution graph data (simulated)
const weeks = 52
const days = 7
const contributionData = Array.from({ length: weeks }, () =>
  Array.from({ length: days }, () => Math.floor(Math.random() * 5))
)

function getContributionColor(level) {
  const colors = [
    'bg-slate-200 dark:bg-white/[0.03]',
    'bg-purple-300 dark:bg-purple-900/40',
    'bg-purple-400 dark:bg-purple-700/50',
    'bg-purple-500 dark:bg-purple-500/60',
    'bg-purple-600 dark:bg-purple-400/80',
  ]
  return colors[level] || colors[0]
}

const langColors = {
  Vue: '#42b883',
  React: '#61dafb',
  Python: '#3776ab',
  JavaScript: '#f7df1e',
}
</script>

<template>
  <section id="github" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background -->
    <div class="blob blob-blue w-[350px] h-[350px] top-1/3 -right-20 absolute opacity-10" />

    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          GitHub
        </span>
        <h2 class="section-title text-slate-900 dark:text-white">
          Open Source <span class="gradient-text">Activity</span>
        </h2>
        <p class="section-subtitle">
          My contributions and coding activity on GitHub.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12" data-aos="fade-up" data-aos-delay="100">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-purple-500/20 dark:hover:bg-purple-500/5 transition-all duration-300 text-center shadow-sm"
        >
          <component :is="stat.icon" :size="24" class="mx-auto mb-3 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          <div class="text-2xl sm:text-3xl font-bold gradient-text font-['Space_Grotesk'] mb-1">{{ stat.value }}</div>
          <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-500">{{ stat.label }}</div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Contribution Graph -->
        <div class="lg:col-span-2 glass p-6 sm:p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="150">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2 font-['Space_Grotesk']">
              <Github :size="20" class="text-purple-600 dark:text-purple-400" />
              Contribution Graph
            </h3>
            <a href="https://github.com/michaelastudio" target="_blank" class="text-sm text-purple-600 dark:text-purple-400 hover:underline">@michaelastudio</a>
          </div>
          
          <div class="overflow-x-auto pb-2">
            <div class="flex gap-[3px] min-w-[700px]">
              <div v-for="(week, wi) in contributionData" :key="wi" class="flex flex-col gap-[3px]">
                <div
                  v-for="(day, di) in week"
                  :key="di"
                  :class="['w-[11px] h-[11px] rounded-sm transition-all duration-200 hover:scale-150 hover:ring-1 hover:ring-purple-400/30', getContributionColor(day)]"
                  :title="`${day} contributions`"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 mt-4">
            <span class="text-xs text-slate-500 dark:text-slate-600">Less</span>
            <div v-for="i in 5" :key="i" :class="['w-[11px] h-[11px] rounded-sm', getContributionColor(i - 1)]" />
            <span class="text-xs text-slate-500 dark:text-slate-600">More</span>
          </div>
        </div>

        <!-- Most Used Languages -->
        <div class="glass p-6 sm:p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2 font-['Space_Grotesk']">
            <Code2 :size="20" class="text-purple-600 dark:text-purple-400" />
            Top Languages
          </h3>

          <!-- Language Bar -->
          <div class="h-3 rounded-full overflow-hidden flex mb-6">
            <div
              v-for="lang in languages"
              :key="lang.name"
              :style="{ width: lang.percentage + '%', backgroundColor: lang.color }"
              class="transition-all duration-500 first:rounded-l-full last:rounded-r-full"
            />
          </div>

          <!-- Language List -->
          <div class="space-y-3">
            <div
              v-for="lang in languages"
              :key="lang.name"
              class="flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: lang.color }" />
                <span class="text-sm text-slate-700 dark:text-slate-300">{{ lang.name }}</span>
              </div>
              <span class="text-sm font-medium text-slate-500">{{ lang.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pinned Repositories -->
      <div class="mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="250">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2 font-['Space_Grotesk']">
          <Github :size="20" class="text-purple-600 dark:text-purple-400" />
          Pinned Repositories
        </h3>
        
        <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <a
            v-for="repo in pinnedRepos"
            :key="repo.name"
            :href="`https://github.com/MichaelaStudio/${repo.name}`"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-purple-500/20 dark:hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1 shadow-sm"
          >
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-center gap-2">
                <Github :size="16" class="text-slate-500" />
                <span class="text-sm font-semibold text-purple-600 dark:text-purple-300 group-hover:text-purple-500 transition-colors">{{ repo.name }}</span>
              </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-500 mb-4 leading-relaxed">{{ repo.description }}</p>
            <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-600">
              <span class="flex items-center gap-1">
                <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: langColors[repo.language] || '#8b5cf6' }" />
                {{ repo.language }}
              </span>
              <span class="flex items-center gap-1">
                <Star :size="12" />
                {{ repo.stars }}
              </span>
              <span class="flex items-center gap-1">
                <GitFork :size="12" />
                {{ repo.forks }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
