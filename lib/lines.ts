// Contenido de la página de cada línea de negocio (/[lang]/negocios/[slug]), en español e inglés.
// La tarjeta de la portada (nombre, foto, resumen y empresas) sigue en content.ts; aquí va el detalle.

import { pending, type Locale, type Text } from './content'

export type LineDetail = {
  intro: string[]
  focus: string
  services: { title: string; text: string }[]
  sectors: string[]
}

type Slug = 'inversiones' | 'comercio-exterior' | 'tecnologia' | 'servicios-corporativos' | 'industria' | 'nuevos-mercados' | 'fundacion'

const es: Record<Slug, LineDetail> = {
  inversiones: {
    intro: [
      'Esta línea administra el capital del grupo y lo invierte en activos inmobiliarios y financieros que generan rentas estables y valor en el largo plazo.',
      'Desde aquí se estructuran las participaciones en cada empresa del grupo, se evalúan nuevas oportunidades de inversión y se supervisa el desempeño del portafolio.',
    ],
    focus: 'Invertimos con disciplina: cada decisión se sustenta en un análisis de riesgo, retorno y horizonte, y se aprueba en el comité de inversiones.',
    services: [
      { title: 'Desarrollo inmobiliario', text: 'Proyectos de oficinas, vivienda y uso comercial, desde la compra del terreno hasta la venta o el alquiler.' },
      { title: 'Rentas inmobiliarias', text: 'Adquisición y administración de inmuebles que generan ingresos recurrentes.' },
      { title: 'Inversiones financieras', text: 'Gestión de la tesorería del grupo e inversión en instrumentos de renta fija y variable.' },
      { title: 'Participaciones empresariales', text: 'Adquisición de participaciones en empresas con potencial de crecimiento y su integración al grupo.' },
    ],
    sectors: ['Inmobiliario', 'Banca y finanzas', 'Mercado de capitales', 'Empresas en crecimiento'],
  },
  'comercio-exterior': {
    intro: [
      'Conectamos productores y compradores de distintos países. Nos encargamos de la compra, el transporte, el despacho aduanero y la entrega de mercaderías y commodities.',
      'Trabajamos con proveedores verificados y socios logísticos en los principales puertos, para que cada operación cumpla con los plazos, la calidad y la normativa de cada mercado.',
    ],
    focus: 'Cuidamos toda la cadena: negociación, financiamiento de la operación, logística, aduanas y cumplimiento normativo.',
    services: [
      { title: 'Importación', text: 'Búsqueda de proveedores en el exterior, negociación, compra y nacionalización de mercaderías.' },
      { title: 'Exportación', text: 'Llevamos productos peruanos a nuevos mercados, con la documentación y certificaciones que exige cada destino.' },
      { title: 'Commodities', text: 'Compra y venta de materias primas agrícolas, minerales y energéticas.' },
      { title: 'Logística internacional', text: 'Coordinación de transporte marítimo, aéreo y terrestre, almacenaje y seguros de carga.' },
    ],
    sectors: ['Agroexportación', 'Minería', 'Alimentos', 'Industria', 'Retail'],
  },
  tecnologia: {
    intro: [
      'Creamos productos digitales propios y acompañamos a empresas e instituciones en su transformación digital, desde la estrategia hasta la puesta en marcha.',
      'Desarrollamos plataformas web y móviles, arquitecturas en la nube y soluciones de inteligencia artificial que automatizan procesos y mejoran la toma de decisiones.',
    ],
    focus: 'Construimos tecnología que se usa todos los días: productos simples para las personas, seguros con los datos y preparados para crecer.',
    services: [
      { title: 'Productos digitales', text: 'Plataformas propias como Recreo+, que digitaliza la venta de los kioscos escolares para familias, colegios y kioscos.' },
      { title: 'Arquitectura web y nube', text: 'Diseño y desarrollo de aplicaciones web y móviles, integraciones y servidores en la nube.' },
      { title: 'Inteligencia artificial', text: 'Automatización de procesos, lectura de documentos, asistentes y análisis de datos con IA.' },
      { title: 'Transformación digital', text: 'Diagnóstico, hoja de ruta y acompañamiento para digitalizar la operación de empresas e instituciones.' },
    ],
    sectors: ['Educación', 'Comercio', 'Servicios financieros', 'Sector público', 'Industria'],
  },
  'servicios-corporativos': {
    intro: [
      'Ponemos a disposición de las empresas del grupo y de clientes externos los equipos y el conocimiento que necesitan para crecer.',
      'Seleccionamos talento en el Perú y en el exterior, asumimos procesos administrativos y asesoramos a la alta dirección en decisiones estratégicas.',
    ],
    focus: 'Nuestro valor es la gente: equipos preparados, procesos ordenados y consejo independiente para decidir mejor.',
    services: [
      { title: 'Staffing global', text: 'Reclutamiento, selección y contratación de profesionales para proyectos en distintos países.' },
      { title: 'Consultoría estratégica', text: 'Planes de negocio, reestructuraciones, expansión y gobierno corporativo.' },
      { title: 'Servicios compartidos', text: 'Contabilidad, finanzas, legal y recursos humanos para las empresas del grupo y sus clientes.' },
      { title: 'Gestión de proyectos', text: 'Dirección de proyectos con metodologías y equipos dedicados.' },
    ],
    sectors: ['Empresas medianas y grandes', 'Multinacionales', 'Startups', 'Instituciones'],
  },
  industria: {
    intro: [
      'Desarrollamos operaciones productivas en manufactura, agroindustria y energía, con foco en la eficiencia, la calidad y el cuidado del medio ambiente.',
      'Invertimos en plantas, tecnología y equipos que agregan valor a las materias primas y generan empleo en las regiones donde operamos.',
    ],
    focus: 'Producimos con estándares de calidad y seguridad, y apostamos por fuentes de energía limpia en nuestras operaciones.',
    services: [
      { title: 'Manufactura', text: 'Producción y transformación de bienes industriales y de consumo.' },
      { title: 'Agroindustria', text: 'Cultivo, procesamiento y empaque de productos agrícolas para el mercado local y la exportación.' },
      { title: 'Energía', text: 'Proyectos de generación, con énfasis en energía solar y otras fuentes renovables.' },
      { title: 'Eficiencia operativa', text: 'Mejora de procesos productivos, automatización y control de calidad.' },
    ],
    sectors: ['Agro', 'Alimentos', 'Energía renovable', 'Manufactura', 'Construcción'],
  },
  'nuevos-mercados': {
    intro: [
      'Identificamos oportunidades de negocio en sectores y países donde el grupo aún no está, y diseñamos la forma de entrar con el menor riesgo posible.',
      'Articulamos ecosistemas de socios, clientes, proveedores e inversionistas para que cada nuevo negocio crezca acompañado.',
    ],
    focus: 'Probamos rápido y en pequeño, medimos resultados y escalamos solo lo que funciona.',
    services: [
      { title: 'Inteligencia de mercado', text: 'Estudios de mercado, competencia y regulación para evaluar nuevas oportunidades.' },
      { title: 'Expansión internacional', text: 'Entrada a nuevos países mediante alianzas, franquicias o empresas propias.' },
      { title: 'Alianzas estratégicas', text: 'Acuerdos con socios locales e internacionales para desarrollar negocios en conjunto.' },
      { title: 'Incubación de negocios', text: 'Apoyo a emprendimientos con potencial para integrarse al grupo.' },
    ],
    sectors: ['América Latina', 'Emprendimiento', 'Innovación', 'Alianzas público-privadas'],
  },
  fundacion: {
    intro: [
      'Canalizamos el compromiso del grupo con la sociedad a través de fundaciones, organizaciones no gubernamentales aliadas y programas de responsabilidad social.',
      'Priorizamos la educación, el desarrollo de las comunidades y el cuidado del medio ambiente en las zonas donde operan nuestras empresas.',
    ],
    focus: 'Cada programa tiene objetivos medibles y rinde cuentas de sus resultados.',
    services: [
      { title: 'Educación', text: 'Becas, equipamiento de escuelas y programas de formación para niños y jóvenes.' },
      { title: 'Desarrollo comunitario', text: 'Proyectos de infraestructura básica, salud y emprendimiento local.' },
      { title: 'Medio ambiente', text: 'Reforestación, gestión de residuos y uso eficiente de recursos.' },
      { title: 'Voluntariado corporativo', text: 'Participación de los colaboradores del grupo en los programas sociales.' },
    ],
    sectors: ['Comunidades andinas', 'Escuelas públicas', 'ONG aliadas', 'Gobiernos locales'],
  },
}

