<script setup>
    const links = [
        { label: 'Inicio', href: '#' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Sobre mí', href: '#sobre-mi' },
    ]
</script>

<template>
    <nav class="relative z-20 flex items-center justify-between px-8 py-5 md:px-14">
        <div class="flex items-center gap-3">
            <div class="hex-logo flex items-center justify-center bg-red">
                <span class="text-[15px] font-black tracking-tight text-cream">C</span>
            </div>
            <span class="text-[15px] font-extrabold tracking-wide"
                >CRISTIAN<span class="text-red">CALA</span></span
            >
        </div>
        <div class="hidden items-center gap-10 md:flex">
            <a
                v-for="link in links"
                :key="link.label"
                :href="link.href"
                class="text-[13px] font-semibold tracking-wide text-dark no-underline hover:text-cream"
                >{{ link.label }}</a
            >
            <a
                href="#contacto"
                class="skew inline-block rounded-[7px] bg-dark px-5 py-[11px] no-underline"
            >
                <span class="text-[13px] font-bold tracking-wide text-cream">Contacto</span>
            </a>
        </div>
    </nav>
</template>
