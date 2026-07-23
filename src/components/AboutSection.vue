<script setup>
    import ProjectImagePlaceholder from './ProjectImagePlaceholder.vue'
</script>

<template>
    <section
        id="sobre-mi"
        class="relative overflow-hidden bg-cream px-8 py-24 text-dark md:px-14 md:py-[110px]"
    >
        <div class="speed-lines-light pointer-events-none absolute inset-0"></div>

        <div
            class="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-15"
        >
            <!-- LEFT -->
            <div>
                <div class="mb-4.5 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// 03</span>
                    <span class="h-px w-[30px] bg-dark/20"></span>
                    <span class="text-xs font-bold tracking-[3px] text-dark/45">SOBRE MÍ</span>
                </div>

                <h2
                    class="mb-6.5 text-[42px] leading-[0.96] font-black tracking-tight sm:text-[50px] md:text-[58px]"
                >
                    <span class="text-dark">Detrás del</span><br /><span class="text-red"
                        >código</span
                    >
                </h2>

                <p
                    class="mb-4.5 max-w-[480px] text-base leading-loose text-dark/72"
                    style="text-wrap: pretty"
                >
                    Soy mucho más que software. Cuando cierro el portátil, busco la próxima
                    cumbre, una bajada técnica en MTB o el viento perfecto para volar en parapente.
                </p>
                <p
                    class="mb-8.5 max-w-[480px] text-base leading-loose text-dark/72"
                    style="text-wrap: pretty"
                >
                    La montaña me enseñó lo mismo que el desarrollo: disciplina, leer el terreno y
                    disfrutar cada tramo. Esa mentalidad la llevo a cada proyecto.
                </p>

                <div class="mb-4 text-[11px] font-bold tracking-[2.5px] text-dark/45">PASIONES</div>
                <div class="flex max-w-[500px] flex-wrap gap-3">
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3 20h18" />
                                <path d="M5 20l6-13 4 8" />
                                <path d="M11 7l2-3 5 16" />
                            </svg>
                            Senderismo
                        </span>
                    </div>
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="6" cy="16" r="4" />
                                <circle cx="18" cy="16" r="4" />
                                <path d="M6 16l4-7h5" />
                                <path d="M10 9l4 7" />
                                <path d="M14 6h3" />
                            </svg>
                            MTB
                        </span>
                    </div>
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3 9c2.5-4.5 15.5-4.5 18 0" />
                                <path d="M4 9l7 8M9 8.3l3 8.7M15 8.3l-3 8.7M20 9l-7 8" />
                                <circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none" />
                            </svg>
                            Parapente
                        </span>
                    </div>
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3 20h18L13 5l-4 7-2-3-4 11z" />
                                <path d="M13 5l2.5 4.5" />
                            </svg>
                            Montañismo
                        </span>
                    </div>
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M2 12h4l2-5 4 14 3-9 2 3h5" />
                            </svg>
                            Deportes
                        </span>
                    </div>
                    <div
                        class="skew group cursor-default rounded-[9px] border-[1.5px] border-dark/14 bg-cream-soft px-4 py-2.5 transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <span
                            class="inline-flex items-center gap-2.5 text-sm font-bold text-dark group-hover:text-cream"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <ellipse cx="8" cy="17" rx="2.2" ry="3.2" transform="rotate(-15 8 17)" />
                                <circle cx="7" cy="13" r="0.8" fill="currentColor" stroke="none" />
                                <ellipse cx="16" cy="8" rx="2.2" ry="3.2" transform="rotate(15 16 8)" />
                                <circle cx="17" cy="4" r="0.8" fill="currentColor" stroke="none" />
                            </svg>
                            Running
                        </span>
                    </div>
                </div>
            </div>

            <!-- RIGHT: photo collage -->
            <div
                class="relative grid h-[380px] grid-cols-[1.25fr_1fr] grid-rows-2 gap-4 md:h-[500px]"
            >
                <div
                    class="relative row-span-2 overflow-hidden rounded-2xl bg-dark shadow-[0_18px_36px_rgba(33,25,21,0.16)]"
                >
                    <img
                        src="/img/Ride.jpeg"
                        alt="Cristian en bicicleta off-road"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="pointer-events-none absolute inset-0"
                        style="
                            background: linear-gradient(
                                180deg,
                                transparent 55%,
                                rgba(33, 25, 21, 0.6)
                            );
                        "
                    ></div>
                    <div class="skew absolute bottom-3.5 left-3.5 rounded-[5px] bg-red px-3 py-1.5">
                        <span class="text-[10px] font-extrabold tracking-wide text-cream"
                            >CRISTIAN · OFF-ROAD</span
                        >
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-2xl bg-dark shadow-[0_14px_28px_rgba(33,25,21,0.14)]"
                >
                    <img
                        src="/img/parapente.jpeg"
                        alt="Cristian en parapente"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="pointer-events-none absolute inset-0"
                        style="
                            background: linear-gradient(
                                180deg,
                                transparent 50%,
                                rgba(33, 25, 21, 0.55)
                            );
                        "
                    ></div> 
                    <div
                        class="absolute bottom-3 left-3 text-[10px] font-extrabold tracking-wide text-cream"
                    >
                        PARAPENTE
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-2xl bg-dark shadow-[0_14px_28px_rgba(33,25,21,0.14)]"
                >
                    <img
                        src="/img/water.jpeg"
                        alt="Cristian frente al mar"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="pointer-events-none absolute inset-0"
                        style="
                            background: radial-gradient(
                                ellipse at center,
                                transparent 60%,
                                rgba(33, 25, 21, 0.4) 100%
                            );
                        "
                    ></div>
                    <div
                        class="pointer-events-none absolute inset-0"
                        style="
                            background: linear-gradient(
                                180deg,
                                transparent 50%,
                                rgba(33, 25, 21, 0.55)
                            );
                        "
                    ></div>
                    <div
                        class="absolute bottom-3 left-3 text-[10px] font-extrabold tracking-wide text-cream"
                    >
                        MAR ABIERTO
                    </div>
                </div>

                <div
                    class="absolute -top-3.5 -right-3.5 z-[3] h-[60px] w-[60px] rounded-tr-lg bg-red"
                    style="clip-path: polygon(100% 0, 100% 100%, 0 0)"
                ></div>
            </div>
        </div>
    </section>
</template>
