import type { Locale, NavItem } from "@/types";

export const defaultLocale: Locale = "en";

export const siteUrl = "https://satoshi-dreams.vercel.app";

export const languageLabels: Record<Locale, string> = {
  en: "EN",
  "pt-br": "PT",
  es: "ES",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português",
  es: "Español",
};

export const siteCopy = {
  en: {
    title: "Satoshi Dreams",
    description:
      "A visual, satirical exploration of what Satoshi Nakamoto could buy with 1 million unmoved bitcoins.",
    nav: {
      explore: "explore",
      collections: "collections",
      about: "about",
      howItWorks: "how it works",
    },
    actions: {
      startExploring: "start exploring",
      viewAll: "view all",
      viewDetails: "view details",
      addToCollection: "add to collection",
      addedToCollection: "added",
      copyLink: "copy link",
      copied: "copied",
      share: "share",
      shared: "shared",
      openMenu: "open navigation",
      changeLanguage: "change language",
      suggestCollection: "suggest a collection",
    },
    common: {
      estimatedPrice: "estimated price",
      approximately: "approximately",
      localCollection: "local collection",
      searchPlaceholder: "Search jets, islands, art, rockets...",
      allCategories: "all collections",
      savedOnly: "saved locally",
      noResults: "No dreams matched this search.",
      savedEmpty: "Your local collection is empty for now.",
      fortuneShare: "of the mythical 1,000,000 BTC stack",
      items: "items",
    },
    home: {
      eyebrow: "1,000,000 BTC. Infinite possibilities.",
      title: "What could Satoshi buy today?",
      subtitle: "Explore what 1 million BTC could buy.",
      signature: "Imagination. Bitcoin. Infinite possibilities.",
      metrics: [
        ["1,000,000 BTC", "Infinite possibilities"],
        ["Anything", "from anywhere"],
        ["Save, collect", "and dream"],
      ],
      featureTitle: "What 1,000,000 BTC could buy",
      featureText:
        "Explore some of the most absurd dreams that could fit inside Satoshi's wallet.",
      categoriesTitle: "Explore by category",
      highlightsTitle: "Possibilities in focus",
      scaleTitle: "To put it in perspective...",
      scaleText:
        "The numbers are approximate, playful and narrative. The point is not valuation. The point is scale.",
      communityTitle: "What the community is exploring",
      closingTitle: "The possibilities are infinite. So is imagination.",
    },
    collections: {
      eyebrow: "collections",
      title: "Organized dreams. Infinite possibilities.",
      subtitle:
        "Browse themed collections and save the purchases that feel most absurd, elegant or historically strange.",
      cta: "how collections work",
      browserTitle: "All available dreams",
    },
    item: {
      statsTitle: "statistics",
      triviaTitle: "small absurdities",
      relatedTitle: "More things Satoshi could consider",
      shareText: "See this Satoshi Dreams item",
    },
    about: {
      eyebrow: "about satoshi",
      title: "A dream. A protocol. A future.",
      intro:
        "Satoshi Dreams uses the legend of Bitcoin's creator as a cultural lens, not as financial advice.",
      paragraphs: [
        "In 2008, Satoshi Nakamoto published a whitepaper that changed how people think about money, scarcity and trust. Then Satoshi disappeared.",
        "The untouched coins became part of internet mythology. This project asks a deliberately unserious question: if those coins moved today, what could the world imagine?",
        "Every number is approximate. Every comparison is satirical. The real subject is the scale of an idea.",
      ],
      whitepaper: "Read the Bitcoin whitepaper",
      metrics: [
        ["1,000,000 BTC", "attributed to Satoshi"],
        ["0", "confirmed movements"],
        ["2008", "whitepaper published"],
        ["infinite", "possible jokes"],
      ],
    },
    how: {
      eyebrow: "how it works",
      title: "Simple data, polished storytelling.",
      intro:
        "Every dream starts as a curated idea, becomes a visual card, and can be saved locally without accounts or friction.",
      steps: [
        ["Items are curated", "Each dream starts as a lightweight local data entry with image, price, stats and a short narrative."],
        ["Prices stay approximate", "BTC and USD values are intentionally directional. They support the joke and the visual comparison."],
        ["Collections are local", "Saved dreams live in the browser with LocalStorage. No account, database or tracking is required."],
        ["Pages are shareable", "Each item has a dedicated route and metadata designed for clean previews on social platforms."],
      ],
      contributeTitle: "Contribute a new impossible purchase",
      contributeText:
        "Add a data entry, include a polished image, keep the tone playful, and open a pull request with sources or context for the estimate.",
    },
  },
  "pt-br": {
    title: "Satoshi Dreams",
    description:
      "Uma exploração visual e satírica do que Satoshi Nakamoto poderia comprar com 1 milhão de bitcoins nunca movimentados.",
    nav: {
      explore: "explorar",
      collections: "coleções",
      about: "sobre",
      howItWorks: "como funciona",
    },
    actions: {
      startExploring: "começar a explorar",
      viewAll: "ver todas",
      viewDetails: "ver detalhes",
      addToCollection: "adicionar à coleção",
      addedToCollection: "adicionado",
      copyLink: "copiar link",
      copied: "copiado",
      share: "compartilhar",
      shared: "compartilhado",
      openMenu: "abrir navegação",
      changeLanguage: "alterar idioma",
      suggestCollection: "sugerir coleção",
    },
    common: {
      estimatedPrice: "preço aproximado",
      approximately: "aproximadamente",
      localCollection: "coleção local",
      searchPlaceholder: "Busque jatos, ilhas, arte, foguetes...",
      allCategories: "todas as coleções",
      savedOnly: "salvos localmente",
      noResults: "Nenhum sonho corresponde a essa busca.",
      savedEmpty: "Sua coleção local ainda está vazia.",
      fortuneShare: "da pilha mítica de 1.000.000 BTC",
      items: "itens",
    },
    home: {
      eyebrow: "1.000.000 BTC. Infinitas possibilidades.",
      title: "E se Satoshi acordasse hoje?",
      subtitle: "Explore o que 1 milhão de bitcoins poderia comprar.",
      signature: "Imaginação. Bitcoin. Infinitas possibilidades.",
      metrics: [
        ["1.000.000 BTC", "Infinitas possibilidades"],
        ["Qualquer coisa", "de qualquer lugar"],
        ["Salve, colecione", "e sonhe"],
      ],
      featureTitle: "O que 1.000.000 BTC pode comprar",
      featureText:
        "Explore alguns dos sonhos mais absurdos que caberiam na carteira de Satoshi.",
      categoriesTitle: "Explore por categoria",
      highlightsTitle: "Possibilidades em destaque",
      scaleTitle: "Para ter uma ideia...",
      scaleText:
        "Os números são aproximados, divertidos e narrativos. O ponto não é valuation. O ponto é escala.",
      communityTitle: "O que a comunidade está explorando",
      closingTitle: "As possibilidades são infinitas. A imaginação também.",
    },
    collections: {
      eyebrow: "coleções",
      title: "Sonhos organizados. Possibilidades infinitas.",
      subtitle:
        "Navegue por coleções temáticas e salve compras absurdas, elegantes ou historicamente estranhas.",
      cta: "como funcionam as coleções",
      browserTitle: "Todos os sonhos disponíveis",
    },
    item: {
      statsTitle: "estatísticas",
      triviaTitle: "pequenas absurdidades",
      relatedTitle: "Mais coisas que Satoshi poderia considerar",
      shareText: "Veja este item no Satoshi Dreams",
    },
    about: {
      eyebrow: "sobre satoshi",
      title: "Um sonho. Um protocolo. Um futuro.",
      intro:
        "Satoshi Dreams usa a lenda do criador do Bitcoin como lente cultural, não como conselho financeiro.",
      paragraphs: [
        "Em 2008, Satoshi Nakamoto publicou um whitepaper que mudou a forma como pensamos sobre dinheiro, escassez e confiança. Depois, desapareceu.",
        "As moedas nunca movimentadas viraram parte da mitologia da internet. Este projeto faz uma pergunta propositalmente pouco séria: se esses bitcoins se movessem hoje, o que o mundo imaginaria?",
        "Todo número é aproximado. Toda comparação é satírica. O assunto real é a escala de uma ideia.",
      ],
      whitepaper: "Ler o whitepaper do Bitcoin",
      metrics: [
        ["1.000.000 BTC", "atribuídos a Satoshi"],
        ["0", "movimentos confirmados"],
        ["2008", "whitepaper publicado"],
        ["infinitas", "piadas possíveis"],
      ],
    },
    how: {
      eyebrow: "como funciona",
      title: "Dados simples, narrativa bem acabada.",
      intro:
        "Cada sonho começa como uma ideia curada, vira um card visual e pode ser salvo localmente sem conta ou fricção.",
      steps: [
        ["Os itens são curados", "Cada sonho começa como uma entrada local leve com imagem, preço, estatísticas e uma narrativa curta."],
        ["Os preços são aproximados", "Valores em BTC e USD são direcionais. Eles sustentam a piada e a comparação visual."],
        ["As coleções são locais", "Sonhos salvos ficam no navegador com LocalStorage. Não há conta, banco ou rastreamento."],
        ["As páginas são compartilháveis", "Cada item tem rota própria e metadata pensada para previews limpos em redes sociais."],
      ],
      contributeTitle: "Contribua com uma nova compra impossível",
      contributeText:
        "Adicione uma entrada de dados, inclua uma imagem bem acabada, mantenha o tom divertido e abra um pull request com fontes ou contexto da estimativa.",
    },
  },
  es: {
    title: "Satoshi Dreams",
    description:
      "Una exploración visual y satírica de lo que Satoshi Nakamoto podría comprar con 1 millón de bitcoins inmóviles.",
    nav: {
      explore: "explorar",
      collections: "colecciones",
      about: "sobre",
      howItWorks: "cómo funciona",
    },
    actions: {
      startExploring: "empezar a explorar",
      viewAll: "ver todas",
      viewDetails: "ver detalles",
      addToCollection: "añadir a la colección",
      addedToCollection: "añadido",
      copyLink: "copiar enlace",
      copied: "copiado",
      share: "compartir",
      shared: "compartido",
      openMenu: "abrir navegación",
      changeLanguage: "cambiar idioma",
      suggestCollection: "sugerir colección",
    },
    common: {
      estimatedPrice: "precio aproximado",
      approximately: "aproximadamente",
      localCollection: "colección local",
      searchPlaceholder: "Busca jets, islas, arte, cohetes...",
      allCategories: "todas las colecciones",
      savedOnly: "guardados localmente",
      noResults: "Ningún sueño coincide con esta búsqueda.",
      savedEmpty: "Tu colección local aún está vacía.",
      fortuneShare: "de la pila mítica de 1.000.000 BTC",
      items: "items",
    },
    home: {
      eyebrow: "1.000.000 BTC. Posibilidades infinitas.",
      title: "¿Y si Satoshi despertara hoy?",
      subtitle: "Explora lo que 1 millón de bitcoins podría comprar.",
      signature: "Imaginación. Bitcoin. Posibilidades infinitas.",
      metrics: [
        ["1.000.000 BTC", "Posibilidades infinitas"],
        ["Cualquier cosa", "desde cualquier lugar"],
        ["Guarda, colecciona", "y sueña"],
      ],
      featureTitle: "Lo que 1.000.000 BTC podría comprar",
      featureText:
        "Explora algunos de los sueños más absurdos que cabrían en la cartera de Satoshi.",
      categoriesTitle: "Explora por categoría",
      highlightsTitle: "Posibilidades destacadas",
      scaleTitle: "Para ponerlo en perspectiva...",
      scaleText:
        "Los números son aproximados, lúdicos y narrativos. El punto no es la valoración. El punto es la escala.",
      communityTitle: "Lo que la comunidad está explorando",
      closingTitle: "Las posibilidades son infinitas. La imaginación también.",
    },
    collections: {
      eyebrow: "colecciones",
      title: "Sueños organizados. Posibilidades infinitas.",
      subtitle:
        "Navega por colecciones temáticas y guarda las compras más absurdas, elegantes o históricamente extrañas.",
      cta: "cómo funcionan las colecciones",
      browserTitle: "Todos los sueños disponibles",
    },
    item: {
      statsTitle: "estadísticas",
      triviaTitle: "pequeños absurdos",
      relatedTitle: "Más cosas que Satoshi podría considerar",
      shareText: "Mira este item en Satoshi Dreams",
    },
    about: {
      eyebrow: "sobre satoshi",
      title: "Un sueño. Un protocolo. Un futuro.",
      intro:
        "Satoshi Dreams usa la leyenda del creador de Bitcoin como lente cultural, no como consejo financiero.",
      paragraphs: [
        "En 2008, Satoshi Nakamoto publicó un whitepaper que cambió cómo pensamos sobre dinero, escasez y confianza. Después desapareció.",
        "Las monedas intactas se volvieron parte de la mitología de internet. Este proyecto hace una pregunta deliberadamente poco seria: si esas monedas se movieran hoy, ¿qué imaginaría el mundo?",
        "Cada número es aproximado. Cada comparación es satírica. El tema real es la escala de una idea.",
      ],
      whitepaper: "Leer el whitepaper de Bitcoin",
      metrics: [
        ["1.000.000 BTC", "atribuidos a Satoshi"],
        ["0", "movimientos confirmados"],
        ["2008", "whitepaper publicado"],
        ["infinitas", "bromas posibles"],
      ],
    },
    how: {
      eyebrow: "cómo funciona",
      title: "Datos simples, narrativa pulida.",
      intro:
        "Cada sueño empieza como una idea curada, se vuelve una tarjeta visual y puede guardarse localmente sin cuentas ni fricción.",
      steps: [
        ["Los items son curados", "Cada sueño empieza como una entrada local ligera con imagen, precio, estadísticas y una narrativa corta."],
        ["Los precios son aproximados", "Los valores en BTC y USD son direccionales. Sostienen la broma y la comparación visual."],
        ["Las colecciones son locales", "Los sueños guardados viven en el navegador con LocalStorage. No hay cuenta, base de datos ni rastreo."],
        ["Las páginas se pueden compartir", "Cada item tiene su propia ruta y metadata pensada para previews limpios en redes sociales."],
      ],
      contributeTitle: "Contribuye una nueva compra imposible",
      contributeText:
        "Añade una entrada de datos, incluye una imagen pulida, conserva el tono lúdico y abre un pull request con fuentes o contexto para la estimación.",
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Locale];

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}

export function getNavItems(locale: Locale): NavItem[] {
  const copy = getSiteCopy(locale);

  return [
    { label: copy.nav.explore, href: "/" },
    { label: copy.nav.collections, href: "/collections" },
    { label: copy.nav.about, href: "/about" },
    { label: copy.nav.howItWorks, href: "/how-it-works" },
  ];
}
