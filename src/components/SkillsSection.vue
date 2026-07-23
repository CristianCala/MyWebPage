<script setup>
    import { skillGroups } from '@/data/skills'
</script>

<template>
    <section class="relative overflow-hidden bg-dark px-8 py-24 text-cream md:px-14 md:pb-[110px]">
        <div class="absolute top-0 left-0 h-1 w-full bg-red"></div>
        <div class="speed-lines-dark pointer-events-none absolute inset-0"></div>

        <div class="relative z-[2] mx-auto max-w-[1280px]">
            <div class="mb-14 flex flex-wrap items-end justify-between gap-10">
                <div>
                    <div class="mb-4.5 flex items-center gap-3.5">
                        <span class="text-xs font-extrabold tracking-[3px] text-red">// 04</span>
                        <span class="h-px w-[30px] bg-cream/25"></span>
                        <span class="text-xs font-bold tracking-[3px] text-cream/50"
                            >TELEMETRÍA</span
                        >
                    </div>
                    <h2
                        class="text-[44px] leading-[0.95] font-black tracking-tight sm:text-[52px] md:text-[62px]"
                    >
                        <span class="text-cream">Skills &amp;</span>
                        <span class="text-red">Stack</span>
                    </h2>
                </div>
                <div class="flex items-center gap-2.5">
                    <span class="text-[11px] font-bold tracking-[2px] text-cream/40">NIVEL</span>
                    <div class="flex items-center gap-[3px]">
                        <span class="h-[11px] w-[5px] rounded-[1px] bg-cream/25"></span>
                        <span class="h-[15px] w-[5px] rounded-[1px] bg-cream/35"></span>
                        <span class="h-[19px] w-[5px] rounded-[1px] bg-red"></span>
                        <span class="h-[23px] w-[5px] rounded-[1px] bg-red"></span>
                    </div>
                    <span class="text-[11px] font-bold tracking-[2px] text-cream/40">RPM</span>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                <div v-for="group in skillGroups" :key="group.name">
                    <div class="mb-6.5 flex items-center gap-2.5">
                        <span
                            class="inline-block h-2.5 w-2.5 rounded-[2px] bg-red"
                            style="transform: rotate(45deg)"
                        ></span>
                        <span class="text-sm font-extrabold tracking-[2px] text-cream">{{
                            group.name
                        }}</span>
                    </div>
                    <div v-for="skill in group.skills" :key="skill.name" class="mb-5.5">
                        <div class="mb-1.5 flex items-baseline justify-between">
                            <span class="text-[13.5px] font-semibold text-cream/88">{{
                                skill.name
                            }}</span>
                            <span
                                class="text-xs font-extrabold tracking-wide text-red tabular-nums"
                                >{{ skill.pct }}</span
                            >
                        </div>
                        <div class="relative h-2.5 overflow-hidden rounded-md bg-cream/[0.08]">
                            <div
                                class="pointer-events-none absolute inset-0 z-[2]"
                                style="
                                    background-image: repeating-linear-gradient(
                                        90deg,
                                        transparent 0,
                                        transparent calc(10% - 1px),
                                        rgba(33, 25, 21, 0.55) calc(10% - 1px),
                                        rgba(33, 25, 21, 0.55) 10%
                                    );
                                "
                            ></div>
                            <div
                                class="absolute top-0 left-0 h-full rounded-md"
                                :style="{
                                    width: skill.pct + '%',
                                    background: 'linear-gradient(90deg, #b5202f, #ef3246)',
                                    boxShadow: '0 0 12px rgba(239, 50, 70, 0.5)',
                                }"
                            ></div>
                            <div
                                class="absolute top-[-2px] z-[3] h-[14px] w-[2px] bg-cream"
                                :style="{
                                    left: `calc(${skill.pct}% - 1px)`,
                                    boxShadow: '0 0 6px rgba(244, 241, 234, 0.8)',
                                }"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
