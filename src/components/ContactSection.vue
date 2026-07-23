<script setup>
    import { reactive, ref } from 'vue'

    const CONTACT_EMAIL = 'cristiancala@protonmail.com'

    const form = reactive({ name: '', email: '', message: '', type: 'Web' })
    const sent = ref(false)
    const projectTypes = ['Web', 'Mobile', 'Desktop', 'Otro']

    function submit() {
        const subject = encodeURIComponent(
            `Propuesta · ${form.type} — ${form.name || 'Sin nombre'}`
        )
        const body = encodeURIComponent(
            `Nombre: ${form.name}\nEmail: ${form.email}\nTipo: ${form.type}\n\n${form.message}`
        )
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
        sent.value = true
    }

    function resetForm() {
        sent.value = false
        form.name = ''
        form.email = ''
        form.message = ''
        form.type = 'Web'
    }
</script>

<template>
    <section
        id="contacto"
        class="relative overflow-hidden bg-dark px-8 pt-24 pb-20 text-cream md:px-14 md:pt-[96px]"
    >
        <div class="absolute top-0 left-0 h-1 w-full bg-red"></div>
        <div class="speed-lines-dark pointer-events-none absolute inset-0"></div>
        <div
            class="pointer-events-none absolute top-1 left-0 h-4 w-full"
            style="
                background-image: conic-gradient(
                    rgba(244, 241, 234, 0.1) 90deg,
                    transparent 90deg 180deg,
                    rgba(244, 241, 234, 0.1) 180deg 270deg,
                    transparent 270deg
                );
                background-size: 16px 16px;
            "
        ></div>

        <div
            class="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-16"
        >
            <!-- LEFT: pitch -->
            <div>
                <div class="mb-4.5 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// 06</span>
                    <span class="h-px w-[30px] bg-cream/25"></span>
                    <span class="text-xs font-bold tracking-[3px] text-cream/50"
                        >LÍNEA DE META</span
                    >
                </div>
                <h2
                    class="mb-6 text-[42px] leading-[0.96] font-black tracking-tight sm:text-[50px] md:text-[58px]"
                >
                    <span class="text-cream">¿Tienes una</span><br /><span class="text-red"
                        >propuesta?</span
                    >
                </h2>
                <p
                    class="mb-10 max-w-[430px] text-base leading-loose text-cream/70"
                    style="text-wrap: pretty"
                >
                    Cuéntame tu proyecto o tu oferta de trabajo. Respondo rápido y sin vueltas —
                    arrancamos cuando estés listo.
                </p>

                <div class="mb-10 flex flex-col gap-4.5">
                    <a
                        :href="`mailto:${CONTACT_EMAIL}`"
                        class="flex items-center gap-4 text-cream no-underline"
                    >
                        <span
                            class="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-cream/[0.12] bg-cream/[0.07]"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#EF3246"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                                <path d="M3 6l9 7 9-7" />
                            </svg>
                        </span>
                        <span>
                            <span
                                class="mb-0.5 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >EMAIL</span
                            >
                            <span class="block text-[15px] font-bold">{{ CONTACT_EMAIL }}</span>
                        </span>
                    </a>
                    <div class="flex items-center gap-4">
                        <span
                            class="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-cream/[0.12] bg-cream/[0.07]"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#EF3246"
                                stroke-width="1.9"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                />
                            </svg>
                        </span>
                        <span>
                            <span
                                class="mb-0.5 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >UBICACIÓN</span
                            >
                            <span class="block text-[15px] font-bold"
                                >Caracas, Venezuela · Remoto</span
                            >
                        </span>
                    </div>
                </div>

                <div class="flex gap-3">
                    <a
                        href="https://github.com/CristianCala"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border border-cream/[0.12] bg-cream/[0.07] text-cream no-underline transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/cristian-rafael-6092a2193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border border-cream/[0.12] bg-cream/[0.07] text-cream no-underline transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21H9z"
                            />
                        </svg>
                    </a>
                    <a
                        href="mailto:cristiancala@protonmail.com"
                        class="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border border-cream/[0.12] bg-cream/[0.07] text-cream no-underline transition-colors duration-200 hover:border-red hover:bg-red"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.9"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M22 6l-10 7L2 6" />
                            <rect x="2" y="4" width="20" height="16" rx="2.5" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- RIGHT: form -->
            <div
                class="relative rounded-2xl border border-cream/10 bg-dark-soft px-8 pt-9.5 pb-8.5 md:px-9.5"
            >
                <div class="absolute top-0 left-0 h-[3px] w-full rounded-t-2xl bg-red"></div>

                <div
                    v-if="sent"
                    class="flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                    <div class="hex-success mb-6 flex items-center justify-center bg-red">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F4F1EA"
                            stroke-width="2.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12.5l4.5 4.5L19 7" />
                        </svg>
                    </div>
                    <h3 class="mb-2.5 text-[26px] font-black tracking-tight text-cream">
                        ¡Mensaje enviado!
                    </h3>
                    <p
                        class="max-w-[300px] text-[15px] leading-relaxed text-cream/60"
                        style="text-wrap: pretty"
                    >
                        Gracias por escribir. Te responderé lo antes posible.
                    </p>
                    <button
                        type="button"
                        @click="resetForm"
                        class="mt-6.5 cursor-pointer border-none bg-transparent text-xs font-extrabold tracking-[1.5px] text-red"
                    >
                        ENVIAR OTRO →
                    </button>
                </div>

                <form v-else @submit.prevent="submit">
                    <div class="mb-4.5 flex flex-col gap-4.5 sm:flex-row sm:gap-4">
                        <label class="block flex-1">
                            <span
                                class="mb-2 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >NOMBRE</span
                            >
                            <input
                                v-model="form.name"
                                placeholder="Tu nombre"
                                class="w-full rounded-[9px] border border-cream/[0.14] bg-cream/[0.05] px-3.5 py-3.5 text-sm font-medium text-cream outline-none focus:border-red"
                            />
                        </label>
                        <label class="block flex-1">
                            <span
                                class="mb-2 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                                >EMAIL</span
                            >
                            <input
                                v-model="form.email"
                                type="email"
                                placeholder="tu@correo.com"
                                class="w-full rounded-[9px] border border-cream/[0.14] bg-cream/[0.05] px-3.5 py-3.5 text-sm font-medium text-cream outline-none focus:border-red"
                            />
                        </label>
                    </div>

                    <label class="mb-4.5 block">
                        <span
                            class="mb-2 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                            >TIPO DE PROYECTO</span
                        >
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="pt in projectTypes"
                                :key="pt"
                                type="button"
                                @click="form.type = pt"
                                class="cursor-pointer rounded-lg border px-3.5 py-2.5 text-xs font-bold transition-colors duration-150"
                                :class="
                                    form.type === pt
                                        ? 'border-red bg-red text-cream'
                                        : 'border-cream/[0.14] bg-cream/[0.05] text-cream/70'
                                "
                            >
                                {{ pt }}
                            </button>
                        </div>
                    </label>

                    <label class="mb-6 block">
                        <span
                            class="mb-2 block text-[10px] font-bold tracking-[1.5px] text-cream/40"
                            >MENSAJE</span
                        >
                        <textarea
                            v-model="form.message"
                            placeholder="Cuéntame sobre tu proyecto o propuesta..."
                            rows="5"
                            class="w-full resize-y rounded-[9px] border border-cream/[0.14] bg-cream/[0.05] px-3.5 py-3.5 text-sm leading-relaxed font-medium text-cream outline-none focus:border-red"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        class="skew block w-full cursor-pointer rounded-[9px] border-none bg-red py-4 text-center text-sm font-extrabold tracking-wide whitespace-nowrap text-cream transition-[filter] duration-200 hover:brightness-110"
                    >
                        <span class="inline-flex items-center justify-center gap-2.5"
                            >ENVIAR PROPUESTA <span class="text-base">→</span></span
                        >
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
