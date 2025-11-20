import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL4 = [
   {
    id: "trinidad_padre",
    nombre: "dios padre",
    descripcion:
      "figura central de la trinidad antropomorfa. entronizado, con capa pluvial, sosteniendo un cetro en la mano derecha y el orbe del mundo en la izquierda.",
    src: "/capas/trinidad_padre_full.png"
  },
  {
    id: "trinidad_hijo",
    nombre: "dios hijo",
    descripcion:
      "sentado a la diestra del padre, con capa pluvial. porta una cruz en la mano derecha y un cetro en la izquierda.",
    src: "/capas/trinidad_hijo_full.png"
  },
  {
    id: "trinidad_espiritu_santo",
    nombre: "espíritu santo",
    descripcion:
      "representado antropomórficamente, con capa pluvial. sostiene una vara de lirios blancos coronada por una paloma y un cetro en la mano derecha.",
    src: "/capas/trinidad_espiritu_full.png"
  },
  {
    id: "texto_banda_trinidad",
    nombre: "ite ad ioseph",
    descripcion:
      "lema latino procedente del génesis (41,55) reinterpretado devocionalmente como «vayan a josé», destacando a san josé como intercesor privilegiado ante la trinidad.",
    src: "/capas/texto_tercer_nivel.png"
},
{
    id: "san_jose",
  nombre: "san josé",
  descripcion:
    "representado entronizado en el centro de la composición, coronado y con amplio manto que se extiende para proteger a los santos del nivel inferior. sostiene en su mano derecha un cetro florido de lirios —símbolo de pureza y elección divina— y en la izquierda un libro abierto que alude a la sabiduría y autoridad espiritual. es el intermediario privilegiado entre la trinidad y la iglesia, figura paternal y custodio universal.",
  src: "/capas/san_jose.png"
},
    {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae et principem omnis possessionis suae",
    descripcion:
      "cita del salmo 104(105),21: «lo hizo señor de su casa y príncipe de todas sus posesiones». refuerza el papel de san josé como custodio y administrador del pueblo de dios.",
    src: "/capas/texto_horizontal.png"
},
  {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "Cantar de los Cantares 2:3 «Bajo la sombra del deseado me senté».",
    src: "/capas/texto_primer nivel.png",
    }, 


];

export default function Nivel4() {
  return (
    <MultimediaLevel
      titulo="nivel central"
      background="/fondos/NivelCentral.png"
      personajes={PERSONAJES_NIVEL4}
    />
  );
}
