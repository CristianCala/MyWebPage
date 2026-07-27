import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const DOMAIN = 'https://cristianabsoluto.com'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Cristian Cala · Fullstack Developer',
                description:
                    'Cristian Cala — Desarrollador Fullstack. Construyo plataformas de principio a fin: backend, frontend y DevOps.',
                robots: 'index, follow',
            },
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/views/BlogView.vue'),
            meta: {
                title: 'Blog · Cristian Cala',
                description: 'Notas técnicas y aprendizajes de Cristian Cala. Sección en construcción.',
                robots: 'noindex, follow',
            },
        },
        {
            path: '/componentes',
            name: 'componentes',
            component: () => import('@/views/ComponentsView.vue'),
            meta: {
                title: 'Componentes · Cristian Cala',
                description: 'Librerías y componentes de código abierto construidos y mantenidos por Cristian Cala.',
                robots: 'index, follow',
            },
        },
        {
            path: '/componentes/vue-gantt-absolute',
            name: 'vue-gantt-absolute',
            component: () => import('@/views/VueGanttAbsoluteView.vue'),
            meta: {
                title: 'Vue Gantt Absolute · Cristian Cala',
                description: 'Librería de diagrama de Gantt libre (MIT) para Vue 3 con Composition API — documentación y playground.',
                robots: 'index, follow',
            },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0 }
    },
})

function setMeta(attr, key, content) {
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
    }
    el.setAttribute('content', content)
}

router.afterEach((to) => {
    const { title, description, robots } = to.meta

    if (title) {
        document.title = title
        setMeta('property', 'og:title', title)
        setMeta('name', 'twitter:title', title)
    }
    if (description) {
        setMeta('name', 'description', description)
        setMeta('property', 'og:description', description)
        setMeta('name', 'twitter:description', description)
    }
    setMeta('name', 'robots', robots || 'index, follow')

    const canonicalUrl = `${DOMAIN}${to.path}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
    setMeta('property', 'og:url', canonicalUrl)
})

export default router
