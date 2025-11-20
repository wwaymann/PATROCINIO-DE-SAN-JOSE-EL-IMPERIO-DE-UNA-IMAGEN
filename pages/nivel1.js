import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL1 = [
 // -----------------------------------------------------------------------
// PRIMERA NIVEL, PRIMERA FILA
// -----------------------------------------------------------------------

  {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "inscripción latina tomada del cantar de los cantares (2,3): «me senté a la sombra del que tanto había deseado». alude al amparo que san josé ofrece a los santos cobijados bajo su manto.",
    src: "/capas/texto_primer nivel.png",
  },
  {
    id: "angeles_querubines",
    nombre: "ángeles y querubines",
    descripcion:
      "una multitud de ángeles y querubines articula el espacio entre la trinidad y san josé. los ángeles mayores tocan instrumentos barrocos, sostienen el manto o portan filacterias, introduciendo movimiento y música en la escena. los querubines, representados como pequeñas cabezas aladas inmersas en la luz y las nubes, pertenecen al orden más elevado y simbolizan el conocimiento y la contemplación de la belleza divina.",
    src: "/capas/querubines_primer_nivel.png",
  },
  {
    id: "ignacio",
    nombre: "san ignacio de loyola",
    fechas: "1491–1556",
    descripcion:
      "jesuita. hábito negro. porta el emblema ihs rodeado de rayos y el libro de reglas con la divisa 'ad majorem gloriam dei'.",
    src: "/capas/ignacio_full.png",
  },
  {
    id: "antonio",
    nombre: "san antonio de padua",
    fechas: "1195–1231",
    descripcion:
      "franciscano. sostiene al niño jesús sobre un libro y un lirio blanco.",
    src: "/capas/antonio_full.png",
  },
  {
    id: "nicolas",
    nombre: "san nicolás de bari",
    fechas: "270–342",
    descripcion:
      "obispo. porta mitra, capa magna, báculo y un libro con tres esferas alusivas a su caridad.",
    src: "/capas/nicolas_full.png",
  },
  {
    id: "agustin",
    nombre: "san agustín de hipona",
    fechas: "354–430",
    descripcion:
      "obispo. porta báculo, pluma y libro. doctor de la iglesia.",
    src: "/capas/agustin_full.png",
  },
  {
    id: "gregorio",
    nombre: "san gregorio magno",
    fechas: "† 604",
    descripcion:
      "papa. porta tiara, cruz triple, pluma en la derecha y libro en la izquierda.",
    src: "/capas/gregorio_full.png",
  },
  {
    id: "domingo",
    nombre: "santo domingo de guzmán",
    fechas: "1170–1221",
    descripcion:
      "dominico. hábito bicolor. porta rosario, lirios blancos y un libro.",
    src: "/capas/domingo_full.png",
  },
  {
    id: "francisco",
    nombre: "san francisco de asís",
    fechas: "1182–1226",
    descripcion:
      "hábito café. estigmas visibles. porta un crucifijo.",
    src: "/capas/francisco_full1.png",
  },
  {
    id: "jeronimo",
    nombre: "san jerónimo",
    fechas: "347–420",
    descripcion:
      "cardenal. porta pluma y libro. león a sus pies como símbolo tradicional.",
    src: "/capas/jeronimo_full.png",
  },
  {
    id: "ambrosio",
    nombre: "san ambrosio de milán",
    fechas: "340–396",
    descripcion:
      "obispo. porta báculo, libro y pluma. doctor de la iglesia.",
    src: "/capas/ambrosio_full.png",
  },
  {
    id: "bernardo",
    nombre: "san bernardo de claraval",
    fechas: "1090–1153",
    descripcion:
      "cisterciense. manto blanco, mitra, pluma, libro y báculo abacial.",
    src: "/capas/bernardo_full.png",
  },
  {
    id: "juan_de_dios",
    nombre: "san juan de dios",
    fechas: "1495–1550",
    descripcion:
      "hábito gris. porta un crucifijo y una granada. fundador de la orden hospitalaria.",
    src: "/capas/juan_de_dios_full.png",
  },
  {
    id: "francisco_javier",
    nombre: "san francisco javier",
    fechas: "1506–1552",
    descripcion:
      "jesuita. porta un lirio blanco en la derecha y un crucifijo en la izquierda.",
    src: "/capas/francisco_javier_full.png",
  },

  // -----------------------------------------------------------------------
  // PRIMER NIVEL, SEGUNDA FILA
  // -----------------------------------------------------------------------
  {
    id: "buenaventura",
    nombre: "san buenaventura",
    fechas: "1218–1274",
    descripcion:
      "franciscano. porta un libro con una pequeña iglesia sobre él y un árbol en su mano izquierda.",
    src: "/capas/buenaventura_full.png",
  },
  {
    id: "monica",
    nombre: "santa mónica de hipona",
    fechas: "siglo IV",
    descripcion:
      "madre de san agustín. toca blanca y telas negras de viuda. sostiene un libro y un crucifijo.",
    src: "/capas/monica_full.png",
  },
  {
    id: "francisco_de_paula",
    nombre: "san francisco de paula",
    fechas: "1416–1507",
    descripcion:
      "fundador de los mínimos. hábito pardo. porta la divisa 'charitas' y un bastón.",
    src: "/capas/francisco_de_paula_full.png",
  },
  {
    id: "barbara",
    nombre: "santa bárbara",
    fechas: "siglo III",
    descripcion:
      "mártir. princesa con corona. palma del martirio y torre en llamas.",
    src: "/capas/barbara_full.png",
  },
  {
    id: "gertrudis",
    nombre: "santa gertrudis la magna",
    fechas: "1256–1302",
    descripcion: "agustina. corazón inflamado y báculo.",
    src: "/capas/gertrudis_full.png",
  },
  {
    id: "teresa",
    nombre: "santa teresa de ávila",
    fechas: "1515–1582",
    descripcion:
      "carmelita descalza. hábito marrón y capa blanca. porta una pluma y un libro.",
    src: "/capas/teresa_full.png",
  },
  {
    id: "apolonia",
    nombre: "santa apolonia de alejandría",
    fechas: "† 249",
    descripcion:
      "mártir. princesa con corona. palma del martirio y tenaza con diente.",
    src: "/capas/apolonia_full.png",
  },
  {
    id: "tomas",
    nombre: "santo tomás de aquino",
    fechas: "1225–1274",
    descripcion:
      "doctor angélico. túnica gris decorada. cáliz y lirio.",
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
      "franciscano y doctor sutil. muceta doctoral, solideo, libro y báculo.",
    src: "/capas/duns_scoto_full.png",
  },
];

export default function Nivel1() {
  return (
    <MultimediaLevel
      titulo="primer nivel"
     src: "/fondos/PrimerNivel.png"
      personajes={PERSONAJES_NIVEL1}
    />
  );
}
