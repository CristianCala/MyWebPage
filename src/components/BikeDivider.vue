<script setup>
    import { ref, onMounted } from 'vue'

    const bikeHolder = ref(null)

    onMounted(async () => {
        try {
            const res = await fetch('/img/bike.svg')
            const svgText = await res.text()
            if (bikeHolder.value) bikeHolder.value.innerHTML = svgText
        } catch (e) {}
    })
</script>

<template>
    <div
        class="relative z-10 -mt-6 h-[130px] overflow-hidden bg-cream font-sans md:-mt-32"
    >
        <div class="absolute top-0 right-0 bottom-8 w-[46%] bg-red"></div>

        <div
            class="absolute bottom-[30px] left-0 z-[1] h-[110px] w-full overflow-hidden md:h-[130px]"
        >
            <div class="animate-scrollx-slow flex h-full w-[200%]">
                <svg viewBox="0 0 1000 130" preserveAspectRatio="none" class="block h-full w-1/2">
                    <path
                        d="M0,130 L0,84 L100,48 L220,76 L340,40 L470,74 L600,44 L730,72 L860,42 L1000,84 L1000,130 Z"
                        fill="#DFDBD5"
                    />
                </svg>
                <svg viewBox="0 0 1000 130" preserveAspectRatio="none" class="block h-full w-1/2">
                    <path
                        d="M0,130 L0,84 L100,48 L220,76 L340,40 L470,74 L600,44 L730,72 L860,42 L1000,84 L1000,130 Z"
                        fill="#DFDBD5"
                    />
                </svg>
            </div>
        </div>

        <div
            class="absolute bottom-[30px] left-0 z-[1] h-[110px] w-full overflow-hidden md:h-[130px]"
        >
            <div class="animate-scrollx-fast flex h-full w-[200%]">
                <svg viewBox="0 0 1000 130" preserveAspectRatio="none" class="block h-full w-1/2">
                    <path
                        d="M0,130 L0,100 L90,42 L200,90 L300,32 L420,86 L540,28 L660,84 L780,36 L890,88 L1000,100 L1000,130 Z"
                        fill="#C1BDB7"
                    />
                    <path d="M300,32 L330,52 L270,52 Z" fill="#EF3246" opacity="0.9" />
                    <path d="M540,28 L568,47 L512,47 Z" fill="#EF3246" opacity="0.9" />
                </svg>
                <svg viewBox="0 0 1000 130" preserveAspectRatio="none" class="block h-full w-1/2">
                    <path
                        d="M0,130 L0,100 L90,42 L200,90 L300,32 L420,86 L540,28 L660,84 L780,36 L890,88 L1000,100 L1000,130 Z"
                        fill="#C1BDB7"
                    />
                    <path d="M300,32 L330,52 L270,52 Z" fill="#EF3246" opacity="0.9" />
                    <path d="M540,28 L568,47 L512,47 Z" fill="#EF3246" opacity="0.9" />
                </svg>
            </div>
        </div>

        <div class="absolute right-0 bottom-0 left-0 z-[2] h-8 bg-dark"></div>
        <div class="absolute right-0 bottom-8 left-0 z-[3] h-[3px] bg-red"></div>
        <div
            class="animate-roadmove absolute right-0 bottom-2 left-0 z-[3] h-[5px]"
            style="
                background-image: repeating-linear-gradient(
                    90deg,
                    rgba(244, 241, 234, 0.18) 0 14px,
                    transparent 14px 40px
                );
                background-size: 40px 5px;
            "
        ></div>

        <div
            class="animate-ride absolute bottom-6 z-[4] w-[170px] md:w-[210px]"
            style="left: -240px"
        >
            <div class="absolute right-full bottom-1.5 mr-2 flex flex-col gap-2.5">
                <span
                    class="animate-streak block h-[3px] w-12 rounded-sm bg-red"
                    style="transform-origin: right center"
                ></span>
                <span
                    class="animate-streak ml-3 block h-[3px] w-[30px] rounded-sm bg-dark opacity-40"
                    style="transform-origin: right center; animation-delay: 0.12s"
                ></span>
                <span
                    class="animate-streak block h-[3px] w-14 rounded-sm bg-red"
                    style="transform-origin: right center; animation-delay: 0.22s"
                ></span>
            </div>
            <div
                ref="bikeHolder"
                id="bikeHolder"
                class="animate-bob block w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
                style="filter: drop-shadow(0 8px 10px rgba(33, 25, 21, 0.18))"
            ></div>
        </div>
    </div>
</template>
