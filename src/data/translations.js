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
      menuAria: "Alternar menú de navegación"
    },
    hero: {
      badge: "Disponible para nuevos retos profesionales",
      greeting: "Hola, me llamo",
      fullName: "Andrés Alejandro Chávez Vázquez",
      role: "Desarrollador de Software | Backend & Aplicaciones Empresariales",
      location: "Santa Catarina, Nuevo León, México",
      summary: "Ingeniero en Tecnología de Software titulado con más de 2 años de experiencia en desarrollo backend, integraciones entre sistemas en entornos corporativos y automatización de procesos mediante agentes de IA y LLMs.",
      ctaExperience: "Ver Experiencia",
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
      sectionSubtitle: "Herramientas organizadas por nivel de experiencia y aplicación práctica",
      filterAll: "Todas las Habilidades",
      categories: [
        {
          id: "advanced",
          title: "Nivel Avanzado",
          description: "Dominio profundo, arquitectura de datos y aplicación diaria en entornos corporativos",
          skills: [
            { name: "Python", level: "Avanzado", highlight: true },
            { name: "R", level: "Avanzado", highlight: true },
            { name: "SQL", level: "Avanzado", highlight: true },
            { name: "LLMs y Agentes de IA aplicados", level: "Avanzado", highlight: true },
            { name: "Power Platform", level: "Avanzado", highlight: true },
            { name: "HTML", level: "Avanzado", highlight: false },
            { name: "CSS", level: "Avanzado", highlight: false },
            { name: "Microsoft Excel", level: "Avanzado", highlight: true }
          ]
        },
        {
          id: "intermediate",
          title: "Nivel Intermedio",
          description: "Desarrollo de servicios, aplicaciones completas (MERN) y control de versiones",
          skills: [
            { name: "C#", level: "Intermedio", highlight: false },
            { name: "Java", level: "Intermedio", highlight: false },
            { name: "JavaScript", level: "Intermedio", highlight: true },
            { name: "Git", level: "Intermedio", highlight: false },
            { name: "MongoDB", level: "Intermedio", highlight: true },
            { name: "Express.js", level: "Intermedio", highlight: true },
            { name: "React", level: "Intermedio", highlight: true },
            { name: "Node.js", level: "Intermedio", highlight: true }
          ]
        },
        {
          id: "basic",
          title: "Nivel Básico",
          description: "Desarrollo y fundamentos de aplicaciones móviles multiplataforma",
          skills: [
            { name: "Flutter", level: "Básico", highlight: false }
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
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andres-chavez-placeholder", handle: "in/andres-chavez" },
        { name: "GitHub", url: "https://github.com/andres-chavez-placeholder", handle: "github.com/andres-chavez" }
      ],
      cardTitle: "Envíame un mensaje",
      cardNote: "Listo para aportar valor en puestos de Desarrollo de Software, Automatización de Procesos o Análisis Técnico de Sistemas."
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
      menuAria: "Toggle navigation menu"
    },
    hero: {
      badge: "Open to new professional opportunities",
      greeting: "Hello, my name is",
      fullName: "Andrés Alejandro Chávez Vázquez",
      role: "Software Developer | Backend & Enterprise Applications",
      location: "Santa Catarina, Nuevo León, Mexico",
      summary: "Licensed Software Technology Engineer with over 2 years of experience in backend development, enterprise system integrations, and business process automation leveraging AI agents and LLMs.",
      ctaExperience: "Explore Experience",
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
      sectionSubtitle: "Structured toolset and core competencies organized by proficiency level",
      filterAll: "All Skills",
      categories: [
        {
          id: "advanced",
          title: "Advanced Level",
          description: "Deep proficiency, data architecture, and production delivery in enterprise ecosystems",
          skills: [
            { name: "Python", level: "Advanced", highlight: true },
            { name: "R", level: "Advanced", highlight: true },
            { name: "SQL", level: "Advanced", highlight: true },
            { name: "Applied LLMs & AI Agents", level: "Advanced", highlight: true },
            { name: "Power Platform", level: "Advanced", highlight: true },
            { name: "HTML", level: "Advanced", highlight: false },
            { name: "CSS", level: "Advanced", highlight: false },
            { name: "Microsoft Excel", level: "Advanced", highlight: true }
          ]
        },
        {
          id: "intermediate",
          title: "Intermediate Level",
          description: "Backend services, end-to-end MERN stack components, and version control workflows",
          skills: [
            { name: "C#", level: "Intermediate", highlight: false },
            { name: "Java", level: "Intermediate", highlight: false },
            { name: "JavaScript", level: "Intermediate", highlight: true },
            { name: "Git", level: "Intermediate", highlight: false },
            { name: "MongoDB", level: "Intermediate", highlight: true },
            { name: "Express.js", level: "Intermediate", highlight: true },
            { name: "React", level: "Intermediate", highlight: true },
            { name: "Node.js", level: "Intermediate", highlight: true }
          ]
        },
        {
          id: "basic",
          title: "Basic Level",
          description: "Core architecture and fundamentals for cross-platform mobile apps",
          skills: [
            { name: "Flutter", level: "Basic", highlight: false }
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
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andres-chavez-placeholder", handle: "in/andres-chavez" },
        { name: "GitHub", url: "https://github.com/andres-chavez-placeholder", handle: "github.com/andres-chavez" }
      ],
      cardTitle: "Send a Message",
      cardNote: "Ready to contribute immediate value to engineering teams in Software Development, Process Automation, or Technical Systems roles."
    },
    footer: {
      rights: "All rights reserved.",
      developedWith: "Designed & engineered with React, Vite, and CSS Modules.",
      backToTop: "Back to top"
    }
  }
};
