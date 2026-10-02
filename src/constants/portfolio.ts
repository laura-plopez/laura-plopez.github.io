import type { ContactLink, Localized, Post, Project, SiteContent, TabId } from '@/types/portfolio';

export const TABS: TabId[] = ['home', 'projects', 'about', 'stack', 'writing', 'faq', 'contact'];

export const PROFILE = {
  name: 'Laura Pérez',
  role: 'Full Stack & AI Engineer',
  wordmark: 'laura pérez',
  email: 'laura.perezlope@gmail.com',
};

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/laura-plopez' },
  { label: 'LinkedIn', href: '' },
  { label: 'CV', href: '' },
];

export const PROJECTS: Project[] = [
  {
    id: 'asistente-ia',
    kind: 'ai',
    year: '2026',
    tags: ['LLM', 'RAG', 'Evals', 'Python'],
    copy: {
      es: {
        title: 'Asistente con IA',
        summary: 'Un modelo de lenguaje integrado en un flujo real de usuario.',
        problem: 'Describe aquí qué problema resolvía y para quién.',
        role: 'Caso de uso, integración del modelo, evaluación e interfaz.',
        outcome: 'La métrica o el aprendizaje que dejó.',
      },
      en: {
        title: 'AI assistant',
        summary: 'A language model built into a real user flow.',
        problem: 'Describe the problem and who it was for.',
        role: 'Use case, model integration, evaluation and interface.',
        outcome: 'The metric or learning it produced.',
      },
    },
  },
  {
    id: 'este-portfolio',
    kind: 'code',
    year: '2026',
    href: 'https://github.com/laura-plopez/laura-plopez.github.io',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    copy: {
      es: {
        title: 'Este portfolio',
        summary: 'Sitio personal bilingüe hecho con React, TypeScript y Tailwind.',
        problem: 'Necesitaba un portfolio que mostrara a la vez criterio visual y capacidad técnica.',
        role: 'Diseño, arquitectura del proyecto y despliegue continuo.',
        outcome: 'Web estática en GitHub Pages con build, lint y deploy automáticos en cada push.',
      },
      en: {
        title: 'This portfolio',
        summary: 'Bilingual personal site built with React, TypeScript and Tailwind.',
        problem: 'I needed a portfolio that showed visual judgement and technical skill at once.',
        role: 'Design, project architecture and continuous deployment.',
        outcome: 'Static site on GitHub Pages with automated build, lint and deploy on every push.',
      },
    },
  },
  {
    id: 'proyecto-hibrido',
    kind: 'both',
    year: '2025',
    tags: ['Discovery', 'React', 'Analytics'],
    copy: {
      es: {
        title: 'Proyecto híbrido',
        summary: 'Del discovery con usuarios a la funcionalidad en producción.',
        problem: 'Describe aquí el problema.',
        role: 'Qué decidiste y qué construiste.',
        outcome: 'Resultado medible.',
      },
      en: {
        title: 'Hybrid project',
        summary: 'From user discovery to a shipped feature.',
        problem: 'Describe the problem here.',
        role: 'What you decided and built.',
        outcome: 'Measurable outcome.',
      },
    },
  },
  {
    id: 'proyecto-producto',
    kind: 'product',
    year: '2025',
    tags: ['Roadmap', 'A/B testing', 'Copy'],
    copy: {
      es: {
        title: 'Proyecto de producto',
        summary: 'Priorización y experimentos sobre un flujo clave.',
        problem: 'Describe aquí el problema.',
        role: 'Tu papel en la decisión.',
        outcome: 'Resultado medible.',
      },
      en: {
        title: 'Product project',
        summary: 'Prioritisation and experiments on a key flow.',
        problem: 'Describe the problem here.',
        role: 'Your role in the decision.',
        outcome: 'Measurable outcome.',
      },
    },
  },
];

