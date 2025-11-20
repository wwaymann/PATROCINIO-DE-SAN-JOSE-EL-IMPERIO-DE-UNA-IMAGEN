import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL3 = [

 {
    id: "arcangel_gabriel",
    nombre: "arcángel gabriel",
    descripcion:
      "Sostiene rama de lirios en mano derecha y anillo en izquierda.",
    src: "/capas/gabriel_full.png" // ajusta al nombre real de tu archivo
  },
  {
    id: "arcangel_miguel",
    nombre: "arcángel miguel",
    descripcion:
      "Porta espada flamígera en mano derecha y cruz en izquierda.",
    src: "/capas/miguel_full.png"
  },
  {
    id: "arcangel_rafael",
    nombre: "arcángel rafael",
    descripcion:
      "Sostiene pescado en mano derecha y báculo o vara en la izquierda.",
    src: "/capas/rafael_full.png"
  },
  {
    id: "angel_de_la_guarda",
    nombre: "ángel de la guarda",
    descripcion:
      "Porta corazón en mano derecha y guía a un niño con la izquierda.",
    src: "/capas/angel_guardia_full.png"
  },
  {
    id: "san_juan_bautista",
    nombre: "san juan bautista",
    descripcion:
      "Representado como asceta, con sayo de pelo de camello y capa roja. Sostiene un cayado rematado en cruz con la filacteria 'Ecce agnus dei' y un cordero sobre un libro.",
    src: "/capas/juan_bautista_full.png"
  },
  {
    id: "virgen_maria",
    nombre: "virgen maría",
    descripcion:
      "Representada como Inmaculada Concepción y virgen del Carmen: coronada, sentada sobre una nube, luna a sus pies, halo de doce estrellas, cetro en la mano derecha y anillo con filacteria en la izquierda. Viste hábito café y capa blanca carmelita con escapulario en el pecho.",
    src: "/capas/virgen_maria_full.png"
  },
  {
    id: "santa_ana",
    nombre: "santa ana",
    descripcion:
      "Madre de la virgen, de apariencia anciana, sentada sobre nube, manos juntas en oración y mirada dirigida hacia su hija.",
    src: "/capas/santa_ana_full.png"
  },
  {
    id: "san_joaquin",
    nombre: "san joaquín",
    descripcion:
      "Padre de la virgen, representado como anciano, sentado sobre nube, en actitud orante y mirando hacia la Trinidad.",
    src: "/capas/san_joaquin_full.png"
  },
  {
    id: "trinidad_padre",
    nombre: "dios padre",
    descripcion:
      "Figura central de la Trinidad antropomorfa. Entronizado, con capa pluvial, sosteniendo un cetro en la mano derecha y el mundo en la izquierda.",
    src: "/capas/trinidad_padre_full.png"
  },
  {
    id: "trinidad_hijo",
    nombre: "dios hijo",
    descripcion:
      "Sentado a la diestra del padre, con capa pluvial. Porta una cruz en la mano derecha y un cetro en la izquierda.",
    src: "/capas/trinidad_hijo_full.png"
  },
  {
    id: "trinidad_espiritu_santo",
    nombre: "espíritu santo",
    descripcion:
      "Representado antropomórficamente, con capa pluvial. Sostiene una vara de lirios blancos coronada por una paloma y un cetro en la mano derecha.",
    src: "/capas/trinidad_espiritu_full.png"
  },
  {
    id: "texto_banda_trinidad",
    nombre: "ite ad ioseph",
    descripcion:
      "Cita de Génesis 41:55, cuya traducción es «Id a José».",
    src: "/capas/texto_tercer_nivel.png"
},
 {
    id: "querubinesTrinidad",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como pequeñas cabezas aladas.",
    src: "/capas/querubinesTrinidad.png",
  },

   {
    id: "querubinesMaria",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como pequeñas cabezas aladas.",
    src: "/capas/querubinesMaria.png"
   },
  
];

export default function Nivel3() {
  return (
    <MultimediaLevel
      titulo="tercer nivel"
      background="/fondos/TercerNivel.jpg"
      personajes={PERSONAJES_NIVEL3}
    />
  );
}


