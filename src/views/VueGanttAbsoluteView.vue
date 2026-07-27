<script setup>
    import { ref } from 'vue'
    import { GanttChart } from 'vue-gantt-absolute'
    import 'vue-gantt-absolute/style.css'
    import SubpageNav from '@/components/SubpageNav.vue'

    const theme = ref('dark')
    const showPlanned = ref(true)
    const leftWidth = ref(320)

    const tasks = ref([
        {
            id: 1,
            name: 'Investigación',
            start: '2026-07-01',
            end: '2026-07-03',
            progress: 100,
            plannedStart: '2026-07-01',
            plannedEnd: '2026-07-04',
        },
        {
            id: 2,
            name: 'Diseño',
            start: '2026-07-03',
            end: '2026-07-07',
            progress: 70,
            dependsOn: [1],
            plannedStart: '2026-07-04',
            plannedEnd: '2026-07-08',
            color: '#211915',
        },
        {
            id: 3,
            name: 'Desarrollo',
            start: '2026-07-07',
            end: '2026-07-13',
            progress: 40,
            dependsOn: [2],
            plannedStart: '2026-07-08',
            plannedEnd: '2026-07-14',
        },
        { id: 4, name: 'Testing', start: '2026-07-13', end: '2026-07-15', progress: 0, dependsOn: [3] },
        { id: 5, name: 'Lanzamiento', start: '2026-07-15', end: '2026-07-15', milestone: true, dependsOn: [4] },
    ])

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    const features = [
        'Grilla de días automática con fila de meses',
        'Arrastre horizontal de barras (mover fechas)',
        'Redimensionar barras desde el borde (start/end)',
        'Flechas de dependencia recalculadas al arrastrar',
        'Jerarquía padre/hijo colapsable (parentId)',
        'Hitos (milestone) como rombo arrastrable',
        'Baseline: planificado vs. actual',
        'Dark mode automático o forzado por prop',
        'Panel izquierdo redimensionable y colapsable',
        'Columnas Task / Start / Progress / Duration',
        'Línea vertical marcando el día de hoy',
        'Sombreado de fines de semana y feriados',
        'Tooltip con fechas actuales y planificadas',
        'Eventos update:tasks y update:leftWidth',
    ]

    const props = [
        { name: 'tasks', type: 'GanttTask[]', def: '—', desc: 'Lista de tareas (ver campos abajo)' },
        { name: 'dayWidth', type: 'number', def: '44', desc: 'Ancho en px de cada columna de día' },
        { name: 'rowHeight', type: 'number', def: '40', desc: 'Alto en px de cada fila' },
        {
            name: 'leftWidth',
            type: 'number',
            def: '400',
            desc: 'Ancho inicial del panel izquierdo (drag para redimensionar, colapsable con ‹/›)',
        },
        { name: 'startDateColumnWidth', type: 'number', def: '110', desc: 'Ancho de la columna "Start Date"' },
        { name: 'progressColumnWidth', type: 'number', def: '90', desc: 'Ancho de la columna "Progress"' },
        { name: 'durationColumnWidth', type: 'number', def: '90', desc: 'Ancho de la columna "Duration"' },
        {
            name: 'height',
            type: 'string',
            def: "'auto'",
            desc: "'auto' ajusta al contenido; un valor fijo (ej. '400px') fuerza scroll interno",
        },
        { name: 'holidays', type: 'string[]', def: '[]', desc: 'Fechas YYYY-MM-DD a sombrear como feriado, además de fines de semana' },
        { name: 'labels', type: 'GanttLabels', def: '{}', desc: 'i18n de headers: { taskName?, startDate?, progress?, duration? }' },
        { name: 'showPlanned', type: 'boolean', def: 'true', desc: 'Muestra baseline y la línea "Planned" del tooltip' },
        { name: 'theme', type: "'light'|'dark'|'auto'", def: 'auto', desc: "'auto' respeta prefers-color-scheme del sistema" },
    ]

    const taskFields = [
        { name: 'id', type: 'string | number', desc: 'Identificador único' },
        { name: 'name', type: 'string', desc: 'Nombre en el panel y la barra' },
        { name: 'start / end', type: "string ('YYYY-MM-DD')", desc: 'Fechas de inicio/fin (iguales si es milestone)' },
        { name: 'dependsOn?', type: '(string|number)[]', desc: 'Ids predecesores — dibuja flechas' },
        { name: 'parentId?', type: 'string | number', desc: 'Id del padre — habilita jerarquía colapsable ▼/▶' },
        { name: 'progress?', type: 'number (0–100)', desc: 'Relleno de la barra y valor en columna "Progress"' },
        { name: 'milestone?', type: 'boolean', desc: 'Dibuja un rombo arrastrable en vez de barra' },
        { name: 'plannedStart? / plannedEnd?', type: "string ('YYYY-MM-DD')", desc: 'Baseline; requiere showPlanned' },
        { name: 'color?', type: 'CSS color', desc: 'Color propio; si se omite usa --vga-accent' },
    ]
