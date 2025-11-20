import MultimediaLevel from "../components/MultimediaLevel";

const PERSONAJES_NIVEL4 = [
  {
    id: "trinidad",
    nombre: "santísima trinidad",
    descripcion: "representación de dios padre, hijo y espíritu santo.",
    src: "/capas/Trinidad_full.png",
  },
];

export default function Nivel4() {
  return (
    <MultimediaLevel
      titulo="nivel central"
      background="/fondos/TercerNivel.png"
      personajes={PERSONAJES_NIVEL3}
    />
  );
}
