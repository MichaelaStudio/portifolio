import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  const isDarkMode = ref(true)
  const activeSection = ref('home')
  const isNavOpen = ref(false)
  const isModalOpen = ref(false)
  const modalContent = ref(null)

  // Initialize dark mode on body
  if (typeof document !== 'undefined') {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    }
  }

  const projects = ref([
    {
      id: 1,
      title: 'Habesha Market',
      description: 'A modern e-commerce platform celebrating Ethiopian culture and heritage. Features product browsing, cart management, secure checkout, and a beautiful responsive design with traditional Ethiopian aesthetics.',
      image: '/projects/habesha-market.svg',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express'],
      github: 'https://github.com/MichaelaStudio/habesha-market',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'EventHub',
      description: 'A comprehensive event management and discovery platform. Users can create, browse, and RSVP to events. Includes real-time notifications, interactive maps, and social features for community engagement.',
      image: '/projects/eventhub.svg',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Google Maps API'],
      github: 'https://github.com/MichaelaStudio/eventhub',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This premium portfolio website built with Vue 3, featuring GSAP animations, glassmorphism design, and a dark luxury theme. Showcases projects, skills, and professional experience.',
      image: '/projects/portfolio.svg',
      technologies: ['Vue 3', 'Vite', 'GSAP', 'Tailwind CSS', 'Pinia'],
      github: 'https://github.com/MichaelaStudio/portfolio',
      demo: '#',
      featured: true,
    },
  ])



  const skills = ref([
    { name: 'Vue.js', icon: 'vue', level: 90, category: 'frontend' },
    { name: 'React', icon: 'react', level: 85, category: 'frontend' },
    { name: 'JavaScript', icon: 'js', level: 92, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', level: 88, category: 'frontend' },
    { name: 'HTML/CSS', icon: 'html', level: 95, category: 'frontend' },
    { name: 'Node.js', icon: 'nodejs', level: 82, category: 'backend' },
    { name: 'Python', icon: 'python', level: 80, category: 'backend' },
    { name: 'MongoDB', icon: 'mongodb', level: 78, category: 'backend' },
    { name: 'Express.js', icon: 'express', level: 80, category: 'backend' },
    { name: 'Git', icon: 'git', level: 88, category: 'tools' },
    { name: 'GitHub', icon: 'github', level: 90, category: 'tools' },
    { name: 'Figma', icon: 'figma', level: 75, category: 'tools' },
  ])

  const socialLinks = ref({
    github: 'https://github.com/MichaelaStudio',
    linkedin: 'https://linkedin.com/in/michaela-masresha',
    telegram: 'https://t.me/michaelamasresha',
    email: 'michaelamasresha@gmail.com',
  })

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function setActiveSection(section) {
    activeSection.value = section
  }

  function toggleNav() {
    isNavOpen.value = !isNavOpen.value
  }

  function closeNav() {
    isNavOpen.value = false
  }

  function openModal(content) {
    modalContent.value = content
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
    modalContent.value = null
  }

  return {
    isDarkMode,
    activeSection,
    isNavOpen,
    isModalOpen,
    modalContent,
    projects,
    skills,
    socialLinks,
    toggleDarkMode,
    setActiveSection,
    toggleNav,
    closeNav,
    openModal,
    closeModal,
  }
})