export const POSTS: Post[] = [
  {
    title: 'Ciberseguridad en España: El análisis de 2024 que revela la realidad',
    dek: '¿Te has preguntado alguna vez si España está realmente preparada para defenderse en el ciberespacio? Yo también pensaba que sí hasta que me puse a investigar los datos oficiales de 2024.',
    readTime: '4 min',
    href: 'https://lplopez.substack.com/p/ciberseguridad-en-espana-el-analisis',
  },
  {
    title: 'La batalla legal que definirá el futuro de la IA: Anthropic vs el mundo del copyright',
    dek: 'Breve análisis de la crisis legal que está sacudiendo a la industria de la inteligencia artificial.',
    readTime: '3 min',
    href: 'https://lplopez.substack.com/p/la-batalla-legal-que-definira-el',
  },
  {
    title: 'Neuromarketing: Cómo las empresas hackean tu mente para que gastes más',
    dek: 'Un análisis de los sesgos cognitivos que explotan las empresas para influir en tus decisiones de compra y vaciar tu cartera.',
    readTime: '6 min',
    href: 'https://lplopez.substack.com/p/neuromarketing-como-las-empresas',
  },
  {
    title: 'Los Artistas Fantasma de Spotify: cuando la música que escuchas no existe',
    dek: '¿Usas Spotify? Pues es muy probable que hayas escuchado música de artistas que… no existen.',
    readTime: '3 min',
    href: 'https://lplopez.substack.com/p/los-artistas-fantasma-de-spotify',
  },
];