const en: Record<Slug, LineDetail> = {
  inversiones: {
    intro: [
      'This line manages the group’s capital and invests it in real estate and financial assets that generate stable income and long-term value.',
      'It structures the group’s stakes in each company, evaluates new investment opportunities and monitors portfolio performance.',
    ],
    focus: 'We invest with discipline: every decision rests on an analysis of risk, return and time horizon, and is approved by the investment committee.',
    services: [
      { title: 'Real estate development', text: 'Office, residential and commercial projects, from land acquisition to sale or lease.' },
      { title: 'Rental properties', text: 'Acquisition and management of properties that generate recurring income.' },
      { title: 'Financial investments', text: 'Management of the group’s treasury and investment in fixed-income and equity instruments.' },
      { title: 'Equity stakes', text: 'Acquisition of stakes in high-growth companies and their integration into the group.' },
    ],
    sectors: ['Real estate', 'Banking and finance', 'Capital markets', 'Growth companies'],
  },
  'comercio-exterior': {
    intro: [
      'We connect producers and buyers across countries, handling purchasing, freight, customs clearance and delivery of goods and commodities.',
      'We work with verified suppliers and logistics partners in major ports so that every shipment meets the deadlines, quality and regulations of each market.',
    ],
    focus: 'We take care of the whole chain: negotiation, trade finance, logistics, customs and regulatory compliance.',
    services: [
      { title: 'Import', text: 'Sourcing suppliers abroad, negotiation, purchasing and customs clearance of goods.' },
      { title: 'Export', text: 'We bring Peruvian products to new markets with the documents and certifications each destination requires.' },
      { title: 'Commodities', text: 'Trading of agricultural, mineral and energy raw materials.' },
      { title: 'International logistics', text: 'Coordination of sea, air and land freight, warehousing and cargo insurance.' },
    ],
    sectors: ['Agricultural exports', 'Mining', 'Food', 'Industry', 'Retail'],
  },
  tecnologia: {
    intro: [
      'We build our own digital products and help companies and institutions through their digital transformation, from strategy to rollout.',
      'We develop web and mobile platforms, cloud architectures and artificial intelligence solutions that automate processes and improve decision-making.',
    ],
    focus: 'We build technology people use every day: simple products, secure with data and ready to scale.',
    services: [
      { title: 'Digital products', text: 'Our own platforms such as Recreo+, which digitises school kiosk sales for families, schools and kiosks.' },
      { title: 'Web and cloud architecture', text: 'Design and development of web and mobile applications, integrations and cloud infrastructure.' },
      { title: 'Artificial intelligence', text: 'Process automation, document reading, assistants and data analysis with AI.' },
      { title: 'Digital transformation', text: 'Assessment, roadmap and support to digitise the operations of companies and institutions.' },
    ],
    sectors: ['Education', 'Commerce', 'Financial services', 'Public sector', 'Industry'],
  },
  'servicios-corporativos': {
    intro: [
      'We provide the group’s companies and external clients with the teams and know-how they need to grow.',
      'We recruit talent in Peru and abroad, take on administrative processes and advise senior management on strategic decisions.',
    ],
    focus: 'Our value is people: well-prepared teams, orderly processes and independent advice for better decisions.',
    services: [
      { title: 'Global staffing', text: 'Recruitment, selection and hiring of professionals for projects in different countries.' },
      { title: 'Strategy consulting', text: 'Business plans, restructuring, expansion and corporate governance.' },
      { title: 'Shared services', text: 'Accounting, finance, legal and human resources for the group’s companies and clients.' },
      { title: 'Project management', text: 'Project leadership with proven methodologies and dedicated teams.' },
    ],
    sectors: ['Mid-size and large companies', 'Multinationals', 'Startups', 'Institutions'],
  },
  industria: {
    intro: [
      'We run productive operations in manufacturing, agribusiness and energy, focused on efficiency, quality and care for the environment.',
      'We invest in plants, technology and equipment that add value to raw materials and create jobs in the regions where we operate.',
    ],
    focus: 'We produce to high quality and safety standards and favour clean energy sources in our operations.',
    services: [
      { title: 'Manufacturing', text: 'Production and processing of industrial and consumer goods.' },
      { title: 'Agribusiness', text: 'Growing, processing and packing agricultural products for local and export markets.' },
      { title: 'Energy', text: 'Power generation projects, with an emphasis on solar and other renewable sources.' },
      { title: 'Operational efficiency', text: 'Process improvement, automation and quality control.' },
    ],
    sectors: ['Agriculture', 'Food', 'Renewable energy', 'Manufacturing', 'Construction'],
  },
  'nuevos-mercados': {
    intro: [
      'We identify business opportunities in industries and countries where the group is not yet present, and design the lowest-risk way to enter.',
      'We bring together ecosystems of partners, customers, suppliers and investors so that every new business grows with support.',
    ],
    focus: 'We test fast and small, measure results and scale only what works.',
    services: [
      { title: 'Market intelligence', text: 'Market, competition and regulatory studies to assess new opportunities.' },
      { title: 'International expansion', text: 'Entry into new countries through partnerships, franchises or our own companies.' },
      { title: 'Strategic partnerships', text: 'Agreements with local and international partners to build businesses together.' },
      { title: 'Business incubation', text: 'Support for ventures with the potential to join the group.' },
    ],
    sectors: ['Latin America', 'Entrepreneurship', 'Innovation', 'Public-private partnerships'],
  },
  fundacion: {
    intro: [
      'We channel the group’s commitment to society through foundations, partner non-governmental organisations and social responsibility programmes.',
      'We prioritise education, community development and environmental care in the areas where our companies operate.',
    ],
    focus: 'Every programme has measurable goals and reports on its results.',
    services: [
      { title: 'Education', text: 'Scholarships, school equipment and training programmes for children and young people.' },
      { title: 'Community development', text: 'Basic infrastructure, health and local entrepreneurship projects.' },
      { title: 'Environment', text: 'Reforestation, waste management and efficient use of resources.' },
      { title: 'Corporate volunteering', text: 'Involvement of the group’s employees in social programmes.' },
    ],
    sectors: ['Andean communities', 'Public schools', 'Partner NGOs', 'Local governments'],
  },
}

