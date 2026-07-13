<script setup>
import { GraduationCap, Heart, Code2, Shield, Brain, Globe } from 'lucide-vue-next'

const passions = [
  { icon: Code2, label: 'Frontend Development', color: 'from-purple-500 to-violet-500' },
  { icon: Globe, label: 'Backend Development', color: 'from-blue-500 to-cyan-500' },
  { icon: Brain, label: 'AI', color: 'from-amber-500 to-orange-500' },
  { icon: Shield, label: 'Cybersecurity', color: 'from-emerald-500 to-green-500' },
]

const techBadges = [
  { name: 'Vue', color: '#42b883' },
  { name: 'React', color: '#61dafb' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Python', color: '#3776ab' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'GitHub', color: '#e5e7eb' },
]
</script>

<template>
  <section id="about" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background Blobs -->
    <div class="blob blob-purple w-[400px] h-[400px] top-20 -right-40 absolute opacity-10" />
    
    <div class="container-custom relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
          About Me
        </span>
        <h2 class="section-title text-slate-900 dark:text-white">
          Get to <span class="gradient-text">Know Me</span>
        </h2>
        <p class="section-subtitle">
          CS student building the future one line of code at a time.
        </p>
      </div>

      <!-- About Card -->
      <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div class="glass relative p-8 sm:p-12 rounded-3xl overflow-hidden">
          <!-- Gradient Top Border -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-400" />

          <!-- Profile Image & Content -->
          <div class="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <!-- Profile Image -->
            <div class="relative flex-shrink-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-500/30 shadow-2xl bg-slate-100 dark:bg-slate-800 hover:-translate-y-2 hover:rotate-2 transition-transform duration-500">
                <img 
                  :src="'/profile.jpg'" 
                  alt="Michaela Masresha" 
                  class="w-full h-full object-cover"
                  @error="$event.target.src='https://ui-avatars.com/api/?name=Michaela+Masresha&background=8B5CF6&color=fff&size=200'"
                />
              </div>
              <!-- Decorative dots -->
              <div class="absolute -bottom-3 -right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 opacity-60" />
              <div class="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 opacity-40" />
            </div>

            <!-- Text Content -->
            <div class="flex-1 text-center lg:text-left">
              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-['Space_Grotesk'] mb-4">
                Michaela Masresha
              </h3>
              <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                  <GraduationCap :size="14" />
                  CS Student
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                  <Code2 :size="14" />
                  Developer
                </span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I'm a Computer Science student at <span class="font-semibold text-purple-600 dark:text-purple-300">Debre Berhan University</span>. I enjoy crafting frontend interfaces and engineering robust backend systems.
              </p>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                I am constantly learning, building, and pushing myself to grow as a problem solver and tech enthusiast.
              </p>
            </div>
          </div>

          <!-- Passions -->
          <div class="mt-10 pt-8 border-t border-slate-200 dark:border-white/5">
            <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Heart :size="18" class="text-pink-500 dark:text-pink-400" />
              Interests
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="passion in passions"
                :key="passion.label"
                class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-purple-500/20 dark:hover:bg-purple-500/5 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div :class="['w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300', passion.color]">
                  <component :is="passion.icon" :size="20" />
                </div>
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{{ passion.label }}</span>
              </div>
            </div>
          </div>

          <!-- Tech Badges -->
          <div class="mt-8 pt-8 border-t border-slate-200 dark:border-white/5">
            <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-6">Tech Stack</h4>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tech, index) in techBadges"
                :key="tech.name"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-purple-500/30 dark:hover:bg-purple-500/5 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-default"
                data-aos="fade-up"
                :data-aos-delay="index * 50"
              >
                <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: tech.color }" />
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
