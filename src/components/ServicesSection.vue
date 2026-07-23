<script setup>
    import { services } from '@/data/services'
</script>

<template>
    <section class="relative overflow-hidden bg-cream px-8 py-24 text-dark md:px-14 md:py-[110px]">
        <div class="speed-lines-light pointer-events-none absolute inset-0"></div>

        <div class="relative z-[2] mx-auto max-w-[1280px]">
            <div class="mb-14 flex flex-wrap items-end justify-between gap-10">
                <div>
                    <div class="mb-4.5 flex items-center gap-3.5">
                        <span class="text-xs font-extrabold tracking-[3px] text-red">// 05</span>
                        <span class="h-px w-[30px] bg-dark/20"></span>
                        <span class="text-xs font-bold tracking-[3px] text-dark/45"
                            >QUÉ OFREZCO</span
                        >
                    </div>
                    <h2
                        class="text-[44px] leading-[0.95] font-black tracking-tight sm:text-[52px] md:text-[62px]"
                    >
                        <span class="text-dark">Servicios</span>
                    </h2>
                </div>
                <p
                    class="max-w-[340px] text-[15px] leading-relaxed text-dark/60"
                    style="text-wrap: pretty"
                >
                    Del navegador al escritorio: software a medida, rápido y mantenible,
                    en cada plataforma.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6.5 md:grid-cols-3">
                <div
                    v-for="service in services"
                    :key="service.num"
                    class="relative overflow-hidden rounded-2xl border border-dark/10 bg-cream-soft px-8 pt-9.5 pb-8.5 transition-all duration-200 hover:-translate-y-1.5 hover:border-red hover:shadow-[0_22px_44px_rgba(33,25,21,0.13)]"
                >
                    <span
                        class="absolute top-6.5 right-7 text-[42px] font-black tracking-tight text-dark/[0.07] tabular-nums"
                        >{{ service.num }}</span
                    >

                    <div class="hex-chip relative mb-6.5 flex items-center justify-center bg-red">
                        <svg
                            v-if="service.num === '01'"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F4F1EA"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect x="2.5" y="4" width="19" height="14" rx="2" />
                            <path d="M2.5 8h19" />
                            <path d="M8 20h8" />
                            <path d="M6.2 6.1h0" />
                            <path d="M8.6 6.1h0" />
                        </svg>
                        <svg
                            v-else-if="service.num === '02'"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F4F1EA"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
                            <path d="M10.5 18.5h3" />
                        </svg>
                        <svg
                            v-else
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F4F1EA"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect x="2.5" y="4" width="19" height="12" rx="2" />
                            <path d="M8 20h8" />
                            <path d="M12 16v4" />
                        </svg>
                    </div>

                    <h3 class="mb-3 text-[22px] font-extrabold tracking-tight text-dark">
                        {{ service.title }}
                    </h3>
                    <p
                        class="mb-5.5 text-sm leading-relaxed text-dark/62"
                        style="text-wrap: pretty"
                    >
                        {{ service.desc }}
                    </p>

                    <div class="mb-6 flex flex-col gap-2.5">
                        <div
                            v-for="feat in service.features"
                            :key="feat"
                            class="flex items-center gap-2.5"
                        >
                            <span
                                class="block h-1.5 w-1.5 flex-none rounded-[1px] bg-red"
                                style="transform: rotate(45deg)"
                            ></span>
                            <span class="text-[13px] font-semibold text-dark/78">{{ feat }}</span>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-1.5 border-t border-dark/10 pt-5">
                        <span
                            v-for="tech in service.stack"
                            :key="tech"
                            class="rounded-md bg-dark/[0.05] px-2.5 py-1 text-[10px] font-bold tracking-wide text-dark/60"
                            >{{ tech }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
