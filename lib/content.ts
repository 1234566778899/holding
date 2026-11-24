// Contenido del sitio en español e inglés. Los datos de contacto, cifras, empresas y noticias son provisionales
// (inventados para el diseño): reemplázalos cuando el grupo los confirme.

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'
export const hasLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)

/** Datos que no cambian con el idioma */
export const brand = { name: 'HEN Holding Corp', fullName: 'Hub Earth Nexus', domain: 'grupohen.com' }
export const siteUrl = `https://${brand.domain}`

const images = {
  investments: '/img/inmobiliaria.jpg', trade: '/img/comercio.jpg', technology: '/img/tecnologia.jpg', services: '/img/servicios.jpg',
  industry: '/img/industria.jpg', finance: '/img/mercados.jpg', creative: '/img/entretenimiento.jpg', sports: '/img/deportes.jpg', technical: '/img/servicios-tecnicos.jpg', foundation: '/img/fundacion.jpg', group: '/img/grupo.jpg',
}

export type Company = { name: string; url?: string }
export type Business = { slug: string; tag: string; title: string; image: string; description: string; companies: Company[] }

/** Datos de contacto (provisionales) */
const contact = {
  address: 'Av. Javier Prado Este 492, piso 14, San Isidro, Lima, Perú',
  email: 'contacto@grupohen.com', phone: '+51 1 615 4300',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/grupohen' },
    { label: 'Facebook', href: 'https://www.facebook.com/grupohen' },
    { label: 'Instagram', href: 'https://www.instagram.com/grupohen' },
  ],
}

