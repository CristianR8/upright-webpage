import service1 from '../../../../public/services/1_web.png';
import service2 from '../../../../public/services/2_dron.png';
import service3 from '../../../../public/services/3_meta.png';
import service4 from '../../../../public/services/4_kommo.png';
import service5 from '../../../../public/services/5.webp';
import service6 from '../../../../public/services/6.jpg';
import service7 from '../../../../public/services/7.webp';
import service8 from '../../../../public/services/8.webp';
import service9 from '../../../../public/services/9.png';
import service10 from '../../../../public/services/10.jpg';

// For desktop
export const desktopHeaderPhrases = [
  'Servicios que impulsan',
  'tu crecimiento digital',
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
    title: 'Tomas Aéreas con Drones',
    details:
      'Capturamos imágenes y videos aéreos profesionales que potencian la narrativa visual de tu marca.',
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
    title: 'Comunicación Digital',
    details:
      'Gestionamos redes sociales con contenido estratégico y storytelling que construye comunidad.',
  },
  {
    illustration: service8,
    title: 'Listas de Difusión en WhatsApp Business',
    details:
      'Segmentamos audiencias y diseñamos mensajes masivos efectivos para mantener a tu público informado.',
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
export type ServiceModalKey = 'web' | 'drones' | 'ads' | 'automation' | 'optimize' | 'broadcast' | 'communication' | 'branding';

export const serviceModals: Record<ServiceModalKey, {
  title: string;
  intro: string[];        // paragraphs above the list
  benefitsTitle?: string; // optional heading for the list
  benefits: string[];     // bullet points
}> = {
  web: {
    title: 'Desarrollo de Páginas Web',
    intro: [
      'Nos especializamos en diseñar y construir sitios web personalizados que se adaptan perfectamente a las necesidades específicas de tu negocio.',
      'El diseño está enfocado en la intuitividad, asegurando que los usuarios puedan interactuar con el sitio de manera inmediata y agradable.'
    ],
    benefitsTitle: 'Ventajas de Desarrollo Web',
    benefits: [
      'Diseño único y exclusivo: Creamos una identidad visual original y atractiva, lo que ayuda a diferenciar tu marca y generar una impresión profesional y de calidad para tus usuarios.',
      'Optimización para SEO y velocidad: Al construir el sitio desde cero con código limpio y eficiente, conseguimos que tu web cargue rápidamente y esté optimizada para los motores de búsqueda, mejorando su posicionamiento y visibilidad.',
      'Seguridad reforzada: Implementamos protocolos y medidas de seguridad personalizadas para proteger los datos de tu negocio y la información de tus clientes frente a posibles ataques cibernéticos.',
      'Escalabilidad: A medida que tu empresa crece, tu sitio podrá adaptarse fácilmente para incluir nuevas funciones o integrarse con sistemas internos como CRM o herramientas de gestión.',
      'Experiencia de usuario mejorada: Un sitio intuitivo que guía a los visitantes hacia sus objetivos con claridad, logrando así una mayor tasa de conversión y satisfacción del cliente.'
    ],
  },
  drones: {
    title: 'Tomas Aéreas con Drones',
    intro: [
      'Ofrecemos servicios profesionales de captura visual y producción audiovisual mediante drones, respondiendo a las necesidades de eventos, proyectos y empresas que requieren una perspectiva aérea única e impactante.',
      'Brindamos soluciones innovadoras para sectores como publicidad, inmobiliario, construcción, ingeniería, agricultura, eventos empresariales y más.'
    ],
    benefitsTitle: 'Beneficios de Tomas Aéreas con Drones',
    benefits: [
      'Perspectiva única: Panorámicas, travellings y vistas 360º que muestran la escala real del proyecto y entregan una narrativa dinámica y memorable.',
      'Impacto en marketing y redes sociales: Visuales ideales para campañas, imagen corporativa y mayor interacción en plataformas digitales (reels, anuncios y sitios web).',
      'Versatilidad de aplicaciones: Cobertura de eventos, instalaciones, inspecciones técnicas, seguimiento de obras, monitoreo agrícola y producción institucional para plataformas digitales.'
    ],
  },
  ads: {
    title: 'Pauta en Meta & Google Ads',
    intro: [
      'Gestionamos campañas de publicidad digital en las principales plataformas del mercado, Meta (Facebook e Instagram) y Google Ads, diseñadas estratégicamente para aumentar la visibilidad de tu marca y atraer clientes potenciales.',
      'Trabajamos desde la idealización, producción, edición y configuración hasta la optimización continua de las campañas, adaptándonos a los objetivos de tu negocio y ajustando cada pieza publicitaria para mejorar su rendimiento semana a semana.'
    ],
    benefitsTitle: 'Beneficios de campañas publicitarias',
    benefits: [
      'Segmentación precisa y personalizada: Audiencias ideales por intereses, comportamientos y datos demográficos para maximizar la conversión.',
      'Resultados medibles y optimización constante: Ajustes en tiempo real para mejorar efectividad, reducir CPC y aumentar alcance y conversiones.',
      'Amplio alcance multicanal: Integración en Google, Facebook, Instagram, YouTube y más para reforzar presencia y captar clientes en todos los puntos de contacto.',
      'Creatividad enfocada en resultados: Mensajes, videos y piezas visuales que generan impacto y motivan a la acción (clic, compra, lead).',
      'Flexibilidad en la inversión: Presupuestos y estrategias adaptadas a empresas de todos los tamaños, optimizando el retorno por cada peso invertido.'
    ],
  },
  automation: {
    title: 'Automatizaciones WhatsApp Business (API) & Multicanal',
    intro: [
      'Optimizamos y revolucionamos la comunicación digital de tu empresa mediante la implementación de automatizaciones avanzadas utilizando WhatsApp Business API integrado a Kommo CRM.',
      'Kommo CRM permite centralizar las conversaciones provenientes de distintos canales como WhatsApp Business, Facebook Messenger, Instagram Direct/comentarios y TikTok en un solo panel, gestionando desde un solo sistema todas las interacciones que se generan, asociándolas automáticamente a los registros de clientes, clasificando los prospectos y automatizando tareas recurrentes como asignar chats a vendedores, enviar mensajes de bienvenida, compartir catálogos y programar citas.'
    ],
    benefitsTitle: 'Beneficios de las automatizaciones',
    benefits: [
      'WhatsApp Business API: Bots conversacionales y mensajes en cascada para atención inmediata, listas de difusión, consultas frecuentes y más; disponibilidad 24/7 y alta conversión.',
      'Integración multicanal: Centralizamos y automatizamos la atención de mensajes en WhatsApp, Instagram Direct, Facebook Messenger, TikTok y comentarios en Instagram, garantizando una experiencia coherente y eficiente.',
      'Sincronización con Kommo CRM: Cada interacción se registra y asocia automáticamente al cliente correspondiente; historial centralizado, analíticas, segmentación y disparadores según comportamiento y etapa.',
      'Seguimiento automatizado de leads y clientes: Recordatorios, mensajes personalizados e información relevante según triggers definidos.',
      'Eficiencia y escalabilidad: Reduce carga operativa, gestiona grandes volúmenes y permite crecer con mayor control y calidad en la atención.'
    ],
  },
  optimize: {
    title: 'Optimización de Ficha Google My Business & Plataformas Digitales',
    intro: [
      'Potenciamos la presencia online de tu empresa mediante la optimización integral de tu ficha de Google My Business (Perfil de Empresa de Google) y otros perfiles clave en plataformas digitales. Este servicio está orientado a maximizar tu visibilidad en búsquedas locales, atraer nuevos clientes y consolidar la reputación digital de tu marca.',
      'En plataformas digitales adicionales como redes sociales, ajustamos la información comercial y aseguramos que tu perfil transmita credibilidad y profesionalismo de forma consistente.'
    ],
    benefitsTitle: 'Beneficios de optimizar',
    benefits: [
      'Mayor visibilidad y posicionamiento local: Un perfil optimizado permite que tu negocio destaque en Google Maps y búsquedas relevantes, facilitando que los clientes te encuentren y elijan.',
      'Precisión de la información: Actualizamos y verificamos los datos clave para que tus potenciales clientes siempre accedan a información correcta y actualizada, aumentando la confianza y las conversiones.',
      'Reputación digital y Google Reviews: Fomentamos y gestionamos reseñas; influyen en SEO local y confianza. Una buena gestión mejora posicionamiento y convierte reseñas negativas en oportunidades de mejora.',
      'Aprovechamiento de recursos visuales y publicaciones: Actualizamos fotos, videos y posts regulares para mostrar novedades y diferenciales de tu negocio de forma atractiva.'
    ],
  },
  broadcast: {
    title: 'Lista de Difusión WhatsApp Business',
    intro: [
      'Implementamos y gestionamos Listas de Difusión en WhatsApp Business como canal clave para la comunicación directa, personalizada y eficiente con tus clientes.',
      'Las Listas de Difusión son ideales para informar sobre lanzamientos, promociones, recordatorios, eventos o cualquier actualización relevante, asegurando tasas de apertura muy superiores a otros canales de comunicación digital.'
    ],
    benefitsTitle: 'Principales beneficios',
    benefits: [
      'Alta tasa de apertura y respuesta: Los mensajes enviados por WhatsApp suelen ser leídos casi de inmediato y generan mayor impulso de interacción que los correos o mensajes masivos tradicionales.',
      'Rapidez y eficiencia operativa: Se pueden comunicar novedades, ofertas o recordatorios a decenas o cientos de clientes en segundos, optimizando el tiempo y los recursos del equipo comercial y de marketing.',
      'Versatilidad y variedad de formatos: Permite enviar texto, imágenes, videos, documentos, enlaces y más, para campañas informativas, educativas o de ventas, adaptadas a cada objetivo estratégico.',
      'Medición y optimización: WhatsApp Business ofrece métricas sobre mensajes enviados, entregados y leídos, permitiendo evaluar el impacto real de cada envío y ajustar las estrategias.',
      'Fomenta la lealtad y engagement: La personalización y atención directa aumentan la satisfacción y fidelidad de tus clientes, ayudando a construir relaciones de largo plazo.'
    ],
  },
  communication: {
    title: 'Plan de Comunicación Digital & Manejo de Redes Sociales',
    intro: [
      'Diseñamos e implementamos un plan de comunicación digital integral, adaptado a las necesidades y objetivos de tu marca, que fortalece la presencia online, aumenta el compromiso y potencia las ventas.',
      'Desarrollamos un calendario editorial con contenidos creativos, relevantes y optimizados para cada plataforma, combinando formatos visuales, videos y campañas interactivas que generan valor y conversaciones auténticas.'
    ],
    benefitsTitle: 'Beneficios del plan de comunicación',
    benefits: [
      'Gestión profesional multicanal: Organización y optimización de perfiles en Instagram, Facebook y TikTok, adaptando los contenidos para el máximo rendimiento y asegurando una presencia coherente y atractiva.',
      'Estrategia de contenidos y calendario editorial: Plan de publicaciones con pilares temáticos, valores de marca y objetivos medibles, programado en las mejores horas y días para la interacción.',
      'Creatividad y formatos innovadores: Piezas visuales, videos cortos, reels, historias y tendencias que impulsan el engagement y el crecimiento orgánico.',
      'Análisis de datos y optimización continua: KPIs, reportes periódicos y ajustes para maximizar alcance, conversión y retorno de inversión.'
    ],
  },
  branding: {
    title: 'Branding Integral',
    intro: [
      'Desarrollamos la construcción integral de tu marca, partiendo de una estrategia de branding sólida y auténtica, hasta la creación de un manual de identidad visual completo y profesional.',
      'A través de un proceso personalizado, analizamos las fortalezas, valores y objetivos de tu empresa, definiendo la personalidad de marca y sus atributos diferenciales.'
    ],
    benefitsTitle: 'Beneficios de branding',
    benefits: [
      'Imagen profesional y coherente: Comunicación uniforme en todas las plataformas, generando mayor reconocimiento y confianza.',
      'Guía práctica para equipos y proveedores: Un manual claro que facilita la gestión interna/externa y evita errores en materiales y campañas.',
      'Diferenciación en el mercado: Potencia valores y atributos únicos para un posicionamiento competitivo y duradero.',
      'Optimización de recursos y tiempos: Reglas claras de uso agilizan procesos creativos y reducen correcciones.',
      'Flexibilidad y escalabilidad: Manual diseñado para crecer con tu marca, adaptándose a nuevos productos, servicios o campañas.'
    ],
  },
};
