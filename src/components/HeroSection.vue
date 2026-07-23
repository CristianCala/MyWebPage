<script setup>
    import { computed } from 'vue'
    import HeroSkillChip from './HeroSkillChip.vue'
    import NavBar from './NavBar.vue'
    import { heroChips } from '@/data/skills'

    const available = true

    const ticks = computed(() => {
        const total = 48
        const cx = 280,
            cy = 280,
            r1 = 248
        return Array.from({ length: total }, (_, i) => {
            const a = (i / total) * Math.PI * 2
            const major = i % 4 === 0
            const len = major ? 16 : 8
            return {
                key: i,
                x1: cx + Math.cos(a) * r1,
                y1: cy + Math.sin(a) * r1,
                x2: cx + Math.cos(a) * (r1 - len),
                y2: cy + Math.sin(a) * (r1 - len),
                major,
            }
        })
    })

    const chipPositions = [
        { x: 0, y: -200 },
        { x: 142, y: -142 },
        { x: 200, y: 0 },
        { x: 142, y: 142 },
        { x: 0, y: 200 },
        { x: -142, y: 142 },
        { x: -200, y: 0 },
        { x: -142, y: -142 },
    ]
</script>

<template>
    <div class="relative min-h-screen w-full overflow-hidden bg-cream text-dark">
        <div class="speed-lines-light pointer-events-none absolute inset-0"></div>
        <div class="hero-slab absolute top-0 right-0 h-full w-[46%] bg-red"></div>
        <div
            class="hero-slab speed-lines-light absolute top-0 right-0 h-full w-[46%] opacity-40"
        ></div>

        <NavBar />

        <div
            class="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-6 px-8 pt-2 pb-8 md:grid-cols-[1.02fr_0.98fr] md:px-14"
        >
            <!-- LEFT -->
            <div class="pr-0 md:pr-6">
                <div class="mb-5 flex items-center gap-3.5">
                    <span
                        v-if="available"
                        class="inline-flex items-center gap-2 text-[11px] font-bold tracking-[3px] text-red"
                    >
                        <span class="inline-block h-2 w-2 rounded-full bg-red"></span>DISPONIBLE
                        PARA PROYECTOS
                    </span>
                    <span class="h-px flex-1 bg-dark/15"></span>
                    <span class="text-[11px] font-bold tracking-[2px] text-dark/45">// 2026</span>
                </div>

                <h1
                    class="mb-1.5 text-[56px] leading-[0.9] font-black tracking-tight sm:text-[72px] md:text-[82px]"
                >
                    <span class="text-red">Cristian</span><br /><span class="text-dark">Cala</span>
                </h1>

                <div class="my-4 flex items-center gap-3.5">
                    <span class="block h-1 w-11 bg-red"></span>
                    <span class="text-lg font-extrabold tracking-[5px] text-dark uppercase"
                        >Fullstack Developer</span
                    >
                </div>

                <p
                    class="mb-7 max-w-[420px] text-base leading-relaxed text-dark/72"
                    style="text-wrap: pretty"
                >
                    Construyo plataformas de principio a fin — backend, frontend y DevOps. Mi misión
                    es acercar la ciencia a quien la necesita e innovar en el camino.
                </p>

                <div class="flex flex-wrap items-center gap-4">
                    <a
                        href="#proyectos"
                        class="skew inline-block rounded-lg bg-red px-7 py-4 text-sm font-bold tracking-wide text-cream no-underline"
                    >
                        <span class="inline-flex items-center gap-2.5"
                            >VER PROYECTOS <span class="text-base">→</span></span
                        >
                    </a>
                    <a
                        href="/img/CV-CristianCala.pdf"
                        download
                        class="skew inline-block rounded-lg border-[1.5px] border-dark/20 px-7 py-4 text-sm font-bold tracking-wide text-dark no-underline"
                    >
                        <span>DESCARGAR CV</span>
                    </a>
                </div>

                <div class="mt-8 flex items-center gap-7">
                    <div>
                        <div class="text-[30px] font-black tracking-tight text-dark">
                            5<span class="text-red">+</span>
                        </div>
                        <div class="mt-0.5 text-[11px] font-semibold tracking-[1.5px] text-dark/50">
                            AÑOS
                        </div>
                    </div>
                    <span class="h-[34px] w-px bg-dark/15"></span>
                    <div>
                        <div class="text-[30px] font-black tracking-tight text-dark">
                            12<span class="text-red">+</span>
                        </div>
                        <div class="mt-0.5 text-[11px] font-semibold tracking-[1.5px] text-dark/50">
                            TECNOLOGÍAS
                        </div>
                    </div>
                    <span class="h-[34px] w-px bg-dark/15"></span>
                    <div>
                        <div class="text-[30px] font-black tracking-tight text-dark">∞</div>
                        <div class="mt-0.5 text-[11px] font-semibold tracking-[1.5px] text-dark/50">
                            CAFÉ
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT: hexagon + skills -->
            <div class="relative flex h-[420px] items-center justify-center md:h-[496px]">
                <svg
                    viewBox="0 0 560 560"
                    class="animate-spin-slow absolute h-[380px] w-[380px] opacity-90 md:h-[476px] md:w-[476px]"
                >
                    <polygon
                        points="280,40 488,160 488,400 280,520 72,400 72,160"
                        fill="none"
                        stroke="rgba(244,241,234,0.6)"
                        stroke-width="1.5"
                        stroke-dasharray="3 9"
                        stroke-linejoin="round"
                    />
                </svg>
                <svg
                    viewBox="0 0 560 560"
                    class="animate-spin-reverse absolute h-[356px] w-[356px] md:h-[444px] md:w-[444px]"
                >
                    <line
                        v-for="t in ticks"
                        :key="t.key"
                        :x1="t.x1"
                        :y1="t.y1"
                        :x2="t.x2"
                        :y2="t.y2"
                        :stroke="t.major ? 'rgba(244,241,234,0.85)' : 'rgba(244,241,234,0.4)'"
                        :stroke-width="t.major ? 2 : 1"
                    />
                </svg>

                <div class="hex-frame-outer absolute scale-[0.82] bg-dark md:scale-100"></div>
                <div class="hex-frame-inner absolute scale-[0.82] bg-cream md:scale-100"></div>
                <div class="hex-photo absolute scale-[0.82] overflow-hidden bg-dark md:scale-100">
                    <img
                        src="/img/cristian-profile.jpg"
                        alt="Cristian Cala"
                        class="h-full w-full object-cover"
                        style="object-position: 54% 22%"
                    />
                    <div
                        class="absolute inset-0"
                        style="
                            background: linear-gradient(
                                150deg,
                                rgba(239, 50, 70, 0.28),
                                transparent 55%
                            );
                            mix-blend-mode: multiply;
                        "
                    ></div>
                </div>

                <div
                    class="skew absolute z-[6] rounded-[5px] bg-red px-[11px] py-[5px]"
                    style="left: calc(50% - 118px); top: calc(50% + 120px)"
                >
                    <span class="text-[10px] font-extrabold tracking-[2px] text-cream"
                        >DEV — 001</span
                    >
                </div>

                <HeroSkillChip
                    v-for="(chip, i) in heroChips"
                    :key="chip.label"
                    :chip="chip"
                    :x="chipPositions[i].x"
                    :y="chipPositions[i].y"
                />
            </div>
        </div>
    </div>
</template>
