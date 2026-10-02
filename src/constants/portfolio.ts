import type { ContactLink, Localized, Project, SiteContent, TabId } from '@/types/portfolio';

export const TABS: TabId[] = ['home', 'projects', 'about', 'stack', 'writing', 'faq', 'contact'];

export const PROFILE = {
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
        { title: 'Entender', body: 'Hablo con usuarios, miro los datos y defino qué problema merece resolverse con IA y cuál no.' },
        { title: 'Construir', body: 'Integro modelos, diseño el flujo y escribo el código que lo lleva a producción.' },
        { title: 'Medir', body: 'Evalúo calidad, coste y uso real para decidir qué mejorar en la siguiente iteración.' },
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
        'Durante años trabajé como account manager y responsable de comunicación. Gestionaba clientes en inglés y en español, con Salesforce y muchas horas de teléfono. Ahí aprendí a escuchar lo que un cliente pide de verdad, que no siempre es lo que dice.',
        'Después estudié Desarrollo de Aplicaciones Multiplataforma y pasé al código: web, IoT y plataformas full stack, tocando tanto back como front. Hoy, en STEMIA, desarrollo agentes de IA para clientes y empresas como producto SaaS, desde la idea hasta producción.',
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
          { when: '', duration: '', title: 'Python Essentials 1 y 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Fundamentos de Git', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Marketing Digital', org: 'Google Actívate', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
        ],
        langs: [
          { when: 'Nativo', duration: '', title: 'Español', org: '', note: '', tags: [] },
          {
            when: 'Profesional',
            duration: '',
            title: 'Inglés',
            org: '',
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
          description: 'Del primer contacto con el cliente a un producto definido: qué se construye, para quién y cómo se cuenta.',
          groups: [
            {
              name: 'Estrategia',
              items: [
                { name: 'Conceptualización de producto', note: 'idea → requisitos', monogram: 'CP' },
                { name: 'Figma', note: 'diseño, prototipos', logo: 'figma' },
                { name: 'Puente negocio–técnico', note: 'ventas ↔ desarrollo', monogram: '↔' },
                { name: 'Automatización de procesos', note: 'procesos de negocio', monogram: 'AP' },
              ],
            },
            {
              name: 'Clientes',
              items: [
                { name: 'Gestión de clientes', note: 'ES / EN', monogram: 'GC' },
                { name: 'Salesforce', note: 'CRM', monogram: 'SF' },
                { name: 'Ecommerce', note: 'clientes web', monogram: 'EC' },
              ],
            },
            {
              name: 'Contenido y crecimiento',
              items: [
                { name: 'SEO técnico', note: 'posicionamiento', monogram: 'SEO' },
                { name: 'Redacción técnica', note: 'docs, web', monogram: 'RT' },
                { name: 'Publicaciones digitales', note: 'contenido', monogram: 'PD' },
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
                { name: 'Agentes de IA', note: 'producción', monogram: 'AG' },
                { name: 'Python', note: 'IA, scripts', logo: 'python' },
                { name: 'LangChain', note: 'orquestación', logo: 'langchain' },
                { name: 'RAG', note: 'recuperación de contexto', monogram: 'RAG' },
                { name: 'Claude Code', note: 'desarrollo con IA', monogram: 'CC' },
                { name: 'LLMs', note: 'integración', monogram: 'LLM' },
                { name: 'Automatización', note: 'flujos', monogram: 'AU' },
              ],
            },
            {
              name: 'Frontend',
              items: [
                { name: 'React', note: 'UI', logo: 'react' },
                { name: 'TypeScript', note: 'tipado', logo: 'typescript' },
                { name: 'JavaScript', note: 'web', logo: 'javascript' },
                { name: 'Tailwind CSS', note: 'estilos', logo: 'tailwindcss' },
                { name: 'Three.js', note: 'WebGL', logo: 'threedotjs' },
              ],
            },
            {
              name: 'Backend y datos',
              items: [
                { name: 'Python', note: 'APIs, servicios', logo: 'python' },
                { name: 'PostgreSQL', note: 'datos', logo: 'postgresql' },
                { name: 'PHP', note: 'backend', logo: 'php' },
                { name: 'APIs', note: 'REST', monogram: 'API' },
                { name: 'Clean Architecture', note: 'diseño', monogram: 'CA' },
                { name: 'IoT', note: 'trazabilidad', monogram: 'IoT' },
              ],
            },
            {
              name: 'Entrega',
              items: [
                { name: 'Git', note: 'versiones', logo: 'git' },
                { name: 'GitHub', note: 'repos', logo: 'github' },
                { name: 'Vite', note: 'build', logo: 'vite' },
                { name: 'GitHub Actions', note: 'CI/CD', logo: 'githubactions' },
                { name: 'GitHub Pages', note: 'hosting', logo: 'githubpages' },
                { name: 'Azure', note: 'cloud', monogram: 'AZ' },
              ],
            },
          ],
        },
      ],
    },
    writing: {
      lead: 'Notas sobre construir con IA sin perder de vista al usuario.',
      posts: [
        { tag: 'IA', title: 'Evals antes que prompts', dek: 'Por qué empiezo cada funcionalidad con IA definiendo cómo voy a medirla.', readTime: '7 min' },
        { tag: 'Producto', title: 'Del brief al PR: specs que se pueden programar', dek: 'Una plantilla para que producto e ingeniería hablen el mismo idioma.', readTime: '8 min' },
        { tag: 'Híbrido', title: 'Lo que el montaje audiovisual me enseñó sobre UX', dek: 'Ritmo, corte y atención aplicados a flujos de producto.', readTime: '5 min' },
      ],
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
          answer: 'Sobre todo Python y LangChain para construir agentes, RAG para darles contexto e integración con LLMs. En su día a día de desarrollo usa también Claude Code.',
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
      sentTitle: 'Gracias.',
      sentBody: 'Se ha abierto tu programa de correo con el mensaje listo. Solo falta enviarlo.',
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
        { title: 'Understand', body: 'I talk to users, look at the data and decide which problems are worth solving with AI, and which aren’t.' },
        { title: 'Build', body: 'I integrate models, design the flow and write the code that takes it to production.' },
        { title: 'Measure', body: 'I evaluate quality, cost and real usage to decide what to improve next.' },
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
        'For years I worked as an account manager and head of communications, managing clients in English and Spanish with Salesforce and plenty of phone calls. That’s where I learned to hear what a client actually needs, which isn’t always what they say.',
        'Then I studied Multiplatform App Development and moved into code: web, IoT and full stack platforms, across back end and front end. Today, at STEMIA, I build AI agents for clients and businesses as a SaaS product, from idea to production.',
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
          { when: '', duration: '', title: 'Python Essentials 1 & 2', org: 'Cisco Networking Academy', note: '', tags: [] },
          { when: '', duration: '', title: 'Git Fundamentals', org: 'OpenWebinars', note: '', tags: [] },
          { when: '', duration: '', title: 'Digital Marketing', org: 'Google Actívate', note: '', tags: [] },
          { when: '', duration: '', title: 'Data Science', org: 'IMMUNE Technology Institute', note: '', tags: [] },
        ],
        langs: [
          { when: 'Native', duration: '', title: 'Spanish', org: '', note: '', tags: [] },
          {
            when: 'Professional',
            duration: '',
            title: 'English',
            org: '',
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
          description: 'From first client contact to a defined product: what gets built, for whom and how it’s told.',
          groups: [
            {
              name: 'Strategy',
              items: [
                { name: 'Product shaping', note: 'idea → requirements', monogram: 'PS' },
                { name: 'Figma', note: 'design, prototypes', logo: 'figma' },
                { name: 'Business–tech bridge', note: 'sales ↔ dev', monogram: '↔' },
                { name: 'Process automation', note: 'business processes', monogram: 'PA' },
              ],
            },
            {
              name: 'Clients',
              items: [
                { name: 'Client management', note: 'ES / EN', monogram: 'CM' },
                { name: 'Salesforce', note: 'CRM', monogram: 'SF' },
                { name: 'Ecommerce', note: 'web clients', monogram: 'EC' },
              ],
            },
            {
              name: 'Content & growth',
              items: [
                { name: 'Technical SEO', note: 'positioning', monogram: 'SEO' },
                { name: 'Technical writing', note: 'docs, web', monogram: 'TW' },
                { name: 'Digital publishing', note: 'content', monogram: 'DP' },
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
                { name: 'AI agents', note: 'production', monogram: 'AG' },
                { name: 'Python', note: 'AI, scripting', logo: 'python' },
                { name: 'LangChain', note: 'orchestration', logo: 'langchain' },
                { name: 'RAG', note: 'context retrieval', monogram: 'RAG' },
                { name: 'Claude Code', note: 'AI-assisted dev', monogram: 'CC' },
                { name: 'LLMs', note: 'integration', monogram: 'LLM' },
                { name: 'Automation', note: 'workflows', monogram: 'AU' },
              ],
            },
            {
              name: 'Frontend',
              items: [
                { name: 'React', note: 'UI', logo: 'react' },
                { name: 'TypeScript', note: 'types', logo: 'typescript' },
                { name: 'JavaScript', note: 'web', logo: 'javascript' },
                { name: 'Tailwind CSS', note: 'styling', logo: 'tailwindcss' },
                { name: 'Three.js', note: 'WebGL', logo: 'threedotjs' },
              ],
            },
            {
              name: 'Backend & data',
              items: [
                { name: 'Python', note: 'APIs, services', logo: 'python' },
                { name: 'PostgreSQL', note: 'data', logo: 'postgresql' },
                { name: 'PHP', note: 'backend', logo: 'php' },
                { name: 'APIs', note: 'REST', monogram: 'API' },
                { name: 'Clean Architecture', note: 'design', monogram: 'CA' },
                { name: 'IoT', note: 'traceability', monogram: 'IoT' },
              ],
            },
            {
              name: 'Delivery',
              items: [
                { name: 'Git', note: 'versioning', logo: 'git' },
                { name: 'GitHub', note: 'repos', logo: 'github' },
                { name: 'Vite', note: 'build', logo: 'vite' },
                { name: 'GitHub Actions', note: 'CI/CD', logo: 'githubactions' },
                { name: 'GitHub Pages', note: 'hosting', logo: 'githubpages' },
                { name: 'Azure', note: 'cloud', monogram: 'AZ' },
              ],
            },
          ],
        },
      ],
    },
    writing: {
      lead: 'Notes on building with AI without losing sight of the user.',
      posts: [
        { tag: 'AI', title: 'Evals before prompts', dek: 'Why I start every AI feature by defining how I’ll measure it.', readTime: '7 min' },
        { tag: 'Product', title: 'From brief to PR: specs you can actually build', dek: 'A template so product and engineering speak the same language.', readTime: '8 min' },
        { tag: 'Hybrid', title: 'What film editing taught me about UX', dek: 'Rhythm, cuts and attention applied to product flows.', readTime: '5 min' },
      ],
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
          answer: 'Mostly Python and LangChain to build agents, RAG to give them context, and LLM integration. She also uses Claude Code in her day-to-day development.',
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
      sentTitle: 'Thank you.',
      sentBody: 'Your email app has opened with the message ready. Just hit send.',
    },
  },
};
