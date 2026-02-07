import service1 from '../../../../public/services/1.png';
import service2 from '../../../../public/services/2.png';
import service3 from '../../../../public/services/3.png';
import service4 from '../../../../public/services/4.png';
import service5 from '../../../../public/services/5.png';
import service6 from '../../../../public/services/6.png';
import service7 from '../../../../public/services/7.png';
import service8 from '../../../../public/services/8.png';
import service9 from '../../../../public/services/9.png';
import service10 from '../../../../public/services/10.png';

// For desktop
export const desktopHeaderPhrases = [
  'Servicios que impulsan el',
  'crecimiento digital de tu',
  'marca o empresa',
];
export const desktopParagraphPhrase = [
  'Creamos soluciones integrales que combinan estrategia, tecnología y creatividad para que tu marca avance con confianza.',
  'Explora nuestro portafolio y descubre cómo podemos acompañarte en cada etapa del proceso.',
];

// For mobile
export const mobileParagraphPhrase = [
  'Soluciones estratégicas, tecnológicas y creativas',
  'diseñadas para que tu marca avance con confianza.',
];

export const offers = [
  {
    illustration: service1,
    title: 'Desarrollo de Página Web',
    details:
      'Diseñamos y construimos sitios web a medida, optimizados para rendimiento, usabilidad y conversión.',
  },
  {
    illustration: service2,
    title: 'Marketing de Influencers',
    details:
      'Organizamos campañas con creadores de contenido alineadas a los objetivos de tu marca.',
  },
  {
    illustration: service3,
    title: 'Pauta en Meta Ads & Google Ads',
    details:
      'Planificamos, ejecutamos y optimizamos campañas pagas enfocadas en resultados medibles.',
  },
  {
    illustration: service4,
    title: 'Implementación de CRM (Kommo)',
    details:
      'Configuramos y personalizamos Kommo para centralizar tus leads y automatizar tus procesos comerciales.',
  },
  {
    illustration: service5,
    title: 'Ajustes del Portafolio Comercial de Meta',
    details: '',
  },
  {
    illustration: service6,
    title: 'Branding Integral',
    details:
      'Creamos identidad visual, logo y lineamientos que transmiten la esencia y propósito de tu marca.',
  },
  {
    illustration: service7,
    title: 'Tomas Aéreas con Drones',
    details:
      'Capturamos imágenes y videos aéreos profesionales que potencian la narrativa visual de tu marca.',
  },
  {
    illustration: service8,
    title: 'Comunicación Digital',
    details:
      'Gestionamos redes sociales con contenido estratégico y storytelling que construye comunidad.',
  },
  {
    illustration: service9,
    title: 'Optimización de Plataformas Digitales',
    details:
      'Mejoramos tu presencia en Google My Business y ecosistemas digitales para aumentar la visibilidad local.',
  },
  {
    illustration: service10,
    title: 'Automatizaciones Multicanal',
    details:
      'Implementamos flujos automatizados en WhatsApp, Instagram y Messenger para responder y convertir 24/7.',
  },
];

// -------- Modal Content per service --------
export type ServiceModalKey =
  | 'web'
  | 'influencer'
  | 'drones'
  | 'ads'
  | 'crm'
  | 'metaPortfolio'
  | 'automation'
  | 'optimize'
  | 'communication'
  | 'branding';