export const CONTENT: Localized<SiteContent> = {
  es: {
    tabs: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      stack: 'Stack',
      writing: 'Escritos',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    sidebar: {
      location: 'Salamanca, ES',
      navLabel: 'Secciones',
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
      languageLabel: 'Idioma',
    },
    home: {
      kicker: 'Producto · Código · IA',
      title: { main: 'Full Stack', connector: '&', accent: 'AI Engineer' },
      subtitle: 'Pienso como producto, construyo con código.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Escríbeme',
      steps: [
        { title: 'Entender', body: 'Hablo con clientes, miro los datos y defino qué problema merece resolverse con IA y cuál no.' },
        { title: 'Construir', body: 'Diseño el flujo, integro modelos y escribo el código para desplegar a producción.' },
        { title: 'Medir', body: 'Integro observabilidad y evaluación para mantener trazabilidad del uso real y decidir qué mejorar en la siguiente iteración.' },
      ],
      selected: 'Proyectos seleccionados',
      allProjects: 'Ver todos',
    },
    projects: {
      filters: { all: 'Todos', ai: 'IA', both: 'Híbrido', product: 'Producto', code: 'Código' },
      kinds: { ai: 'IA', both: 'Híbrido', product: 'Producto', code: 'Código' },
      problem: 'Problema',
      role: 'Qué hice',
      outcome: 'Resultado',
      viewProject: 'Ver proyecto',
      close: 'Cerrar',
      imagePlaceholder: '[ imagen del proyecto ]',
    },
    about: {
      lead: 'Empecé hablando con clientes. Ahora construyo lo que necesitan.',
      body: [
        'Durante unos años trabajé como Account Manager y responsable de comunicación. Gestionaba clientes nacionales e internacionales, con herramientas CRM y muchas horas al teléfono. En esta etapa aprendí a escuchar lo que un cliente pide de verdad, que no siempre es lo que dice.',
        'Después decidí estudiar Desarrollo de Aplicaciones Multiplataforma y pasé al código: web, IoT y plataformas full stack, cada vez más ligados a proyectos de IA. A día de hoy desarrollo flujos de agentes de IA para empresas como producto SaaS, desde la idea hasta producción.',
      ],
      highlightsTitle: 'Lo que traigo',
      highlights: [
        { title: 'Cliente + código', body: 'Entiendo el problema de negocio y sé construir la solución.' },
        { title: 'ES / EN', body: 'Trabajo con clientes y equipos en los dos idiomas.' },
        { title: 'Back, front e IA', body: 'Me muevo por todo el stack, de la API al agente.' },
      ],
      timelineTabs: { work: 'Experiencia', edu: 'Estudios', courses: 'Cursos', langs: 'Idiomas' },
      timeline: {
        work: [
          {
            when: '2025',
            duration: '1 año',
            title: 'AI Engineer',
            org: 'STEMIA, Salamanca',
            note: 'Desarrollo de sistemas de IA: agentes y automatización integrados en procesos reales de negocio. Desarrollo y conceptualización de producto.',
            tags: ['Agentes', 'Automatización', 'Producto'],
          },
          {
            when: '2024',
            duration: '1 año 3 meses',
            title: 'Full Stack Developer',
            org: 'AIR Institute, Salamanca',
            note: 'Proyectos IoT con trazabilidad de dispositivos de extremo a extremo. APIs y bases de datos PostgreSQL, Clean Architecture y desarrollo full-stack con React.',
            tags: ['IoT', 'PostgreSQL', 'React'],
          },
          {
            when: '2024',
            duration: '3 meses',
            title: 'Frontend Web Developer',
            org: 'InternacionalWeb, Salamanca',
            note: 'Desarrollo en WordPress con personalización de temas y plugins. Optimización del rendimiento con PHP, JavaScript y CSS.',
            tags: ['WordPress', 'PHP', 'JavaScript'],
          },
          {
            when: '2023',
            duration: '1 año 2 meses',
            title: 'Account Manager',
            org: 'eXperience IT Solutions, Remoto',
            note: 'Coordinación entre equipos técnicos y de ventas. SEO técnico y posicionamiento. Gestión de clientes web y ecommerce.',
            tags: ['SEO', 'Clientes', 'Ecommerce'],
          },
          {
            when: '2020',
            duration: '3 meses',
            title: 'Communications Manager',
            org: 'Rabuso AMC, Leganés',
            note: 'Contenidos web para clientes internacionales. Redacción técnica y publicaciones digitales. Optimización de flujos en CRM.',
            tags: ['Contenido', 'CRM'],
          },
        ],
        edu: [
          {
            when: '2022 – 2024',
            duration: 'Grado superior',
            title: 'Desarrollo de Aplicaciones Multiplataforma',
            org: 'Instituto Medac',
            note: 'Programación, bases de datos, desarrollo móvil y de escritorio.',
            tags: ['DAM'],
          },
          {
            when: '2015 – 2019',
            duration: 'Grado',
            title: 'Comunicación Audiovisual',
            org: 'Universidad Rey Juan Carlos',
            note: 'Narrativa, producción audiovisual y comunicación.',
            tags: [],
          },
        ],
        courses: [
          { when: 'jun. 2026', duration: '', title: 'Introduction to Model Context Protocol', org: 'Anthropic', note: '', tags: [] },
          { when: 'jun. 2026', duration: '', title: 'Introduction to Claude Cowork', org: 'Anthropic', note: '', tags: [] },
          { when: 'jun. 2026', duration: '', title: 'Claude Code in Action', org: 'Anthropic', note: '', tags: [] },
          { when: '', duration: '', title: 'Python Essentials 1 y 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Fundamentos de Git', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Marketing Digital', org: 'Google Actívate', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
        ],
        langs: [
          { when: '', duration: '', title: 'Español', org: 'Nativo', note: '', tags: [] },
          {
            when: '',
            duration: '',
            title: 'Inglés',
            org: 'Profesional',
            note: 'Gestión de clientes y comunicación técnica en inglés.',
            tags: [],
          },
        ],
      },
    },
    stack: {
      intro: 'Dos mitades de un mismo perfil: lo que necesito para entender a un cliente y decidir qué construir, y lo que uso para construirlo.',
      columns: [
        {
          title: 'Producto',
          description: 'Del primer contacto con el cliente a un producto definido: qué se construye y para quién.',
          groups: [
            {
              name: 'Estrategia',
              items: [
                { name: 'Conceptualización de producto', note: 'idea → requisitos', monogram: 'CP' },
                { name: 'Automatización de procesos', note: 'procesos de negocio', monogram: 'AP' },
              ],
            },
            {
              name: 'Definición y diseño',
              items: [
                { name: 'Spec-Driven Development', note: 'specs como fuente de verdad', monogram: 'SDD' },
                { name: 'PRD', note: 'requisitos de producto', monogram: 'PRD' },
                { name: 'Figma', note: 'diseño, prototipos', logo: 'figma' },
              ],
            },
            {
              name: 'Clientes',
              items: [
                { name: 'Discovery', note: 'entrevistas con clientes', monogram: 'DI' },
                { name: 'Salesforce', note: 'CRM', monogram: 'SF' },
              ],
            },
          ],
        },
        {
          title: 'Técnico',
          description: 'Full stack con foco en IA: del agente a la interfaz, pasando por la API, los datos y el despliegue.',
          groups: [
            {
              name: 'IA',
              items: [
                { name: 'Python', note: 'IA, scripts', logo: 'python' },
                { name: 'API de Claude', note: 'modelos de Anthropic', logo: 'anthropic' },
                { name: 'OpenAI API', note: 'modelos GPT', monogram: 'OA' },
                { name: 'LangChain', note: 'orquestación', logo: 'langchain' },
                { name: 'LangGraph', note: 'flujos de agentes', logo: 'langgraph' },
                { name: 'MCP', note: 'agentes ↔ herramientas', logo: 'modelcontextprotocol' },
                { name: 'RAG', note: 'recuperación de contexto', monogram: 'RAG' },
                { name: 'n8n', note: 'automatización de flujos', logo: 'n8n' },
                { name: 'Claude Code', note: 'desarrollo con IA', logo: 'claude' },
              ],
            },
            {
              name: 'Frontend',
              items: [
                { name: 'React', note: 'UI', logo: 'react' },
                { name: 'TypeScript', note: 'tipado', logo: 'typescript' },
                { name: 'JavaScript', note: 'web', logo: 'javascript' },
                { name: 'Tailwind CSS', note: 'estilos', logo: 'tailwindcss' },              ],
            },
            {
              name: 'Backend y datos',
              items: [
                { name: 'Python', note: 'APIs, servicios', logo: 'python' },
                { name: 'PostgreSQL', note: 'datos', logo: 'postgresql' },                { name: 'APIs', note: 'REST', monogram: 'API' },
                { name: 'Clean Architecture', note: 'diseño', monogram: 'CA' },
                { name: 'IoT', note: 'trazabilidad', monogram: 'IoT' },
              ],
            },
            {
              name: 'Entrega y observabilidad',
              items: [
                { name: 'Git', note: 'versiones', logo: 'git' },
                { name: 'GitHub', note: 'repos', logo: 'github' },                { name: 'GitHub Actions', note: 'CI/CD', logo: 'githubactions' },
                { name: 'GitHub Pages', note: 'hosting', logo: 'githubpages' },
                { name: 'Azure', note: 'cloud', monogram: 'AZ' },
                { name: 'Grafana', note: 'monitorización, dashboards', logo: 'grafana' },
              ],
            },
          ],
        },
      ],
    },
    writing: {
      lead: 'Lectura y reflexión sobre los papers que más me llaman la atención.',
    },
    faq: {
      lead: 'Lo que suelen preguntarme en las primeras conversaciones.',
      items: [
        {
          question: '¿Qué haces exactamente?',
          answer: 'Construyo productos con inteligencia artificial. Eso incluye decidir dónde aporta valor un modelo, integrarlo, diseñar cómo lo usa la gente y medir si funciona.',
        },
        {
          question: '¿Eres más de producto o de código?',
          answer: 'De los dos, y es intencionado. Puedo definir un problema con usuarios y datos, y después implementarlo yo misma. Eso reduce traspasos y acelera el aprendizaje.',
        },
        {
          question: '¿En qué tipo de proyectos encajas?',
          answer: 'En equipos donde la IA tiene que convertirse en producto: definir el caso de uso, construirlo de principio a fin y comprobar que aporta algo real.',
        },
        {
          question: '¿Trabajas en remoto?',
          answer: 'Sí. Estoy en Toledo (España) y trabajo en remoto o híbrido en Madrid.',
        },
        {
          question: '¿Cómo colaboras con diseño?',
          answer: 'Trabajo sobre Figma y prototipo directamente en código cuando hace falta validar una interacción, sobre todo en flujos con IA, donde el comportamiento importa tanto como la pantalla.',
        },
      ],
    },
    bot: {
      title: 'Pregúntale a mi bot',
      subtitle: 'Responde sobre mi experiencia, stack y forma de trabajar',
      greeting: 'Hola, soy el asistente de Laura. Pregúntame por su experiencia, su stack o cómo trabaja.',
      placeholder: 'Escribe tu pregunta…',
      send: 'Enviar',
      fallback: 'Todavía no sé responder a eso. Puedes escribirle a Laura directamente desde Contacto.',
      suggestions: [
        {
          question: '¿Qué hace Laura en STEMIA?',
          answer: 'Es AI Engineer en STEMIA. Desarrolla agentes de IA para clientes y empresas como producto SaaS, desde la idea hasta producción, y automatizaciones integradas en procesos reales de negocio.',
        },
        {
          question: '¿Qué stack de IA usa?',
          answer: 'Trabaja sobre todo con Python. Integra modelos de Claude y OpenAI (GPT), orquesta agentes con LangChain y LangGraph, los conecta a herramientas con MCP y les da contexto con RAG. Automatiza flujos con n8n y desarrolla con Claude Code.',
        },
        {
          question: '¿Ha trabajado con clientes?',
          answer: 'Sí, mucho. Antes de pasar al código fue account manager y responsable de comunicación: gestionaba clientes en español e inglés con Salesforce y coordinaba a los equipos técnicos y de ventas.',
        },
        {
          question: '¿Trabaja en remoto?',
          answer: 'Sí. Trabaja en remoto o en formato híbrido.',
        },
      ],
    },
    contact: {
      lead: 'Escríbeme y vemos cómo puedo ayudarte.',
      form: { name: 'Nombre', topic: 'Motivo', message: 'Mensaje', send: 'Enviar' },
      topics: { job: 'Oportunidad', collab: 'Colaboración', hello: 'Solo saludar' },
      sent: {
        title: 'Gracias.',
        body: 'Se ha abierto tu programa de correo con el mensaje listo. Solo falta enviarlo.',
        fallback: 'Si no se ha abierto, escríbeme directamente a',
      },
    },
  },
  en: {
    tabs: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      stack: 'Stack',
      writing: 'Writing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    sidebar: {
      location: 'Salamanca, ES',
      navLabel: 'Sections',
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
      languageLabel: 'Language',
    },
    home: {
      kicker: 'Product · Code · AI',
      title: { main: 'Full Stack', connector: '&', accent: 'AI Engineer' },
      subtitle: 'I think in product and build in code.',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      steps: [
        { title: 'Understand', body: 'I talk to clients, look at the data and decide which problems are worth solving with AI, and which aren’t.' },
        { title: 'Build', body: 'I design the flow, integrate models and write the code to ship it to production.' },
        { title: 'Measure', body: 'I build in observability and evaluation to keep real usage traceable and decide what to improve in the next iteration.' },
      ],
      selected: 'Selected projects',
      allProjects: 'See all',
    },
    projects: {
      filters: { all: 'All', ai: 'AI', both: 'Hybrid', product: 'Product', code: 'Code' },
      kinds: { ai: 'AI', both: 'Hybrid', product: 'Product', code: 'Code' },
      problem: 'Problem',
      role: 'What I did',
      outcome: 'Outcome',
      viewProject: 'View project',
      close: 'Close',
      imagePlaceholder: '[ project image ]',
    },
    about: {
      lead: 'I started out talking to clients. Now I build what they need.',
      body: [
        'For a few years I worked as an Account Manager and head of communications, managing national and international clients with CRM tools and plenty of hours on the phone. That’s when I learned to hear what a client actually needs, which isn’t always what they say.',
        'Then I decided to study Multiplatform App Development and moved into code: web, IoT and full stack platforms, increasingly tied to AI projects. Today I build AI agent workflows for businesses as a SaaS product, from idea to production.',
      ],
      highlightsTitle: 'What I bring',
      highlights: [
        { title: 'Client + code', body: 'I understand the business problem and can build the solution.' },
        { title: 'ES / EN', body: 'I work with clients and teams in both languages.' },
        { title: 'Back, front & AI', body: 'I move across the whole stack, from API to agent.' },
      ],
      timelineTabs: { work: 'Experience', edu: 'Education', courses: 'Courses', langs: 'Languages' },
      timeline: {
        work: [
          {
            when: '2025',
            duration: '1 year',
            title: 'AI Engineer',
            org: 'STEMIA, Salamanca',
            note: 'Building AI systems: agents and automation integrated into real business processes. Product development and conceptualisation.',
            tags: ['Agents', 'Automation', 'Product'],
          },
          {
            when: '2024',
            duration: '1 yr 3 mos',
            title: 'Full Stack Developer',
            org: 'AIR Institute, Salamanca',
            note: 'IoT projects with end-to-end device traceability. APIs and PostgreSQL databases, Clean Architecture and full-stack development with React.',
            tags: ['IoT', 'PostgreSQL', 'React'],
          },
          {
            when: '2024',
            duration: '3 mos',
            title: 'Frontend Web Developer',
            org: 'InternacionalWeb, Salamanca',
            note: 'WordPress development with custom themes and plugins. Performance optimisation with PHP, JavaScript and CSS.',
            tags: ['WordPress', 'PHP', 'JavaScript'],
          },
          {
            when: '2023',
            duration: '1 yr 2 mos',
            title: 'Account Manager',
            org: 'eXperience IT Solutions, Remote',
            note: 'Coordinating technical and sales teams. Technical SEO and search positioning. Managing web and ecommerce clients.',
            tags: ['SEO', 'Clients', 'Ecommerce'],
          },
          {
            when: '2020',
            duration: '3 mos',
            title: 'Communications Manager',
            org: 'Rabuso AMC, Leganés',
            note: 'Web content for international clients. Technical writing and digital publishing. CRM workflow optimisation.',
            tags: ['Content', 'CRM'],
          },
        ],
        edu: [
          {
            when: '2022 – 2024',
            duration: 'Higher VET',
            title: 'Multiplatform App Development',
            org: 'Instituto Medac',
            note: 'Programming, databases, mobile and desktop development.',
            tags: ['DAM'],
          },
          {
            when: '2015 – 2019',
            duration: 'Degree',
            title: 'Audiovisual Communication',
            org: 'Universidad Rey Juan Carlos',
            note: 'Narrative, audiovisual production and communication.',
            tags: [],
          },
        ],
        courses: [
          { when: 'Jun 2026', duration: '', title: 'Introduction to Model Context Protocol', org: 'Anthropic', note: '', tags: [] },
          { when: 'Jun 2026', duration: '', title: 'Introduction to Claude Cowork', org: 'Anthropic', note: '', tags: [] },
          { when: 'Jun 2026', duration: '', title: 'Claude Code in Action', org: 'Anthropic', note: '', tags: [] },
          { when: '', duration: '', title: 'Python Essentials 1 & 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Git Fundamentals', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Digital Marketing', org: 'Google Actívate', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
        ],
        langs: [
          { when: '', duration: '', title: 'Spanish', org: 'Native', note: '', tags: [] },
          {
            when: '',
            duration: '',
            title: 'English',
            org: 'Professional',
            note: 'Client management and technical communication in English.',
            tags: [],
          },
        ],
      },
    },
    stack: {
      intro: 'Two halves of one profile: what I need to understand a client and decide what to build, and what I use to build it.',
      columns: [
        {
          title: 'Product',
          description: 'From first client contact to a defined product: what gets built and for whom.',
          groups: [
            {
              name: 'Strategy',
              items: [
                { name: 'Product shaping', note: 'idea → requirements', monogram: 'PS' },
                { name: 'Process automation', note: 'business processes', monogram: 'PA' },
              ],
            },
            {
              name: 'Definition & design',
              items: [
                { name: 'Spec-Driven Development', note: 'specs as source of truth', monogram: 'SDD' },
                { name: 'PRD', note: 'product requirements', monogram: 'PRD' },
                { name: 'Figma', note: 'design, prototypes', logo: 'figma' },
              ],
            },
            {
              name: 'Clients',
              items: [
                { name: 'Discovery', note: 'client interviews', monogram: 'DI' },
                { name: 'Salesforce', note: 'CRM', monogram: 'SF' },
              ],
            },
          ],
        },
        {
          title: 'Technical',
          description: 'Full stack with an AI focus: from agent to interface, through API, data and deployment.',
          groups: [
            {
              name: 'AI',
              items: [
                { name: 'Python', note: 'AI, scripting', logo: 'python' },
                { name: 'Claude API', note: 'Anthropic models', logo: 'anthropic' },
                { name: 'OpenAI API', note: 'GPT models', monogram: 'OA' },
                { name: 'LangChain', note: 'orchestration', logo: 'langchain' },
                { name: 'LangGraph', note: 'agent workflows', logo: 'langgraph' },
                { name: 'MCP', note: 'agents ↔ tools', logo: 'modelcontextprotocol' },
                { name: 'RAG', note: 'context retrieval', monogram: 'RAG' },
                { name: 'n8n', note: 'workflow automation', logo: 'n8n' },
                { name: 'Claude Code', note: 'AI-assisted dev', logo: 'claude' },
              ],
            },
            {
              name: 'Frontend',
              items: [
                { name: 'React', note: 'UI', logo: 'react' },
                { name: 'TypeScript', note: 'types', logo: 'typescript' },
                { name: 'JavaScript', note: 'web', logo: 'javascript' },
                { name: 'Tailwind CSS', note: 'styling', logo: 'tailwindcss' },              ],
            },
            {
              name: 'Backend & data',
              items: [
                { name: 'Python', note: 'APIs, services', logo: 'python' },
                { name: 'PostgreSQL', note: 'data', logo: 'postgresql' },                { name: 'APIs', note: 'REST', monogram: 'API' },
                { name: 'Clean Architecture', note: 'design', monogram: 'CA' },
                { name: 'IoT', note: 'traceability', monogram: 'IoT' },
              ],
            },
            {
              name: 'Delivery & observability',
              items: [
                { name: 'Git', note: 'versioning', logo: 'git' },
                { name: 'GitHub', note: 'repos', logo: 'github' },                { name: 'GitHub Actions', note: 'CI/CD', logo: 'githubactions' },
                { name: 'GitHub Pages', note: 'hosting', logo: 'githubpages' },
                { name: 'Azure', note: 'cloud', monogram: 'AZ' },
                { name: 'Grafana', note: 'monitoring, dashboards', logo: 'grafana' },
              ],
            },
          ],
        },
      ],
    },
    writing: {
      lead: 'Reading and reflecting on the papers that catch my attention most.',
    },
    faq: {
      lead: 'What people usually ask me in first conversations.',
      items: [
        {
          question: 'What exactly do you do?',
          answer: 'I build products with artificial intelligence. That means deciding where a model adds value, integrating it, designing how people use it and measuring whether it works.',
        },
        {
          question: 'Are you more product or more code?',
          answer: 'Both, on purpose. I can frame a problem with users and data, then implement it myself. That means fewer hand-offs and faster learning.',
        },
        {
          question: 'What kind of projects do you fit?',
          answer: 'Teams where AI has to become a product: defining the use case, building it end to end and checking it delivers something real.',
        },
        {
          question: 'Do you work remotely?',
          answer: 'Yes. I’m based in Toledo, Spain, and work remote or hybrid in Madrid.',
        },
        {
          question: 'How do you work with design?',
          answer: 'I work from Figma and prototype in code when an interaction needs validating, especially in AI flows, where behaviour matters as much as the screen.',
        },
      ],
    },
    bot: {
      title: 'Ask my bot',
      subtitle: 'Answers about my experience, stack and way of working',
      greeting: 'Hi, I’m Laura’s assistant. Ask me about her experience, her stack or how she works.',
      placeholder: 'Type your question…',
      send: 'Send',
      fallback: 'I can’t answer that yet. You can write to Laura directly from the Contact tab.',
      suggestions: [
        {
          question: 'What does Laura do at STEMIA?',
          answer: 'She’s an AI Engineer at STEMIA. She builds AI agents for clients and businesses as a SaaS product, from idea to production, plus automation built into real business processes.',
        },
        {
          question: 'What AI stack does she use?',
          answer: 'She works mostly in Python. She integrates Claude and OpenAI (GPT) models, orchestrates agents with LangChain and LangGraph, connects them to tools with MCP and gives them context with RAG. She automates workflows with n8n and builds with Claude Code.',
        },
        {
          question: 'Has she worked with clients?',
          answer: 'Yes, a lot. Before moving into code she was an account manager and head of communications, managing clients in Spanish and English with Salesforce and coordinating technical and sales teams.',
        },
        {
          question: 'Does she work remotely?',
          answer: 'Yes. She works remotely or in a hybrid setup.',
        },
      ],
    },
    contact: {
      lead: 'Drop me a line and let’s see how I can help.',
      form: { name: 'Name', topic: 'Topic', message: 'Message', send: 'Send' },
      topics: { job: 'Opportunity', collab: 'Collaboration', hello: 'Just saying hi' },
      sent: {
        title: 'Thank you.',
        body: 'Your email app has opened with the message ready. Just hit send.',
        fallback: 'If it didn’t open, write to me directly at',
      },
    },
  },
};
