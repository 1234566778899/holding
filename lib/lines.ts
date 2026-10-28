// Contenido de la página de cada línea de negocio (/[lang]/negocios/[slug]), en español e inglés.
// La tarjeta de la portada (nombre, foto, resumen y empresas) sigue en content.ts; aquí va el detalle.

import { pending, type Locale, type Text } from './content'

export type Service = { title: string; text: string; items?: { title: string; text: string }[] }

export type LineDetail = {
  intro: string[]
  focus: string
  services: Service[]
  sectors: string[]
}

type Slug =
  | 'finanzas' | 'entretenimiento' | 'inversiones' | 'comercio-exterior' | 'tecnologia'
  | 'servicios-corporativos' | 'industria' | 'deportes' | 'servicios-tecnicos' | 'fundacion'

const es: Record<Slug, LineDetail> = {
  finanzas: {
    intro: [
      'Esta línea constituye, adquiere y opera entidades financieras, cooperativas y empresas de tecnología financiera, sujetándose a la normativa de la SBS, la SMV, el BCRP y sus equivalentes en el sistema financiero internacional.',
      'También estructura y administra fondos de capital de riesgo y de capital privado, y desarrolla plataformas de financiamiento participativo, blockchain y finanzas descentralizadas a escala global.',
    ],
    focus: 'Acompañamos a las empresas desde su primera ronda de inversión hasta su salida a bolsa, con capital, estructura y cumplimiento regulatorio.',
    services: [
      { title: 'Entidades financieras y cooperativas', text: 'Constitución, adquisición, inversión, estructuración, operación, fusión y administración de entidades bancarias, instituciones financieras, cooperativas de ahorro y crédito, cajas municipales y rurales, entidades de desarrollo de la pequeña y microempresa (EDPYME), empresas emisoras de dinero electrónico, pasarelas de pago transfronterizas y empresas de tecnología financiera (fintech), sujetándose a la normativa de la Superintendencia de Banca, Seguros y AFP (SBS), la Superintendencia del Mercado de Valores (SMV), el Banco Central de Reserva del Perú (BCRP) y sus equivalentes en el sistema financiero internacional.' },
      { title: 'Fondos de capital de riesgo', text: 'Creación, gestión, administración y estructuración de fondos de inversión de capital privado, fondos de capital de riesgo (venture capital), fondos de private equity, aceleradoras corporativas, incubadoras de negocios tecnológicos, redes de ángeles inversionistas y sindicatos de inversión, con rondas desde etapa temprana (pre-seed, seed, series A, B y C) hasta ofertas públicas iniciales (IPO) en mercados bursátiles nacionales e internacionales.' },
      { title: 'Finanzas descentralizadas, blockchain y crowdfunding', text: 'Desarrollo, operación e inversión en plataformas de financiamiento participativo (crowdfunding, crowdlending), corretaje de valores, intermediación bursátil, estructuración de instrumentos financieros corporativos e infraestructura basada en cadena de bloques (blockchain), criptoactivos, contratos inteligentes (smart contracts) y soluciones financieras descentralizadas (DeFi) a escala global.' },
    ],
    sectors: ['Banca', 'Cooperativas y cajas', 'Fintech y pagos', 'Venture capital', 'Private equity', 'Mercado de valores', 'Blockchain y DeFi'],
  },
  entretenimiento: {
    intro: [
      'Creamos, producimos y gestionamos contenidos, talentos y experiencias para audiencias de todo el mundo: cine, televisión, música, streaming, podcasts y entretenimiento digital.',
      'Operamos agencias de medios, publicidad y eventos, representamos a artistas y figuras públicas, y desarrollamos plataformas de videojuegos y e-sports.',
    ],
    focus: 'Unimos creatividad y negocio: cada contenido, talento y evento se gestiona para crecer y monetizarse a escala global.',
    services: [
      { title: 'Producción audiovisual y contenidos multimedia', text: 'Creación, operación y gestión integral de productoras de cine y televisión, estudios de grabación musical, grupos musicales, contenidos audiovisuales multiplataforma, redes de streaming, podcasting, producción multimedia y universos de entretenimiento digital de alta gama.' },
      { title: 'Management de talentos y entretenimiento', text: 'Representación artística, gerenciamiento de carreras, booking y management integral de artistas, cantantes, músicos, bandas, orquestas, compositores, productores, creadores de contenido, influencers, conferencistas, deportistas y figuras públicas a nivel nacional e internacional, incluyendo contratos de grabación, giras, patrocinios, derechos de autor, monetización de catálogos y relaciones con disqueras y productoras globales.' },
      { title: 'Agencias de medios, publicidad y espectáculos', text: 'Agencias de publicidad integral, marketing estratégico, relaciones públicas y comunicación corporativa; planificación y compra de espacios en medios tradicionales y digitales; diseño de marcas de lujo; y organización de eventos corporativos, congresos, ferias, conciertos y espectáculos en vivo a nivel mundial.' },
      { title: 'Gaming y ecosistemas interactivos', text: 'Diseño, desarrollo, publicación y monetización de plataformas globales de juegos interactivos, torneos de e-sports, rompecabezas digitales y juegos de ingenio para audiencias masivas en Estados Unidos, Europa y todo el mundo, con modelos de publicidad programática, compras dentro de la aplicación y suscripciones.' },
    ],
    sectors: ['Cine y televisión', 'Música', 'Streaming y podcasting', 'Publicidad y medios', 'Eventos y espectáculos', 'Gaming y e-sports', 'Representación de talentos'],
  },
  inversiones: {
    intro: [
      'Es la matriz del grupo: adquiere, administra y negocia acciones, participaciones, bonos y títulos valores en sociedades del Perú y del extranjero, y ejerce las funciones de holding corporativo global.',
      'Además, opera mercados de activos de lujo y de alto valor, y desarrolla macroproyectos inmobiliarios: desde oficinas y edificios inteligentes hasta parques logísticos, ciudades inteligentes y complejos hoteleros.',
    ],
    focus: 'Invertimos con disciplina: cada decisión se sustenta en un análisis de riesgo, retorno y horizonte, y se aprueba en el comité de inversiones.',
    services: [
      { title: 'Holding corporativo y operaciones bursátiles', text: 'Adquisición, tenencia, administración, enajenación, gravamen y negociación de acciones, participaciones sociales, bonos, obligaciones, títulos valores, cuotas de participación y derechos corporativos en toda clase de sociedades, consorcios, asociaciones o patrimonios autónomos, en el Perú y en el extranjero, ejerciendo las funciones de sociedad matriz o holding corporativo global.' },
      { title: 'Mercados de activos de lujo y alto valor', text: 'Plataformas de comercio electrónico y mercados de alta gama (high-ticket marketplaces) para la compraventa, subasta, corretaje y financiamiento de bienes raíces exclusivos, empresas en marcha, flotas de vehículos comerciales e industriales, aeronaves privadas, embarcaciones, obras de arte, metales preciosos y activos de propiedad intelectual de alto valor.' },
      { title: 'Real estate y macroproyectos inmobiliarios', text: 'Compraventa, arrendamiento, construcción, lotización, habilitación urbana y explotación de inmuebles urbanos y rurales. Desarrollo de macroproyectos inmobiliarios, complejos corporativos de oficinas, edificios inteligentes, centros comerciales, parques logísticos industriales, ciudades inteligentes (smart cities) y complejos hoteleros de lujo, y gestión de fideicomisos y fondos de inversión inmobiliaria (REIT).' },
    ],
    sectors: ['Mercado de capitales', 'Inmobiliario', 'Activos de lujo', 'Oficinas y centros comerciales', 'Parques logísticos', 'Hotelería y turismo', 'Fondos inmobiliarios (REIT)'],
  },
  'comercio-exterior': {
    intro: [
      'Conectamos productores y compradores de distintos países y controlamos toda la operación: compra, procesamiento, transporte, despacho aduanero y entrega de mercaderías y commodities.',
      'Operamos desde envíos pequeños, comercio electrónico y courier hasta transacciones intercontinentales a gran escala con cargas consolidadas LCL/FCL, graneleros y fletamentos.',
    ],
    focus: 'Cuidamos toda la cadena: negociación, procesamiento, financiamiento de la operación, logística, aduanas y cumplimiento normativo.',
    services: [
      { title: 'Procesamiento de productos', text: 'Tercerización operativa (outsourcing), procesamiento, transformación, acondicionamiento y operaciones de planta: recepción, acopio, selección, clasificación, lavado, corte, congelado, tratamiento térmico, envasado y empaque de productos hidrobiológicos, agrícolas, agroindustriales y pesqueros bajo estrictos estándares internacionales de calidad y sanidad.' },
      {
        title: 'Comercio internacional a gran escala',
        text: 'Planificación, ejecución, intermediación, corretaje y representación comercial de operaciones de importación, exportación, compra, venta, permuta, consignación y distribución mayorista y minorista de toda clase de bienes, mercancías, insumos y materias primas a escala global, regional y local.',
        items: [
          { title: 'Pecuario y cárnico', text: 'Ganado en pie (bovino, ovino, caprino, equino, camélidos sudamericanos y porcino), aves de corral, animales menores, subproductos avícolas, carnes frescas, refrigeradas y congeladas, embutidos y derivados cárnicos.' },
          { title: 'Hidrobiológico, pesquero y acuicultura', text: 'Pescado fresco y congelado, mariscos, moluscos, crustáceos (camarones, langostinos, cangrejos), pota, conservas, harina, aceite de pescado y derivados.' },
          { title: 'Automotor y transporte', text: 'Vehículos nuevos y usados (automóviles, SUV, camiones, buses, maquinaria pesada, tractores, motocicletas, mototaxis y vehículos eléctricos), repuestos, autopartes, neumáticos, baterías y lubricantes.' },
          { title: 'Agrícola, agroindustrial y commodities', text: 'Café, cacao, azúcar, granos, cereales, legumbres, arroz, maíz, trigo, superfoods, paltas, mangos, uvas, arándanos, bananos, espárragos, cítricos, granadas, quinua, maracuyá y toda clase de frutas y vegetales.' },
          { title: 'Minero, energético e industrial', text: 'Oro, plata, cobre, zinc, plomo, hierro, molibdeno y polimetálicos, metales, carbón, hidrocarburos, petróleo, gas natural, petroquímica, textiles, calzado, maquinaria industrial, hardware, electrodomésticos y bienes de consumo masivo.' },
        ],
      },
      { title: 'Logística global y supply chain', text: 'Operación, ingeniería y optimización de cadenas de suministro globales, gestión de flotas, transporte multimodal (marítimo, aéreo, fluvial, ferroviario y terrestre), freight forwarding, agenciamiento de aduanas, asesoría en comercio exterior, trámites regulatorios y administración de centros de distribución, depósitos, zonas francas y almacenes aduaneros a nivel mundial.' },
    ],
    sectors: ['Pecuario y cárnico', 'Pesca y acuicultura', 'Automotor', 'Agroexportación', 'Minería y energía', 'Bienes de consumo', 'Comercio electrónico'],
  },
  tecnologia: {
    intro: [
      'Creamos productos digitales propios, como Recreo+, y acompañamos a empresas e instituciones en su transformación digital, desde la estrategia hasta la puesta en marcha.',
      'Desarrollamos software a medida, plataformas SaaS y marketplaces, soluciones de inteligencia artificial, infraestructura en la nube y ciberseguridad, y comercializamos equipos tecnológicos.',
    ],
    focus: 'Construimos tecnología que se usa todos los días: productos simples para las personas, seguros con los datos y preparados para crecer.',
    services: [
      { title: 'Ingeniería de software y arquitectura web', text: 'Investigación, desarrollo, implementación y licenciamiento de arquitectura web avanzada, software a medida, plataformas SaaS, aplicaciones móviles de alto rendimiento, automatización robótica de procesos (RPA) y sistemas complejos para la transformación digital empresarial.' },
      { title: 'Inteligencia artificial y big data', text: 'Creación, entrenamiento, integración y despliegue de soluciones de inteligencia artificial generativa, machine learning y análisis predictivo de macrodatos, infraestructura en la nube (AWS, Azure y Google Cloud) y gestión de centros de datos.' },
      { title: 'Infraestructura digital, hosting y ciberseguridad', text: 'Operación de redes de servidores, web hosting y reventa de hosting, registro y gestión de dominios, ciberseguridad avanzada, protección de datos corporativos, auditoría de sistemas y monetización de ecosistemas y portales digitales transfronterizos.' },
      { title: 'Consultoría tecnológica', text: 'Transformación digital, auditoría de sistemas, diagnóstico, diseño y dirección de proyectos de TI, reingeniería de procesos tecnológicos, optimización de redes, seguridad de la información, análisis de vulnerabilidades y ciberseguridad avanzada.' },
      { title: 'Marketplaces', text: 'Diseño, despliegue, automatización, operación y monetización de marketplaces multivendedor y transfronterizos para distintos rubros, industrias y países, que conectan compradores y vendedores de todo el mundo con pasarelas de pago automatizadas y algoritmos de recomendación.' },
      { title: 'Equipos y servicios tecnológicos', text: 'Compra, venta, importación, ensamblaje, distribución, mantenimiento, reparación y alquiler de computadoras, laptops, servidores, estaciones de trabajo, dispositivos móviles, cámaras de videovigilancia, componentes electrónicos y periféricos (monitores, impresoras, audio, routers, switches y accesorios).' },
    ],
    sectors: ['Educación', 'Comercio electrónico', 'Servicios financieros', 'Sector público', 'Industria', 'Startups'],
  },
  'servicios-corporativos': {
    intro: [
      'Ponemos a disposición de las empresas del grupo y de clientes nacionales e internacionales los equipos y el conocimiento que necesitan para crecer.',
      'Tercerizamos procesos de negocio, seleccionamos talento ejecutivo en el Perú y en el exterior, asesoramos a la alta dirección y construimos la marca personal de líderes y profesionales.',
    ],
    focus: 'Nuestro valor es la gente: equipos preparados, procesos ordenados y consejo independiente para decidir mejor.',
    services: [
      { title: 'BPO y workforce staffing', text: 'Tercerización de procesos de negocio (BPO), externalización operativa, dotación y administración global de talento humano, reclutamiento ejecutivo (headhunting), contratación de personal remoto y presencial, y equipos especializados para corporaciones nacionales e internacionales.' },
      { title: 'Consultoría estratégica y alta gerencia', text: 'Alta gerencia, reestructuración corporativa, fusiones y adquisiciones (M&A), gobierno corporativo, planificación fiscal internacional, auditoría de gestión y consultoría en ventas de alto impacto, oratoria corporativa, negociación y persuasión comercial.' },
      { title: 'Marca personal', text: 'Conceptualización, posicionamiento, monetización y gestión de marca personal (personal branding) para ejecutivos, líderes, empresarios y figuras públicas; capacitaciones, talleres, cursos, mentorías, masterclasses y congresos; contenidos formativos y de oratoria; imagen pública, relaciones públicas y reputación digital a escala global.' },
    ],
    sectors: ['Empresas medianas y grandes', 'Multinacionales', 'Startups', 'Ejecutivos y líderes', 'Instituciones'],
  },
  industria: {
    intro: [
      'Desarrollamos operaciones productivas en agroindustria, pesca, procesamiento de alimentos, retail, minería, hidrocarburos y energía, con foco en la eficiencia, la calidad y el cuidado del medio ambiente.',
      'Invertimos en plantas, cadenas de frío, tiendas e infraestructura que agregan valor a las materias primas y generan empleo en las regiones donde operamos.',
    ],
    focus: 'Producimos con estándares internacionales de calidad, sanidad y seguridad, y apostamos por fuentes de energía limpia.',
    services: [
      { title: 'Plantas de procesamiento y agroindustria', text: 'Instalación, equipamiento, construcción, operación y administración de plantas industriales, agroindustriales y de procesamiento de alimentos, líneas de envasado, cadenas de frío y centros logísticos de refrigeración bajo normas FDA, sanitarias, europeas y globales.' },
      { title: 'Plantas y terminales pesqueros', text: 'Plantas pesqueras, terminales pesqueros marítimos y fluviales, plantas de procesamiento y congelado hidrobiológico, plantas de hielo industrial y en bloques, plantas de harina y aceite de pescado, y complejos de acuicultura.' },
      { title: 'Plantas apícolas y de beneficio', text: 'Plantas procesadoras y envasadoras de miel y productos apícolas, centros de acopio y transformación de derivados agropecuarios, plantas de beneficio, camales frigoríficos y centros de faenamiento de ganado bovino, ovino, caprino, porcino, aves y animales menores, así como sus subproductos.' },
      { title: 'Agroindustria', text: 'Fundos, parcelas, viveros y plantas agrícolas de producción masiva, con procesamiento, empaque, selección y exportación de paltas, mangos, uvas, arándanos, bananos, cacao, café, espárragos, cítricos, granadas, quinua, maracuyá, superfoods y toda clase de frutas, hortalizas y cultivos.' },
      { title: 'Retail y comercio minorista y mayorista', text: 'Creación, operación y administración de tiendas por departamento, supermercados, hipermercados, tiendas de conveniencia, centros comerciales, outlets y galerías, tanto físicos como digitales (e-commerce omnicanal), en el Perú y en el extranjero.' },
      { title: 'Energía, minería e infraestructura', text: 'Exploración, explotación, beneficio, refinación y comercialización de yacimientos mineros (oro, plata, cobre, zinc, plomo, hierro, molibdeno y polimetálicos); hidrocarburos, petróleo, gas natural y petroquímica; energías renovables (solar, eólica, hidrógeno verde, biomasa y geotérmica) y generación, transmisión y distribución eléctrica; y obras de ingeniería civil, carreteras, puentes, puertos y aeropuertos mediante APP, concesiones y contratos EPC.' },
    ],
    sectors: ['Agroindustria', 'Pesca y acuicultura', 'Alimentos', 'Retail', 'Minería', 'Hidrocarburos', 'Energía renovable', 'Infraestructura'],
  },
  deportes: {
    intro: [
      'Creamos, adquirimos e invertimos en clubes profesionales y formativos, franquicias, academias y centros de alto rendimiento en todas las disciplinas, en el Perú y en el extranjero.',
      'Construimos y administramos estadios y complejos deportivos, organizamos torneos y ligas, y gestionamos los derechos, la representación y los patrocinios de deportistas y equipos a escala global.',
    ],
    focus: 'Gestionamos el deporte como una industria: talento, infraestructura, competencias y derechos comerciales bajo una misma visión.',
    services: [
      { title: 'Clubes, franquicias y academias', text: 'Creación, constitución, adquisición, compra, venta, inversión, operación y explotación comercial de clubes deportivos profesionales y formativos, franquicias, academias, escuelas de talentos y centros de alto rendimiento en fútbol, básquetbol, tenis, vóley, natación, artes marciales mixtas, automovilismo, ciclismo, golf, atletismo, deportes extremos y e-sports.' },
      { title: 'Estadios y complejos deportivos', text: 'Diseño, construcción, equipamiento, administración, concesión y explotación de complejos deportivos, estadios, coliseos, arenas multiusos, polideportivos, centros de entrenamiento, piscinas olímpicas, circuitos y recintos deportivos públicos y privados.' },
      { title: 'Torneos, ligas y eventos', text: 'Organización, promoción, producción y comercialización de torneos, campeonatos, ligas nacionales e internacionales, eventos deportivos oficiales, amistosos y espectáculos de alta competencia.' },
      { title: 'Derechos, representación y patrocinios', text: 'Pases, transferencias, derechos federativos y representación legal y comercial de deportistas, entrenadores, comandos técnicos y árbitros; derechos de transmisión televisiva y streaming, patrocinios, merchandising, licencias de marca, marketing deportivo y publicidad en estadios y plataformas digitales.' },
    ],
    sectors: ['Fútbol', 'Básquetbol', 'Tenis', 'Vóley', 'Artes marciales mixtas', 'Automovilismo', 'Golf', 'E-sports'],
  },
  'servicios-tecnicos': {
    intro: [
      'Prestamos, administramos y supervisamos toda clase de servicios generales, técnicos y especializados para hogares, comercios, industrias, corporaciones e instituciones, en el Perú y en el extranjero.',
      'Desde talleres automotrices e instalaciones eléctricas hasta limpieza, climatización, seguridad electrónica y logística urbana: un solo grupo para mantener en marcha cada operación.',
    ],
    focus: 'Técnicos calificados, respuesta rápida y trabajos certificados, con el respaldo y la supervisión del grupo.',
    services: [
      { title: 'Talleres mecánicos y automotrices', text: 'Talleres especializados, centros de servicio automotriz y plantas de mantenimiento integral para motocicletas, automóviles, camiones, buses y vehículos de carga pesada.' },
      { title: 'Ingeniería eléctrica y pozos a tierra', text: 'Instalación y mantenimiento de redes eléctricas, tableros, cableado estructurado e iluminación, y diseño, medición, certificación y mantenimiento de pozos y sistemas de puesta a tierra en media y baja tensión.' },
      { title: 'Gasfitería y plomería', text: 'Servicios especializados de fontanería, plomería y gasfitería en redes de agua, desagüe, gas y sistemas sanitarios.' },
      { title: 'Limpieza y saneamiento ambiental', text: 'Limpieza integral, desinfección, saneamiento ambiental, control de plagas y fumigación para corporaciones, industrias, instituciones y espacios residenciales y comerciales.' },
      { title: 'Remodelaciones y obras menores', text: 'Cerrajería, pintura, albañilería, drywall, acabados y remodelación de edificaciones.' },
      { title: 'Climatización y refrigeración', text: 'Venta, instalación, reparación y mantenimiento de aire acondicionado, refrigeración y ventilación mecánica para inmuebles comerciales, industriales y residenciales.' },
      { title: 'Jardinería y áreas verdes', text: 'Diseño, paisajismo, jardinería y mantenimiento integral de áreas verdes.' },
      { title: 'Seguridad electrónica y perimétrica', text: 'Seguridad privada y vigilancia; venta, instalación y mantenimiento de cámaras de videovigilancia (CCTV), control de accesos, alarmas, cercos eléctricos, sistemas contra incendios, automatización de portones y monitoreo electrónico.' },
      { title: 'Logística urbana y transporte', text: 'Transporte de carga liviana, mensajería, courier, mudanzas y logística urbana.' },
      { title: 'Servicios complementarios', text: 'Cualquier otro servicio técnico o profesional que requieran personas, empresas, industrias o entidades públicas y privadas a escala global.' },
    ],
    sectors: ['Hogares', 'Comercios', 'Industria', 'Corporaciones', 'Instituciones públicas', 'Flotas vehiculares'],
  },
  fundacion: {
    intro: [
      'Canalizamos el compromiso del grupo con la sociedad a través de fundaciones, organizaciones no gubernamentales y asociaciones sin fines de lucro, en el Perú y en el extranjero.',
      'Impulsamos la educación, la salud, el medio ambiente, la protección animal, el deporte y la cultura, incluida la difusión de expresiones folclóricas como la marinera peruana.',
    ],
    focus: 'Cada programa tiene objetivos medibles y rinde cuentas de sus resultados.',
    services: [
      { title: 'Estructuración y gestión filantrópica', text: 'Constitución, patrocinio, financiamiento, asesoría y administración de fundaciones, ONG, asociaciones sin fines de lucro, entidades de beneficencia y corporaciones de desarrollo social, cultural, ambiental, deportivo, educativo, científico y tecnológico, en el ámbito nacional e internacional.' },
      { title: 'Cooperación internacional y responsabilidad social', text: 'Captación de fondos filantrópicos internacionales, corporativos, comunitarios y personales; ejecución de subvenciones y programas de cooperación para el desarrollo; ayuda humanitaria y de emergencias; salud e investigación; educación y empleo; medio ambiente y protección animal; y promoción de identidades deportivas, culturales y expresiones folclóricas y patrimoniales, como la marinera peruana.' },
    ],
    sectors: ['Educación y empleo', 'Salud e investigación', 'Ayuda humanitaria', 'Medio ambiente', 'Protección animal', 'Cultura y folclore', 'Deporte'],
  },
}

