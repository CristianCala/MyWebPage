<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        rightLabel: { type: String, default: '' },
        rightTo: { type: String, default: '' },
    })
</script>

<template>
    <nav class="relative z-20 flex items-center justify-between bg-cream px-8 py-5 md:px-14">
        <RouterLink to="/" class="flex items-center gap-2.5 text-dark no-underline">
            <span class="text-sm font-extrabold">←</span>
            <span class="text-[14px] font-extrabold tracking-wide"
                >CRISTIAN<span class="text-red">CALA</span></span
            >
        </RouterLink>
        <RouterLink
            v-if="rightTo"
            :to="rightTo"
            class="text-[13px] font-bold tracking-wide text-dark no-underline"
        >
            {{ rightLabel }}
        </RouterLink>
    </nav>
</template>
