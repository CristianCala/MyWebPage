<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div
        class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark px-8 text-center text-cream"
    >
        <div class="speed-lines-dark pointer-events-none absolute inset-0"></div>
        <div class="absolute top-0 left-0 h-1 w-full bg-red"></div>

        <div class="relative z-[2]">
            <div class="mb-5 flex items-center justify-center gap-3.5">
                <span class="text-xs font-extrabold tracking-[3px] text-red">// BLOG</span>
                <span class="h-px w-[30px] bg-cream/25"></span>
                <span class="text-xs font-bold tracking-[3px] text-cream/50">EN CONSTRUCCIÓN</span>
            </div>
            <h1 class="mb-5 text-[42px] leading-[0.96] font-black tracking-tight sm:text-[58px]">
                <span class="text-cream">Próxima</span><br /><span class="text-red">mente</span>
            </h1>
            <p
                class="mx-auto mb-9 max-w-[420px] text-base leading-loose text-cream/70"
                style="text-wrap: pretty"
            >
                Aquí iré publicando notas técnicas y aprendizajes. Todavía en obra — vuelve pronto.
            </p>
            <RouterLink
                to="/"
                class="skew inline-block rounded-lg bg-red px-7 py-4 text-sm font-bold tracking-wide text-cream no-underline"
            >
                <span>← VOLVER AL INICIO</span>
            </RouterLink>
        </div>
    </div>
</template>
