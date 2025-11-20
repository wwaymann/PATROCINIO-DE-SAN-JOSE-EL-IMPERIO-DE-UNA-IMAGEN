import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL3 = [
  // -------------------------------------------------------------
  // TERCER NIVEL
  // -------------------------------------------------------------
  {
    id: "arcangel_gabriel",
    nombre: "arcángel gabriel",
    descripcion:
      "sostiene una rama de lirios en la mano derecha y un anillo en la izquierda. mensajero divino asociado a la anunciación.",
    src: "/capas/gabriel_full.png",
  },
  {
    id: "arcangel_miguel",
    nombre: "arcángel miguel",
    descripcion:
      "porta una espada flamígera en la mano derecha y una cruz en la izquierda. jefe de las milicias celestiales.",
    src: "/capas/miguel_full.png",
  },
  {
    id: "arcangel_rafael",
    nombre: "arcángel rafael",
    descripcion:
      "sostiene un pez en la mano derecha y un báculo o vara en la izquierda. protector de viajeros y sanador.",
    src: "/capas/rafael_full.png",
  },
  {
    id: "angel_de_la_guarda",
    nombre: "ángel de la guarda",
    descripcion:
      "lleva un corazón en la mano derecha y guía a un niño con la izquierda. versión devocional derivada de la iconografía de rafael y tobías.",
    src: "/capas/angel_guardia_full.png",
  },
  {
    id: "san_juan_bautista",
    nombre: "san juan bautista",
    descripcion:
      "representado como asceta, con sayo de pelo de camello y capa roja. sostiene un cayado rematado en cruz con la filacteria 'ecce agnus dei' y un cordero sobre un libro.",
    src: "/capas/juan_bautista_full.png",
  },
  {
    id: "virgen_maria",
    nombre: "virgen maría",
    descripcion:
      "inmaculada y virgen del carmen: coronada, sentada sobre una nube, luna a sus pies, halo de doce estrellas, cetro en la mano derecha y anillo con filacteria en la izquierda. viste hábito café y capa blanca carmelita con escapulario en el pecho.",
    src: "/capas/virgen_maria_full.png",
  },
  {
    id: "santa_ana",
    nombre: "santa ana",
    descripcion:
      "madre de la virgen, de apariencia anciana, sentada sobre nube, manos juntas en oración y mirada dirigida hacia su hija.",
    src: "/capas/santa_ana_full.png",
  },
  {
    id: "san_joaquin",
    nombre: "san joaquín",
    descripcion:
      "padre de la virgen, representado como anciano, sentado sobre nube, en actitud orante y mirando hacia la trinidad.",
    src: "/capas/san_joaquin_full.png",
  },
  {
    id: "trinidad_padre",
    nombre: "dios padre",
    descripcion:
      "figura central de la trinidad antropomorfa. entronizado, con capa pluvial, sosteniendo un cetro en la mano derecha y el orbe del mundo en la izquierda.",
    src: "/capas/trinidad_padre_full.png",
  },
  {
    id: "trinidad_hijo",
    nombre: "dios hijo",
    descripcion:
      "sentado a la diestra del padre, con capa pluvial. porta una cruz en la mano derecha y un cetro en la izquierda.",
    src: "/capas/trinidad_hijo_full.png",
  },
  {
    id: "trinidad_espiritu_santo",
    nombre: "espíritu santo",
    descripcion:
      "representado antropomórficamente, con capa pluvial. sostiene una vara de lirios blancos coronada por una paloma y un cetro en la mano derecha.",
    src: "/capas/trinidad_espiritu_full.png",
  },

  {
    id: "texto_banda_trinidad",
    nombre: "ite ad ioseph",
    descripcion:
      "lema latino procedente del génesis (41,55) reinterpretado devocionalmente como «vayan a josé», destacando a san josé como intercesor privilegiado ante la trinidad.",
    src: "/capas/texto_tercer_nivel.png",
  },

   {
    id: "querubinesTrinidad",
    nombre: "querubines trinidad",
    descripcion:
      "---.",
    src: "/capas/querubinesTrinidad.png",
  },

   {
    id: "querubinesMaria",
    nombre: "querubines maria",
    descripcion:
      "---.",
    src: "/capas/querubinesMaria.png",
  },
  
];

export default function Nivel3() {
  return (
    <MultimediaLevel
      titulo="Tercer Nivel"
      background="/fondos/TercerNivel.png"
      personajes={PERSONAJES_NIVEL3}
    />
  );
}


