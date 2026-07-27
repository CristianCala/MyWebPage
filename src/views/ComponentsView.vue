<script setup>
    import { RouterLink } from 'vue-router'
    import SubpageNav from '@/components/SubpageNav.vue'
    import { components } from '@/data/components'
</script>

<template>
    <div class="min-h-screen w-full bg-cream text-dark">
        <SubpageNav />

        <div class="relative overflow-hidden px-8 pt-5 pb-15 md:px-14">
            <div class="speed-lines-light pointer-events-none absolute inset-0"></div>
            <div class="relative z-[2] mx-auto max-w-[1120px]">
                <div class="mb-4.5 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red"
                        >// LIBRERÍAS y COMPONENTES</span
                    >
                </div>
                <h1 class="mb-4 text-[44px] leading-[0.96] font-black tracking-tight sm:text-[56px]">
                    Componentes
                </h1>
                <p class="max-w-[560px] text-base leading-relaxed text-dark/68">
                    Librerías y componentes de código abierto que construyo y mantengo.
                    Documentación, playground y código en cada uno.
                </p>
            </div>
        </div>

        <div class="mx-auto max-w-[1120px] px-8 pb-25 md:px-14">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <RouterLink
                    v-for="item in components"
                    :key="item.href"
                    :to="item.href"
                    class="group block rounded-[14px] border border-dark/10 bg-cream-soft p-7.5 no-underline transition-all duration-200 hover:-translate-y-1.5 hover:border-red hover:shadow-[0_20px_40px_rgba(33,25,21,0.12)]"
                >
                    <div class="hex-card mb-4.5 flex items-center justify-center bg-red">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F4F1EA"
                            stroke-width="1.9"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M7 13h6" />
                            <path d="M7 17h10" />
                        </svg>
                    </div>
                    <div class="mb-2 text-[10px] font-bold tracking-[1.5px] text-red">
                        {{ item.tag }}
                    </div>
                    <h3 class="mb-2.5 text-[19px] font-extrabold tracking-tight text-dark">
                        {{ item.title }}
                    </h3>
                    <p class="mb-4.5 text-[13.5px] leading-relaxed text-dark/60">
                        {{ item.desc }}
                    </p>
                    <span class="text-[11px] font-extrabold tracking-wide text-red"
                        >VER DOCUMENTACIÓN →</span
                    >
                </RouterLink>
            </div>
        </div>
    </div>
</template>