const es = {
  meta: {
    title: 'HEN Holding Corp · Hub Earth Nexus',
    description: 'Holding peruano con diez líneas de negocio: banca y fintech, industria creativa, inversiones e inmobiliaria, comercio exterior, tecnología, servicios corporativos, industria y energía, deportes, servicios técnicos y filantropía.',
  },
  company: contact,
  nav: [
    { href: '#nosotros', label: 'Quiénes somos' }, { href: '#negocios', label: 'Nuestros negocios' },
    { href: '#presencia', label: 'Presencia' }, { href: '#fundacion', label: 'Fundación HEN' },
    { href: '#noticias', label: 'Sala de prensa' }, { href: '#contacto', label: 'Contacto' },
  ],
  ui: { menu: 'Menú', close: 'Cerrar', home: 'HEN Holding Corp, inicio', mainNav: 'Principal', footerNav: 'Pie de página', language: 'Idioma' },
  hero: {
    title: 'Conectamos capital, talento y mercados para construir el futuro.',
    text: 'Somos un holding peruano que invierte y desarrolla empresas en diez líneas de negocio: de la banca, el sector inmobiliario y el comercio exterior a la tecnología, la industria, el entretenimiento, el deporte y el impacto social.',
    primary: 'Conoce nuestros negocios', secondary: 'Contáctanos',
    cardEyebrow: 'El grupo', card: '10 líneas de negocio, una sola visión de largo plazo',
    alts: ['Torre de oficinas al atardecer', 'Puerto de contenedores', 'Equipo de tecnología'],
  },
  about: {
    eyebrow: 'Quiénes somos', title: 'Un nexo entre capital, talento y mercados',
    p1: 'es la empresa matriz de un grupo de compañías que operan con autonomía en sus sectores. Desde la matriz definimos la estrategia, asignamos capital y compartimos servicios corporativos para que cada empresa crezca con solidez.',
    pillars: [
      ['Misión', 'Crear y hacer crecer empresas que generen valor sostenible para sus clientes, sus equipos y el país.'],
      ['Visión', 'Ser un holding de referencia en América Latina por la diversidad y solidez de sus negocios.'],
      ['Valores', 'Integridad, visión de largo plazo, innovación y compromiso con la sociedad.'],
    ],
  },
  figuresLabel: 'Cifras del grupo',
  figures: [
    { label: 'Líneas de negocio', value: 10, suffix: '', note: 'Sectores en los que opera el grupo' },
    { label: 'Empresas del grupo', value: 20, suffix: '', note: 'Con equipos y gestión propios' },
    { label: 'Países con operaciones', value: 6, suffix: '', note: 'En América Latina y Estados Unidos' },
    { label: 'Colaboradores', value: 3200, suffix: '+', note: 'Personas que hacen crecer al grupo' },
  ],
  businessesSection: {
    eyebrow: 'Nuestros negocios', title: 'Diez líneas de negocio, un mismo grupo',
    text: 'Cada línea agrupa empresas con equipos propios. La matriz acompaña su estrategia y su crecimiento.',
    ctaEyebrow: 'Alianzas', ctaTitle: '¿Tienes un proyecto para el grupo?',
    ctaText: 'Buscamos socios, empresas y emprendedores para crecer juntos en cualquiera de nuestras líneas.', ctaLink: 'Conversemos',
    more: 'Conocer más',
  },
  businesses: [
    { slug: 'finanzas', tag: 'Banca y fintech', title: 'Banca, Servicios Financieros, Fintech y Ecosistemas de Inversión', image: images.finance,
      description: 'Constituimos y operamos entidades financieras y fintech, administramos fondos de capital de riesgo y desarrollamos finanzas descentralizadas.',
      companies: [{ name: 'HEN Capital SAF' }, { name: 'Nexus Pay' }] },
    { slug: 'entretenimiento', tag: 'Industria creativa', title: 'Industria Creativa, Productoras, Agencias de Medios, Entretenimiento y Gaming', image: images.creative,
      description: 'Producimos contenidos audiovisuales, representamos talentos, operamos agencias de medios y eventos, y desarrollamos videojuegos y e-sports.',
      companies: [{ name: 'HEN Studios' }, { name: 'Nexus Gaming' }] },
    { slug: 'inversiones', tag: 'Holding e inmobiliaria', title: 'Holding Corporativo, Gestión de Inversiones Patrimoniales y Macroproyectos Inmobiliarios', image: images.investments,
      description: 'Administramos el portafolio del grupo, operamos mercados de activos de alto valor y desarrollamos macroproyectos inmobiliarios.',
      companies: [{ name: 'HEN Inversiones Inmobiliarias' }, { name: 'Nexus Real Estate' }] },
    { slug: 'comercio-exterior', tag: 'Comercio exterior', title: 'Comercio Exterior, Supply Chain Global, Importación, Exportación y Commodities', image: images.trade,
      description: 'Procesamos, importamos, exportamos y transportamos mercaderías y commodities, del envío pequeño a la carga intercontinental.',
      companies: [{ name: 'HEN Trade & Logistics' }, { name: 'Nexus Commodities' }] },
    { slug: 'tecnologia', tag: 'Tecnología', title: 'Tecnología, Arquitectura Web, Inteligencia Artificial, Cloud Computing y Ciberseguridad', image: images.technology,
      description: 'Creamos software, marketplaces y soluciones de inteligencia artificial, operamos infraestructura en la nube y protegemos los datos de las empresas.',
      companies: [{ name: 'GIA Business & IT Consulting', url: 'https://gia.grupohen.com' }, { name: 'Recreo+ · kioscos escolares', url: 'https://recreo.grupohen.com' }] },
    { slug: 'servicios-corporativos', tag: 'Servicios corporativos', title: 'Servicios Corporativos, BPO, Staffing Global, Headhunting y Consultoría de Alta Gerencia', image: images.services,
      description: 'Tercerizamos procesos, seleccionamos talento a escala global, asesoramos a la alta dirección y construimos marcas personales.',
      companies: [{ name: 'HEN Talent' }, { name: 'Nexus BPO' }] },
    { slug: 'industria', tag: 'Industria y energía', title: 'Industria, Manufactura, Retail, Energía e Infraestructura', image: images.industry,
      description: 'Operamos plantas agroindustriales y pesqueras, cadenas de retail, proyectos mineros y energéticos, y obras de infraestructura.',
      companies: [{ name: 'HEN Energía' }, { name: 'Agroindustrias Nexus' }] },
    { slug: 'deportes', tag: 'Deportes', title: 'Deportes, Clubes, Franquicias, Estadios, Ligas y Gestión Deportiva Global', image: images.sports,
      description: 'Creamos e invertimos en clubes y academias, administramos estadios, organizamos ligas y gestionamos derechos y patrocinios deportivos.',
      companies: [{ name: 'HEN Sports Management' }, { name: 'Club Deportivo Nexus' }, { name: 'Arena HEN' }] },
    { slug: 'servicios-tecnicos', tag: 'Servicios técnicos', title: 'Talleres, Servicios Técnicos Especializados y Generales', image: images.technical,
      description: 'Talleres automotrices, electricidad, gasfitería, limpieza, climatización, seguridad electrónica y logística urbana para hogares y empresas.',
      companies: [{ name: 'HEN Servicios Técnicos' }] },
    { slug: 'fundacion', tag: 'Fundación', title: 'Fundaciones, Organizaciones No Gubernamentales (ONG) y Filantropía Global', image: images.foundation,
      description: 'Canalizamos el compromiso social del grupo a través de fundaciones, ONG y programas de cooperación internacional.',
      companies: [{ name: 'Fundación HEN' }] },
  ] as Business[],
  presence: {
    eyebrow: 'Presencia', title: 'Operamos en seis países',
    text: 'Desde Lima, el grupo opera en América Latina y en Estados Unidos, con oficinas y socios locales en cada mercado.',
    hq: 'Sede principal', cities: 'Lima · Bogotá · Quito · Santiago · Ciudad de Panamá · Miami',
    countries: { pe: 'Perú', co: 'Colombia', ec: 'Ecuador', cl: 'Chile', pa: 'Panamá', us: 'Estados Unidos' },
  },
  foundation: {
    eyebrow: 'Fundación HEN', title: 'Crecemos junto a las comunidades',
    text: 'La Fundación HEN canaliza el compromiso social del grupo con programas de educación, desarrollo comunitario y cuidado del medio ambiente, en alianza con organizaciones no gubernamentales.',
    programs: [
      { title: 'Becas HEN', text: 'Becas integrales para que jóvenes de regiones estudien carreras técnicas y universitarias.', image: '/img/becas.jpg' },
      { title: 'Voluntariado HEN', text: 'Colaboradores de las empresas del grupo donan su tiempo y talento a escuelas y comunidades.', image: images.foundation },
      { title: 'Planeta HEN', text: 'Reforestación, reciclaje y eficiencia energética en las operaciones del grupo y sus comunidades.', image: '/img/ambiente.jpg' },
    ],
  },
  newsSection: { eyebrow: 'Sala de prensa', title: 'Noticias y notas de prensa' },
  home: {
    aboutTitle: 'Somos un holding peruano con visión global', more: 'Conoce más',
    businesses: 'Nuestros negocios', news: 'Noticias y notas de prensa',
    sitemap: 'Links rápidos', social: 'Síguenos', legalTitle: 'Legal', up: 'Subir', scroll: 'Bajar',
    prev: 'Anterior', next: 'Siguiente', explore: 'Ver línea',
    rail: { inicio: 'Inicio', nosotros: 'Quiénes somos', negocios: 'Nuestros negocios', presencia: 'Presencia', fundacion: 'Fundación', noticias: 'Noticias', contacto: 'Contacto' },
  },
  news: [
    { date: '12 nov 2026', tag: 'Grupo', title: 'HEN Holding Corp presenta su nueva identidad corporativa', excerpt: 'El holding reúne sus diez líneas de negocio bajo una sola marca.', image: images.group },
    { date: '28 oct 2026', tag: 'Tecnología', title: 'GIA Business & IT Consulting lanza su oferta de inteligencia artificial para empresas', excerpt: 'La empresa de tecnología del grupo suma servicios de IA, datos y ciberseguridad.', image: images.technology },
    { date: '15 oct 2026', tag: 'Fundación', title: 'Fundación HEN entrega 120 becas a jóvenes de seis regiones del Perú', excerpt: 'Los becarios estudiarán carreras técnicas y universitarias con apoyo integral.', image: '/img/becas.jpg' },
    { date: '30 set 2026', tag: 'Tecnología', title: 'Recreo+ llega a más de 80 colegios con su plataforma de kioscos escolares', excerpt: 'Padres y alumnos pagan y reservan sus pedidos desde el celular.', image: images.technical },
  ],
  contact: {
    eyebrow: 'Contacto', title: 'Conversemos', text: 'Escríbenos para inversiones, alianzas, prensa o para trabajar con nosotros.',
    labels: { address: 'Dirección', email: 'Correo', phone: 'Teléfono' },
    form: {
      name: 'Nombre y apellido', company: 'Empresa', email: 'Correo', phone: 'Teléfono', topic: 'Motivo', message: 'Mensaje', submit: 'Enviar mensaje',
      topics: ['Inversión y alianzas', 'Banca y fintech', 'Industria creativa y entretenimiento', 'Inmobiliaria', 'Comercio exterior', 'Tecnología e IA', 'Servicios corporativos y staffing', 'Industria y energía', 'Deportes', 'Servicios técnicos', 'Fundación', 'Prensa', 'Trabaja con nosotros'],
      sentTitle: 'Gracias por escribirnos',
      sentText: 'Recibimos tu mensaje. Un miembro de nuestro equipo te responderá en un plazo de 48 horas hábiles.',
      again: 'Enviar otro mensaje',
    },
  },
  footer: {
    tagline: 'Hub Earth Nexus. Holding peruano diversificado.', businesses: 'Negocios',
    legal: ['Términos de uso', 'Política de privacidad', 'Libro de reclamaciones'],
  },
}

