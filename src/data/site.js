import resumeData from './me.json';

const labels = {
  en: {
    nav: {
      summary: 'Profile',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      availability: 'Open to senior backend and full-stack roles',
      title: 'Building reliable products with backend depth and delivery focus.',
      description:
        'Senior engineer with experience across Java, TypeScript, cloud platforms, and team-facing product delivery. This site is designed for fast recruiter review: clear scope, clean chronology, and immediate contact options.',
      primaryCta: 'Contact me',
      secondaryCta: 'View experience',
      locationLabel: 'Based in'
    },
    summary: {
      eyebrow: 'Profile',
      title: 'A concise view of how I work'
    },
    experience: {
      eyebrow: 'Career',
      title: 'Experience focused on delivery, APIs, and platform evolution'
    },
    skills: {
      eyebrow: 'Core skills',
      title: 'Technology strengths',
      note: 'Representative strengths rather than an exhaustive stack list.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Easy to reach for the next step',
      intro: 'If there is a role where backend ownership, API design, and cross-team delivery matter, reach out directly.'
    },
    language: {
      label: 'Language',
      english: 'English',
      spanish: 'Spanish'
    },
    meta: {
      title: 'Alvaro Gutierrez | Senior Full Stack Developer',
      description:
        'Recruiter-friendly CV and portfolio for Alvaro Gutierrez, focused on backend engineering, product delivery, and modern web platforms.'
    }
  },
  es: {
    nav: {
      summary: 'Perfil',
      experience: 'Experiencia',
      skills: 'Skills',
      contact: 'Contacto'
    },
    hero: {
      availability: 'Abierto a posiciones senior backend y full-stack',
      title: 'Construyendo productos fiables con foco en backend y entrega.',
      description:
        'Ingeniero senior con experiencia en Java, TypeScript, cloud y entrega de producto con equipos multidisciplinares. Esta version prioriza una revision rapida por parte de recruiters.',
      primaryCta: 'Contactar',
      secondaryCta: 'Ver experiencia',
      locationLabel: 'Ubicado en'
    },
    summary: {
      eyebrow: 'Perfil',
      title: 'Una vision breve de como trabajo'
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia centrada en delivery, APIs y evolucion de plataforma'
    },
    skills: {
      eyebrow: 'Habilidades clave',
      title: 'Fortalezas tecnologicas',
      note: 'Resumen de fortalezas principales, no una lista exhaustiva.'
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Facil de contactar para el siguiente paso',
      intro: 'Si buscas una persona con ownership backend, diseno de APIs y capacidad de delivery entre equipos, escribeme directamente.'
    },
    language: {
      label: 'Idioma',
      english: 'Ingles',
      spanish: 'Espanol'
    },
    meta: {
      title: 'Alvaro Gutierrez | Senior Full Stack Developer',
      description:
        'CV y sitio personal orientado a recruiters para Alvaro Gutierrez, centrado en backend engineering, delivery y plataformas web modernas.'
    }
  }
};

const highlightFacts = [
  'Backend-first engineer comfortable owning delivery end to end.',
  'Experience with product teams, platform work, and CI/CD ownership.',
  'Remote collaboration across APIs, observability, and cloud infrastructure.'
];

const contactItems = [
  {
    label: 'Email',
    href: `mailto:${resumeData.contact.email}`,
    value: resumeData.contact.email
  },
  {
    label: 'LinkedIn',
    href: resumeData.contact.linkedin.link,
    value: resumeData.contact.linkedin.text
  },
  {
    label: 'GitHub',
    href: resumeData.contact.github.link,
    value: resumeData.contact.github.text
  },
  {
    label: 'Website',
    href: resumeData.contact.web.link,
    value: resumeData.contact.web.text
  }
];

export { contactItems, highlightFacts, labels, resumeData };
