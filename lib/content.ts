// Contenido del sitio en español e inglés. Los datos marcados con `pending(...)` aún no están definidos: se muestran
// resaltados en la web para que se vean y se reemplacen antes de publicar (en ambos idiomas).

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'
export const hasLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)

export type Pending = { pending: string }
export const pending = (label: string): Pending => ({ pending: label })
export type Text = string | Pending

/** Datos que no cambian con el idioma */
export const brand = { name: 'HEN Holding Corp', fullName: 'Hub Earth Nexus', domain: 'grupohen.com' }
export const siteUrl = `https://${brand.domain}`

const images = {
  investments: '/img/inmobiliaria.jpg', trade: '/img/comercio.jpg', technology: '/img/tecnologia.jpg', services: '/img/servicios.jpg',
  industry: '/img/industria.jpg', markets: '/img/mercados.jpg', foundation: '/img/fundacion.jpg', group: '/img/grupo.jpg',
}

export type Business = { slug: string; tag: string; title: string; image: string; description: string; companies: Text[] }

const es = {
  meta: {
    title: 'HEN Holding Corp · Hub Earth Nexus',
    description: 'Holding peruano con inversiones en el sector inmobiliario y financiero, comercio exterior, tecnología, servicios corporativos, industria, nuevos mercados y responsabilidad social.',
  },
  company: {
    legalName: pending('Razón social'), ruc: pending('RUC'), address: pending('Dirección de la oficina principal'),
    email: pending('Correo de contacto'), phone: pending('Teléfono'),
  },
  nav: [
    { href: '#nosotros', label: 'Quiénes somos' }, { href: '#negocios', label: 'Nuestros negocios' },
    { href: '#inversionistas', label: 'Inversionistas' }, { href: '#sostenibilidad', label: 'Sostenibilidad' },
    { href: '#noticias', label: 'Sala de prensa' },
  ],
  utility: [
    { href: '#contacto', label: 'Contacto' }, { href: '#contacto', label: 'Trabaja con nosotros' }, { href: '#sostenibilidad', label: 'Fundación' },
  ],
  ui: { menu: 'Menú', close: 'Cerrar', home: 'HEN Holding Corp, inicio', mainNav: 'Principal', footerNav: 'Pie de página', language: 'Idioma', pendingTitle: 'Dato pendiente de definir' },
  hero: {
    title: 'Conectamos capital, talento y mercados para construir el futuro.',
    text: 'Somos un holding peruano que invierte y desarrolla empresas en siete líneas de negocio: del sector inmobiliario y financiero al comercio exterior, la tecnología, la industria y el impacto social.',
    primary: 'Conoce nuestros negocios', secondary: 'Contáctanos',
    cardEyebrow: 'El grupo', card: '7 líneas de negocio, una sola visión de largo plazo',
    alts: ['Torre de oficinas al atardecer', 'Puerto de contenedores', 'Equipo de tecnología'],
  },
  about: {
    eyebrow: 'Quiénes somos', title: 'Un nexo entre capital, talento y mercados',
    p1: 'es la empresa matriz de un grupo de compañías que operan con autonomía en sus sectores. Desde la matriz definimos la estrategia, asignamos capital y compartimos servicios corporativos para que cada empresa crezca con solidez.',
    legal: ['Nuestra razón social es', 'con RUC'],
    pillars: [
      ['Misión', 'Crear y hacer crecer empresas que generen valor sostenible para sus clientes, sus equipos y el país.'],
      ['Visión', 'Ser un holding de referencia en América Latina por la diversidad y solidez de sus negocios.'],
      ['Valores', 'Integridad, visión de largo plazo, innovación y compromiso con la sociedad.'],
    ],
  },
  figuresLabel: 'Cifras del grupo',
  figures: [
    { label: 'Líneas de negocio', value: '7' as Text, note: 'Sectores en los que opera el grupo' },
    { label: 'Empresas del grupo', value: pending('N.º'), note: 'Dato por confirmar' },
    { label: 'Países con operaciones', value: pending('N.º'), note: 'Dato por confirmar' },
    { label: 'Colaboradores', value: pending('N.º'), note: 'Dato por confirmar' },
  ],
  businessesSection: {
    eyebrow: 'Nuestros negocios', title: 'Siete líneas de negocio, un mismo grupo',
    text: 'Cada línea agrupa empresas con equipos propios. La matriz acompaña su estrategia y su crecimiento.',
    ctaEyebrow: 'Alianzas', ctaTitle: '¿Tienes un proyecto para el grupo?',
    ctaText: 'Buscamos socios, empresas y emprendedores para crecer juntos en cualquiera de nuestras líneas.', ctaLink: 'Conversemos',
    more: 'Conocer más',
  },
  businesses: [
    { slug: 'inversiones', tag: 'Inversiones', title: 'Gestión de Inversiones y Actividades de Holding', image: images.investments,
      description: 'Administramos el portafolio del grupo e invertimos en proyectos inmobiliarios y financieros con visión de largo plazo.',
      companies: [pending('Empresas de esta línea')] },
    { slug: 'comercio-exterior', tag: 'Comercio exterior', title: 'Comercio Exterior, Importación, Exportación y Commodities', image: images.trade,
      description: 'Conectamos productores y compradores de distintos países: importación, exportación y comercialización de commodities.',
      companies: [pending('Empresas de esta línea')] },
    { slug: 'tecnologia', tag: 'Tecnología', title: 'Tecnología, Arquitectura Web, Inteligencia Artificial y Transformación Digital', image: images.technology,
      description: 'Creamos plataformas digitales, soluciones de inteligencia artificial y acompañamos la transformación digital de empresas e instituciones.',
      companies: ['Recreo+ · plataforma de kioscos escolares', 'GIA · inteligencia artificial del grupo'] },
    { slug: 'servicios-corporativos', tag: 'Servicios corporativos', title: 'Servicios Corporativos, Staffing Global y Consultoría Estratégica', image: images.services,
      description: 'Ponemos a disposición equipos especializados, selección de talento a escala global y consultoría para decisiones estratégicas.',
      companies: [pending('Empresas de esta línea')] },
    { slug: 'industria', tag: 'Industria y energía', title: 'Industria, Manufactura, Agroindustria y Energía', image: images.industry,
      description: 'Desarrollamos operaciones productivas en manufactura, agroindustria y energía, con foco en eficiencia y sostenibilidad.',
      companies: [pending('Empresas de esta línea')] },
    { slug: 'nuevos-mercados', tag: 'Nuevos mercados', title: 'Desarrollo de Nuevos Mercados y Ecosistemas de Negocio', image: images.markets,
      description: 'Identificamos oportunidades, abrimos nuevos mercados y articulamos ecosistemas de socios, clientes y proveedores.',
      companies: [pending('Empresas de esta línea')] },
    { slug: 'fundacion', tag: 'Fundación', title: 'Fundaciones, ONG, Filantropía y Responsabilidad Social', image: images.foundation,
      description: 'Canalizamos el compromiso social del grupo a través de fundaciones, organizaciones aliadas y programas de responsabilidad social.',
      companies: [pending('Nombre de la fundación')] },
  ] as Business[],
  investors: {
    eyebrow: 'Relación con el inversionista', title: 'Gobierno corporativo y transparencia',
    text: 'El directorio aprueba la estrategia del grupo, la entrada a nuevos negocios y la asignación de capital entre las empresas.',
    roles: ['Presidente del directorio', 'Gerente general', 'Director financiero', 'Director independiente'], name: pending('Nombre'),
    docsTitle: 'Documentos corporativos', pdf: pending('PDF pendiente'),
    docs: ['Estatuto social', 'Código de ética y conducta', 'Política de protección de datos personales', 'Memoria anual', 'Canal de denuncias'] as Text[],
  },
  sustainability: {
    eyebrow: 'Sostenibilidad', title: 'Crecemos junto a las comunidades', alt: 'Voluntarios con niños en una escuela de los Andes',
    text: ['A través de', 'impulsamos programas de educación, filantropía y responsabilidad social, en alianza con organizaciones no gubernamentales.'],
    pillars: ['Educación', 'Comunidades', 'Medio ambiente'],
  },
  newsSection: { eyebrow: 'Sala de prensa', title: 'Noticias del grupo' },
  home: {
    about: 'Sobre nosotros', aboutMore: 'Conoce nuestros negocios', news: 'Últimas noticias', readMore: 'Conocer más',
    businesses: 'Nuestros negocios', explore: 'Explora más', sitemap: 'Mapa del sitio', social: 'Redes sociales',
    figuresNote: 'Datos por confirmar',
  },
  explore: [
    { title: 'Relación con el inversionista', items: ['Gobierno corporativo', 'Directorio y gerencia', 'Estatuto social', 'Memoria anual'] },
    { title: 'Sostenibilidad', items: ['Fundación', 'Educación', 'Comunidades', 'Medio ambiente'] },
    { title: 'Sala de prensa', items: ['Noticias', 'Kit de prensa', 'HEN Holding Corp en redes sociales'] },
  ],
  news: [
    { date: pending('Fecha'), title: 'HEN Holding Corp presenta su nueva identidad corporativa' as Text, excerpt: 'El holding reúne sus siete líneas de negocio bajo una sola marca.', image: images.group },
    { date: pending('Fecha'), title: 'Recreo+ se integra a la línea de Tecnología' as Text, excerpt: 'La plataforma de kioscos escolares atiende a colegios, institutos y universidades del Perú.', image: images.technology },
    { date: pending('Fecha'), title: pending('Titular de la noticia'), excerpt: 'Espacio para la próxima novedad del grupo.', image: images.markets },
  ],
  contact: {
    eyebrow: 'Contacto', title: 'Conversemos', text: 'Escríbenos para inversiones, alianzas, prensa o para trabajar con nosotros.',
    labels: { address: 'Dirección', email: 'Correo', phone: 'Teléfono' },
    form: {
      name: 'Nombre y apellido', company: 'Empresa', email: 'Correo', phone: 'Teléfono', topic: 'Motivo', message: 'Mensaje', submit: 'Enviar mensaje',
      topics: ['Inversión y alianzas', 'Comercio exterior', 'Tecnología e IA', 'Servicios corporativos y staffing', 'Industria y energía', 'Fundación', 'Prensa', 'Trabaja con nosotros'],
      sentTitle: 'Gracias por escribirnos',
      sentText: 'Este formulario es de prueba: el envío se conectará cuando se defina el correo de contacto del grupo.',
      again: 'Enviar otro mensaje',
    },
  },
  footer: {
    tagline: 'Hub Earth Nexus. Holding peruano diversificado.', group: 'El grupo', businesses: 'Negocios',
    legal: ['Términos de uso', 'Política de privacidad', 'Libro de reclamaciones'],
  },
}