export type Content = typeof es

const en: Content = {
  meta: {
    title: 'HEN Holding Corp · Hub Earth Nexus',
    description: 'Peruvian holding company with ten business lines: banking and fintech, creative industries, investments and real estate, international trade, technology, corporate services, industry and energy, sports, technical services and philanthropy.',
  },
  company: contact,
  nav: [
    { href: '#nosotros', label: 'About us' }, { href: '#negocios', label: 'Our businesses' },
    { href: '#presencia', label: 'Presence' }, { href: '#fundacion', label: 'HEN Foundation' },
    { href: '#noticias', label: 'Newsroom' }, { href: '#contacto', label: 'Contact' },
  ],
  ui: { menu: 'Menu', close: 'Close', home: 'HEN Holding Corp, home', mainNav: 'Main', footerNav: 'Footer', language: 'Language' },
  hero: {
    title: 'We connect capital, talent and markets to build the future.',
    text: 'We are a Peruvian holding company that invests in and builds businesses across ten lines: from banking, real estate and international trade to technology, industry, entertainment, sport and social impact.',
    primary: 'Explore our businesses', secondary: 'Contact us',
    cardEyebrow: 'The group', card: '10 business lines, one long-term vision',
    alts: ['Office tower at sunset', 'Container port', 'Technology team'],
  },
  about: {
    eyebrow: 'About us', title: 'A nexus between capital, talent and markets',
    p1: 'is the parent company of a group of businesses that operate independently in their industries. From the parent company we set the strategy, allocate capital and share corporate services so that each business grows on solid ground.',
    pillars: [
      ['Mission', 'To build and grow companies that create lasting value for their customers, their teams and the country.'],
      ['Vision', 'To be a benchmark holding company in Latin America for the diversity and strength of its businesses.'],
      ['Values', 'Integrity, long-term thinking, innovation and commitment to society.'],
    ],
  },
  figuresLabel: 'The group in figures',
  figures: [
    { label: 'Business lines', value: 10, suffix: '', note: 'Industries in which the group operates' },
    { label: 'Group companies', value: 20, suffix: '', note: 'With their own teams and management' },
    { label: 'Countries of operation', value: 6, suffix: '', note: 'Across Latin America and the United States' },
    { label: 'Employees', value: 3200, suffix: '+', note: 'People who make the group grow' },
  ],
  businessesSection: {
    eyebrow: 'Our businesses', title: 'Ten business lines, one group',
    text: 'Each line brings together companies with their own teams. The parent company supports their strategy and growth.',
    ctaEyebrow: 'Partnerships', ctaTitle: 'Do you have a project for the group?',
    ctaText: 'We are looking for partners, companies and entrepreneurs to grow together in any of our business lines.', ctaLink: "Let's talk",
    more: 'Learn more',
  },
  businesses: [
    { slug: 'finanzas', tag: 'Banking and fintech', title: 'Banking, Financial Services, Fintech and Investment Ecosystems', image: images.finance,
      description: 'We incorporate and run financial institutions and fintechs, manage venture capital funds and build decentralised finance.',
      companies: [{ name: 'HEN Capital SAF' }, { name: 'Nexus Pay' }] },
    { slug: 'entretenimiento', tag: 'Creative industries', title: 'Creative Industries, Production Companies, Media Agencies, Entertainment and Gaming', image: images.creative,
      description: 'We produce audiovisual content, represent talent, run media and events agencies, and build games and e-sports.',
      companies: [{ name: 'HEN Studios' }, { name: 'Nexus Gaming' }] },
    { slug: 'inversiones', tag: 'Holding and real estate', title: 'Corporate Holding, Wealth Investment Management and Large-Scale Real Estate', image: images.investments,
      description: 'We manage the group’s portfolio, run marketplaces for high-value assets and develop large-scale real estate projects.',
      companies: [{ name: 'HEN Real Estate Investments' }, { name: 'Nexus Real Estate' }] },
    { slug: 'comercio-exterior', tag: 'International trade', title: 'International Trade, Global Supply Chain, Import, Export and Commodities', image: images.trade,
      description: 'We process, import, export and ship goods and commodities, from small parcels to intercontinental cargo.',
      companies: [{ name: 'HEN Trade & Logistics' }, { name: 'Nexus Commodities' }] },
    { slug: 'tecnologia', tag: 'Technology', title: 'Technology, Web Architecture, Artificial Intelligence, Cloud Computing and Cybersecurity', image: images.technology,
      description: 'We build software, marketplaces and artificial intelligence solutions, run cloud infrastructure and protect company data.',
      companies: [{ name: 'GIA Business & IT Consulting', url: 'https://gia.grupohen.com' }, { name: 'Recreo+ · school kiosks', url: 'https://recreo.grupohen.com' }] },
    { slug: 'servicios-corporativos', tag: 'Corporate services', title: 'Corporate Services, BPO, Global Staffing, Headhunting and Senior Management Consulting', image: images.services,
      description: 'We outsource processes, recruit talent globally, advise senior management and build personal brands.',
      companies: [{ name: 'HEN Talent' }, { name: 'Nexus BPO' }] },
    { slug: 'industria', tag: 'Industry and energy', title: 'Industry, Manufacturing, Retail, Energy and Infrastructure', image: images.industry,
      description: 'We run agribusiness and fishing plants, retail chains, mining and energy projects, and infrastructure works.',
      companies: [{ name: 'HEN Energy' }, { name: 'Nexus Agribusiness' }] },
    { slug: 'deportes', tag: 'Sports', title: 'Sports, Clubs, Franchises, Stadiums, Leagues and Global Sports Management', image: images.sports,
      description: 'We create and invest in clubs and academies, run stadiums, organise leagues and manage sports rights and sponsorship.',
      companies: [{ name: 'HEN Sports Management' }, { name: 'Club Deportivo Nexus' }, { name: 'Arena HEN' }] },
    { slug: 'servicios-tecnicos', tag: 'Technical services', title: 'Workshops, Specialised and General Technical Services', image: images.technical,
      description: 'Auto repair, electrical, plumbing, cleaning, air conditioning, electronic security and urban logistics for homes and businesses.',
      companies: [{ name: 'HEN Technical Services' }] },
    { slug: 'fundacion', tag: 'Foundation', title: 'Foundations, Non-Governmental Organisations (NGOs) and Global Philanthropy', image: images.foundation,
      description: 'We channel the group’s social commitment through foundations, NGOs and international cooperation programmes.',
      companies: [{ name: 'HEN Foundation' }] },
  ],
  presence: {
    eyebrow: 'Presence', title: 'We operate in six countries',
    text: 'From Lima, the group operates across Latin America and the United States, with offices and local partners in every market.',
    hq: 'Headquarters', cities: 'Lima · Bogotá · Quito · Santiago · Panama City · Miami',
    countries: { pe: 'Peru', co: 'Colombia', ec: 'Ecuador', cl: 'Chile', pa: 'Panama', us: 'United States' },
  },
  foundation: {
    eyebrow: 'HEN Foundation', title: 'We grow together with communities',
    text: 'The HEN Foundation channels the group’s social commitment through education, community development and environmental programmes, in partnership with non-governmental organisations.',
    programs: [
      { title: 'HEN Scholarships', text: 'Full scholarships for young people from the regions to pursue technical and university degrees.', image: '/img/becas.jpg' },
      { title: 'HEN Volunteering', text: 'Employees across the group give their time and talent to schools and communities.', image: images.foundation },
      { title: 'HEN Planet', text: 'Reforestation, recycling and energy efficiency in the group’s operations and communities.', image: '/img/ambiente.jpg' },
    ],
  },
  newsSection: { eyebrow: 'Newsroom', title: 'News and press releases' },
  home: {
    aboutTitle: 'A Peruvian holding company with a global vision', more: 'Learn more',
    businesses: 'Our businesses', news: 'News and press releases',
    sitemap: 'Quick links', social: 'Follow us', legalTitle: 'Legal', up: 'Back to top', scroll: 'Scroll down',
    prev: 'Previous', next: 'Next', explore: 'View line',
    rail: { inicio: 'Home', nosotros: 'About us', negocios: 'Our businesses', presencia: 'Presence', fundacion: 'Foundation', noticias: 'News', contacto: 'Contact' },
  },
  news: [
    { date: 'Nov 12, 2026', tag: 'Group', title: 'HEN Holding Corp unveils its new corporate identity', excerpt: 'The holding company brings its ten business lines together under one brand.', image: images.group },
    { date: 'Oct 28, 2026', tag: 'Technology', title: 'GIA Business & IT Consulting launches its artificial intelligence offering for companies', excerpt: 'The group’s technology company adds AI, data and cybersecurity services.', image: images.technology },
    { date: 'Oct 15, 2026', tag: 'Foundation', title: 'HEN Foundation awards 120 scholarships to young people from six regions of Peru', excerpt: 'Scholars will pursue technical and university degrees with full support.', image: '/img/becas.jpg' },
    { date: 'Sep 30, 2026', tag: 'Technology', title: 'Recreo+ reaches more than 80 schools with its school kiosk platform', excerpt: 'Parents and students pay and pre-order from their phones.', image: images.technical },
  ],
  contact: {
    eyebrow: 'Contact', title: "Let's talk", text: 'Write to us about investments, partnerships, press or careers.',
    labels: { address: 'Address', email: 'Email', phone: 'Phone' },
    form: {
      name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', topic: 'Topic', message: 'Message', submit: 'Send message',
      topics: ['Investment and partnerships', 'Banking and fintech', 'Creative industries and entertainment', 'Real estate', 'International trade', 'Technology and AI', 'Corporate services and staffing', 'Industry and energy', 'Sports', 'Technical services', 'Foundation', 'Press', 'Careers'],
      sentTitle: 'Thank you for your message',
      sentText: 'We have received your message. A member of our team will reply within two business days.',
      again: 'Send another message',
    },
  },
  footer: {
    tagline: 'Hub Earth Nexus. Diversified Peruvian holding company.', businesses: 'Businesses',
    legal: ['Terms of use', 'Privacy policy', 'Complaints book'],
  },
}

const content: Record<Locale, Content> = { es, en }
export const getContent = (lang: Locale) => content[lang]
