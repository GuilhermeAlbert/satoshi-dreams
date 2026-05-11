import type {
  Category,
  CategoryId,
  Locale,
  LocalizedCategory,
  LocalizedDreamItem,
  DreamItem,
} from "@/types";

const images = {
  chambord: "/images/optimized/chambord.png",
  daVinci: "/images/optimized/da-vinci.png",
  ferrari: "/images/optimized/ferrari.png",
  gulfstream: "/images/optimized/gulfstream.png",
  hero: "/images/optimized/hero.png",
  monaco: "/images/optimized/monaco.png",
  necker: "/images/optimized/necker.png",
  pizza: "/images/optimized/pizza.png",
  satoshiAbout: "/images/optimized/satoshi-about.png",
} as const;

export const heroImage = images.hero;
export const aboutImage = images.satoshiAbout;
export const coverImage = "/images/optimized/cover.png";

export const categories: Category[] = [
  {
    id: "luxury",
    image: images.gulfstream,
    itemCount: 24,
    title: {
      en: "Luxury & Lifestyle",
      "pt-br": "Luxo & Estilo de Vida",
      es: "Lujo & Estilo de Vida",
    },
    description: {
      en: "Jets, cars, mansions and everything money can buy when restraint leaves the room.",
      "pt-br": "Jatos, carros, mansões e tudo que o dinheiro compra quando a moderação sai da sala.",
      es: "Jets, autos, mansiones y todo lo que el dinero compra cuando la moderación se va.",
    },
  },
  {
    id: "territories",
    image: images.necker,
    itemCount: 18,
    title: {
      en: "Places & Territories",
      "pt-br": "Lugares & Territórios",
      es: "Lugares & Territorios",
    },
    description: {
      en: "Private islands, microstates, castles and the strange romance of owning a map.",
      "pt-br": "Ilhas privadas, microestados, castelos e o romance estranho de possuir um mapa.",
      es: "Islas privadas, microestados, castillos y el extraño romance de poseer un mapa.",
    },
  },
  {
    id: "art",
    image: images.daVinci,
    itemCount: 20,
    title: {
      en: "Art & Culture",
      "pt-br": "Arte & Cultura",
      es: "Arte & Cultura",
    },
    description: {
      en: "Paintings, collections and trophies that make museums nervous.",
      "pt-br": "Pinturas, coleções e troféus que deixam museus nervosos.",
      es: "Pinturas, colecciones y trofeos que ponen nerviosos a los museos.",
    },
  },
  {
    id: "technology",
    image: images.hero,
    itemCount: 16,
    title: {
      en: "Technology & Future",
      "pt-br": "Tecnologia & Futuro",
      es: "Tecnología & Futuro",
    },
    description: {
      en: "Rockets, satellites, GPUs and the very expensive edge of tomorrow.",
      "pt-br": "Foguetes, satélites, GPUs e a fronteira caríssima do amanhã.",
      es: "Cohetes, satélites, GPUs y la frontera carísima del mañana.",
    },
  },
  {
    id: "sports",
    image: images.monaco,
    itemCount: 15,
    title: {
      en: "Sports & Power",
      "pt-br": "Esportes & Poder",
      es: "Deportes & Poder",
    },
    description: {
      en: "Clubs, leagues, stadiums and the spectacle economy.",
      "pt-br": "Clubes, ligas, estádios e a economia do espetáculo.",
      es: "Clubes, ligas, estadios y la economía del espectáculo.",
    },
  },
  {
    id: "absurd",
    image: images.pizza,
    itemCount: 17,
    title: {
      en: "Beautifully Absurd",
      "pt-br": "Absurdos Incríveis",
      es: "Absurdos Increíbles",
    },
    description: {
      en: "Pizza, dinosaurs, trophies and ideas that almost sound real.",
      "pt-br": "Pizzas, dinossauros, troféus e ideias que quase parecem reais.",
      es: "Pizzas, dinosaurios, trofeos e ideas que casi parecen reales.",
    },
  },
];

