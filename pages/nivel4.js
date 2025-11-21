import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL4 = [
   
  
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
    id: "san_jose",
  nombre: "san josé",
  descripcion:
    "Entronizado, coronado y con amplio manto sobre los santos bajo su protección. Sostiene rama de lirios blancos y anillo.",
  src: "/capas/san_jose.png"
},

   {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae et principem omnis possessionis suae",
    descripcion:
      "Cita del salmo 105:21, que dice: «Lo puso por señor de su casa, Y por gobernador de todas sus posesiones».",
    src: "/capas/texto_horizontal.png"
},

   {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "Cantar de los Cantares 2:3 «Bajo la sombra del deseado me senté».",
    src: "/capas/texto_primer_nivel.png",
    }, 
    
  {
    id: "texto_filacteria_lateral",
    nombre: "annulo suo suvarravit me et decoravit me corona",
    descripcion:
      "Texto de antífona, que puede traducirse como: con su anillo me desposó y me adornó con una corona.",
    src: "/capas/texto_vertical.png"
}



];

export default function Nivel4() {
  return (
    <MultimediaLevel
      titulo="eje central"
      background="/fondos/NivelCentral.jpg"
      personajes={PERSONAJES_NIVEL4}
    />
  );
}
