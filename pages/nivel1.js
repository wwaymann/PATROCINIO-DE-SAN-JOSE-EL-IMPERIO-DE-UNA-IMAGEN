import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL1 = [


     {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "Cantar de los Cantares 2:3 «Bajo la sombra del deseado me senté».",
    src: "/capas/texto_primer nivel.png",
    }, 
    {
    id: "angeles_querubines",
    nombre: "querubines",
    descripcion:
      "Representados como cabezas aladas.",
    src: "/capas/querubines_primer_nivel.png",
    },
    {
      id: "ignacio",
      nombre: "san ignacio de loyola",
      fechas: "1491–1556",
      descripcion:
        "Con hábito negro, porta el emblema IHS rodeado de rayos y el libro de reglas con la divisa 'Ad Majorem Gloriam Dei'.",
      src: "/capas/ignacio_full.png",
    },
    {
      id: "antonio",
      nombre: "san antonio de padua",
      fechas: "1195–1231",
      descripcion:
        "Con hábito café oscuro, sostiene al niño jesús sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png",
    },
    {
      id: "nicolas",
      nombre: "san nicolás de bari",
      fechas: "270–342",
      descripcion:
        "Vestido de pontifical, porta mitra, capa magna, báculo y un libro con tres esferas.",
      src: "/capas/nicolas_full.png",
    },
    {
      id: "agustin",
      nombre: "san agustín de hipona",
      fechas: "354–430",
      descripcion:
        "Vestido de obispo, porta báculo, pluma y libro. Doctor de la iglesia.",
      src: "/capas/agustin_full.png",
    },
    {
      id: "gregorio",
      nombre: "san gregorio magno",
      fechas: "† 604",
      descripcion:
        "Papa. Vestido de pontifical con tiara papal, porta cruz triple, pluma en la derecha y libro en la izquierda.",
      src: "/capas/gregorio_full.png",
    },
    {
      id: "domingo",
      nombre: "santo domingo de guzmán",
      fechas: "1170–1221",
      descripcion:
        "Con hábito bicolor, túnica blanca y manteo negro, porta rosario, lirios blancos y un libro cerrado.",
      src: "/capas/domingo_full.png",
    },
    {
      id: "francisco",
      nombre: "san francisco de asís",
      fechas: "1182–1226",
      descripcion: "Con hábito café y estigmas visibles, porta un crucifijo.",
      src: "/capas/francisco_full1.png",
    },
    {
      id: "jeronimo",
      nombre: "san jerónimo",
      fechas: "347–420",
      descripcion:
        "Vestido como cardenal, porta pluma y libro. Con un león a sus pies.",
      src: "/capas/jeronimo_full.png",
    },
    {
      id: "ambrosio",
      nombre: "san ambrosio de milán",
      fechas: "340–396",
      descripcion:
        "Vestido de obispo, porta báculo, libro y pluma. Doctor de la iglesia.",
      src: "/capas/ambrosio_full.png",
    },
    {
      id: "bernardo",
      nombre: "san bernardo de claraval",
      fechas: "1090–1153",
      descripcion:
        "Con mitra y cogulla blanca de abad de la orden del Císter, porta pluma, libro y báculo.",
      src: "/capas/bernardo_full.png",
    },
    {
      id: "juan_de_dios",
      nombre: "san juan de dios",
      fechas: "1495–1550",
      descripcion:
        "Con hábito de sayal, porta un crucifijo y una granada.",
      src: "/capas/juan_de_dios_full.png",
    },
    {
      id: "francisco_javier",
      nombre: "san francisco javier",
      fechas: "1506–1552",
      descripcion:
        "Con hábito jesuita, porta lirio blanco y crucifijo.",
      src: "/capas/francisco_javier_full.png",
    },

    // -----------------------------------------------------------------------
    // SEGUNDA FILA (10 figuras)
    // -----------------------------------------------------------------------
    {
      id: "buenaventura",
      nombre: "san buenaventura",
      fechas: "1218–1274",
      descripcion:
        "Con hábito franciscano, porta libro con pequeña iglesia sobre él y árbol.",
      src: "/capas/buenaventura_full.png",
    },
    {
      id: "monica",
      nombre: "santa mónica de hipona",
      fechas: "siglo IV",
      descripcion:
        "Con toca blanca y telas negras, sostiene un libro y un crucifijo.",
      src: "/capas/monica_full.png",
    },
    {
      id: "francisco_de_paula",
      nombre: "san francisco de paula",
      fechas: "1416–1507",
      descripcion:
        "Con hábito pardo, porta divisa 'charitas' y un bastón.",
      src: "/capas/francisco_de_paula_full.png",
    },
    {
      id: "barbara",
      nombre: "santa bárbara",
      fechas: "siglo III",
      descripcion:
        "Vestida como princesa con corona, porta palma de martirio y torre en llamas.",
      src: "/capas/barbara_full.png",
    },
    {
      id: "gertrudis",
      nombre: "santa gertrudis la magna",
      fechas: "1256–1302",
      descripcion: "Con hábito de agustina, porta corazón inflamado y báculo.",
      src: "/capas/gertrudis_full.png",
    },
    {
      id: "teresa",
      nombre: "santa teresa de ávila",
      fechas: "1515–1582",
      descripcion:
        "Con hábito marrón y capa blanca, porta una pluma y un libro.",
      src: "/capas/teresa_full.png",
    },
    {
      id: "apolonia",
      nombre: "santa apolonia de alejandría",
      fechas: "† 249",
      descripcion:
        "Vestida como princesa con corona, porta palma de martirio y tenaza con diente.",
      src: "/capas/apolonia_full.png",
    },
    {
      id: "tomas",
      nombre: "santo tomás de aquino",
      fechas: "1225–1274",
      descripcion:
        "Con túnica gris decorada, porta cáliz y lirio.",
      src: "/capas/tomas_full.png",
    },
    {
      id: "clara",
      nombre: "santa clara de asís",
      fechas: "1193–1243",
      descripcion: "porta custodia eucarística y báculo.",
      src: "/capas/clara_full.png",
    },
    {
      id: "duns_scoto",
      nombre: "san juan duns escoto",
      fechas: "1266–1308",
      descripcion:
        "Con hábito franciscano, muceta doctoral y solideo, porta libro y báculo.",
      src: "/capas/duns_scoto_full.png",
    }
    
  

];

export default function Nivel1() {
  return (
    <MultimediaLevel
      titulo="primer nivel"
      background="/fondos/PrimerNivel.jpg"
      personajes={PERSONAJES_NIVEL1}
    />
  );
}
