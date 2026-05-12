export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '#quienes-somos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ley REP', href: '#ley-rep' },
  { name: 'Comunidad', href: '#comunidad' },
  { name: 'Educación ambiental', href: '#educacion' },
  { name: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    id: 'residuos-reciclables',
    title: 'Gestión de residuos reciclables',
    description: 'Recepcionamos, clasificamos y gestionamos residuos reciclables, promoviendo su correcta valorización.',
    materials: ['Vidrio', 'Cartón', 'Papel', 'Plástico', 'Metales'],
    icon: 'Recycle'
  },
  {
    id: 'residuos-industriales',
    title: 'Gestión de residuos industriales',
    description: 'Apoyamos a empresas e industrias en la gestión de sus residuos, considerando requerimientos operativos y logísticos.',
    idealFor: 'Empresas productivas, constructoras, operaciones industriales.',
    icon: 'Factory'
  },
  {
    id: 'ley-rep',
    title: 'Apoyo en cumplimiento Ley REP',
    description: 'Orientamos a empresas que deben gestionar residuos asociados a productos prioritarios.',
    icon: 'ShieldCheck'
  },
  {
    id: 'trazabilidad',
    title: 'Trazabilidad y certificación',
    description: 'Procesos que permiten respaldar la gestión realizada y entregar confianza sobre cada etapa.',
    icon: 'LineChart'
  },
  {
    id: 'bateas',
    title: 'Arriendo de bateas',
    description: 'Capacidad operativa para el retiro y traslado de residuos desde puntos de generación.',
    icon: 'Truck'
  },
  {
    id: 'educacion',
    title: 'Educación ambiental',
    description: 'Ayudamos a comprender cómo separar, gestionar y reducir los residuos.',
    icon: 'BookOpen'
  }
];

export const values = [
  { title: 'Responsabilidad', desc: 'Cumplimos con la normativa vigente resguardando la confianza de todos.', icon: 'ShieldCheck' },
  { title: 'Sostenibilidad', desc: 'Fomentamos la reutilización de materiales en un modelo de economía circular.', icon: 'Leaf' },
  { title: 'Vinculación', desc: 'Trabajamos con empresas, municipios y comunidades locales.', icon: 'Users' },
  { title: 'Territorio', desc: 'Nuestra identidad está profundamente ligada a Magallanes.', icon: 'Mountain' },
  { title: 'Seguridad', desc: 'Priorizamos protocolos responsables para proteger a nuestros equipos.', icon: 'Lock' }
];

export const valueChain = [
  { step: '01', title: 'Generación', desc: 'El residuo se produce en una empresa, municipio o comunidad.' },
  { step: '02', title: 'Recolección', desc: 'Coordinamos el retiro o recepción según el tipo de residuo.' },
  { step: '03', title: 'Clasificación', desc: 'Los residuos son separados y preparados para su gestión.' },
  { step: '04', title: 'Trazabilidad', desc: 'Registramos el proceso para entregar respaldo y confianza.' },
  { step: '05', title: 'Valorización', desc: 'Transformamos los residuos recuperados en recursos útiles.' }
];

export const priorityProducts = [
  'Neumáticos',
  'Envases y embalajes',
  'Aceites lubricantes',
  'Aparatos eléctricos y electrónicos',
  'Pilas',
  'Baterías'
];
