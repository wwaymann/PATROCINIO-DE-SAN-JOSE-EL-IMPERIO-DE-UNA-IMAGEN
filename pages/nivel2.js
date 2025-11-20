import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL2 = [
 // -----------------------------------------------------------------------
  // SEGUNDO NIVEL
  // -----------------------------------------------------------------------
  {
    id: "angeles mantos1",
    nombre: "ángele portador del manto 1",
    descripcion:
      "sostiene el amplio manto que san josé extiende sobre los santos del nivel inferior.",
    src: "/capas/angeles_capa_full_01.png",
  },

  {
    id: "angeles mantos2",
    nombre: "ángele portador del manto 2",
    descripcion:
      "sostiene el amplio manto que san josé extiende sobre los santos del nivel inferior.",
    src: "/capas/angeles_capa_full_02.png",
  },
  {
    id: "angeles mantos3",
    nombre: "ángele portador del manto 3",
    descripcion:
      "sostiene el amplio manto que san josé extiende sobre los santos del nivel inferior.",
    src: "/capas/angeles_capa_full_03.png",
  },
  {
    id: "angeles mantos4",
    nombre: "ángele portador del manto 4",
    descripcion:
      "sostiene el amplio manto que san josé extiende sobre los santos del nivel inferior.",
    src: "/capas/angeles_capa_full_04.png",
  },

  {
    id: "angeles_musicos_inferior",
    nombre: "ángeles músicos – grupo inferior",
    descripcion:
      "ángeles cercanos al nivel de los santos, tocando instrumentos barrocos como órgano portátil, trompeta natural, guitarra barroca, arpa y violín. aportan movimiento y sonido celestial, animando el espacio que conecta el mundo humano con la protección de san josé.",
    src: "/capas/angeles_musicos_01.png",
  },
  {
    id: "angeles_musicos_superior",
    nombre: "ángeles músicos – grupo superior",
    descripcion:
      "ángeles ubicados bajo la trinidad, portando instrumentos de viento y cuerdas. acompañan la esfera celestial con música solemne, actuando como puente sonoro entre los arcanos divinos y el resto de la composición.",
    src: "/capas/angeles_musicos_02.png",
  },
  {
    id: "angeles_querubines_superior",
    nombre: "ángeles y querubines – nivel superior",
    descripcion:
      "grupo de ángeles y querubines que envuelve la esfera de la trinidad, integrando luz, nubes y movimiento celestial.",
    src: "/capas/querubines.png",
  },
  {
    id: "san_jose",
    nombre: "san josé",
    descripcion:
      "representado entronizado en el centro de la composición, coronado y con amplio manto que se extiende para proteger a los santos del nivel inferior. sostiene en su mano derecha un cetro florido de lirios —símbolo de pureza y elección divina— y en la izquierda un libro abierto que alude a la sabiduría y autoridad espiritual. es el intermediario privilegiado entre la trinidad y la iglesia, figura paternal y custodio universal.",
    src: "/capas/san_jose.png",
  },

  {
    id: "texto_filacteria_lateral",
    nombre: "annulo suo monstravit me decoravit me corona sua",
    descripcion:
      "texto devocional que alude a la dignidad concedida por dios a san josé: su elección, su alianza (anillo) y su exaltación (corona). la filacteria es sostenida por ángeles que descienden hacia la figura del santo.",
    src: "/capas/texto_vertical.png",
  },

  {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae et principem omnis possessionis suae",
    descripcion:
      "cita del salmo 104(105),21: «lo hizo señor de su casa y príncipe de todas sus posesiones». refuerza el papel de san josé como custodio y administrador del pueblo de dios.",
    src: "/capas/texto_horizontal.png",
  },
];

export default function Nivel2() {
  return (
    <MultimediaLevel
      titulo="Segundo Nivel"
      background="/fondos/SegundoNivel.png"
      personajes={PERSONAJES_NIVEL2}
    />
  );
}
