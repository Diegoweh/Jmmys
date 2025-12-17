// file.ts

export type MoneyMXN = number;

export type MenuCategory =
  | "PA_PICAR_Y_COMPARTIR"
  | "ENSALADAS"
  | "ALITAS"
  | "BONELESS"
  | "BURGERS"
  | "PIZZAS"
  | "POSTRES"
  | "SALSAS";

export type MenuAddOn = {
  id: string;
  name: string;
  price: MoneyMXN;
};

export type MenuOptionItem = {
  id: string;
  label: string;
  priceDelta?: MoneyMXN; // si alguna opción cambia el precio
};

export type MenuOptionGroup = {
  id: string;
  title: string;
  type: "single" | "multiple";
  required?: boolean;
  items: MenuOptionItem[];
};

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: MoneyMXN;
  currency: "MXN";
  imageUrl: string;
  tags?: string[];
  options?: MenuOptionGroup[];
  addOns?: MenuAddOn[];
  available?: boolean;
};

export const menuAddOns = {
  pollo: [
    { id: "addon-pollo-grill", name: "Pollo grill", price: 29 },
    { id: "addon-pollo-crunchy", name: "Pollo crunchy", price: 29 },
  ],
  camaron: [{ id: "addon-camaron-grill", name: "Camarón grill", price: 59 }],
} as const;

export const menuSalsas: MenuItem[] = [
  {
    id: "salsa-ay-caramba",
    category: "SALSAS",
    name: "Ay Caramba",
    description:
      "Mayonesa, chile jalapeño, aceite de oliva, sal y pimienta.",
    price: 0,
    currency: "MXN",
    imageUrl: "/images/menu/salsas/ay-caramba.jpg",
    tags: ["salsa", "spicy"],
    available: true,
  },
  {
    id: "salsa-mambo-yambo",
    category: "SALSAS",
    name: "Mambo yambo",
    description: "Mayonesa, sriracha, chile dulce y aceite de ajonjolí.",
    price: 0,
    currency: "MXN",
    imageUrl: "/images/menu/salsas/mambo-yambo.jpg",
    tags: ["salsa"],
    available: true,
  },
  {
    id: "salsa-yum-yum",
    category: "SALSAS",
    name: "Yum Yum",
    description: "Mayonesa, crema, habanero tatemado y miel de agave.",
    price: 0,
    currency: "MXN",
    imageUrl: "/images/menu/salsas/yum-yum.jpg",
    tags: ["salsa", "spicy", "sweet-heat"],
    available: true,
  },
];

