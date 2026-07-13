<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ArrowDown, ExternalLink, Download } from 'lucide-vue-next'
import heroImage from '../assets/hero.png'

const heroRef = ref(null)
const typedText = ref('')
const roles = ['Full-Stack Developer', 'Problem Solver']
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout = null

function typeEffect() {
  const currentRole = roles[roleIndex]
  
  if (!isDeleting) {
    typedText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
    
    if (charIndex === currentRole.length) {
      isDeleting = true
      typingTimeout = setTimeout(typeEffect, 2000)
      return
    }
  } else {
    typedText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
    
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  
  typingTimeout = setTimeout(typeEffect, isDeleting ? 40 : 80)
}

onMounted(() => {
  typeEffect()

  // GSAP entrance animation
  const tl = gsap.timeline({ delay: 0.3 })
  
  tl.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 0.9,
    ease: 'power3.out',
  })
  .from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power3.out',
  }, '-=0.5')
  .from('.hero-typed', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero-description', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.3')
  .from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power3.out',
  }, '-=0.3')
  .from('.hero-visual', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.6')
  .from('.hero-stats', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.scroll-indicator', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power3.out',
  }, '-=0.2')

  // Floating blobs animation
  gsap.to('.hero-blob-1', {
    x: 50,
    y: -30,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  gsap.to('.hero-blob-2', {
    x: -40,
    y: 40,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  gsap.to('.hero-blob-3', {
    x: 30,
    y: 50,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
})
</script>

<template>
  <section
    id="home"
    ref="heroRef"
    class="relative min-h-screen flex items-center overflow-hidden pt-32 lg:pt-40"
  >
    <!-- Background Blobs -->
    <div class="hero-blob-1 blob blob-purple w-[500px] h-[500px] -top-20 -left-40 absolute" />
    <div class="hero-blob-2 blob blob-blue w-[400px] h-[400px] top-1/3 -right-20 absolute" />
    <div class="hero-blob-3 blob blob-pink w-[300px] h-[300px] bottom-20 left-1/3 absolute" />

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;" />

    <div class="container-custom relative z-10 pb-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left Content -->
        <div class="flex flex-col gap-6 lg:gap-8">
          <!-- Title -->
          <div>
            <h1 class="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-['Space_Grotesk'] leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Hi, I'm
              <span class="gradient-text-glow block mt-2">Michaela</span>
              <span class="gradient-text-glow block">Masresha</span>
            </h1>
          </div>

          <!-- Subtitle -->
          <p class="hero-subtitle !text-left !m-0 !max-w-none text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
            Computer Science Student
          </p>

          <!-- Typed Role -->
          <div class="hero-typed flex items-center gap-2">
            <span class="w-1 h-6 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full" />
            <span class="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white font-['Space_Grotesk']">
              {{ typedText }}<span class="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          <!-- Description -->
          <p class="hero-description text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Building elegant, functional digital experiences with clean code.
          </p>

          <!-- CTA Buttons -->
          <div class="hero-buttons flex flex-wrap gap-4">
            <a href="#projects" class="btn-primary" @click.prevent="$el.closest('section') && document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })">
              <span>View Projects</span>
              <ExternalLink :size="18" />
            </a>
            <a href="#" class="btn-outline">
              <Download :size="18" />
              <span>Download CV</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="hero-stats flex gap-8 pt-4">
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold gradient-text font-['Space_Grotesk']">3+</div>
              <div class="text-xs sm:text-sm text-slate-500 mt-1">Projects</div>
            </div>
            <div class="w-px bg-slate-300 dark:bg-slate-700" />
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold gradient-text font-['Space_Grotesk']">2+</div>
              <div class="text-xs sm:text-sm text-slate-500 mt-1">Years Coding</div>
            </div>
          </div>
        </div>

        <!-- Right Visual (Animated Image) -->
        <div class="hero-visual hidden lg:flex justify-center items-center relative">
          <!-- Decorative Rings -->
          <div class="absolute w-[420px] h-[420px] rounded-full border border-purple-500/30 animate-[spin-slow_30s_linear_infinite]" />
          <div class="absolute w-[340px] h-[340px] rounded-full border border-violet-500/30 animate-[spin-slow_25s_linear_infinite_reverse]" />
          
          <!-- Animated Abstract Blobs with Image -->
          <div class="relative w-[300px] h-[300px] flex items-center justify-center hover:scale-105 transition-transform duration-500">
            <!-- Spinning Blobs -->
            <div class="absolute w-64 h-64 bg-gradient-to-tr from-purple-500 to-violet-500 rounded-3xl rotate-12 animate-[spin_10s_linear_infinite] opacity-60 mix-blend-multiply dark:mix-blend-screen blur-lg" />
            <div class="absolute w-64 h-64 bg-gradient-to-bl from-blue-500 to-cyan-500 rounded-full -rotate-12 animate-[spin_12s_linear_infinite_reverse] opacity-60 mix-blend-multiply dark:mix-blend-screen blur-lg" />
            
            <!-- Hero Image inside the animation -->
            <div class="relative z-10 w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-white/80 dark:border-white/20 shadow-2xl bg-slate-100 dark:bg-slate-800">
              <img 
                :src="heroImage" 
                alt="Michaela Masresha" 
                class="w-full h-full object-cover"
                @error="$event.target.src='https://ui-avatars.com/api/?name=Michaela+Masresha&background=8B5CF6&color=fff&size=300'"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown :size="16" class="animate-bounce" />
      </div>
    </div>
  </section>
</template>