export const serviceModals: Record<ServiceModalKey, {
  title: string;
  intro: string[];        // paragraphs above the list
  benefitsTitle?: string; // optional heading for the list
  benefits: string[];     // bullet points
}> = {
  web: {
    title: 'Desarrollo de Páginas Web',
    intro: [
      'Nos especializamos en diseñar y construir sitios web personalizados que se adaptan perfectamente a las necesidades específicas de tu negocio.'
    ],
    benefitsTitle: 'Ventajas de Desarrollo Web',
    benefits: [
      'Escalabilidad',
      'Seguridad reforzada',
      'Diseño único y exclusivo',
      'Experiencia de usuario mejorada',
      'Optimización para SEO y velocidad'
    ],
  },
  influencer: {
    title: 'Marketing de Influencers',
    intro: [
      'Organizamos campañas de marketing con creadores de contenido principalmente en Youtube donde ya tenemos una comunidad y audiencia activas, según el objetivo de la marca o empresa.'
    ],
    benefitsTitle: 'Ventajas de hacer Marketing de Influencers',
    benefits: [
      'Costo-eficiencia',
      'Credibilidad inmediata',
      'Engagement y alcance',
      'Resultados rápidos y escalables',
      'Alcance auténtico y segmentado'
    ],
  },
  drones: {
    title: 'Tomas Aéreas con Drones',
    intro: [
      'Ofrecemos servicios profesionales de captura visual y producción audiovisual mediante drones, respondiendo a las necesidades de eventos, proyectos y empresas que requieren una perspectiva aérea única e impactante.'
    ],
    benefitsTitle: 'Beneficios de Tomas Aéreas con Drones',
    benefits: [
      'Perspectiva única',
      'Versatilidad de aplicaciones',
      'Alta precisión y calidad audiovisual',
      'Impacto en marketing y redes sociales'
    ],
  },
  ads: {
    title: 'Pauta en Meta & Google Ads',
    intro: [
      'Gestionamos campañas publicitarias digitales en las principales plataformas del mercado, Meta (Facebook e Instagram) y Google Ads, diseñadas estratégicamente para aumentar la visibilidad de tu marca, atraer clientes potenciales y maximizar tu retorno de inversión.'
    ],
    benefitsTitle: 'Beneficios de campañas publicitarias',
    benefits: [
     'Amplio alcance multicanal',
     'Flexibilidad en la inversión',
     'Creatividad enfocada en resultados',
     'Segmentación precisa y personalizada',
     'Resultados medibles y optimización constante'
    ],
  },
  metaPortfolio: {
    title: 'Configuración del Portafolio Comercial Meta',
    intro: [
      'Ofrecemos un servicio especializado para la configuración y optimización del portafolio comercial de Meta, asegurando que tu empresa tenga un entorno digital centralizado, eficiente y preparado para aprovechar al máximo sus activos comerciales.'
    ],
    benefitsTitle: 'Ventajas del Portafolio Comercial de Meta',
    benefits: [
      'Publicaciones cruzadas automáticas',
      'Optimización de perfiles comerciales',
      'Creación y configuración de la cuenta publicitaria',
      'Sincronización entre Facebook, Instagram & WhatsApp Business'
    ],
  },
  crm: {
    title: 'Implementación de CRM | Kommo CRM',
    intro: [
      'Impulsamos la eficiencia y el crecimiento de tu empresa a través de la implementación de sistemas CRM (Customer Relationship Management) diseñados para centralizar, organizar y potenciar la gestión de relaciones con tus clientes.'
    ],
    benefitsTitle: 'Beneficios del CRM',
    benefits: [
      'Escalabilidad e integración',
      'Seguimiento y análisis de leads',
      'Personalización y segmentación',
      'Centralización y acceso de datos',
      'Mejora en la productividad y ventas',
      'Automatización de procesos y tareas'
    ],
  },
  automation: {
    title: 'Automatizaciones WhatsApp Business (API) & Multicanal',
    intro: [
      'Optimizamos y revolucionamos la comunicación digital de tu empresa mediante la implementación de automatizaciones avanzadas utilizando WhatsApp Business y otros canales de comunicación integrados a Kommo CRM.',
    ],
    benefitsTitle: 'Beneficios de las automatizaciones',
    benefits: [
      'Integración multicanal',
      'WhatsApp Business API',
      'Eficiencia y escalabilidad',
      'Sincronización con Kommo CRM',
      'Seguimiento automatizado de leads y clientes'
    ],
  },
  optimize: {
    title: 'Optimización de Ficha Google My Business & Plataformas Digitales',
    intro: [
      'Potenciamos la presencia online de tu empresa mediante la optimización integral de tu ficha de Google My Business (Perfil de Empresa de Google) y otros perfiles clave en plataformas digitales. Este servicio está orientado a maximizar tu visibilidad en búsquedas locales, atraer nuevos clientes y consolidar la reputación digital de tu marca.',
    ],
    benefitsTitle: 'Beneficios de optimizar',
    benefits: [
      'Reputación Digital y Google Reviews',
      'Precisión de la información comercial',
      'Mayor visibilidad y posicionamiento local',
      'Aprovechamiento de recursos visuales y publicaciones'
    ],
  },
  communication: {
    title: 'Plan de Comunicación Digital & Manejo de Redes Sociales',
    intro: [
     'Diseñamos e implementamos un plan de comunicación digital integral, adaptado a las necesidades y objetivos de tu marca, que fortalece tu posicionamiento online, aumenta el compromiso y potencia las ventas.',
    ],
    benefitsTitle: 'Beneficios del plan de comunicación',
    benefits: [
     'Gestión profesional multicanal',
     'Creatividad y formatos innovadores',
     'Análisis de datos y optimización continua',
     'Estrategia de contenidos y calendario editorial',  
    ],
  },
  branding: {
    title: 'Branding Integral',
    intro: [
     'Desarrollamos la construcción integral de tu marca, partiendo de una estrategia de branding sólida y profesional, hasta la creación de un manual de identidad visual completo y el PECO (Plan Estratégico de Comunicación).'
    ],
    benefitsTitle: 'Beneficios de branding',
    benefits: [
      'Diferenciación en el mercado',
      'Imagen profesional y coherente',
      'Optimización de recursos y tiempos',
      'Guía práctica para equipos y proveedores'
    ],
  },
};