export const dreamItems: DreamItem[] = [
  {
    slug: "gulfstream-g650er",
    category: "luxury",
    image: images.gulfstream,
    priceBtc: 19000,
    priceUsd: 1_290_000_000,
    alt: {
      en: "Illustrated Gulfstream G650ER parked with a soft editorial backdrop",
      "pt-br": "Ilustração de um Gulfstream G650ER estacionado com fundo editorial suave",
      es: "Ilustración de un Gulfstream G650ER estacionado con fondo editorial suave",
    },
    name: {
      en: "Gulfstream G650ER",
      "pt-br": "Gulfstream G650ER",
      es: "Gulfstream G650ER",
    },
    eyebrow: {
      en: "private aviation",
      "pt-br": "aviação privada",
      es: "aviación privada",
    },
    shortDescription: {
      en: "The executive jet that turns 18 hours of flight into 18 hours of good living.",
      "pt-br": "O jato executivo que transforma 18 horas de voo em 18 horas de vida boa.",
      es: "El jet ejecutivo que convierte 18 horas de vuelo en 18 horas de buena vida.",
    },
    description: {
      en: "Speed, privacy and a cabin built for the kind of silence that makes distance feel optional.",
      "pt-br": "Velocidade, privacidade e uma cabine feita para o tipo de silêncio que transforma distância em detalhe.",
      es: "Velocidad, privacidad y una cabina hecha para ese silencio que convierte la distancia en un detalle.",
    },
    stats: [
      {
        label: { en: "maximum speed", "pt-br": "velocidade máxima", es: "velocidad máxima" },
        value: "0.925 Mach",
      },
      {
        label: { en: "range", "pt-br": "alcance", es: "alcance" },
        value: "12,964 km",
      },
      {
        label: { en: "capacity", "pt-br": "capacidade", es: "capacidad" },
        value: "19",
      },
      {
        label: { en: "estimated fleet", "pt-br": "frota estimada", es: "flota estimada" },
        value: "52 jets",
      },
    ],
    trivia: [
      {
        en: "At this price, Satoshi could collect an entire private fleet and still keep dreaming.",
        "pt-br": "Nesse preço, Satoshi poderia montar uma frota privada inteira e continuar sonhando.",
        es: "A este precio, Satoshi podría reunir una flota privada entera y seguir soñando.",
      },
      {
        en: "A jet like this is less about arrival and more about making the map feel smaller.",
        "pt-br": "Um jato assim é menos sobre chegar e mais sobre fazer o mapa parecer menor.",
        es: "Un jet así trata menos de llegar y más de hacer que el mapa parezca más pequeño.",
      },
    ],
  },
  {
    slug: "monaco",
    category: "territories",
    image: images.monaco,
    priceBtc: 4_200_000,
    priceUsd: 306_000_000_000,
    alt: {
      en: "Illustrated Monaco coastline with yachts, mountains and historic buildings",
      "pt-br": "Ilustração da costa de Mônaco com iates, montanhas e edifícios históricos",
      es: "Ilustración de la costa de Mónaco con yates, montañas y edificios históricos",
    },
    name: {
      en: "Monaco",
      "pt-br": "Mônaco",
      es: "Mónaco",
    },
    eyebrow: {
      en: "microstate energy",
      "pt-br": "energia de microestado",
      es: "energía de microestado",
    },
    shortDescription: {
      en: "The world's second-smallest country. Now, yours.",
      "pt-br": "O segundo menor país do mundo. Agora, o seu.",
      es: "El segundo país más pequeño del mundo. Ahora, tuyo.",
    },
    description: {
      en: "A coastline-sized flex with yachts, casinos, a Formula 1 circuit and the logistics of accidentally buying a government.",
      "pt-br": "Um flex do tamanho de uma costa, com iates, cassinos, Fórmula 1 e a logística de comprar um governo sem querer.",
      es: "Un flex del tamaño de una costa, con yates, casinos, Fórmula 1 y la logística de comprar un gobierno sin querer.",
    },
    stats: [
      {
        label: { en: "area", "pt-br": "área", es: "área" },
        value: "2.02 km²",
      },
      {
        label: { en: "population", "pt-br": "população", es: "población" },
        value: "38,000",
      },
      {
        label: { en: "language", "pt-br": "idioma", es: "idioma" },
        value: "French",
      },
      {
        label: { en: "budget issue", "pt-br": "problema", es: "problema" },
        value: "> 1M BTC",
      },
    ],
    trivia: [
      {
        en: "This one exceeds the mythical 1 million BTC pile, which is exactly why it belongs here.",
        "pt-br": "Este passa da pilha mítica de 1 milhão de BTC, que é exatamente por isso que ele pertence aqui.",
        es: "Este supera la pila mítica de 1 millón de BTC, precisamente por eso pertenece aquí.",
      },
      {
        en: "The disclaimer has to work very hard on this page.",
        "pt-br": "O disclaimer precisa trabalhar pesado nesta página.",
        es: "El disclaimer tiene que trabajar mucho en esta página.",
      },
    ],
  },
  {
    slug: "necker-island",
    category: "territories",
    image: images.necker,
    priceBtc: 78000,
    priceUsd: 5_700_000_000,
    alt: {
      en: "Illustrated tropical private island with palm trees and clear water",
      "pt-br": "Ilustração de ilha tropical privada com palmeiras e água clara",
      es: "Ilustración de isla tropical privada con palmeras y agua clara",
    },
    name: {
      en: "Necker Island",
      "pt-br": "Ilha de Necker",
      es: "Isla Necker",
    },
    eyebrow: {
      en: "private island",
      "pt-br": "ilha privada",
      es: "isla privada",
    },
    shortDescription: {
      en: "A private island for when a country feels administratively heavy.",
      "pt-br": "Uma ilha privada para quando um país parece administrativamente pesado.",
      es: "Una isla privada para cuando un país parece administrativamente pesado.",
    },
    description: {
      en: "A palm-tree answer to the question: what if the block reward bought room service and a horizon?",
      "pt-br": "Uma resposta com palmeiras para a pergunta: e se o block reward comprasse serviço de quarto e horizonte?",
      es: "Una respuesta con palmeras a la pregunta: ¿y si la recompensa de bloque comprara servicio a la habitación y horizonte?",
    },
    stats: [
      {
        label: { en: "vibe", "pt-br": "clima", es: "ambiente" },
        value: "off-grid",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "territory",
      },
      {
        label: { en: "privacy", "pt-br": "privacidade", es: "privacidad" },
        value: "high",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "7.8%",
      },
    ],
    trivia: [
      {
        en: "It is the rare purchase where the shipping address becomes the product.",
        "pt-br": "É a compra rara em que o endereço de entrega vira o produto.",
        es: "Es la compra rara en la que la dirección de envío se vuelve el producto.",
      },
    ],
  },
  {
    slug: "chateau-de-chambord",
    category: "art",
    image: images.chambord,
    priceBtc: 6370,
    priceUsd: 465_000_000,
    alt: {
      en: "Illustrated French castle with green roofs and formal grounds",
      "pt-br": "Ilustração de castelo francês com telhados verdes e jardins formais",
      es: "Ilustración de castillo francés con techos verdes y jardines formales",
    },
    name: {
      en: "Château de Chambord",
      "pt-br": "Castelo de Chambord",
      es: "Castillo de Chambord",
    },
    eyebrow: {
      en: "castle logic",
      "pt-br": "lógica de castelo",
      es: "lógica de castillo",
    },
    shortDescription: {
      en: "A Renaissance castle for the maximalist who refuses another minimalist loft.",
      "pt-br": "Um castelo renascentista para quem cansou de loft minimalista.",
      es: "Un castillo renacentista para quien se cansó del loft minimalista.",
    },
    description: {
      en: "A historical flex with staircases, symmetry and enough rooms to lose a hardware wallet forever.",
      "pt-br": "Um flex histórico com escadarias, simetria e quartos suficientes para perder uma hardware wallet para sempre.",
      es: "Un flex histórico con escaleras, simetría y habitaciones suficientes para perder una hardware wallet para siempre.",
    },
    stats: [
      {
        label: { en: "rooms", "pt-br": "salas", es: "salas" },
        value: "400+",
      },
      {
        label: { en: "chimneys", "pt-br": "chaminés", es: "chimeneas" },
        value: "282",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "heritage",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "0.6%",
      },
    ],
    trivia: [
      {
        en: "The cold-storage jokes write themselves.",
        "pt-br": "As piadas de cold storage se escrevem sozinhas.",
        es: "Los chistes de cold storage se escriben solos.",
      },
    ],
  },
  {
    slug: "da-vinci-masterpieces",
    category: "art",
    image: images.daVinci,
    priceBtc: 6800,
    priceUsd: 496_000_000,
    alt: {
      en: "Illustrated framed Renaissance painting in a warm gallery setting",
      "pt-br": "Ilustração de pintura renascentista emoldurada em ambiente de galeria",
      es: "Ilustración de pintura renacentista enmarcada en una galería cálida",
    },
    name: {
      en: "Da Vinci Masterpieces",
      "pt-br": "Obras de Da Vinci",
      es: "Obras de Da Vinci",
    },
    eyebrow: {
      en: "museum anxiety",
      "pt-br": "ansiedade de museu",
      es: "ansiedad de museo",
    },
    shortDescription: {
      en: "A cultural purchase that turns a private wallet into a public debate.",
      "pt-br": "Uma compra cultural que transforma carteira privada em debate público.",
      es: "Una compra cultural que transforma una cartera privada en debate público.",
    },
    description: {
      en: "The most elegant way to make every art historian ask whether Bitcoin was a mistake or a performance piece.",
      "pt-br": "A forma mais elegante de fazer historiadores de arte perguntarem se Bitcoin foi um erro ou uma performance.",
      es: "La forma más elegante de hacer que historiadores del arte pregunten si Bitcoin fue un error o una performance.",
    },
    stats: [
      {
        label: { en: "mood", "pt-br": "clima", es: "tono" },
        value: "museum-grade",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "art",
      },
      {
        label: { en: "framing", "pt-br": "moldura", es: "marco" },
        value: "gold",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "0.7%",
      },
    ],
    trivia: [
      {
        en: "A painting is a surprisingly low-latency store of vibes.",
        "pt-br": "Uma pintura é uma reserva de vibes com latência surpreendentemente baixa.",
        es: "Una pintura es una reserva de vibes con latencia sorprendentemente baja.",
      },
    ],
  },
  {
    slug: "ferrari-collection",
    category: "luxury",
    image: images.ferrari,
    priceBtc: 4780,
    priceUsd: 349_000_000,
    alt: {
      en: "Illustrated white supercar in a refined editorial scene",
      "pt-br": "Ilustração de supercarro branco em cena editorial refinada",
      es: "Ilustración de superauto blanco en una escena editorial refinada",
    },
    name: {
      en: "A 100 Ferrari Collection",
      "pt-br": "Coleção de 100 Ferraris",
      es: "Colección de 100 Ferraris",
    },
    eyebrow: {
      en: "garage theory",
      "pt-br": "teoria de garagem",
      es: "teoría de garaje",
    },
    shortDescription: {
      en: "A car collection large enough to make valet parking a governance problem.",
      "pt-br": "Uma coleção grande o bastante para transformar manobrista em problema de governança.",
      es: "Una colección tan grande que convierte el valet parking en un problema de gobernanza.",
    },
    description: {
      en: "A hundred beautiful machines, one impossible maintenance calendar, and a treasury department made entirely of keys.",
      "pt-br": "Cem máquinas bonitas, um calendário impossível de manutenção e um tesouro feito só de chaves.",
      es: "Cien máquinas hermosas, un calendario imposible de mantenimiento y una tesorería hecha de llaves.",
    },
    stats: [
      {
        label: { en: "units", "pt-br": "unidades", es: "unidades" },
        value: "100",
      },
      {
        label: { en: "noise", "pt-br": "barulho", es: "ruido" },
        value: "high",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "cars",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "0.5%",
      },
    ],
    trivia: [
      {
        en: "A garage this large deserves its own consensus mechanism.",
        "pt-br": "Uma garagem desse tamanho merece seu próprio mecanismo de consenso.",
        es: "Un garaje de este tamaño merece su propio mecanismo de consenso.",
      },
    ],
  },
  {
    slug: "falcon-9-launches",
    category: "technology",
    image: images.hero,
    priceBtc: 1950,
    priceUsd: 142_000_000,
    alt: {
      en: "Illustrated Satoshi scene with aircraft, yacht, castle and a speculative future atmosphere",
      "pt-br": "Cena ilustrada de Satoshi com avião, iate, castelo e atmosfera de futuro especulativo",
      es: "Escena ilustrada de Satoshi con avión, yate, castillo y atmósfera de futuro especulativo",
    },
    name: {
      en: "Falcon 9 Launches",
      "pt-br": "Lançamentos Falcon 9",
      es: "Lanzamientos Falcon 9",
    },
    eyebrow: {
      en: "orbital shopping",
      "pt-br": "compras orbitais",
      es: "compras orbitales",
    },
    shortDescription: {
      en: "Because sometimes the shopping cart needs a launch window.",
      "pt-br": "Porque às vezes o carrinho de compras precisa de janela de lançamento.",
      es: "Porque a veces el carrito de compras necesita una ventana de lanzamiento.",
    },
    description: {
      en: "An aerospace-sized thought experiment for anyone who thinks a moon bag should be taken literally.",
      "pt-br": "Um experimento mental aeroespacial para quem acha que moon bag deveria ser literal.",
      es: "Un experimento mental aeroespacial para quien cree que moon bag debería ser literal.",
    },
    stats: [
      {
        label: { en: "estimated launches", "pt-br": "lançamentos estimados", es: "lanzamientos estimados" },
        value: "512",
      },
      {
        label: { en: "destination", "pt-br": "destino", es: "destino" },
        value: "orbit",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "future",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "0.2%",
      },
    ],
    trivia: [
      {
        en: "A launch manifest is just a very dramatic receipt.",
        "pt-br": "Um manifesto de lançamento é só um recibo muito dramático.",
        es: "Un manifiesto de lanzamiento es solo un recibo muy dramático.",
      },
    ],
  },
  {
    slug: "one-billion-pizzas",
    category: "absurd",
    image: images.pizza,
    priceBtc: 300000,
    priceUsd: 21_900_000_000,
    alt: {
      en: "Illustrated slice of pizza with a clean editorial background",
      "pt-br": "Ilustração de fatia de pizza com fundo editorial limpo",
      es: "Ilustración de una porción de pizza con fondo editorial limpio",
    },
    name: {
      en: "One Billion Pizzas",
      "pt-br": "Um Bilhão de Pizzas",
      es: "Mil Millones de Pizzas",
    },
    eyebrow: {
      en: "bitcoin folklore",
      "pt-br": "folclore bitcoin",
      es: "folclore bitcoin",
    },
    shortDescription: {
      en: "The ancient Bitcoin joke, scaled until it needs global logistics.",
      "pt-br": "A piada ancestral do Bitcoin, escalada até exigir logística global.",
      es: "El chiste ancestral de Bitcoin, escalado hasta exigir logística global.",
    },
    description: {
      en: "A tribute to Bitcoin Pizza Day and to the idea that every monetary revolution eventually becomes lunch.",
      "pt-br": "Uma homenagem ao Bitcoin Pizza Day e à ideia de que toda revolução monetária eventualmente vira almoço.",
      es: "Un homenaje al Bitcoin Pizza Day y a la idea de que toda revolución monetaria eventualmente se vuelve almuerzo.",
    },
    stats: [
      {
        label: { en: "slices", "pt-br": "fatias", es: "porciones" },
        value: "8B",
      },
      {
        label: { en: "delivery", "pt-br": "entrega", es: "entrega" },
        value: "impossible",
      },
      {
        label: { en: "category", "pt-br": "categoria", es: "categoría" },
        value: "absurd",
      },
      {
        label: { en: "satoshi share", "pt-br": "fatia satoshi", es: "parte satoshi" },
        value: "30%",
      },
    ],
    trivia: [
      {
        en: "This is the most expensive way to explain 2010 to a dinner table.",
        "pt-br": "É a forma mais cara de explicar 2010 em uma mesa de jantar.",
        es: "Es la forma más cara de explicar 2010 en una cena.",
      },
    ],
  },
];

