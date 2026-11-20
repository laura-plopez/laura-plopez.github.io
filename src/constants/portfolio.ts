import type { ContactLink, Localized, Post, Project, SectionId, SiteContent } from '@/types/portfolio';

export const SECTIONS: SectionId[] = ['about', 'projects', 'experience', 'stack', 'posts', 'agent'];

export const PROFILE = {
  name: 'Laura Pérez',
  role: 'Full Stack & AI Engineer',
  email: 'laura.perezlope@gmail.com',
};

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/laura-plopez' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-p%C3%A9rez-l%C3%B3pez/' },
  { label: 'Substack', href: 'https://substack.com/@lplopez' },
];

export const CV: Localized<string> = {
  es: '/cv/laura-perez-cv-es.pdf',
  en: '/cv/laura-perez-cv-en.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'atelier',
    year: '2026',
    image: '/projects/atelier/cover.webp',
    video: {
      es: '/projects/atelier/atelier-short.mp4',
      en: '/projects/atelier/atelier-short.mp4',
    },
    tags: ['Multi-agent', 'Rails', 'React', 'LLM', 'TypeScript'],
    copy: {
      es: {
        title: 'Atelier',
        summary: 'Una plataforma para que los equipos de desarrollo trabajen con IA sin perder el control.',
        problem: 'La IA ha acelerado a los equipos de desarrollo, y con ellos el descontrol: entran más cambios, más rápido, y cada vez cuesta más saber qué ha cambiado, quién lo hizo y por qué.',
        role: 'Producto y desarrollo completo de una herramienta para recuperar ese control: backend en Rails con arquitectura hexagonal, frontend en React y la orquestación de los agentes.',
        outcome: 'Una plataforma con una herramienta para cada necesidad. Code Review revisa el código con la IA como aliada: acelera la revisión sin que el dev deje de entender cada cambio. Fleet muestra las máquinas virtuales en directo, conectada a Azure y AWS. Insights mide cómo trabaja el equipo para detectar cuellos de botella y seguir las métricas DORA.',
        inProgress: 'Fleet e Insights: ya se ven en la demo y siguen en construcción.',
      },
      en: {
        title: 'Atelier',
        summary: 'A platform that helps dev teams work with AI without losing control.',
        problem: 'AI has sped up development teams, and the chaos along with them: more changes land, faster, and it gets harder to know what changed, who did it and why.',
        role: 'Product and end-to-end development of a tool to win back that control: Rails backend with hexagonal architecture, React frontend and agent orchestration.',
        outcome: 'A platform with a tool for each need. Code Review reviews code with AI as an ally: it speeds up the review while the dev still understands every change. Fleet shows virtual machines live, connected to Azure and AWS. Insights measures how the team works to spot bottlenecks and track DORA metrics.',
        inProgress: 'Fleet and Insights: already shown in the demo and still being built.',
      },
    },
  },
  {
    id: 'converse',
    image: '/projects/converse/cover.webp',
    video: {
      es: '/projects/converse/converse-en.mp4',
      en: '/projects/converse/converse-en.mp4',
    },
    tags: ['Text-to-SQL', 'RLS', 'PII masking', 'LLM', 'Analytics'],
    copy: {
      es: {
        title: 'Converse',
        summary: 'Pregunta a tus datos en lenguaje natural y recibe tablas, gráficas e insights.',
        problem: 'Los datos de una empresa suelen estar al alcance solo de quien sabe SQL. El resto tiene que pedir un informe y esperar.',
        role: 'Producto y desarrollo, como parte del equipo: desde la pregunta en lenguaje natural hasta la consulta, la respuesta y su visualización.',
        outcome: 'Una capa conversacional sobre los datos. Responde con tablas, gráficas y un resumen, y entiende preguntas de seguimiento ("ahora solo el norte, por mes"). Las consultas sobre tablas sensibles pasan por aprobación humana, los datos personales se ocultan antes de llegar al modelo y las consultas que funcionan se convierten en ejemplos para que el sistema aprenda con el uso.',
      },
      en: {
        title: 'Converse',
        summary: 'Ask your data questions in plain language and get tables, charts and insights.',
        problem: 'Company data is usually only within reach of people who know SQL. Everyone else has to request a report and wait.',
        role: 'Product and development as part of the team: from the plain-language question to the query, the answer and its visualisation.',
        outcome: 'A conversational layer over the data. It answers with tables, charts and a summary, and understands follow-up questions ("now only North, by month"). Queries on sensitive tables go through human approval, personal data is masked before it reaches the model, and successful queries become examples so the system learns with use.',
      },
    },
  },
];