export type Content = typeof es

const en: Content = {
  meta: {
    title: 'HEN Holding Corp · Hub Earth Nexus',
    description: 'Peruvian holding company investing in real estate and finance, international trade, technology, corporate services, industry, new markets and social responsibility.',
  },
  company: {
    legalName: pending('Legal name'), ruc: pending('Tax ID (RUC)'), address: pending('Head office address'),
    email: pending('Contact email'), phone: pending('Phone'),
  },
  nav: [
    { href: '#nosotros', label: 'About us' }, { href: '#negocios', label: 'Our businesses' },
    { href: '#inversionistas', label: 'Investors' }, { href: '#sostenibilidad', label: 'Sustainability' },
    { href: '#noticias', label: 'Newsroom' },
  ],
  utility: [
    { href: '#contacto', label: 'Contact' }, { href: '#contacto', label: 'Careers' }, { href: '#sostenibilidad', label: 'Foundation' },
  ],
  ui: { menu: 'Menu', close: 'Close', home: 'HEN Holding Corp, home', mainNav: 'Main', footerNav: 'Footer', language: 'Language', pendingTitle: 'Information to be confirmed' },
  hero: {
    title: 'We connect capital, talent and markets to build the future.',
    text: 'We are a Peruvian holding company that invests in and builds businesses across seven lines: from real estate and finance to international trade, technology, industry and social impact.',
    primary: 'Explore our businesses', secondary: 'Contact us',
    cardEyebrow: 'The group', card: '7 business lines, one long-term vision',
    alts: ['Office tower at sunset', 'Container port', 'Technology team'],
  },
  about: {
    eyebrow: 'About us', title: 'A nexus between capital, talent and markets',
    p1: 'is the parent company of a group of businesses that operate independently in their industries. From the parent company we set the strategy, allocate capital and share corporate services so that each business grows on solid ground.',
    legal: ['Our legal name is', 'with tax ID'],
    pillars: [
      ['Mission', 'To build and grow companies that create lasting value for their customers, their teams and the country.'],
      ['Vision', 'To be a benchmark holding company in Latin America for the diversity and strength of its businesses.'],
      ['Values', 'Integrity, long-term thinking, innovation and commitment to society.'],
    ],
  },
  figuresLabel: 'The group in figures',
  figures: [
    { label: 'Business lines', value: '7', note: 'Industries in which the group operates' },
    { label: 'Group companies', value: pending('No.'), note: 'To be confirmed' },
    { label: 'Countries of operation', value: pending('No.'), note: 'To be confirmed' },
    { label: 'Employees', value: pending('No.'), note: 'To be confirmed' },
  ],
  businessesSection: {
    eyebrow: 'Our businesses', title: 'Seven business lines, one group',
    text: 'Each line brings together companies with their own teams. The parent company supports their strategy and growth.',
    ctaEyebrow: 'Partnerships', ctaTitle: 'Do you have a project for the group?',
    ctaText: 'We are looking for partners, companies and entrepreneurs to grow together in any of our business lines.', ctaLink: "Let's talk",
    more: 'Learn more',
  },
  businesses: [
    { slug: 'inversiones', tag: 'Investments', title: 'Investment Management and Holding Activities', image: images.investments,
      description: 'We manage the group’s portfolio and invest in real estate and financial projects with a long-term view.',
      companies: [pending('Companies in this line')] },
    { slug: 'comercio-exterior', tag: 'International trade', title: 'International Trade, Import, Export and Commodities', image: images.trade,
      description: 'We connect producers and buyers across countries: import, export and commodity trading.',
      companies: [pending('Companies in this line')] },
    { slug: 'tecnologia', tag: 'Technology', title: 'Technology, Web Architecture, Artificial Intelligence and Digital Transformation', image: images.technology,
      description: 'We build digital platforms and artificial intelligence solutions, and support the digital transformation of companies and institutions.',
      companies: ['Recreo+ · school kiosk platform', 'GIA · the group’s artificial intelligence company'] },
    { slug: 'servicios-corporativos', tag: 'Corporate services', title: 'Corporate Services, Global Staffing and Strategy Consulting', image: images.services,
      description: 'We provide specialised teams, global talent recruitment and consulting for strategic decisions.',
      companies: [pending('Companies in this line')] },
    { slug: 'industria', tag: 'Industry and energy', title: 'Industry, Manufacturing, Agribusiness and Energy', image: images.industry,
      description: 'We run productive operations in manufacturing, agribusiness and energy, with a focus on efficiency and sustainability.',
      companies: [pending('Companies in this line')] },
    { slug: 'nuevos-mercados', tag: 'New markets', title: 'New Market Development and Business Ecosystems', image: images.markets,
      description: 'We identify opportunities, open new markets and bring together ecosystems of partners, customers and suppliers.',
      companies: [pending('Companies in this line')] },
    { slug: 'fundacion', tag: 'Foundation', title: 'Foundations, NGOs, Philanthropy and Social Responsibility', image: images.foundation,
      description: 'We channel the group’s social commitment through foundations, partner organisations and social responsibility programmes.',
      companies: [pending('Foundation name')] },
  ],
  investors: {
    eyebrow: 'Investor relations', title: 'Corporate governance and transparency',
    text: 'The board approves the group’s strategy, entry into new businesses and the allocation of capital across companies.',
    roles: ['Chairman of the board', 'Chief executive officer', 'Chief financial officer', 'Independent director'], name: pending('Name'),
    docsTitle: 'Corporate documents', pdf: pending('PDF pending'),
    docs: ['Articles of association', 'Code of ethics and conduct', 'Personal data protection policy', 'Annual report', 'Whistleblowing channel'],
  },
  sustainability: {
    eyebrow: 'Sustainability', title: 'We grow together with communities', alt: 'Volunteers with children at a school in the Andes',
    text: ['Through', 'we run education, philanthropy and social responsibility programmes in partnership with non-governmental organisations.'],
    pillars: ['Education', 'Communities', 'Environment'],
  },
  newsSection: { eyebrow: 'Newsroom', title: 'Group news' },
  home: {
    about: 'About us', aboutMore: 'Explore our businesses', news: 'Latest news', readMore: 'Learn more',
    businesses: 'Our businesses', explore: 'Explore more', sitemap: 'Site map', social: 'Social media',
    figuresNote: 'To be confirmed',
  },
  explore: [
    { title: 'Investor relations', items: ['Corporate governance', 'Board and management', 'Articles of association', 'Annual report'] },
    { title: 'Sustainability', items: ['Foundation', 'Education', 'Communities', 'Environment'] },
    { title: 'Newsroom', items: ['News', 'Press kit', 'HEN Holding Corp on social media'] },
  ],
  news: [
    { date: pending('Date'), title: 'HEN Holding Corp unveils its new corporate identity', excerpt: 'The holding company brings its seven business lines together under one brand.', image: images.group },
    { date: pending('Date'), title: 'Recreo+ joins the Technology business line', excerpt: 'The school kiosk platform serves schools, institutes and universities across Peru.', image: images.technology },
    { date: pending('Date'), title: pending('Headline'), excerpt: 'Space for the group’s next announcement.', image: images.markets },
  ],
  contact: {
    eyebrow: 'Contact', title: "Let's talk", text: 'Write to us about investments, partnerships, press or careers.',
    labels: { address: 'Address', email: 'Email', phone: 'Phone' },
    form: {
      name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', topic: 'Topic', message: 'Message', submit: 'Send message',
      topics: ['Investment and partnerships', 'International trade', 'Technology and AI', 'Corporate services and staffing', 'Industry and energy', 'Foundation', 'Press', 'Careers'],
      sentTitle: 'Thank you for your message',
      sentText: 'This form is a preview: sending will be connected once the group’s contact email is defined.',
      again: 'Send another message',
    },
  },
  footer: {
    tagline: 'Hub Earth Nexus. Diversified Peruvian holding company.', group: 'The group', businesses: 'Businesses',
    legal: ['Terms of use', 'Privacy policy', 'Complaints book'],
  },
}

const content: Record<Locale, Content> = { es, en }
export const getContent = (lang: Locale) => content[lang]