export const categoryOrder: CategoryId[] = [
  "luxury",
  "territories",
  "art",
  "technology",
  "sports",
  "absurd",
];

export const fortuneScale = {
  en: [
    ["5.2B", "pepperoni pizzas"],
    ["2.5", "medium countries"],
    ["18", "small cities"],
    ["3", "Mars rockets"],
  ],
  "pt-br": [
    ["5,2 bi", "pizzas de pepperoni"],
    ["2,5", "países médios"],
    ["18", "cidades pequenas"],
    ["3", "foguetes para Marte"],
  ],
  es: [
    ["5,2 mil M", "pizzas de pepperoni"],
    ["2,5", "países medianos"],
    ["18", "ciudades pequeñas"],
    ["3", "cohetes a Marte"],
  ],
} as const;

export function localizeItem(item: DreamItem, locale: Locale): LocalizedDreamItem {
  return {
    ...item,
    alt: item.alt[locale],
    description: item.description[locale],
    eyebrow: item.eyebrow[locale],
    name: item.name[locale],
    shortDescription: item.shortDescription[locale],
    stats: item.stats.map((stat) => ({
      label: stat.label[locale],
      value: stat.value,
    })),
    trivia: item.trivia.map((entry) => entry[locale]),
  };
}

export function localizeCategory(category: Category, locale: Locale): LocalizedCategory {
  return {
    ...category,
    description: category.description[locale],
    title: category.title[locale],
  };
}

export function getLocalizedItems(locale: Locale) {
  return dreamItems.map((item) => localizeItem(item, locale));
}

export function getLocalizedCategories(locale: Locale) {
  return categories.map((category) => localizeCategory(category, locale));
}

export function getLocalizedItem(slug: string, locale: Locale) {
  const item = dreamItems.find((entry) => entry.slug === slug);
  return item ? localizeItem(item, locale) : null;
}

export function getRelatedItems(slug: string, locale: Locale) {
  const current = dreamItems.find((item) => item.slug === slug);
  const sameCategory = current
    ? dreamItems.filter((item) => item.category === current.category && item.slug !== slug)
    : [];
  const fallback = dreamItems.filter((item) => item.slug !== slug && item.category !== current?.category);

  return [...sameCategory, ...fallback].slice(0, 4).map((item) => localizeItem(item, locale));
}