export const POSTS: Post[] = [
  {
    title: 'Ciberseguridad en España: el análisis de 2024 que revela la realidad',
    dek: '¿Está España preparada para defenderse en el ciberespacio?',
    readTime: '4 min',
    topic: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    href: 'https://lplopez.substack.com/p/ciberseguridad-en-espana-el-analisis',
  },
  {
    title: 'La batalla legal que definirá el futuro de la IA',
    dek: 'Anthropic frente al mundo del copyright.',
    readTime: '3 min',
    topic: { es: 'IA y copyright', en: 'AI & copyright' },
    href: 'https://lplopez.substack.com/p/la-batalla-legal-que-definira-el',
  },
  {
    title: 'Neuromarketing: cómo las empresas hackean tu mente para que gastes más',
    dek: 'Los sesgos cognitivos que usan para influir en tus compras.',
    readTime: '6 min',
    topic: { es: 'Neuromarketing', en: 'Neuromarketing' },
    href: 'https://lplopez.substack.com/p/neuromarketing-como-las-empresas',
  },
  {
    title: 'Los artistas fantasma de Spotify',
    dek: 'Cuando la música que escuchas no existe.',
    readTime: '3 min',
    topic: { es: 'Música e IA', en: 'Music & AI' },
    href: 'https://lplopez.substack.com/p/los-artistas-fantasma-de-spotify',
  },
];