</script>

<template>
    <div class="min-h-screen w-full bg-cream text-dark">
        <SubpageNav right-label="Componentes →" right-to="/componentes" />

        <!-- HERO -->
        <div class="relative overflow-hidden px-8 pt-5 pb-16 md:px-14">
            <div class="speed-lines-light pointer-events-none absolute inset-0"></div>
            <div class="relative z-[2] mx-auto max-w-[1120px]">
                <div class="mb-5 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// COMPONENTE 01</span>
                    <span class="h-px w-[30px] bg-dark/20"></span>
                    <span class="text-xs font-bold tracking-[3px] text-dark/45">CÓDIGO ABIERTO</span>
                </div>
                <h1 class="mb-5 text-[46px] leading-[0.96] font-black tracking-tight sm:text-[58px]">
                    Vue Gantt <span class="text-red">Absolute</span>
                </h1>
                <p
                    class="mb-6.5 max-w-[620px] text-base leading-loose text-dark/70 sm:text-[16.5px]"
                    style="text-wrap: pretty"
                >
                    Librería de diagrama de Gantt libre (MIT) para Vue 3 con Composition API.
                    Arrastre y redimensionado de barras, dependencias, jerarquía colapsable, hitos,
                    baseline y modo oscuro automático — lista para producción.
                </p>

                <div class="mb-7.5 flex flex-wrap gap-2.5">
                    <span class="rounded-md bg-dark/[0.07] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-dark"
                        >Vue 3 · Composition API</span
                    >
                    <span class="rounded-md bg-red/10 px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-red"
                        >V0.2</span
                    >
                </div>

                <div class="flex flex-wrap items-center gap-4">
                    <a
                        href="https://github.com/CristianCala/vue-gantt-absolute"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="skew inline-block rounded-lg bg-red px-6.5 py-4 text-sm font-extrabold tracking-wide text-cream no-underline"
                    >
                        <span class="inline-flex items-center gap-2.5"
                            >VER EN GITHUB <span class="text-base">↗</span></span
                        >
                    </a>
                    <a
                        href="https://paypal.me/cristianabsoluto"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[13px] font-bold tracking-wide text-dark no-underline"
                        >Apoyar el proyecto ↗</a
                    >
                    <div
                        class="rounded-lg bg-dark px-5 py-4 font-mono text-[13px] font-medium text-cream"
                    >
                        npm install vue-gantt-absolute
                    </div>
                </div>
            </div>
        </div>

        <!-- PLAYGROUND -->
        <section class="relative overflow-hidden bg-dark px-8 py-18 text-cream md:px-14">
            <div class="absolute top-0 left-0 h-1 w-full bg-red"></div>
            <div class="speed-lines-dark pointer-events-none absolute inset-0"></div>

            <div class="relative z-[2] mx-auto max-w-[1120px]">
                <div class="mb-4 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// 02</span>
                    <span class="h-px w-[30px] bg-cream/25"></span>
                    <span class="text-xs font-bold tracking-[3px] text-cream/50">PLAYGROUND</span>
                </div>
                <h2 class="mb-7 text-[32px] font-black tracking-tight sm:text-[38px]">
                    Demo interactiva
                </h2>

                <div class="mb-6.5 flex flex-wrap gap-3">
                    <button
                        type="button"
                        @click="toggleTheme"
                        class="cursor-pointer rounded-lg border border-cream/[0.16] px-4 py-2.5 text-xs font-bold tracking-wide text-cream"
                        :class="theme === 'dark' ? 'bg-red' : 'bg-cream/[0.08]'"
                    >
                        theme: {{ theme }}
                    </button>
                    <button
                        type="button"
                        @click="showPlanned = !showPlanned"
                        class="cursor-pointer rounded-lg border border-cream/[0.16] px-4 py-2.5 text-xs font-bold tracking-wide text-cream"
                        :class="showPlanned ? 'bg-red' : 'bg-cream/[0.08]'"
                    >
                        showPlanned: {{ showPlanned }}
                    </button>
                </div>

                <div
                    class="vga-wrap overflow-hidden rounded-[14px] border border-cream/10 shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                >
                    <GanttChart
                        v-model:tasks="tasks"
                        :left-width="leftWidth"
                        @update:left-width="leftWidth = $event"
                        :day-width="38"
                        :start-date-column-width="90"
                        :progress-column-width="70"
                        :duration-column-width="70"
                        :theme="theme"
                        :show-planned="showPlanned"
                    />
                </div>
                <div class="mt-3.5 text-[12.5px] font-medium text-cream/45">
                    Componente real de <code class="rounded bg-cream/[0.08] px-1.5 py-0.5">vue-gantt-absolute</code> —
                    arrastra las barras, cambia de tema o redimensiona el panel izquierdo.
                </div>
            </div>
        </section>

        <!-- FEATURES -->
        <section class="bg-cream px-8 py-20 md:px-14">
            <div class="mx-auto max-w-[1120px]">
                <div class="mb-4 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// 03</span>
                    <span class="h-px w-[30px] bg-dark/20"></span>
                    <span class="text-xs font-bold tracking-[3px] text-dark/45">CARACTERÍSTICAS</span>
                </div>
                <h2 class="mb-7.5 text-[32px] font-black tracking-tight sm:text-[38px]">
                    Qué incluye el MVP
                </h2>

                <div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div v-for="feat in features" :key="feat" class="flex items-start gap-3">
                        <span class="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-red"></span>
                        <span class="text-[14.5px] leading-relaxed text-dark/75">{{ feat }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROPS -->
        <section class="bg-cream px-8 pb-22 md:px-14">
            <div class="mx-auto max-w-[1120px]">
                <div class="mb-4 flex items-center gap-3.5">
                    <span class="text-xs font-extrabold tracking-[3px] text-red">// 04</span>
                    <span class="h-px w-[30px] bg-dark/20"></span>
                    <span class="text-xs font-bold tracking-[3px] text-dark/45">API</span>
                </div>
                <h2 class="mb-7.5 text-[32px] font-black tracking-tight sm:text-[38px]">Props</h2>

                <div class="mb-9 overflow-hidden rounded-[14px] border border-dark/10 bg-cream-soft">
                    <div
                        class="grid grid-cols-[1.1fr_1fr_0.7fr_2fr] gap-2 bg-dark/5 px-6 py-3.5 text-[11px] font-extrabold tracking-wide text-dark/55"
                    >
                        <span>PROP</span><span>TIPO</span><span>DEFAULT</span><span>DESCRIPCIÓN</span>
                    </div>
                    <div
                        v-for="p in props"
                        :key="p.name"
                        class="grid grid-cols-[1.1fr_1fr_0.7fr_2fr] items-center gap-2 border-t border-dark/[0.08] px-6 py-3.5"
                    >
                        <span class="font-mono text-[13px] font-bold text-dark">{{ p.name }}</span>
                        <span class="font-mono text-[12.5px] font-medium text-red">{{ p.type }}</span>
                        <span class="font-mono text-[12.5px] font-medium text-dark/55">{{ p.def }}</span>
                        <span class="text-[13px] leading-snug text-dark/65">{{ p.desc }}</span>
                    </div>
                </div>

                <h3 class="mb-4 text-xl font-extrabold tracking-tight">
                    Campos de <code class="font-mono text-red">GanttTask</code>
                </h3>
                <div class="overflow-hidden rounded-[14px] border border-dark/10 bg-cream-soft">
                    <div
                        class="grid grid-cols-[1.3fr_1.3fr_2.2fr] gap-2 bg-dark/5 px-6 py-3.5 text-[11px] font-extrabold tracking-wide text-dark/55"
                    >
                        <span>CAMPO</span><span>TIPO</span><span>DESCRIPCIÓN</span>
                    </div>
                    <div
                        v-for="f in taskFields"
                        :key="f.name"
                        class="grid grid-cols-[1.3fr_1.3fr_2.2fr] items-center gap-2 border-t border-dark/[0.08] px-6 py-3.5"
                    >
                        <span class="font-mono text-[13px] font-bold text-dark">{{ f.name }}</span>
                        <span class="font-mono text-xs font-medium text-red">{{ f.type }}</span>
                        <span class="text-[13px] leading-snug text-dark/65">{{ f.desc }}</span>
                    </div>
                </div>

                <div class="mt-9 rounded-xl border border-red/20 bg-red/[0.06] px-6 py-5.5">
                    <p class="mb-4 text-[13.5px] leading-relaxed text-dark/75">
                        <strong class="text-dark">Son dos cosas distintas:</strong> las
                        <strong>props</strong> (tabla de arriba) configuran el componente completo,
                        una sola vez. Los <strong>campos de GanttTask</strong> son los datos de cada
                        tarea, dentro del array de la prop
                        <code class="font-mono text-red">tasks</code>.
                    </p>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <div class="mb-2 text-[11px] font-extrabold tracking-wide text-dark">
                                ① PROPS — el componente entero
                            </div>
                            <pre
                                class="overflow-x-auto rounded-lg bg-dark p-4 font-mono text-xs leading-relaxed text-cream"
                            ><span class="text-cream/40">&lt;template&gt;</span>
  &lt;<span class="text-red">GanttChart</span>
    <span class="text-[#8fd19e]">:tasks</span>=<span class="text-cream">"tasks"</span>
    <span class="text-[#8fd19e]">:day-width</span>=<span class="text-cream">"50"</span>
    <span class="text-[#8fd19e]">theme</span>=<span class="text-cream">"dark"</span>
  /&gt;
<span class="text-cream/40">&lt;/template&gt;</span></pre>
                        </div>
                        <div>
                            <div class="mb-2 text-[11px] font-extrabold tracking-wide text-dark">
                                ② CAMPOS DE GANTTTASK — cada tarea
                            </div>
                            <pre
                                class="overflow-x-auto rounded-lg bg-dark p-4 font-mono text-xs leading-relaxed text-cream"
                            ><span class="text-cream/40">const</span> tasks = [
  {
    <span class="text-[#8fd19e]">id</span>: <span class="text-cream">1</span>,
    <span class="text-[#8fd19e]">name</span>: <span class="text-cream">'Diseño'</span>,
    <span class="text-[#8fd19e]">start</span>: <span class="text-cream">'2026-07-01'</span>,
    <span class="text-[#8fd19e]">end</span>: <span class="text-cream">'2026-07-05'</span>,
    <span class="text-[#8fd19e]">progress</span>: <span class="text-cream">70</span>,
    <span class="text-[#8fd19e]">color</span>: <span class="text-cream">'#EF3246'</span>
  }
]</pre>
                        </div>
                    </div>
                    <p class="mt-3.5 text-[12.5px] font-semibold text-dark/60">
                        En resumen: <strong class="text-dark">props</strong> = cómo se ve/comporta el
                        gráfico entero · <strong class="text-dark">campos de GanttTask</strong> = los
                        datos de cada barra que dibuja.
                    </p>
                </div>
            </div>
        </section>

        <!-- CLOSING CTA -->
        <section class="bg-cream px-8 py-22 text-center md:px-14">
            <h2 class="mb-4 text-[30px] font-black tracking-tight sm:text-[36px]">
                ¿Necesitas algo así a <span class="text-red">medida</span>?
            </h2>
            <p class="mb-7 text-[15px] text-dark/60">Hablemos de tu proyecto.</p>
            <a
                href="/#contacto"
                class="skew inline-block rounded-lg bg-red px-7.5 py-4 text-sm font-extrabold tracking-wide text-cream no-underline"
            >
                <span class="inline-block">IR A CONTACTO →</span>
            </a>
        </section>
    </div>
</template>

<style scoped>
    .vga-wrap :deep(.vga-root) {
        --vga-accent: #ef3246 !important;
    }
</style>