/** Textos fijos de la página de una línea */
export const lineUi = {
  es: {
    breadcrumb: 'Nuestros negocios', about: 'La línea', services: 'Qué hacemos', process: 'Cómo trabajamos',
    sectors: 'Sectores que atendemos', figures: 'La línea en cifras', companies: 'Empresas de la línea',
    ctaTitle: (tag: string) => `¿Quieres trabajar con nuestra línea de ${tag.toLowerCase()}?`,
    ctaText: 'Cuéntanos tu proyecto y el equipo de esta línea se pondrá en contacto contigo.', cta: 'Contactar al equipo',
    others: 'Otras líneas del grupo', back: 'Volver a todos los negocios', more: 'Ver línea',
    steps: [
      { title: 'Análisis', text: 'Estudiamos el mercado, el riesgo y el retorno de cada oportunidad.' },
      { title: 'Estructuración', text: 'Definimos el modelo de negocio, los socios y el capital necesario.' },
      { title: 'Ejecución', text: 'Ponemos en marcha la operación con equipos y procesos propios.' },
      { title: 'Crecimiento', text: 'Medimos resultados, mejoramos y escalamos con el respaldo del grupo.' },
    ],
    figureLabels: ['Empresas', 'Países', 'Colaboradores', 'Clientes'], figureValue: pending('N.º') as Text,
  },
  en: {
    breadcrumb: 'Our businesses', about: 'The business line', services: 'What we do', process: 'How we work',
    sectors: 'Industries we serve', figures: 'The line in figures', companies: 'Companies in this line',
    ctaTitle: (tag: string) => `Want to work with our ${tag.toLowerCase()} team?`,
    ctaText: 'Tell us about your project and the team behind this line will get in touch.', cta: 'Contact the team',
    others: 'Other business lines', back: 'Back to all businesses', more: 'View line',
    steps: [
      { title: 'Analysis', text: 'We study the market, risk and return of every opportunity.' },
      { title: 'Structuring', text: 'We define the business model, partners and capital required.' },
      { title: 'Execution', text: 'We launch operations with our own teams and processes.' },
      { title: 'Growth', text: 'We measure results, improve and scale with the backing of the group.' },
    ],
    figureLabels: ['Companies', 'Countries', 'Employees', 'Clients'], figureValue: pending('No.') as Text,
  },
}

const details: Record<Locale, Record<Slug, LineDetail>> = { es, en }
export const getLineDetail = (lang: Locale, slug: string): LineDetail | undefined => details[lang][slug as Slug]
