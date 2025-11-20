import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL2 = [
   
{
  id: "angeles mantos1",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_01.png"
},

    {
  id: "angeles mantos2",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_02.png"
},
    {
  id: "angeles mantos3",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_03.png"
},
    {
  id: "angeles mantos4",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_04.png"
},
    
 {
  id: "angeles_musicos_inferior",
  nombre: "ángeles músicos",
  descripcion:
    "Ángeles tocando instrumentos como órgano de tubos, trompeta natural, guitarra barroca, fagot, arpa y violín.",
  src: "/capas/angeles_musicos_01.png"
},
    {
  id: "angeles_musicos_superior",
  nombre: "ángeles músicos",
  descripcion:
    "Ángeles tocando instrumentos como órgano de tubos, trompeta natural, guitarra barroca, fagot, arpa y violín.",
  src: "/capas/angeles_musicos_02.png"
},
     {
    id: "angeles_querubines",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como niños alados y como pequeñas cabezas aladas.",
    src: "/capas/querubines.png"
},
 {
    id: "san_jose",
  nombre: "san josé",
  descripcion:
    "Entronizado, coronado y con amplio manto sobre los santos bajo su protección. Sostiene rama de lirios blancos y anillo.",
  src: "/capas/san_jose.png"
},

         {
    id: "texto_filacteria_lateral",
    nombre: "annulo suo suvarravit me et decoravit me corona",
    descripcion:
      "Texto de antífona, que puede traducirse como: con su anillo me desposó y me adornó con una corona.",
    src: "/capas/texto_vertical.png"
},

     {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae et principem omnis possessionis suae",
    descripcion:
      "Cita del salmo 105:21, que dice: «Lo puso por señor de su casa, Y por gobernador de todas sus posesiones».",
    src: "/capas/texto_horizontal.png"
},
];

export default function Nivel2() {
  return (
    <MultimediaLevel
      titulo="segundo nivel"
      background="/fondos/SegundoNivel.jpg"
      personajes={PERSONAJES_NIVEL2}
    />
  );
}

