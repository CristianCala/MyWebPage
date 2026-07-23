<script setup>
    defineProps({
        label: { type: String, default: 'Tu foto aquí' },
    })
</script>

<template>
    <div
        class="flex h-full w-full items-center justify-center bg-dark-soft"
        style="
            background-image: repeating-linear-gradient(
                135deg,
                rgba(244, 241, 234, 0.05) 0 10px,
                transparent 10px 20px
            );
        "
    >
        <span class="text-[11px] font-bold tracking-[1.5px] text-cream/35 uppercase">{{
            label
        }}</span>
    </div>
</template>