export const CONTENT: Localized<SiteContent> = {
  es: {
    sections: {
      about: { title: 'Sobre mí', context: 'Del cliente al código' },
      projects: { title: 'Proyectos', context: '2 casos, con tráiler' },
      experience: { title: 'Experiencia', context: 'Trabajo, estudios, certificados e idiomas' },
      stack: { title: 'Stack', context: '4 áreas, de la idea a producción' },
      posts: { title: 'Posts', context: 'Lo que leo y analizo, en Substack' },
      agent: { title: 'Agente', context: 'Pregúntale lo que quieras saber de mí' },
    },
    sidebar: {
      tagline: { before: 'Pienso como ', product: 'producto', middle: ', construyo con ', code: 'código', after: '.' },
      navLabel: 'Secciones',
      viewProjects: 'Ver proyectos',
      nowLabel: 'Ahora',
      now: [
        'Construyendo agentes de IA.',
        'Explicándole a un LLM que no, eso no es lo que dijo el cliente.',
        'Pidiendo un ColaCao y un deploy a producción.',
        'Debuggeando algo que funcionaba ayer.',
        'Convenciendo a un agente de que no invente.',
        'Traduciendo cliente → requisitos → código.',
        'Haciendo git push con fe.',
        'Probando si "solo un cambio rápido" era rápido.',
      ],
      contactLead: 'Escríbeme y vemos cómo puedo ayudarte.',
      downloadCv: 'Descargar CV',
      languageLabel: 'Idioma',
    },
    about: {
      lead: 'Empecé hablando con clientes. Ahora construyo lo que necesitan.',
      body: 'Como Account Manager aprendí que **lo que un cliente pide y lo que necesita no siempre coinciden**. Después pasé al código: web, IoT y plataformas full stack. Hoy, como **AI Engineer**, diseño sistemas de IA desde la conceptualización del producto hasta la arquitectura.',
      steps: [
        { title: 'Entender', body: 'Hablo con clientes, miro los datos y decido qué problema merece resolverse con IA y cuál no.' },
        { title: 'Construir', body: 'Diseño el flujo, integro modelos y escribo el código hasta producción.' },
        { title: 'Medir', body: 'Observabilidad y evals para ver el uso real y decidir qué mejorar.' },
      ],
    },
    projects: {
      problem: 'Problema',
      role: 'Qué hice',
      outcome: 'Resultado',
      status: 'Estado',
      inProgress: 'En curso',
      viewCase: 'Ver caso',
      hideCase: 'Ocultar caso',
      viewProject: 'Ver proyecto',
    },
    experience: {
      tabs: { work: 'Trabajo', edu: 'Estudios', certs: 'Certificados', langs: 'Idiomas' },
      timeline: {
        work: [
          {
            when: '2025 — hoy',
            duration: '1 año y 3 meses',
            title: 'AI Engineer',
            org: 'STEMIA · Salamanca',
            note: 'Desarrollo de sistemas de IA, diseño de arquitecturas y SDD aplicado en agentes integrados en productos de desarrollo a medida. Participación en la fase de conceptualización de productos.',
            tags: ['Agentes', 'Arquitectura', 'Producto'],
          },
          {
            when: '2024',
            duration: '1 año y 3 meses',
            title: 'Full Stack Developer',
            org: 'AIR Institute · Salamanca',
            note: 'Proyectos IoT con trazabilidad de dispositivos de extremo a extremo. APIs y bases de datos PostgreSQL, Clean Architecture y desarrollo full-stack con React.',
            tags: ['IoT', 'PostgreSQL', 'React'],
          },
          {
            when: '2024',
            duration: '3 meses',
            title: 'Frontend Web Developer',
            org: 'InternacionalWeb · Salamanca',
            note: 'Desarrollo en WordPress con personalización de temas y plugins. Optimización del rendimiento con PHP, JavaScript y CSS.',
            tags: ['WordPress', 'PHP', 'JavaScript'],
          },
          {
            when: '2023',
            duration: '1 año y 2 meses',
            title: 'Account Manager',
            org: 'eXperience IT Solutions · Remoto',
            note: 'Coordinación entre equipos técnicos y de ventas. SEO técnico y posicionamiento. Gestión de clientes web y ecommerce.',
            tags: ['SEO', 'Clientes', 'Ecommerce'],
          },
          {
            when: '2020',
            duration: '3 meses',
            title: 'Communications Manager',
            org: 'Rabuso AMC · Leganés',
            note: 'Contenidos web para clientes internacionales. Redacción técnica y publicaciones digitales. Optimización de flujos en CRM.',
            tags: ['Contenido', 'CRM'],
          },
        ],
        edu: [
          {
            when: '2022 — 2024',
            duration: 'Grado superior',
            title: 'Desarrollo de Aplicaciones Multiplataforma',
            org: 'Instituto Medac',
            note: 'Programación, bases de datos, desarrollo móvil y de escritorio.',
            tags: [],
          },
          {
            when: '2015 — 2019',
            duration: 'Grado',
            title: 'Comunicación Audiovisual',
            org: 'Universidad Rey Juan Carlos',
            note: 'Narrativa, producción audiovisual y comunicación.',
            tags: [],
          },
        ],
        certs: [
          { when: 'jun. 2026', duration: '', title: 'Introduction to Model Context Protocol', org: 'Anthropic', note: '', tags: [] },
          { when: 'jun. 2026', duration: '', title: 'Introduction to Claude Cowork', org: 'Anthropic', note: '', tags: [] },
          { when: 'jun. 2026', duration: '', title: 'Claude Code in Action', org: 'Anthropic', note: '', tags: [] },
          { when: '', duration: '', title: 'Python Essentials 1 y 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Fundamentos de Git', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
          { when: '', duration: '', title: 'Marketing Digital', org: 'Google Actívate', note: '', tags: [] },
        ],
        langs: [
          { when: '', duration: '', title: 'Español', org: 'Nativo', note: '', tags: [] },
          { when: '', duration: '', title: 'Inglés', org: 'Profesional', note: 'Gestión de clientes y comunicación técnica en inglés.', tags: [] },
        ],
      },
    },
    stack: {
      areas: [
        {
          name: 'IA y agentes',
          description: 'Modelos, orquestación y contexto',
          tools: ['Python', 'API de Claude', 'OpenAI API', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'n8n'],
        },
        {
          name: 'Desarrollo',
          description: 'De la API a la interfaz',
          tools: ['TypeScript', 'JavaScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'APIs REST', 'Clean Architecture', 'IoT'],
        },
        {
          name: 'Producto',
          description: 'Qué se construye y para quién',
          tools: ['Conceptualización', 'Spec-Driven Development', 'PRD', 'Discovery', 'Figma'],
        },
        {
          name: 'Entrega',
          description: 'Versionar, desplegar y observar',
          tools: ['Git', 'GitHub Actions', 'Azure', 'Grafana', 'Claude Code'],
        },
      ],
    },
    posts: {
      readTime: 'de lectura',
      all: 'Ver todos los posts en Substack',
    },
    agent: {
      name: 'Agente de Laura',
      status: { idle: 'Disponible', thinking: 'Pensando…', talking: 'Respondiendo…' },
      greeting: 'Hola, soy el agente de Laura. Pregúntame por su experiencia, su stack o cómo trabaja. Y si te apetece, juega al traductor de clientes.',
      placeholder: 'Escribe tu pregunta…',
      send: 'Enviar',
      fallback: 'Todavía no sé responder a eso. Puedes escribirle a Laura directamente: tienes su email en el lateral.',
      disclaimer: 'Respuestas generadas con IA (Gemini) a partir de mi portfolio. Pueden contener errores.',
      suggestionsTitle: 'Prueba a preguntar',
      suggestions: [
        {
          question: '¿Qué hace Laura en STEMIA?',
          answer: 'Es AI Engineer en STEMIA. Desarrolla sistemas de IA y diseña su arquitectura, aplicando SDD a agentes integrados en productos a medida. Participa activamente en la conceptualización de cada producto: define qué se construye antes de construirlo.',
        },
        {
          question: '¿Es más de producto o de código?',
          answer: 'De los dos, y es intencionado. Puede definir un problema con usuarios y datos, y después implementarlo ella misma. Eso reduce traspasos y acelera el aprendizaje.',
        },
        {
          question: '¿Qué stack de IA usa?',
          answer: 'Trabaja sobre todo con Python. Integra modelos de Claude y OpenAI (GPT), orquesta agentes con LangChain y LangGraph, los conecta a herramientas con MCP y les da contexto con RAG. Automatiza flujos con n8n y desarrolla con Claude Code.',
        },
        {
          question: '¿En qué proyectos encaja?',
          answer: 'En equipos donde la IA tiene que convertirse en producto: definir el caso de uso, construirlo de principio a fin y comprobar que aporta algo real.',
        },
        {
          question: '¿Cuándo no usaría IA?',
          answer: 'Cuando una regla, un script o un buen formulario resuelven el problema. Un modelo añade coste, latencia y respuestas que hay que vigilar, así que solo compensa cuando aporta algo que lo simple no puede: entender lenguaje, resumir, clasificar o razonar sobre información desordenada.',
        },
        {
          question: '¿Ha trabajado con clientes?',
          answer: 'Sí, mucho. Antes de pasar al código fue account manager y responsable de comunicación: gestionaba clientes en español e inglés con Salesforce y coordinaba a los equipos técnicos y de ventas.',
        },
        {
          question: '¿Trabaja en remoto?',
          answer: 'Vive en Salamanca. Ahora trabaja en formato híbrido y antes ha trabajado en remoto, así que se adapta bien a los dos.',
        },
      ],
      game: {
        title: 'Traductor de clientes',
        pitch: '5 casos reales (más o menos). ¿Aciertas qué necesitaba el cliente de verdad?',
        play: 'Jugar',
        caseOf: 'Caso {n} de {total}',
        result: 'Resultado',
        question: 'Eso pidió el cliente. ¿Qué necesitaba de verdad?',
        rightLines: ['¡Exacto! Eso es lo que necesitaba.', '¡Bien visto! Has leído entre líneas.', 'Traducción perfecta.'],
        wrongLine: 'Casi. La correcta está en verde.',
        solved: '¡Caso resuelto!',
        almost: 'Casi…',
        next: 'Siguiente caso',
        seeResult: 'Ver resultado',
        scoreLabel: 'clientes traducidos',
        verdicts: {
          perfect: 'Traduces clientes como Laura: lo que piden y lo que necesitan no siempre coinciden, y lo has visto siempre.',
          good: 'Nada mal: casi siempre lees entre líneas.',
          low: 'Los clientes son difíciles de traducir. Por eso Laura empieza siempre escuchando.',
        },
        wellPlayed: '¡Bien jugado!',
        nextTime: 'La próxima sale',
        again: 'Jugar otra vez',
        backToChat: 'Volver al chat',
        exit: 'Salir del juego',
        paused: 'Juego en pausa: llevas {score} de {total} clientes traducidos. Pregúntame lo que quieras.',
        summary: 'Has traducido {score} de {total} clientes. ¿Quieres saber cómo trabaja Laura con los de verdad? Pregúntame.',
        cases: [
          {
            asked: 'Queremos un chatbot con IA.',
            right: 'Un buscador sobre sus documentos internos que citara la fuente de cada respuesta.',
            wrong: ['Un chatbot con el modelo más grande del mercado.', 'Una app móvil con asistente de voz.'],
          },
          {
            asked: 'Usad el modelo más potente.',
            right: 'Uno más pequeño y barato que respondía igual de bien, comprobado con evals.',
            wrong: ['El modelo más caro, por si acaso.', 'Entrenar un modelo propio desde cero.'],
          },
          {
            asked: 'Necesitamos un agente de IA.',
            right: 'Un script que se ejecuta cada lunes a las 9:00.',
            wrong: ['Un sistema multi-agente con memoria.', 'Un agente que decide solo cuándo actuar.'],
          },
          {
            asked: 'Un dashboard con todas las métricas.',
            right: 'Tres números que mirar cada lunes y una alerta cuando alguno se tuerce.',
            wrong: ['Cuarenta gráficas en tiempo real.', 'Un informe en PDF de treinta páginas.'],
          },
          {
            asked: 'Que sea intuitivo.',
            right: 'Que se pareciera al Excel que ya usaban.',
            wrong: ['Un rediseño completo con animaciones.', 'Un tutorial interactivo de diez pasos.'],
          },
        ],
      },
    },
  },
  en: {
    sections: {
      about: { title: 'About', context: 'From client to code' },
      projects: { title: 'Projects', context: '2 case studies, with trailers' },
      experience: { title: 'Experience', context: 'Work, education, certifications and languages' },
      stack: { title: 'Stack', context: '4 areas, from idea to production' },
      posts: { title: 'Posts', context: 'What I read and analyse, on Substack' },
      agent: { title: 'Agent', context: 'Ask it anything you want to know about me' },
    },
    sidebar: {
      tagline: { before: 'I think in ', product: 'product', middle: ' and build in ', code: 'code', after: '.' },
      navLabel: 'Sections',
      viewProjects: 'See projects',
      nowLabel: 'Now',
      now: [
        'Building AI agents.',
        'Explaining to an LLM that no, that’s not what the client said.',
        'Ordering a ColaCao and a production deploy.',
        'Debugging something that worked yesterday.',
        'Convincing an agent not to make things up.',
        'Translating client → requirements → code.',
        'Running git push on faith.',
        'Testing whether "just a quick change" was quick.',
      ],
      contactLead: 'Drop me a line and let’s see how I can help.',
      downloadCv: 'Download CV',
      languageLabel: 'Language',
    },
    about: {
      lead: 'I started out talking to clients. Now I build what they need.',
      body: 'As an Account Manager I learned that **what a client asks for and what they need don’t always match**. Then I moved into code: web, IoT and full stack platforms. Today, as an **AI Engineer**, I design AI systems from product conceptualisation to architecture.',
      steps: [
        { title: 'Understand', body: 'I talk to clients, look at the data and decide which problems are worth solving with AI, and which aren’t.' },
        { title: 'Build', body: 'I design the flow, integrate models and write the code all the way to production.' },
        { title: 'Measure', body: 'Observability and evals to see real usage and decide what to improve.' },
      ],
    },
    projects: {
      problem: 'Problem',
      role: 'What I did',
      outcome: 'Outcome',
      status: 'Status',
      inProgress: 'In progress',
      viewCase: 'View case',
      hideCase: 'Hide case',
      viewProject: 'View project',
    },
    experience: {
      tabs: { work: 'Work', edu: 'Education', certs: 'Certifications', langs: 'Languages' },
      timeline: {
        work: [
          {
            when: '2025 — now',
            duration: '1 year 3 months',
            title: 'AI Engineer',
            org: 'STEMIA · Salamanca',
            note: 'Building AI systems, designing architectures and applying SDD to agents integrated into custom-built products. Involved in the product conceptualisation phase.',
            tags: ['Agents', 'Architecture', 'Product'],
          },
          {
            when: '2024',
            duration: '1 year 3 months',
            title: 'Full Stack Developer',
            org: 'AIR Institute · Salamanca',
            note: 'IoT projects with end-to-end device traceability. APIs and PostgreSQL databases, Clean Architecture and full-stack development with React.',
            tags: ['IoT', 'PostgreSQL', 'React'],
          },
          {
            when: '2024',
            duration: '3 months',
            title: 'Frontend Web Developer',
            org: 'InternacionalWeb · Salamanca',
            note: 'WordPress development with custom themes and plugins. Performance optimisation with PHP, JavaScript and CSS.',
            tags: ['WordPress', 'PHP', 'JavaScript'],
          },
          {
            when: '2023',
            duration: '1 year 2 months',
            title: 'Account Manager',
            org: 'eXperience IT Solutions · Remote',
            note: 'Coordinating technical and sales teams. Technical SEO and search positioning. Managing web and ecommerce clients.',
            tags: ['SEO', 'Clients', 'Ecommerce'],
          },
          {
            when: '2020',
            duration: '3 months',
            title: 'Communications Manager',
            org: 'Rabuso AMC · Leganés',
            note: 'Web content for international clients. Technical writing and digital publishing. CRM workflow optimisation.',
            tags: ['Content', 'CRM'],
          },
        ],
        edu: [
          {
            when: '2022 — 2024',
            duration: 'Higher VET',
            title: 'Multiplatform App Development',
            org: 'Instituto Medac',
            note: 'Programming, databases, mobile and desktop development.',
            tags: [],
          },
          {
            when: '2015 — 2019',
            duration: 'Degree',
            title: 'Audiovisual Communication',
            org: 'Universidad Rey Juan Carlos',
            note: 'Narrative, audiovisual production and communication.',
            tags: [],
          },
        ],
        certs: [
          { when: 'Jun 2026', duration: '', title: 'Introduction to Model Context Protocol', org: 'Anthropic', note: '', tags: [] },
          { when: 'Jun 2026', duration: '', title: 'Introduction to Claude Cowork', org: 'Anthropic', note: '', tags: [] },
          { when: 'Jun 2026', duration: '', title: 'Claude Code in Action', org: 'Anthropic', note: '', tags: [] },
          { when: '', duration: '', title: 'Python Essentials 1 & 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Git Fundamentals', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
          { when: '', duration: '', title: 'Digital Marketing', org: 'Google Actívate', note: '', tags: [] },
        ],
        langs: [
          { when: '', duration: '', title: 'Spanish', org: 'Native', note: '', tags: [] },
          { when: '', duration: '', title: 'English', org: 'Professional', note: 'Client management and technical communication in English.', tags: [] },
        ],
      },
    },
    stack: {
      areas: [
        {
          name: 'AI & agents',
          description: 'Models, orchestration and context',
          tools: ['Python', 'Claude API', 'OpenAI API', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'n8n'],
        },
        {
          name: 'Development',
          description: 'From API to interface',
          tools: ['TypeScript', 'JavaScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Clean Architecture', 'IoT'],
        },
        {
          name: 'Product',
          description: 'What gets built and for whom',
          tools: ['Product shaping', 'Spec-Driven Development', 'PRD', 'Discovery', 'Figma'],
        },
        {
          name: 'Delivery',
          description: 'Version, ship and observe',
          tools: ['Git', 'GitHub Actions', 'Azure', 'Grafana', 'Claude Code'],
        },
      ],
    },
    posts: {
      readTime: 'read',
      all: 'See all posts on Substack',
    },
    agent: {
      name: 'Laura’s agent',
      status: { idle: 'Available', thinking: 'Thinking…', talking: 'Answering…' },
      greeting: 'Hi, I’m Laura’s agent. Ask me about her experience, her stack or how she works. And if you fancy it, play the client translator.',
      placeholder: 'Type your question…',
      send: 'Send',
      fallback: 'I can’t answer that yet. You can write to Laura directly: her email is in the sidebar.',
      disclaimer: 'Answers generated with AI (Gemini) from my portfolio. They may contain mistakes.',
      suggestionsTitle: 'Try asking',
      suggestions: [
        {
          question: 'What does Laura do at STEMIA?',
          answer: 'She’s an AI Engineer at STEMIA. She builds AI systems and designs their architecture, applying SDD to agents integrated into custom-built products. She plays an active role in conceptualising each product, shaping what gets built before it’s built.',
        },
        {
          question: 'Is she more product or code?',
          answer: 'Both, on purpose. She can frame a problem with users and data, then implement it herself. That means fewer hand-offs and faster learning.',
        },
        {
          question: 'What AI stack does she use?',
          answer: 'She works mostly in Python. She integrates Claude and OpenAI (GPT) models, orchestrates agents with LangChain and LangGraph, connects them to tools with MCP and gives them context with RAG. She automates workflows with n8n and builds with Claude Code.',
        },
        {
          question: 'What projects does she fit?',
          answer: 'Teams where AI has to become a product: defining the use case, building it end to end and checking it delivers something real.',
        },
        {
          question: 'When wouldn’t she use AI?',
          answer: 'When a rule, a script or a good form solves the problem. A model adds cost, latency and answers you have to keep an eye on, so it’s only worth it when it brings something simpler tools can’t: understanding language, summarising, classifying or reasoning over messy information.',
        },
        {
          question: 'Has she worked with clients?',
          answer: 'Yes, a lot. Before moving into code she was an account manager and head of communications, managing clients in Spanish and English with Salesforce and coordinating technical and sales teams.',
        },
        {
          question: 'Does she work remotely?',
          answer: 'She lives in Salamanca. She currently works hybrid and has worked fully remote before, so she’s comfortable with both.',
        },
      ],
      game: {
        title: 'Client translator',
        pitch: '5 true stories (more or less). Can you guess what the client actually needed?',
        play: 'Play',
        caseOf: 'Case {n} of {total}',
        result: 'Result',
        question: 'That’s what the client asked for. What did they actually need?',
        rightLines: ['Exactly! That’s what they needed.', 'Well spotted! You read between the lines.', 'Perfect translation.'],
        wrongLine: 'Close. The right one is in green.',
        solved: 'Case solved!',
        almost: 'Close…',
        next: 'Next case',
        seeResult: 'See result',
        scoreLabel: 'clients translated',
        verdicts: {
          perfect: 'You translate clients like Laura: what they ask for and what they need don’t always match, and you saw it every time.',
          good: 'Not bad: you read between the lines most of the time.',
          low: 'Clients are hard to translate. That’s why Laura always starts by listening.',
        },
        wellPlayed: 'Well played!',
        nextTime: 'Next time',
        again: 'Play again',
        backToChat: 'Back to the chat',
        exit: 'Leave the game',
        paused: 'Game paused: you’ve translated {score} of {total} clients so far. Ask me anything.',
        summary: 'You translated {score} of {total} clients. Want to know how Laura works with real ones? Ask me.',
        cases: [
          {
            asked: 'We want an AI chatbot.',
            right: 'A search over their internal documents that cited the source of every answer.',
            wrong: ['A chatbot running the biggest model on the market.', 'A mobile app with a voice assistant.'],
          },
          {
            asked: 'Use the most powerful model.',
            right: 'A smaller, cheaper one that answered just as well, proven with evals.',
            wrong: ['The most expensive model, just in case.', 'Training their own model from scratch.'],
          },
          {
            asked: 'We need an AI agent.',
            right: 'A script that runs every Monday at 9:00.',
            wrong: ['A multi-agent system with memory.', 'An agent that decides on its own when to act.'],
          },
          {
            asked: 'A dashboard with every metric.',
            right: 'Three numbers to check every Monday, and an alert when one goes off track.',
            wrong: ['Forty real-time charts.', 'A thirty-page PDF report.'],
          },
          {
            asked: 'Make it intuitive.',
            right: 'Make it look like the Excel sheet they already used.',
            wrong: ['A full redesign with animations.', 'A ten-step interactive tutorial.'],
          },
        ],
      },
    },
  },
};