export const menuItems: MenuItem[] = [
  // =========================
  // PA’PICAR & COMPARTIR
  // =========================
  {
    id: "papicar-jalapeno-popper-panetto",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Jalapeño Popper Panetto",
    description:
      "Pan artesanal suave y doradito, horneado al estilo garlic bread con mantequilla aromática y hierbas finas. Ligero picor de jalapeño y mezcla de tres quesos derretidos. Se sirve con Chunky Pomodoro artesanal fresca y espesa.",
    price: 159,
    currency: "MXN",
    imageUrl: "/img/papicar/jalapeno-popper-panetto.webp",
    tags: ["para-compartir", "queso", "jalapeño"],
    available: true,
  },
  {
    id: "papicar-epic-fries",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Epic Fries",
    description:
      "Papas doradas, crujientes y sazonadas al estilo Jimmy’s. Perfectas para compartir, pero difíciles de soltar.",
    price: 89,
    currency: "MXN",
    imageUrl: "/img/papicar/epic-fries.webp",
    tags: ["papas", "para-compartir"],
    available: true,
  },
  {
    id: "papicar-crispy-rings",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Crispy Rings",
    description:
      "Aros de cebolla capeados, crujientes y hechos al momento. Servidos con aderezo Ranch casero.",
    price: 109,
    currency: "MXN",
    imageUrl: "/img/papicar/crispy-rings.webp",
    tags: ["aros-de-cebolla", "ranch"],
    available: true,
  },
  {
    id: "papicar-super-crazy-fries",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Super Crazy Fries",
    description:
      "Sirloin, tocino y salsa de queso tocino.",
    price: 159,
    currency: "MXN",
    imageUrl: "/img/papicar/super-crazy-fries.webp",
    tags: ["papas", "toppings"],
  },
  {
    id: "papicar-super-crazy-fries-chicken",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Super Crazy Fries Chicken",
    description:
      "Boneless crunchy con salsa a tu gusto y queso tocino.",
    price: 159,
    currency: "MXN",
    imageUrl: "/img/papicar/super-crazy-fries-chicken.webp",
    tags: ["papas", "toppings"],
  },
  // {
  //   id: "papicar-super-crazy-fries",
  //   category: "PA_PICAR_Y_COMPARTIR",
  //   name: "Super Crazy Fries",
  //   description:
  //     "Papas al estilo Jimmy’s con toppings irresistibles. Elige tu estilo.",
  //   price: 159,
  //   currency: "MXN",
  //   imageUrl: "/img/papicar/super-crazy-fries.webp",
  //   tags: ["papas", "toppings"],
  //   options: [
  //     {
  //       id: "opt-super-crazy-fries-style",
  //       title: "Elige un estilo",
  //       type: "single",
  //       required: true,
  //       items: [
  //         {
  //           id: "burger-style",
  //           label:
  //             "Burger Style: carne top sirloin, tocino y salsa especial de queso tocino.",
  //         },
  //         {
  //           id: "chicken-style",
  //           label:
  //             "Chicken Style: trozos de boneless crunchy, salseados a tu gusto y aderezo especial de queso tocino.",
  //         },
  //       ],
  //     },
  //   ],
  //   available: true,
  // },
  {
    id: "papicar-mac-attack-bombs",
    category: "PA_PICAR_Y_COMPARTIR",
    name: "Mac Attack Bombs",
    description:
      "Bites de Mac & Cheese doraditas y crujientes por fuera, cremosas por dentro. Acompañadas de aderezo queso tocino.",
    price: 129,
    currency: "MXN",
    imageUrl: "/img/papicar/mac-attack-bombs.webp",
    tags: ["mac-and-cheese", "queso", "para-compartir"],
    available: true,
  },

  // =========================
  // ENSALADAS
  // =========================
  {
    id: "ensalada-cesar-style",
    category: "ENSALADAS",
    name: "César Style Salad",
    description:
      "Lechuga romana, parmesano, crutones y aderezo César casero con el toque Jimmy’s.",
    price: 117,
    currency: "MXN",
    imageUrl: "/img/ensaladas/cesar-style.webp",
    tags: ["ensalada", "clasica"],
    addOns: [...menuAddOns.pollo],
    available: true,
  },
  {
    id: "ensalada-jimmys-garden",
    category: "ENSALADAS",
    name: "Jimmy’s Garden Salad",
    description:
      "Lechugas mixtas con manzana verde, arándanos, nuez garapiñada, tomate cherry y queso de cabra. Aderezo especial a base de balsámico.",
    price: 145,
    currency: "MXN",
    imageUrl: "/img/ensaladas/jimmys-garden.webp",
    tags: ["ensalada", "balsamico", "queso-de-cabra"],
    addOns: [...menuAddOns.pollo, ...menuAddOns.camaron],
    available: true,
  },
  {
    id: "ensalada-taco-ranch-superstar",
    category: "ENSALADAS",
    name: "Taco Ranch Superstar Salad",
    description:
      "Pollo grill, tocino, aguacate, tomate cherry y cheddar rayado sobre mix de lechugas frescas con tiritas de tortilla roja crujiente. Bañada con ranch casero.",
    price: 139,
    currency: "MXN",
    imageUrl: "/img/ensaladas/taco-ranch-superstar.webp",
    tags: ["ensalada", "ranch", "tocino", "aguacate"],
    addOns: [{ id: "addon-cambio-camaron", name: "Cambio por camarón", price: 59 }],
    available: true,
  },

  // =========================
  // ALITAS
  // =========================
  {
    id: "alitas-buffalo-classic",
    category: "ALITAS",
    name: "Buffalo Classic",
    description:
      "Versión premiada estilo Buffalo: picor equilibrado, sabor potente. Servidas con apio, toque de cebollín y ranch casero.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/alitas/buffalo-classic.webp",
    tags: ["buffalo", "ranch"],
    available: true,
  },
  {
    id: "alitas-jack-bbq-smoke",
    category: "ALITAS",
    name: "Jack BBQ Smoke",
    description:
      "Salsa BBQ con Bourbon Jack Daniels, ajonjolí blanco, toque de cebollín y cebollita crispy. Rayada con ranch artesanal y brotes microgreen.",
    price: 175,
    currency: "MXN",
    imageUrl: "/img/alitas/jack-smoke.webp",
    tags: ["bbq", "jack-daniels"],
    available: true,
  },
  {
    id: "alitas-buffaranch",
    category: "ALITAS",
    name: "BuffaRanch",
    description:
      "Mitad Buffalo, mitad Ranch. Coronadas con aderezo ¡Ay Caramba!, ajonjolí negro y Crunchy Peas.",
    price: 175,
    currency: "MXN",
    imageUrl: "/img/alitas/buffaranch.webp",
    tags: ["buffalo", "ranch", "ay-caramba"],
    available: true,
  },
  {
    id: "alitas-hot-honey",
    category: "ALITAS",
    name: "Hot Honey",
    description:
      "Alitas glaseadas con miel picante de agave: dulces y picantes en equilibrio. Terminan con aderezo Yum Yum, tocino crujiente y brotes verdes.",
    price: 179,
    currency: "MXN",
    imageUrl: "/img/alitas/hot-honey.webp",
    tags: ["sweet-heat", "tocino", "yum-yum"],
    available: true,
  },
  {
    id: "alitas-truffalo-supreme",
    category: "ALITAS",
    name: "Truffalo Supreme",
    description:
      "Buffalo al siguiente nivel con toque de trufa. Con ajonjolí negro, rayada con aderezo Yum Yum y brotes verdes.",
    price: 185,
    currency: "MXN",
    imageUrl: "/img/alitas/truffalo-supreme.webp",
    tags: ["trufa", "buffalo"],
    available: true,
  },
  {
    id: "alitas-korean-crunch",
    category: "ALITAS",
    name: "Korean Crunch",
    description:
      "Fusión asiática de gouchang, miel, soya y jengibre. Finalizadas con mayonesa dulce, pepino encurtido y cebolla crujiente.",
    price: 179,
    currency: "MXN",
    imageUrl: "/img/alitas/korean-crunch.webp",
    tags: ["korean", "asiatico", "crunchy"],
    available: true,
  },

  // =========================
  // BONELESS AL ESTILO JIMMYS
  // =========================
  {
    id: "boneless-buffalo-classic",
    category: "BONELESS",
    name: "Boneless Buffalo Classic",
    description:
      "Crujientes por fuera, jugosos por dentro, hechos con pechuga de pollo de libre pastoreo. Versión premiada estilo Buffalo con apio, cebollín y ranch casero.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/boneless/buffalo-classic.webp",
    tags: ["boneless", "buffalo"],
    available: true,
  },
  {
    id: "boneless-jack-bbq-smoke",
    category: "BONELESS",
    name: "Boneless Jack BBQ Smoke",
    description:
      "Boneless con salsa BBQ con Bourbon Jack Daniels, ajonjolí blanco, toque de cebollín y cebollita crispy. Rayado con ranch artesanal y brotes microgreen.",
    price: 175,
    currency: "MXN",
    imageUrl: "/img/boneless/jack-bbq-smoke.webp",
    tags: ["boneless", "bbq"],
    available: true,
  },
  {
    id: "boneless-buffaranch",
    category: "BONELESS",
    name: "Boneless BuffaRanch",
    description:
      "Mitad Buffalo, mitad Ranch. Coronados con aderezo ¡Ay Caramba!, ajonjolí negro y Crunchy Peas.",
    price: 175,
    currency: "MXN",
    imageUrl: "/img/boneless/buffaranch.webp",
    tags: ["boneless", "ranch"],
    available: true,
  },
  {
    id: "boneless-hot-honey",
    category: "BONELESS",
    name: "Boneless Hot Honey",
    description:
      "Glaseados con miel de agave y chiles: dulces y picantes. Terminan con aderezo Yum Yum, tocino crujiente y brotes verdes.",
    price: 179,
    currency: "MXN",
    imageUrl: "/img/boneless/hot-honey.webp",
    tags: ["boneless", "sweet-heat"],
    available: true,
  },
  {
    id: "boneless-truffalo-supreme",
    category: "BONELESS",
    name: "Boneless Truffalo Supreme",
    description:
      "Toque de trufa con topping de ajonjolí negro, rayado con aderezo Yum Yum y brotes verdes.",
    price: 185,
    currency: "MXN",
    imageUrl: "/img/boneless/truffalo-supreme.webp",
    tags: ["boneless", "trufa"],
    available: true,
  },
  {
    id: "boneless-korean-crunch",
    category: "BONELESS",
    name: "Boneless Korean Crunch",
    description:
      "Gouchang, miel, soya y jengibre. Finalizados con mayonesa dulce, pepino encurtido y cebolla crujiente.",
    price: 179,
    currency: "MXN",
    imageUrl: "/img/boneless/korean-crunch.webp",
    tags: ["boneless", "korean"],
    available: true,
  },

  // =========================
  // LA BURGER SECCIÓN
  // =========================
  {
    id: "burger-original-cheeseburger",
    category: "BURGERS",
    name: "La Original Cheeseburger",
    description:
      "100% Top Sirloin con cheddar fundido, tomate, lechuga, cebolla y pepinillos. La que lo empezó todo.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/burgers/original-cheeseburger.webp",
    tags: ["top-sirloin", "clasica"],
    available: true,
  },
  {
    id: "burger-jimmys-royale",
    category: "BURGERS",
    name: "JIMMYS Royale Burger",
    description:
      "Pan brioche recién horneado, doble carne, mozzarella, mermelada de tocino con bourbon, cheddar derretido, tocino ahumado y mantequilla de maní dulce.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/burgers/jimmys-royale.webp",
    tags: ["doble", "tocino", "brioche"],
    available: true,
  },
  {
    id: "burger-crunchylishus-korean",
    category: "BURGERS",
    name: "CrunchyLishus Chicken Korean Burger",
    description:
      "Pechuga de pollo crunchy bañada en salsa koreana: ensalada de col, pepinos encurtidos, ajonjolí y aderezo ajua con sirasha.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/burgers/crunchylishus-korean.webp",
    tags: ["pollo", "korean", "crunchy"],
    available: true,
  },
  {
    id: "burger-crunchylishus-bbq",
    category: "BURGERS",
    name: "CrunchyLishus Chicken BBQ Burger",
    description:
      "Pechuga de pollo crunchy bañada en salsa BBQ smoke con tocino, piña grill y cebollín.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/burgers/crunchylishus-bbq.webp",
    tags: ["pollo", "bbq", "piña"],
    available: true,
  },
  {
    id: "burger-especial",
    category: "BURGERS",
    name: "Especial Burger",
    description:
      "Top Sirloin con mozzarella fundida, champiñones salteados, lascas de aguacate, tocino ahumado, lechuga, tomate y cebolla.",
    price: 179,
    currency: "MXN",
    imageUrl: "/img/burgers/especial.webp",
    tags: ["aguacate", "champiñon", "tocino"],
    available: true,
  },
  {
    id: "burger-majestic-bacon",
    category: "BURGERS",
    name: "Majestic Bacon Burger",
    description:
      "Doble Top Sirloin con mozzarella fundida, champiñones salteados, espinaca baby, tocino crujiente, salsa queso tocino y aderezo Ay Caramba.",
    price: 189,
    currency: "MXN",
    imageUrl: "/img/burgers/majestic-bacon.webp",
    tags: ["doble", "tocino", "ay-caramba"],
    available: true,
  },
  {
    id: "burger-smoky-jack-bbq",
    category: "BURGERS",
    name: "Smoky Jack BBQ Burger",
    description:
      "Top Sirloin con tocino extra, doble queso americano, cebolla crispy, piña al grill y salsa BBQ Smoky Jack.",
    price: 175,
    currency: "MXN",
    imageUrl: "/img/burgers/smoky-jack-bbq.webp",
    tags: ["bbq", "piña", "queso-americano"],
    available: true,
  },
  {
    id: "burger-bestia-ruffles",
    category: "BURGERS",
    name: "La Bestia Ruffles Burger",
    description:
      "Top Sirloin con croqueta de mac & cheese, cheddar, tocino crujiente, salsa queso tocino y aderezo Ruffle-Ranch. Coronada con papas Ruffles.",
    price: 189,
    currency: "MXN",
    imageUrl: "/img/burgers/bestia-ruffles.webp",
    tags: ["mac-and-cheese", "ruffles", "tocino"],
    available: true,
  },

  // =========================
  // PIZZAS – BASE CHEESECRUST
  // =========================
  {
    id: "pizza-pepperonisima",
    category: "PIZZAS",
    name: "La Pepperonísima",
    description:
      "Machín pepperoni doradito, mezcla de tres quesos, salsa pomodoro artesanal y parmesano reggiano rallado.",
    price: 189,
    currency: "MXN",
    imageUrl: "/img/pizzas/pepperonisima.webp",
    tags: ["pepperoni", "clasica"],
    available: true,
  },
  {
    id: "pizza-hot-mammy",
    category: "PIZZAS",
    name: "Hot Mammy",
    description:
      "Pepperoni, jalapeños confitados y un toque de jalapeño fresco. Mousse de tres quesos + Chunky Pomodoro artesanal. Remate de miel picante.",
    price: 239,
    currency: "MXN",
    imageUrl: "/img/pizzas/hot-mammy.webp",
    tags: ["pepperoni", "jalapeño", "sweet-heat"],
    available: true,
  },
  {
    id: "pizza-pork-belly",
    category: "PIZZAS",
    name: "La Pork Belly Pizza",
    description:
      "Cubos de pork belly braseado sobre CheeseCrust crujiente, mezcla de quesos, salsa coreana artesanal, cebollín y crunch de cacahuate troceado.",
    price: 299,
    currency: "MXN",
    imageUrl: "/img/pizzas/pork-belly.webp",
    tags: ["pork-belly", "korean", "cacahuate"],
    available: true,
  },
  {
    id: "pizza-veggy-lovers",
    category: "PIZZAS",
    name: "Veggy Lovers Pizza",
    description:
      "Mozzarella y gouda con champiñones y tomatitos cherry confitados. Mousse de tres quesos, espinaca baby, parmesano reggiano y reducción balsámica cítrica. Finalizada con Chunky Pomodoro.",
    price: 247,
    currency: "MXN",
    imageUrl: "/img/pizzas/veggy-lovers.webp",
    tags: ["veggie", "champiñon", "balsamico"],
    available: true,
  },
  {
    id: "pizza-dinamita-explosion",
    category: "PIZZAS",
    name: "La Dinamita Explosión",
    description:
      "Pepperoni, salchicha italiana, chorizo ahumado y tocino. Quesos + CheeseCrust crujiente. Topping de Chunky Pomodoro y parmesano reggiano.",
    price: 349,
    currency: "MXN",
    imageUrl: "/img/pizzas/dinamita-explosion.webp",
    tags: ["carnes", "intensa"],
    available: true,
  },
  {
    id: "pizza-truffalo-chica-wow",
    category: "PIZZAS",
    name: "Truffalo Chica Wow (TCW)",
    description:
      "Boneless jugosos con salsa Truffalo (picor + aroma a trufa), tocino crujiente, brotes verdes y ranch casero para balance perfecto.",
    price: 384,
    currency: "MXN",
    imageUrl: "/img/pizzas/truffalo-chica-wow.webp",
    tags: ["trufa", "boneless", "tocino"],
    available: true,
  },
  {
    id: "pizza-rockefeller",
    category: "PIZZAS",
    name: "La Rockefeller Pizza",
    description:
      "Camarones sinaloenses salteados en mantequilla y ajo sobre salsa blanca estilo Rockefeller. Champiñones, tomatitos cherry, quesos gratinados, espinaca baby y parmesano reggiano.",
    price: 359,
    currency: "MXN",
    imageUrl: "/img/pizzas/rockefeller.webp",
    tags: ["camaron", "cremosa", "ajo"],
    available: true,
  },

  // =========================
  // BEBIDAS & POSTRES
  // =========================
  {
    id: "postre-coolkie-skillet-chocochips",
    category: "POSTRES",
    name: "Coolkie Skillet Chocochips",
    description:
      "Galleta tibia hecha en casa con helado casero derritiéndose, crumble de chocolate, chocolate derretido y nuez garapiñada.",
    price: 169,
    currency: "MXN",
    imageUrl: "/img/postres/coolkie-chocochips.webp",
    tags: ["galleta", "helado", "chocolate"],
    available: true,
  },
  {
    id: "postre-coolkie-skillet-smores-vibes",
    category: "POSTRES",
    name: "Coolkie Skillet S’mores Vibes",
    description:
      "Galleta de chocolate dúo con helado, crumble de graham y chocolate con malvaviscos flameados. Termina con lluvia de chocolate.",
    price: 119,
    currency: "MXN",
    imageUrl: "/img/postres/coolkie-smores.webp",
    tags: ["smores", "chocolate", "malvavisco"],
    available: true,
  },
  {
    id: "postre-coolkie-skillet-apple-crumble-star",
    category: "POSTRES",
    name: "Coolkie Skillet Apple Crumble Star",
    description:
      "Galleta de chispas de chocolate dúo con manzana caramelizada, crumble doradito y helado. Se corona con cajeta artesanal, toque de sal de mar y nuez garapiñada.",
    price: 129,
    currency: "MXN",
    imageUrl: "/img/postres/coolkie-apple-crumble.webp",
    tags: ["manzana", "cajeta", "crumble"],
    available: true,
  },

  // =========================  
  // =========================

  {
    id: "bebida-honey-limonada",
    category: "POSTRES",
    name: "Honey Limonada",
    description:
      "Limonada con miel de agave. Dulce, ligera y perfecta para refrescar cualquier antojo. Pídela con agua mineral o Sprite… ¡y arma tu mood!",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/juzzy-honey-limonada.webp",
    tags: ["miel", "agave", "limonada"],
    available: true,
  },
  {
    id: "bebida-jazmin-soda",
    category: "POSTRES",
    name: "Jazmín Honey Soda",
    description:
      "Flores de jazmín, miel y burbujitas felices. Sabe a verano, descanso y buen rollo.",
    price: 89,
    currency: "MXN",
    imageUrl: "/img/bebidas/juzzy-honey-soda.webp",
    tags: ["miel", "agave", "tea"],
    available: true,
  },
  {
    id: "bebida-frutos-rojos",
    category: "POSTRES",
    name: "Frutos Rojos",
    description:
      "Color, sabor y energía. Frambuesa, fresa y zarzamora mezcladas para un trago dulce con actitud.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/juzzy-frutos-rojos.webp",
    tags: ["frambuesa", "fresa", "zarzamora"],
    available: true,
  },
  // {
  //   id: "bebida-pepino-chia",
  //   category: "POSTRES",
  //   name: "Pepino con Chía",
  //   description:
  //     "Ultra fresca y ligerita. De esas que te rescatan del calor y te regresan a la vida.",
  //   price: 89,
  //   currency: "MXN",
  //   imageUrl: "/img/bebidas/coolkie-apple-crumble.jpg",
  //   tags: ["pepino", "chia", "frescura"],
  //   available: true,
  // },
  {
    id: "bebida-naranja-miel-y-jazmin",
    category: "POSTRES",
    name: "Naranja con Miel y Jazmín",
    description:
      "Naranja brillante con un toque floral. Inesperada, elegante y sorprendentemente adictiva.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/juzzy-naranja-jazmin.webp",
    tags: ["naranja", "miel", "jazmin"],
    available: true,
  },
  {
    id: "bebida-maracuya-naranja",
    category: "POSTRES",
    name: "Maracuyá con Naranja",
    description:
      "Tropical, vibrante y con ese punch ácido que enamora. Pura vibra playera en un vaso.",
    price: 89,
    currency: "MXN",
    imageUrl: "/img/bebidas/juzzy-maracuya.webp",
    tags: ["maracuya", "naranja", "tropical"],
    available: true,
  },

  {
    id: "bebida-rooky-fresas",
    category: "POSTRES",
    name: "Rooky Fresas con Crema",
    description:
      "Café helado con fresas y cremita. Fresco, frutal y brutalmente rico.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/rocky-fresas.webp",
    tags: ["fresas", "cafe", "crema"],
    available: true,
  },
  {
    id: "bebida-rooky-cajeta",
    category: "POSTRES",
    name: "Rooky Cajeta",
    description:
      "Café helado con cajeta. Dulce, suave y bien mexicano.",
    price: 89,
    currency: "MXN",
    imageUrl: "/img/bebidas/rocky-cajeta.webp",
    tags: ["cajeta", "cafe", "postre"],
    available: true,
  },
  {
    id: "bebida-rooky-matcha-azul",
    category: "POSTRES",
    name: "Rooky Matcha Azul",
    description:
      "Café helado con matcha azul. Fresco, vibrante y listo para el selfie.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/rocky-matcha-azul.webp",
    tags: ["matcha", "cafe", "postre"],
    available: true,
  },
  {
    id: "bebida-rooky-chocoreta",
    category: "POSTRES",
    name: "Rooky Chocoreta",
    description:
      "Café helado con chocolate y menta. Refrescante, cool y 100% JIMMYS.",
    price: 89,
    currency: "MXN",
    imageUrl: "/img/bebidas/rocky-chocoreta.webp",
    tags: ["chocolate", "menta", "cafe"],
    available: true,
  },
  {
    id: "bebida-rooky-nutella",
    category: "POSTRES",
    name: "Rooky Nutella",
    description:
      "Café helado con Nutella. Cremoso, chocolatoso y totalmente antojadizo.",
    price: 99,
    currency: "MXN",
    imageUrl: "/img/bebidas/rocky-nutella.webp",
    tags: ["nutella", "cafe", "postre"],
    available: true,
  },
];

// Útil si quieres render por secciones
export const menuByCategory = menuItems.reduce<Record<MenuCategory, MenuItem[]>>(
  (acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  },
  {} as Record<MenuCategory, MenuItem[]>
);
