<script setup>
    import { ref, computed } from 'vue'
    import { projects } from '@/data/projects'
    import ProjectImagePlaceholder from './ProjectImagePlaceholder.vue'

    const selectedIndex = ref(null)
    const selected = computed(() =>
        selectedIndex.value != null ? projects[selectedIndex.value] : null
    )

    function open(i) {
        selectedIndex.value = i
    }
    function close() {
        selectedIndex.value = null
    }
</script>

<template>
    <section
        id="proyectos"
        class="relative overflow-hidden bg-dark px-8 py-24 text-cream md:px-14 md:pb-[110px]"
    >
        <div class="speed-lines-dark pointer-events-none absolute inset-0"></div>
        <div class="absolute top-0 left-0 h-1 w-full bg-red"></div>

        <div class="relative z-[2] mx-auto max-w-[1280px]">
            <div class="mb-14 flex flex-wrap items-end justify-between gap-10">
                <div>
                    <div class="mb-4.5 flex items-center gap-3.5">
                        <span class="text-xs font-extrabold tracking-[3px] text-red">// 02</span>
                        <span class="h-px w-[30px] bg-cream/25"></span>
                        <span class="text-xs font-bold tracking-[3px] text-cream/50"
                            >SELECCIÓN 2026</span
                        >
                    </div>
                    <h2
                        class="text-[44px] leading-[0.95] font-black tracking-tight sm:text-[52px] md:text-[62px]"
                    >
                        <span class="text-cream">Proyectos</span>
                    </h2>
                </div>
                <p
                    class="max-w-[340px] text-[15px] leading-relaxed text-cream/60"
                    style="text-wrap: pretty"
                >
                    Una parrilla de salida de trabajos backend, frontend y DevOps.
                    Haz clic en cualquiera para ver el detalle.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6.5 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(project, i) in projects"
                    :key="project.num"
                    @click="open(i)"
                    class="group relative cursor-pointer overflow-hidden rounded-xl border border-cream/[0.09] bg-dark-soft transition-all duration-200 hover:-translate-y-1.5 hover:border-red hover:shadow-[0_22px_40px_rgba(0,0,0,0.4)]"
                >
                    <div class="relative h-[188px] overflow-hidden bg-dark">
                        <img
                            v-if="project.image"
                            :src="project.image"
                            :alt="project.title"
                            class="h-full w-full object-cover"
                        />
                        <ProjectImagePlaceholder v-else label="Arrastra una captura" />
                        <div
                            class="pointer-events-none absolute inset-0"
                            style="
                                background: linear-gradient(
                                    180deg,
                                    transparent 40%,
                                    rgba(33, 25, 21, 0.55)
                                );
                            "
                        ></div>
                        <div
                            class="skew absolute top-0 left-0 rounded-br-md bg-red py-1.5 pr-3.5 pl-3"
                        >
                            <span class="text-[13px] font-black tracking-wide text-cream"
                                >P.{{ project.num }}</span
                            >
                        </div>
                        <div
                            class="absolute right-2.5 bottom-2.5 h-[22px] w-[22px] rounded-sm opacity-35"
                            style="
                                background-image: conic-gradient(
                                    #f4f1ea 90deg,
                                    transparent 90deg 180deg,
                                    #f4f1ea 180deg 270deg,
                                    transparent 270deg
                                );
                                background-size: 11px 11px;
                            "
                        ></div>
                    </div>
                    <div class="px-5.5 pt-5 pb-6">
                        <div class="mb-2 text-[11px] font-bold tracking-[2px] text-red">
                            {{ project.category }} · {{ project.year }}
                        </div>
                        <h3 class="mb-2.5 text-[21px] font-extrabold tracking-tight text-cream">
                            {{ project.title }}
                        </h3>
                        <p
                            class="mb-4.5 text-[13.5px] leading-relaxed text-cream/58"
                            style="text-wrap: pretty"
                        >
                            {{ project.desc }}
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex flex-wrap gap-1.5">
                                <span
                                    v-for="tech in project.stack"
                                    :key="tech"
                                    class="rounded-md bg-cream/[0.07] px-2.5 py-1 text-[10px] font-bold tracking-wide text-cream/75"
                                    >{{ tech }}</span
                                >
                            </div>
                            <span
                                class="text-[11px] font-extrabold tracking-wide whitespace-nowrap text-red"
                                >VER →</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- detail overlay -->
        <div
            v-if="selected"
            @click="close"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(17,12,10,0.78)] p-6 backdrop-blur-[6px] md:p-10"
        >
            <div
                @click.stop
                class="relative max-h-[88vh] w-full max-w-[980px] overflow-auto rounded-2xl border border-cream/[0.12] bg-dark shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
            >
                <div class="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-red"></div>
                <div
                    @click="close"
                    class="absolute top-4.5 right-4.5 z-[5] flex h-10 w-10 cursor-pointer items-center justify-center rounded-[9px] border border-cream/[0.14] bg-cream/[0.08] text-xl font-semibold text-cream hover:border-red hover:bg-red"
                >
                    ✕
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
                    <div class="relative min-h-[280px] bg-dark-soft md:min-h-[380px]">
                        <img
                            v-if="selected.image"
                            :src="selected.image"
                            :alt="selected.title"
                            class="h-full w-full object-contain"
                        />
                        <ProjectImagePlaceholder v-else label="Arrastra una captura" />
                        <div
                            class="skew absolute top-0 left-0 rounded-br-lg bg-red py-2.5 pr-4.5 pl-4"
                        >
                            <span class="text-[15px] font-black tracking-wide text-cream"
                                >P.{{ selected.num }}</span
                            >
                        </div>
                    </div>
                    <div class="px-7 pt-10 pb-9 md:px-11 md:pt-12">
                        <div class="mb-3.5 text-[11px] font-bold tracking-[2.5px] text-red">
                            {{ selected.category }} · {{ selected.year }}
                        </div>
                        <h3
                            class="mb-4.5 text-[28px] leading-tight font-black tracking-tight text-cream md:text-[34px]"
                        >
                            {{ selected.title }}
                        </h3>
                        <p
                            class="mb-6.5 text-[15px] leading-loose text-cream/70"
                            style="text-wrap: pretty"
                        >
                            {{ selected.longDesc }}
                        </p>

                        <div class="mb-6.5 flex border-t border-b border-cream/[0.12]">
                            <div class="flex-1 py-3.5">
                                <div
                                    class="mb-1.5 text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >
                                    ROL
                                </div>
                                <div class="text-sm font-extrabold text-cream">
                                    {{ selected.role }}
                                </div>
                            </div>
                            <div class="w-px bg-cream/[0.12]"></div>
                            <div class="flex-1 py-3.5 pl-4.5">
                                <div
                                    class="mb-1.5 text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >
                                    AÑO
                                </div>
                                <div class="text-sm font-extrabold text-cream">
                                    {{ selected.year }}
                                </div>
                            </div>
                        </div>

                        <div class="mb-3 text-[10px] font-bold tracking-[1.5px] text-cream/40">
                            STACK
                        </div>
                        <div class="mb-8 flex flex-wrap gap-2">
                            <span
                                v-for="tech in selected.stack"
                                :key="tech"
                                class="rounded-md bg-cream/[0.08] px-3 py-1.5 text-[11px] font-bold tracking-wide text-cream"
                                >{{ tech }}</span
                            >
                        </div>

                        <a
                            v-if="selected.link"
                            :href="selected.link"
                            target="_blank"
                            rel="noopener"
                            class="skew inline-block rounded-lg bg-red px-6.5 py-4 text-[13px] font-extrabold tracking-wide text-cream no-underline"
                        >
                            <span class="inline-flex items-center gap-2.5"
                                >VISITAR PROYECTO <span class="text-[15px]">↗</span></span
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
