// TODO: reemplaza estos proyectos de ejemplo por los tuyos reales.
// `image` puede apuntar a /img/tu-archivo.jpg una vez que agregues capturas reales;
// mientras esté vacío se muestra un placeholder visual.
export const projects = [
    {
        num: '01',
        image: '/img/mintme.png',
        category: 'CRYPTO / WEB3',
        year: '2022',
        title: 'MintMe.com',
        desc: 'Plataforma de tokenización para creadores de contenido, desarrollada en ABC Hosting.',
        longDesc:
            'Desarrollo fullstack de MintMe.com en ABC Hosting: frontend con Vue.js, backend en PHP containerizado con Docker, servicios en Node.js y estilos con Sass. Plataforma para que creadores de contenido emitan y gestionen sus propios tokens.',
        role: 'Fullstack Developer',
        link: 'https://www.mintme.com/',
        stack: ['Vue.js', 'PHP', 'Docker', 'Sass', 'Node.js'],
    },
    {
        num: '02',
        image: '/img/nexlo.png',
        category: 'MARKETPLACE',
        year: '2025',
        title: 'Nexlo',
        desc: 'Marketplace local: descubre tiendas cercanas o crea la tuya y vende en minutos.',
        longDesc:
            'Desarrollo fullstack de Nexlo, un marketplace para tiendas locales: catálogo por categorías, buscador y panel para que cada tienda gestione sus productos. Frontend en Vue.js, backend en Laravel con MySQL.',
        role: 'Fullstack Developer',
        link: 'https://nexloapp.net/',
        stack: ['Vue.js', 'Laravel', 'MySQL'],
    },
    {
        num: '03',
        image: '/img/vilo-api.svg',
        category: 'API / BACKEND',
        year: '2023',
        title: 'API REST · Vilo Technologies',
        desc: 'API REST construida con Ts.ED, uno de dos backends desarrollados en Vilo Technologies.',
        longDesc:
            'Backend Developer en Vilo Technologies (feb-jun 2023): desarrollo de dos APIs REST, una en Python y otra con Ts.ED, un framework de Node.js sobre TypeScript con controladores basados en decoradores (estilo Angular/NestJS).',
        role: 'Backend Developer',
        link: '',
        stack: ['Ts.ED', 'TypeScript', 'Node.js'],
    },
    {
        num: '04',
        image: '/img/hispana.png',
        category: 'ANIMACIÓN WEB',
        year: '2022',
        title: 'Hispana de Seguros',
        desc: 'Animación de vectores para la web de Hispana de Seguros con librerías de JavaScript.',
        longDesc:
            'Animador Web en Hispana de Seguros (septiembre 2022): animación de los elementos vectoriales de su sitio web usando librerías de JavaScript, aportando movimiento e interactividad a la experiencia.',
        role: 'Animador Web',
        link: 'https://hispana.com.ve/',
        stack: ['JavaScript', 'SVG'],
    },
    {
        num: '05',
        image: '/img/secure-entrance.png',
        category: 'CONTROL DE ACCESO',
        year: '2024',
        title: 'SecureEntrance',
        desc: 'Sistema de control de acceso con app de escritorio, dashboard y backend propio.',
        longDesc:
            'Sistema de control de acceso: app de escritorio en PySide6 con dashboard de ingresos (gráficos, exportación a Excel), gestión de usuarios y departamentos, y un backend en Flask con autenticación JWT y SQLite.',
        role: 'Fullstack Developer',
        link: '',
        stack: ['Python', 'PySide6', 'Flask', 'JWT', 'SQLite'],
    },
    {
        num: '06',
        image: '/img/B-Aegis.png',
        category: 'MOBILE',
        year: '2026',
        title: 'B-Aegis',
        desc: 'App móvil de gestión integral de bicicletas: historial verificable, trazabilidad de custodia y registro de mantenimientos.',
        longDesc:
            'Desarrollo de B-Aegis, una app móvil (iOS/Android) que funciona como el equivalente al SOAT de una bicicleta: perfil del vehículo con serial único, cadena de custodia entre propietarios y registro de mantenimientos verificados por talleres o autoreportados. Proyecto en curso, construido con React Native y Expo.',
        role: 'Mobile Developer',
        link: '',
        stack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Zustand'],
    },
]
