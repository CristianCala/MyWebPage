<script setup>
    const year = new Date().getFullYear()
</script>

<template>
    <footer
        class="bg-dark px-8 py-6 text-center text-[12px] font-semibold tracking-wide text-cream/40 md:px-14"
    >
        © {{ year }} Cristian Cala. Hecho con Vue.js.
    </footer>
</template>