const en: Record<Slug, LineDetail> = {
  finanzas: {
    intro: [
      'This line incorporates, acquires and operates financial institutions, cooperatives and financial technology companies, in compliance with the rules of Peru’s SBS, SMV and Central Reserve Bank and their counterparts in the international financial system.',
      'It also structures and manages venture capital and private equity funds, and builds crowdfunding, blockchain and decentralised finance platforms at global scale.',
    ],
    focus: 'We support companies from their first funding round to their stock market listing, with capital, structure and regulatory compliance.',
    services: [
      { title: 'Financial institutions and cooperatives', text: 'Incorporation, acquisition, investment, structuring, operation, merger and management of banks, financial institutions, savings and credit cooperatives, municipal and rural savings banks, small business lenders (EDPYME), e-money issuers, cross-border payment gateways and fintech companies, in compliance with the Superintendency of Banking, Insurance and Pension Funds (SBS), the Securities Market Superintendency (SMV), the Central Reserve Bank of Peru (BCRP) and their international counterparts.' },
      { title: 'Venture capital funds', text: 'Creation, management and structuring of private equity and venture capital funds, corporate accelerators, tech incubators, angel investor networks and investment syndicates, with funding rounds from early stage (pre-seed, seed, series A, B and C) through to initial public offerings (IPO) on domestic and international stock exchanges.' },
      { title: 'Decentralised finance, blockchain and crowdfunding', text: 'Development, operation of and investment in crowdfunding and crowdlending platforms, securities brokerage, structuring of corporate financial instruments, and blockchain infrastructure, crypto-assets, smart contracts and decentralised finance (DeFi) solutions at global scale.' },
    ],
    sectors: ['Banking', 'Cooperatives and savings banks', 'Fintech and payments', 'Venture capital', 'Private equity', 'Securities markets', 'Blockchain and DeFi'],
  },
  entretenimiento: {
    intro: [
      'We create, produce and manage content, talent and experiences for audiences worldwide: film, television, music, streaming, podcasts and digital entertainment.',
      'We run media, advertising and events agencies, represent artists and public figures, and build gaming and e-sports platforms.',
    ],
    focus: 'We bring creativity and business together: every piece of content, talent and event is managed to grow and be monetised globally.',
    services: [
      { title: 'Audiovisual production and multimedia content', text: 'Creation, operation and management of film and television production companies, music recording studios, music groups, multi-platform audiovisual content, streaming networks, podcasting, multimedia production and high-end digital entertainment universes.' },
      { title: 'Talent management and entertainment', text: 'Artist representation, career management, booking and full management of artists, singers, musicians, bands, orchestras, composers, producers, content creators, influencers, speakers, athletes and public figures in Peru and abroad, including recording contracts, tours, sponsorships, copyright, catalogue monetisation and relations with global labels and studios.' },
      { title: 'Media, advertising and live entertainment agencies', text: 'Full-service advertising, strategic marketing, public relations and corporate communications agencies; media planning and buying across traditional and digital channels; luxury brand design; and organisation of corporate events, conferences, trade fairs, concerts and live shows worldwide.' },
      { title: 'Gaming and interactive ecosystems', text: 'Design, development, publishing and monetisation of global interactive gaming platforms, e-sports tournaments, digital puzzles and brain games for mass audiences in the United States, Europe and worldwide, with programmatic advertising, in-app purchases and subscription models.' },
    ],
    sectors: ['Film and television', 'Music', 'Streaming and podcasting', 'Advertising and media', 'Events and live shows', 'Gaming and e-sports', 'Talent representation'],
  },
  inversiones: {
    intro: [
      'This is the group’s parent company: it acquires, manages and trades shares, equity interests, bonds and securities in companies in Peru and abroad, acting as a global corporate holding company.',
      'It also runs marketplaces for luxury and high-value assets and develops large-scale real estate projects, from offices and smart buildings to logistics parks, smart cities and hotel resorts.',
    ],
    focus: 'We invest with discipline: every decision rests on an analysis of risk, return and time horizon, and is approved by the investment committee.',
    services: [
      { title: 'Corporate holding and securities', text: 'Acquisition, holding, management, disposal, pledging and trading of shares, equity interests, bonds, debentures, securities, participation units and corporate rights in all kinds of companies, consortia, associations and trusts, in Peru and abroad, acting as parent company or global corporate holding.' },
      { title: 'Luxury and high-value asset marketplaces', text: 'E-commerce platforms and high-ticket marketplaces for the sale, auction, brokerage and financing of exclusive real estate, going-concern businesses, commercial and industrial vehicle fleets, private aircraft, vessels, works of art, precious metals and high-value intellectual property.' },
      { title: 'Real estate and large-scale developments', text: 'Purchase, sale, leasing, construction, subdivision, urban development and operation of urban and rural property. Development of large-scale projects, corporate office complexes, smart buildings, shopping centres, industrial logistics parks, smart cities and luxury hotel resorts, and management of real estate trusts and real estate investment trusts (REITs).' },
    ],
    sectors: ['Capital markets', 'Real estate', 'Luxury assets', 'Offices and shopping centres', 'Logistics parks', 'Hospitality and tourism', 'Real estate funds (REITs)'],
  },
  'comercio-exterior': {
    intro: [
      'We connect producers and buyers across countries and control the whole operation: purchasing, processing, freight, customs clearance and delivery of goods and commodities.',
      'We handle everything from small shipments, e-commerce and courier to large intercontinental transactions with consolidated LCL/FCL cargo, bulk carriers and charters.',
    ],
    focus: 'We take care of the whole chain: negotiation, processing, trade finance, logistics, customs and regulatory compliance.',
    services: [
      { title: 'Product processing', text: 'Outsourced operations, processing, transformation, conditioning and plant operations: receiving, collection, sorting, grading, washing, cutting, freezing, heat treatment, packing and packaging of seafood, agricultural, agro-industrial and fishery products under strict international quality and sanitary standards.' },
      {
        title: 'Large-scale international trade',
        text: 'Planning, execution, brokerage and commercial representation of import, export, purchase, sale, barter, consignment and wholesale and retail distribution of all kinds of goods, inputs and raw materials at global, regional and local scale.',
        items: [
          { title: 'Livestock and meat', text: 'Live cattle, sheep, goats, horses, South American camelids and pigs, poultry, small animals, poultry by-products, fresh, chilled and frozen meat, cured meats and processed meat products.' },
          { title: 'Seafood, fisheries and aquaculture', text: 'Fresh and frozen fish, seafood, molluscs, crustaceans (shrimp, prawns, crabs), giant squid, canned goods, fishmeal, fish oil and by-products.' },
          { title: 'Automotive and transport', text: 'New and used vehicles (cars, SUVs, trucks, buses, heavy machinery, tractors, motorcycles, motor rickshaws and electric vehicles), spare parts, auto parts, tyres, batteries and lubricants.' },
          { title: 'Agriculture, agribusiness and commodities', text: 'Coffee, cocoa, sugar, grains, cereals, pulses, rice, maize, wheat, superfoods, avocados, mangoes, grapes, blueberries, bananas, asparagus, citrus, pomegranates, quinoa, passion fruit and all kinds of fruit and vegetables.' },
          { title: 'Mining, energy and industry', text: 'Gold, silver, copper, zinc, lead, iron, molybdenum and polymetallic ores, metals, coal, hydrocarbons, oil, natural gas, petrochemicals, textiles, footwear, industrial machinery, hardware, home appliances and consumer goods.' },
        ],
      },
      { title: 'Global logistics and supply chain', text: 'Operation, engineering and optimisation of global supply chains, fleet management, multimodal transport (sea, air, river, rail and road), freight forwarding, customs brokerage, foreign trade advisory, regulatory procedures and management of distribution centres, warehouses, free trade zones and bonded warehouses worldwide.' },
    ],
    sectors: ['Livestock and meat', 'Fisheries and aquaculture', 'Automotive', 'Agricultural exports', 'Mining and energy', 'Consumer goods', 'E-commerce'],
  },
  tecnologia: {
    intro: [
      'We build our own digital products, such as Recreo+, and help companies and institutions through their digital transformation, from strategy to rollout.',
      'We develop custom software, SaaS platforms and marketplaces, artificial intelligence solutions, cloud infrastructure and cybersecurity, and supply technology equipment.',
    ],
    focus: 'We build technology people use every day: simple products, secure with data and ready to scale.',
    services: [
      { title: 'Software engineering and web architecture', text: 'Research, development, implementation and licensing of advanced web architecture, custom software, SaaS platforms, high-performance mobile apps, robotic process automation (RPA) and complex systems for enterprise digital transformation.' },
      { title: 'Artificial intelligence and big data', text: 'Building, training, integrating and deploying generative AI, machine learning and predictive big data analytics solutions, cloud infrastructure (AWS, Azure and Google Cloud) and data centre management.' },
      { title: 'Digital infrastructure, hosting and cybersecurity', text: 'Server networks, web hosting and hosting reseller services, domain registration and management, advanced cybersecurity, corporate data protection, systems auditing and monetisation of cross-border digital ecosystems and portals.' },
      { title: 'Technology consulting', text: 'Digital transformation, systems auditing, IT project assessment, design and management, technology process re-engineering, network optimisation, information security, vulnerability assessment and advanced cybersecurity.' },
      { title: 'Marketplaces', text: 'Design, deployment, automation, operation and monetisation of multi-vendor, cross-border marketplaces across industries and countries, connecting buyers and sellers worldwide through automated payment gateways and recommendation algorithms.' },
      { title: 'Technology equipment and services', text: 'Purchase, sale, import, assembly, distribution, maintenance, repair and rental of computers, laptops, servers, workstations, mobile devices, CCTV cameras, electronic components and peripherals (monitors, printers, audio, routers, switches and accessories).' },
    ],
    sectors: ['Education', 'E-commerce', 'Financial services', 'Public sector', 'Industry', 'Startups'],
  },
  'servicios-corporativos': {
    intro: [
      'We provide the group’s companies and clients in Peru and abroad with the teams and know-how they need to grow.',
      'We outsource business processes, recruit executive talent in Peru and abroad, advise senior management and build the personal brands of leaders and professionals.',
    ],
    focus: 'Our value is people: well-prepared teams, orderly processes and independent advice for better decisions.',
    services: [
      { title: 'BPO and workforce staffing', text: 'Business process outsourcing (BPO), operational outsourcing, global workforce staffing and management, executive search (headhunting), remote and on-site hiring, and specialised teams for domestic and international corporations.' },
      { title: 'Strategy and senior management consulting', text: 'Senior management, corporate restructuring, mergers and acquisitions (M&A), corporate governance, international tax planning, management audits and consulting in high-impact sales, corporate public speaking, negotiation and persuasion.' },
      { title: 'Personal branding', text: 'Concept, positioning, monetisation and management of personal brands for executives, leaders, entrepreneurs and public figures; training, workshops, courses, mentoring, masterclasses and conferences; educational and public speaking content; public image, public relations and digital reputation at global scale.' },
    ],
    sectors: ['Mid-size and large companies', 'Multinationals', 'Startups', 'Executives and leaders', 'Institutions'],
  },
  industria: {
    intro: [
      'We run productive operations in agribusiness, fisheries, food processing, retail, mining, hydrocarbons and energy, focused on efficiency, quality and care for the environment.',
      'We invest in plants, cold chains, stores and infrastructure that add value to raw materials and create jobs in the regions where we operate.',
    ],
    focus: 'We produce to international quality, sanitary and safety standards and favour clean energy sources.',
    services: [
      { title: 'Processing plants and agribusiness', text: 'Installation, equipment, construction, operation and management of industrial, agro-industrial and food processing plants, packing lines, cold chains and refrigerated logistics centres under FDA, sanitary, European and global standards.' },
      { title: 'Fishing plants and terminals', text: 'Fishing plants, sea and river fishing terminals, seafood processing and freezing plants, industrial and block ice plants, fishmeal and fish oil plants, and aquaculture complexes.' },
      { title: 'Honey and meat processing plants', text: 'Honey and bee product processing and packing plants, collection and processing centres for agricultural by-products, slaughterhouses, cold-storage abattoirs and processing centres for cattle, sheep, goats, pigs, poultry and small animals, and their by-products.' },
      { title: 'Agribusiness', text: 'Large-scale farms, plots, nurseries and agricultural plants, with processing, packing, sorting and export of avocados, mangoes, grapes, blueberries, bananas, cocoa, coffee, asparagus, citrus, pomegranates, quinoa, passion fruit, superfoods and all kinds of fruit, vegetables and crops.' },
      { title: 'Retail and wholesale', text: 'Creation, operation and management of department stores, supermarkets, hypermarkets, convenience stores, shopping centres, outlets and arcades, both physical and digital (omnichannel e-commerce), in Peru and abroad.' },
      { title: 'Energy, mining and infrastructure', text: 'Exploration, extraction, processing, refining and trading of mineral deposits (gold, silver, copper, zinc, lead, iron, molybdenum and polymetallic ores); hydrocarbons, oil, natural gas and petrochemicals; renewable energy (solar, wind, green hydrogen, biomass and geothermal) and power generation, transmission and distribution; and civil works, roads, bridges, ports and airports through public-private partnerships, concessions and EPC contracts.' },
    ],
    sectors: ['Agribusiness', 'Fisheries and aquaculture', 'Food', 'Retail', 'Mining', 'Hydrocarbons', 'Renewable energy', 'Infrastructure'],
  },
  deportes: {
    intro: [
      'We create, acquire and invest in professional and youth clubs, franchises, academies and high-performance centres across every sport, in Peru and abroad.',
      'We build and run stadiums and sports complexes, organise tournaments and leagues, and manage the rights, representation and sponsorship of athletes and teams worldwide.',
    ],
    focus: 'We manage sport as an industry: talent, infrastructure, competitions and commercial rights under one vision.',
    services: [
      { title: 'Clubs, franchises and academies', text: 'Creation, incorporation, acquisition, purchase, sale, investment, operation and commercial management of professional and youth sports clubs, franchises, academies, talent schools and high-performance centres in football, basketball, tennis, volleyball, swimming, mixed martial arts, motorsport, cycling, golf, athletics, extreme sports and e-sports.' },
      { title: 'Stadiums and sports complexes', text: 'Design, construction, equipment, management, concession and operation of sports complexes, stadiums, coliseums, multi-purpose arenas, sports centres, training grounds, Olympic pools, circuits and public and private sports venues.' },
      { title: 'Tournaments, leagues and events', text: 'Organisation, promotion, production and commercialisation of tournaments, championships, national and international leagues, official sporting events, friendlies and elite competitions.' },
      { title: 'Rights, representation and sponsorship', text: 'Transfers, federation rights and legal and commercial representation of athletes, coaches, technical staff and referees; television and streaming rights, sponsorship, merchandising, brand licensing, sports marketing and advertising in stadiums and on digital platforms.' },
    ],
    sectors: ['Football', 'Basketball', 'Tennis', 'Volleyball', 'Mixed martial arts', 'Motorsport', 'Golf', 'E-sports'],
  },
  'servicios-tecnicos': {
    intro: [
      'We provide, manage and supervise all kinds of general, technical and specialised services for homes, businesses, industry, corporations and institutions, in Peru and abroad.',
      'From auto repair shops and electrical installations to cleaning, air conditioning, electronic security and urban logistics: one group to keep every operation running.',
    ],
    focus: 'Qualified technicians, fast response and certified work, backed and supervised by the group.',
    services: [
      { title: 'Mechanical and auto repair shops', text: 'Specialised workshops, car service centres and full maintenance facilities for motorcycles, cars, trucks, buses and heavy goods vehicles.' },
      { title: 'Electrical engineering and grounding', text: 'Installation and maintenance of electrical networks, panels, structured cabling and lighting, and design, measurement, certification and maintenance of grounding wells and earthing systems for medium and low voltage.' },
      { title: 'Plumbing and gas fitting', text: 'Specialised plumbing and gas fitting for water, drainage, gas and sanitary systems.' },
      { title: 'Cleaning and environmental sanitation', text: 'Full cleaning, disinfection, environmental sanitation, pest control and fumigation for corporations, industry, institutions and residential and commercial spaces.' },
      { title: 'Renovations and minor works', text: 'Locksmithing, painting, masonry, drywall, finishes and building renovations.' },
      { title: 'Air conditioning and refrigeration', text: 'Sale, installation, repair and maintenance of air conditioning, refrigeration and mechanical ventilation for commercial, industrial and residential buildings.' },
      { title: 'Gardening and green spaces', text: 'Design, landscaping, gardening and full maintenance of green spaces.' },
      { title: 'Electronic and perimeter security', text: 'Private security and guarding; sale, installation and maintenance of CCTV, access control, alarms, electric fences, fire protection systems, gate automation and electronic monitoring.' },
      { title: 'Urban logistics and transport', text: 'Light freight, messenger and courier services, removals and urban logistics.' },
      { title: 'Complementary services', text: 'Any other technical or professional service required by individuals, companies, industry or public and private entities worldwide.' },
    ],
    sectors: ['Homes', 'Businesses', 'Industry', 'Corporations', 'Public institutions', 'Vehicle fleets'],
  },
  fundacion: {
    intro: [
      'We channel the group’s commitment to society through foundations, non-governmental organisations and non-profit associations, in Peru and abroad.',
      'We support education, health, the environment, animal welfare, sport and culture, including the promotion of folk traditions such as Peru’s marinera dance.',
    ],
    focus: 'Every programme has measurable goals and reports on its results.',
    services: [
      { title: 'Philanthropic structuring and management', text: 'Incorporation, sponsorship, funding, advisory and management of foundations, NGOs, non-profit associations, charities and social, cultural, environmental, sports, educational, scientific and technological development organisations, in Peru and internationally.' },
      { title: 'International cooperation and social responsibility', text: 'Raising international, corporate, community and individual philanthropic funds; managing grants and development cooperation programmes; humanitarian and emergency aid; health and research; education and employment; environment and animal welfare; and promotion of sporting and cultural identities and folk and heritage traditions such as Peru’s marinera.' },
    ],
    sectors: ['Education and employment', 'Health and research', 'Humanitarian aid', 'Environment', 'Animal welfare', 'Culture and folklore', 'Sport'],
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
