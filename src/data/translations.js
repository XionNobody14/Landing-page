export const translations = {
  es: {
    navbar: {
      brand: "Andrés Chávez",
      roleShort: "Software Dev",
      navLinks: [
        { id: "home", label: "Sobre Mí" },
        { id: "experience", label: "Experiencia" },
        { id: "skills", label: "Habilidades" },
        { id: "education", label: "Educación" },
        { id: "contact", label: "Contacto" }
      ],
      ctaContact: "Hablemos",
      menuAria: "Alternar menú de navegación",
      themeToggleAria: "Cambiar tema (Claro / Oscuro)",
      themeLight: "Modo Claro",
      themeDark: "Modo Oscuro",
      themeLightShort: "Claro",
      themeDarkShort: "Oscuro"
    },
    hero: {
      badge: "Disponible para nuevos retos profesionales",
      greeting: "Hola, me llamo",
      fullName: "Andrés Alejandro Chávez Vázquez",
      role: "Desarrollador de Software | Backend & Aplicaciones Empresariales",
      location: "Santa Catarina, Nuevo León, México",
      summary: "Ingeniero en Tecnología de Software titulado con más de 2 años de experiencia en desarrollo backend, integraciones entre sistemas en entornos corporativos y automatización de procesos mediante agentes de IA y LLMs.",
      ctaExperience: "Impacto",
      ctaContact: "Contactar Ahora",
      downloadCv: "Descargar CV",
      cvFileName: "CV-Andres-Chavez.pdf",
      terminalTitle: "perfil_arquitectura.json",
      codeSnippet: {
        engine: "Backend & Enterprise Integrations",
        coreSkills: ["Python", "SQL", "LLMs & IA", "Power Platform", "React / Node.js"],
        architecture: "Microservicios & Automatización End-to-End",
        impactMetrics: "Producción activa en sector financiero",
        status: "Listo para escalar proyectos de alto impacto"
      }
    },
    metrics: {
      sectionTitle: "Impacto Cuantificable",
      sectionSubtitle: "Resultados reales logrados en producción y entornos empresariales de alta exigencia",
      items: [
        {
          value: "2+",
          unit: "Años",
          title: "Experiencia en Ciclo Completo",
          description: "Desarrollo integral, arquitectura y despliegue en entornos corporativos de alta demanda."
        },
        {
          value: "3",
          unit: "Apps",
          title: "Aplicaciones en Producción",
          description: "Sistemas internos de uso diario en Procurement conectados a bases de datos relacionales SQL Server."
        },
        {
          value: "6",
          unit: "Flujos",
          title: "Procesos Automatizados End-to-End",
          description: "Integraciones robustas mediante REST APIs con plataformas críticas como SAP Ariba y Doc2Sign."
        },
        {
          value: "~120",
          unit: "Tickets/mes",
          title: "Soporte Técnico Resuelto",
          description: "Resolución de incidencias de software directamente con usuarios operativos con documentación estructurada."
        }
      ]
    },
    experience: {
      sectionTag: "Trayectoria Profesional",
      sectionTitle: "Experiencia de Alto Impacto",
      sectionSubtitle: "Soluciones de software empresariales, modernización de flujos y desarrollo de sistemas",
      currentBadge: "Actual",
      roles: [
        {
          id: "banorte",
          company: "Grupo Financiero Banorte",
          period: "2023 - Presente",
          role: "Analista de Adquisiciones (Con enfoque a aplicaciones y automatización de procesos)",
          location: "Monterrey, N.L., México",
          description: "Liderazgo en el ciclo de vida completo de aplicaciones empresariales críticas para el área de Procurement y automatización de procesos de negocio.",
          achievements: [
            "Desarrollo de 3 aplicaciones internas para Procurement conectadas a SQL Server relacional con adopción sostenida de 4 a 5 usuarios operativos.",
            "Automatización de 6 flujos de negocio end-to-end mediante Power Automate e integraciones REST con SAP Ariba y Doc2Sign, eliminando tareas manuales repetitivas.",
            "Soporte técnico continuo resolviendo en promedio ~120 tickets mensuales con documentación estructurada y trato directo con el usuario interno.",
            "Liderazgo en el ciclo completo de desarrollo: levantamiento de requerimientos, diseño funcional, implementación y entrega en producción."
          ],
          technologies: ["Power Platform", "Python", "SQL Server", "REST APIs", "SAP Ariba", "Doc2Sign", "Git", "Excel"]
        },
        {
          id: "fime",
          company: "Facultad de Ingeniería Mecánica y Eléctrica - UANL",
          period: "2022 - 2026",
          role: "Practicante en Tecnología de Software - Desarrollo e Investigación Académica",
          location: "San Nicolás de los Garza, N.L., México",
          description: "Diseño y desarrollo de sistemas de software orientados a la analítica de datos estudiantiles y soporte a la infraestructura tecnológica académica.",
          achievements: [
            "Desarrollo de herramientas de software para análisis de persistencia estudiantil, logrando que 3 programas se adoptaran en asignaturas formales del plan de estudios.",
            "Creación de soluciones de análisis de datos en Python y R para automatizar reportes académicos de seguimiento y toma de decisiones.",
            "Soporte logístico, técnico y desarrollo de software para la ejecución de eventos institucionales con equipos multidisciplinarios."
          ],
          technologies: ["Python", "R", "SQL", "Análisis de Datos", "Git", "Herramientas Académicas"]
        }
      ]
    },
    skills: {
      sectionTag: "Competencias Técnicas",
      sectionTitle: "Stack Tecnológico & Habilidades",
      sectionSubtitle: "Filtra por dominio o toca cada habilidad para ver su aplicación real",
      filterAll: "Todas",
      filters: [
        { id: "all", label: "Todas" },
        { id: "backend_data", label: "Backend & Datos" },
        { id: "automation_ai", label: "Automatización & IA" },
        { id: "frontend_core", label: "Frontend & Core" }
      ],
      tapHint: "Toca para ver aplicación real",
      closeTooltip: "Cerrar",
      categories: [
        {
          id: "backend_data",
          title: "Backend & Datos",
          description: "Diseño de APIs, arquitectura relacional y NoSQL, y persistencia de alto rendimiento",
          skills: [
            { name: "Python", level: "Avanzado", highlight: true, description: "Desarrollo backend, scripts de automatización y canalizaciones de análisis de datos." },
            { name: "R", level: "Avanzado", highlight: true, description: "Análisis estadístico, modelado y generación de reportes analíticos automatizados." },
            { name: "SQL", level: "Avanzado", highlight: true, description: "Diseño y optimización de consultas relacionales en entornos empresariales de alta demanda." },
            { name: "C#", level: "Intermedio", highlight: false, description: "Desarrollo de servicios robustos y lógica orientada a objetos en ecosistemas .NET." },
            { name: "Java", level: "Intermedio", highlight: false, description: "Programación orientada a objetos, estructuras de datos y aplicaciones empresariales." },
            { name: "MongoDB", level: "Intermedio", highlight: true, description: "Modelado de datos NoSQL, diseño de colecciones y consultas de agregación." },
            { name: "Express.js", level: "Intermedio", highlight: true, description: "Creación de REST APIs seguras, enrutamiento modular y middlewares en Node.js." },
            { name: "Node.js", level: "Intermedio", highlight: true, description: "Entorno de ejecución asíncrono para servicios backend y APIs escalables." }
          ]
        },
        {
          id: "automation_ai",
          title: "Automatización & IA",
          description: "Agentes autónomos, LLMs aplicados e integración de flujos de trabajo corporativos",
          skills: [
            { name: "LLMs y Agentes de IA aplicados", level: "Avanzado", highlight: true, description: "Integración de modelos fundacionales, agentes autónomos y automatización cognitiva." },
            { name: "Power Platform", level: "Avanzado", highlight: true, description: "Automatización de flujos con SAP Ariba y Doc2Sign y soluciones empresariales." },
            { name: "Microsoft Excel", level: "Avanzado", highlight: true, description: "Modelado avanzado de datos, macros, fórmulas matriciales y preparación analítica." }
          ]
        },
        {
          id: "frontend_core",
          title: "Frontend & Core",
          description: "Interfaces interactivas accesibles, tecnologías web fundamentales y control de versiones",
          skills: [
            { name: "React", level: "Intermedio", highlight: true, description: "Desarrollo de interfaces modulares, reactivas y accesibles con React Hooks y Vite." },
            { name: "JavaScript", level: "Intermedio", highlight: true, description: "Lógica moderna ES6+, asincronía, manipulación del DOM y arquitectura web." },
            { name: "HTML", level: "Avanzado", highlight: false, description: "Estructuras web semánticas, accesibilidad (a11y) y buenas prácticas SEO." },
            { name: "CSS", level: "Avanzado", highlight: false, description: "Diseño responsivo, CSS Modules, variables de diseño y estética Soft Japandi." },
            { name: "Git", level: "Intermedio", highlight: false, description: "Control de versiones distribuido, branching, pull requests y flujos colaborativos." },
            { name: "Flutter", level: "Básico", highlight: false, description: "Construcción de interfaces móviles multiplataforma y lógica declarativa." }
          ]
        }
      ]
    },
    education: {
      sectionTag: "Credenciales Académicas",
      sectionTitle: "Formación & Reconocimientos",
      sectionSubtitle: "Bases sólidas de ingeniería de software con distinción académica",
      degrees: [
        {
          degree: "Ingeniería en Tecnología de Software",
          institution: "FIME - Universidad Autónoma de Nuevo León (UANL)",
          period: "2022 - 2026",
          status: "Titulado",
          statusNote: "Cédula profesional en trámite",
          highlight: "Formación especializada en ingeniería de software, arquitectura de sistemas, bases de datos y desarrollo de algoritmos de alta eficiencia."
        },
        {
          degree: "Bachillerato General",
          institution: "Preparatoria No. 23 - UANL",
          period: "2018 - 2020",
          status: "Egresado con Excelencia",
          statusNote: "Reconocimiento al Mérito Académico",
          highlight: "2.° lugar generacional por destacado promedio académico y compromiso estudiantil."
        }
      ],
      languagesSection: {
        title: "Idiomas",
        items: [
          {
            language: "Español",
            proficiency: "Nativo",
            description: "Lengua materna con excelente comunicación técnica, oral y escrita."
          },
          {
            language: "Inglés",
            proficiency: "Técnico Profesional",
            description: "Lectura y comprensión fluida de especificaciones de APIs, documentación de frameworks y redacción de reportes técnicos."
          }
        ]
      }
    },
    contact: {
      sectionTag: "Conectemos",
      sectionTitle: "Contacto & Colaboración",
      sectionSubtitle: "¿Buscas un desarrollador enfocado en automatización, datos y backend? Hablemos hoy.",
      infoTitle: "Información Directa",
      emailLabel: "Correo Electrónico",
      emailValue: "andreschavezv2003@gmail.com",
      phoneLabel: "Teléfono / WhatsApp",
      phoneValue: "8111027436",
      phoneFormatted: "+52 (81) 1102-7436",
      locationLabel: "Ubicación",
      locationValue: "Santa Catarina, Nuevo León, México",
      downloadCvAction: "Descargar Currículum Vitae (PDF)",
      copyEmailAction: "Copiar Correo",
      copiedNotice: "¡Copiado al portapapeles!",
      directMailAction: "Enviar Correo Directo",
      directCallAction: "Llamar por Teléfono",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/andrés-chávez-75328a225",
          handle: "in/andrés-chávez",
          ariaLabel: "LinkedIn - Andrés Chávez"
        },
        {
          name: "GitHub",
          url: "https://github.com/XionNobody14",
          handle: "github.com/XionNobody14",
          ariaLabel: "GitHub - XionNobody14"
        }
      ],
      cardTitle: "Envíame un mensaje",
      cardNote: "Listo para aportar valor en puestos de Desarrollo de Software, Automatización de Procesos o Análisis Técnico de Sistemas.",
      modal: {
        title: "Descargar Currículum",
        subtitle: "Selecciona el idioma del documento:",
        optionEs: "Español (ES)",
        optionEsDetail: "PDF - 1 página",
        optionEn: "Inglés (EN)",
        optionEnDetail: "PDF - 1 página",
        close: "Cerrar"
      }
    },
    footer: {
      rights: "Todos los derechos reservados.",
      developedWith: "Diseñado y desarrollado con React, Vite y CSS Modules.",
      backToTop: "Volver arriba"
    }
  },

  en: {
    navbar: {
      brand: "Andrés Chávez",
      roleShort: "Software Dev",
      navLinks: [
        { id: "home", label: "About Me" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" }
      ],
      ctaContact: "Get in Touch",
      menuAria: "Toggle navigation menu",
      themeToggleAria: "Toggle theme (Light / Dark)",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      themeLightShort: "Light",
      themeDarkShort: "Dark"
    },
    hero: {
      badge: "Open to new professional opportunities",
      greeting: "Hello, my name is",
      fullName: "Andrés Alejandro Chávez Vázquez",
      role: "Software Developer | Backend & Enterprise Applications",
      location: "Santa Catarina, Nuevo León, Mexico",
      summary: "Licensed Software Technology Engineer with over 2 years of experience in backend development, enterprise system integrations, and business process automation leveraging AI agents and LLMs.",
      ctaExperience: "Impact",
      ctaContact: "Get in Touch",
      downloadCv: "Download Resume",
      cvFileName: "Resume-Andres-Chavez.pdf",
      terminalTitle: "architecture_profile.json",
      codeSnippet: {
        engine: "Backend & Enterprise Integrations",
        coreSkills: ["Python", "SQL", "LLMs & AI", "Power Platform", "React / Node.js"],
        architecture: "Microservices & End-to-End Automation",
        impactMetrics: "Active production in the financial sector",
        status: "Ready to scale high-impact engineering projects"
      }
    },
    metrics: {
      sectionTitle: "Quantifiable Impact",
      sectionSubtitle: "Proven business outcomes delivered in demanding enterprise and corporate production environments",
      items: [
        {
          value: "2+",
          unit: "Years",
          title: "Full-Cycle Experience",
          description: "End-to-end development, architecture, and deployment across high-demand corporate ecosystems."
        },
        {
          value: "3",
          unit: "Apps",
          title: "Production Applications",
          description: "Daily active internal procurement systems wired to relational SQL Server databases."
        },
        {
          value: "6",
          unit: "Workflows",
          title: "End-to-End Automated Workflows",
          description: "Resilient business process automations via REST APIs connecting SAP Ariba and Doc2Sign."
        },
        {
          value: "~120",
          unit: "Tickets/mo",
          title: "Resolved Support Tickets",
          description: "Direct resolution of operational software incidents with structured documentation for stakeholders."
        }
      ]
    },
    experience: {
      sectionTag: "Career Track",
      sectionTitle: "High-Impact Experience",
      sectionSubtitle: "Enterprise software solutions, workflow modernization, and resilient system engineering",
      currentBadge: "Current",
      roles: [
        {
          id: "banorte",
          company: "Grupo Financiero Banorte",
          period: "2023 - Present",
          role: "Procurement Analyst (Focused on Applications & Process Automation)",
          location: "Monterrey, N.L., Mexico",
          description: "Leading the complete lifecycle of mission-critical enterprise applications for Procurement and business workflow automation.",
          achievements: [
            "Engineered 3 internal procurement applications integrated with relational SQL Server, maintaining steady adoption among 4 to 5 operational users.",
            "Automated 6 end-to-end business workflows using Power Automate and custom REST integrations with SAP Ariba and Doc2Sign, eliminating recurring manual bottlenecks.",
            "Provided ongoing technical support, resolving an average of ~120 monthly tickets with structured root-cause documentation and direct stakeholder collaboration.",
            "Spearheaded the full software development lifecycle: requirements gathering, functional architecture, core implementation, and production rollout."
          ],
          technologies: ["Power Platform", "Python", "SQL Server", "REST APIs", "SAP Ariba", "Doc2Sign", "Git", "Excel"]
        },
        {
          id: "fime",
          company: "Faculty of Mechanical and Electrical Engineering - UANL",
          period: "2022 - 2026",
          role: "Software Technology Intern - Academic Development & Research",
          location: "San Nicolás de los Garza, N.L., Mexico",
          description: "Designed and engineered software solutions targeted at student retention analytics and institutional computing infrastructure support.",
          achievements: [
            "Developed software analysis tools for student persistence research, resulting in 3 software programs being formally adopted into curriculum coursework.",
            "Built data analysis pipelines in Python and R to automate academic monitoring reports and support institutional leadership decisions.",
            "Delivered logistical, technical, and software support for institution-wide engineering conferences with multidisciplinary teams."
          ],
          technologies: ["Python", "R", "SQL", "Data Analytics", "Git", "Academic Software Tools"]
        }
      ]
    },
    skills: {
      sectionTag: "Technical Expertise",
      sectionTitle: "Technology Stack & Core Competencies",
      sectionSubtitle: "Filter by domain or tap any skill to inspect practical applications",
      filterAll: "All",
      filters: [
        { id: "all", label: "All" },
        { id: "backend_data", label: "Backend & Data" },
        { id: "automation_ai", label: "Automation & AI" },
        { id: "frontend_core", label: "Frontend & Core" }
      ],
      tapHint: "Tap to view practical application",
      closeTooltip: "Close",
      categories: [
        {
          id: "backend_data",
          title: "Backend & Data",
          description: "API design, relational & NoSQL data architectures, and high-performance persistence",
          skills: [
            { name: "Python", level: "Advanced", highlight: true, description: "Backend development, automation scripts, and data analysis pipelines." },
            { name: "R", level: "Advanced", highlight: true, description: "Statistical analysis, modeling, and automated analytical reporting." },
            { name: "SQL", level: "Advanced", highlight: true, description: "Relational query design and performance optimization in enterprise environments." },
            { name: "C#", level: "Intermediate", highlight: false, description: "Robust service engineering and object-oriented logic in .NET ecosystems." },
            { name: "Java", level: "Intermediate", highlight: false, description: "Object-oriented programming, data structures, and enterprise applications." },
            { name: "MongoDB", level: "Intermediate", highlight: true, description: "NoSQL data modeling, collection architectures, and aggregation pipelines." },
            { name: "Express.js", level: "Intermediate", highlight: true, description: "Secure REST APIs, modular routing, and backend middleware with Node.js." },
            { name: "Node.js", level: "Intermediate", highlight: true, description: "Asynchronous backend runtime for scalable microservices and APIs." }
          ]
        },
        {
          id: "automation_ai",
          title: "Automation & AI",
          description: "Autonomous agents, applied LLMs, and enterprise business workflow automation",
          skills: [
            { name: "Applied LLMs & AI Agents", level: "Advanced", highlight: true, description: "Foundation model integration, autonomous agents, and cognitive workflow automation." },
            { name: "Power Platform", level: "Advanced", highlight: true, description: "End-to-end workflow automation connecting SAP Ariba, Doc2Sign, and enterprise services." },
            { name: "Microsoft Excel", level: "Advanced", highlight: true, description: "Advanced data modeling, macros, complex formulas, and analytical preparation." }
          ]
        },
        {
          id: "frontend_core",
          title: "Frontend & Core",
          description: "Interactive accessible interfaces, fundamental web technologies, and version control",
          skills: [
            { name: "React", level: "Intermediate", highlight: true, description: "Modular, reactive, and accessible user interfaces built with React Hooks and Vite." },
            { name: "JavaScript", level: "Intermediate", highlight: true, description: "Modern ES6+ logic, asynchronous programming, DOM handling, and web architecture." },
            { name: "HTML", level: "Advanced", highlight: false, description: "Semantic web architecture, accessibility (a11y), and technical SEO standards." },
            { name: "CSS", level: "Advanced", highlight: false, description: "Responsive styling, CSS Modules, custom design tokens, and Soft Japandi aesthetics." },
            { name: "Git", level: "Intermediate", highlight: false, description: "Distributed version control, branching strategies, PR workflows, and code collaboration." },
            { name: "Flutter", level: "Basic", highlight: false, description: "Cross-platform mobile UI development and declarative widget architectures." }
          ]
        }
      ]
    },
    education: {
      sectionTag: "Academic Credentials",
      sectionTitle: "Education & Honors",
      sectionSubtitle: "Strong foundation in software engineering complemented by academic excellence",
      degrees: [
        {
          degree: "B.S. in Software Technology Engineering",
          institution: "FIME - Autonomous University of Nuevo León (UANL)",
          period: "2022 - 2026",
          status: "Graduated",
          statusNote: "Professional license in process",
          highlight: "Specialized training in software architecture, enterprise systems, relational database theory, and high-performance algorithms."
        },
        {
          degree: "General High School Diploma",
          institution: "High School No. 23 - UANL",
          period: "2018 - 2020",
          status: "Graduated with Honors",
          statusNote: "Academic Merit Recognition",
          highlight: "2nd place class rank across the entire graduating cohort for sustained academic performance."
        }
      ],
      languagesSection: {
        title: "Languages",
        items: [
          {
            language: "Spanish",
            proficiency: "Native",
            description: "Native proficiency with polished technical, oral, and written communication."
          },
          {
            language: "English",
            proficiency: "Professional Technical",
            description: "Fluent reading and comprehension of API specifications, framework documentation, and technical report writing."
          }
        ]
      }
    },
    contact: {
      sectionTag: "Get in Touch",
      sectionTitle: "Contact & Collaboration",
      sectionSubtitle: "Looking for an engineer focused on automation, data engineering, and backend systems? Let's connect.",
      infoTitle: "Direct Contact Information",
      emailLabel: "Email Address",
      emailValue: "andreschavezv2003@gmail.com",
      phoneLabel: "Phone / WhatsApp",
      phoneValue: "8111027436",
      phoneFormatted: "+52 (81) 1102-7436",
      locationLabel: "Location",
      locationValue: "Santa Catarina, Nuevo León, Mexico",
      downloadCvAction: "Download Resume (PDF)",
      copyEmailAction: "Copy Email",
      copiedNotice: "Copied to clipboard!",
      directMailAction: "Send Direct Email",
      directCallAction: "Call Directly",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/andrés-chávez-75328a225",
          handle: "in/andrés-chávez",
          ariaLabel: "LinkedIn - Andrés Chávez"
        },
        {
          name: "GitHub",
          url: "https://github.com/XionNobody14",
          handle: "github.com/XionNobody14",
          ariaLabel: "GitHub - XionNobody14"
        }
      ],
      cardTitle: "Send a Message",
      cardNote: "Ready to contribute immediate value to engineering teams in Software Development, Process Automation, or Technical Systems roles.",
      modal: {
        title: "Download Resume",
        subtitle: "Select document language:",
        optionEs: "Spanish (ES)",
        optionEsDetail: "PDF - 1 page",
        optionEn: "English (EN)",
        optionEnDetail: "PDF - 1 page",
        close: "Close"
      }
    },
    footer: {
      rights: "All rights reserved.",
      developedWith: "Designed & engineered with React, Vite, and CSS Modules.",
      backToTop: "Back to top"
    }
  }
};
