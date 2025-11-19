import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  const personajes = [
    {
      id: "ignacio",
      nombre: "San Ignacio de Loyola",
      fechas: "1491–1556",
      descripcion: "Fundador de la Compañía de Jesús.",
      src: "/capas/ignacio_full.png",
    },
    {
      id: "dios",
      nombre: "DIOS",
      fechas: "ETERNO",
      descripcion: "Deidad.",
      src: "/capas/dios.png",
    },
    {
      id: "espitu",
      nombre: "El espiritu de dios",
      fechas: "Siempre",
      descripcion: "EL espiritu.",
      src: "/capas/espiritu.png",
    },
  ];

  // cargar cada capa en un canvas invisible
  useEffect(() => {
    personajes.forEach((p) => {
      const img = new Image();
      img.src = p.src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvasRefs.current[p.id] = canvas;
        imgRefs.current[p.id] = img;
      };
    });
  }, []);

  // detección pixel-perfect
  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * imgRefs.current["ignacio"]?.width;
    const y = ((e.clientY - rect.top) / rect.height) * imgRefs.current["ignacio"]?.height;

    let match = null;

    personajes.forEach((p) => {
      const canvas = canvasRefs.current[p.id];
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;

      const alpha = pixel[3];
      if (alpha > 10) match = p;
    });

    setActive(match);
  };

  return (
    <section style={{ padding: "2rem 0", textAlign: "center" }}>
      <h2>Personajes interactivos</h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        {/* Imagen base */}
        <img
          src="/cuadro_base.jpg"
          style={{ width: "100%", display: "block" }}
        />

        {/* Capa activa encima */}
        {active && (
          <img
            src={active.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.7))",
              pointerEvents: "none",
              transition: "0.15s ease",
            }}
          />
        )}

        {/* Tooltip */}
        {active && (
          <div
            style={{
              position: "absolute",
              top: "4%",
              right: "4%",
              background: "rgba(0,0,0,0.85)",
              color: "white",
              padding: "12px 18px",
              borderRadius: "10px",
              maxWidth: "240px",
              pointerEvents: "none",
            }}
          >
            <h3 style={{ margin: 0 }}>{active.nombre}</h3>
            <strong>{active.fechas}</strong>
            <p style={{ marginTop: "6px" }}>{active.descripcion}</p>
          </div>
        )}
      </div>

      <p style={{ marginTop: "1rem", opacity: 0.7 }}>
        Pasa el mouse sobre la pintura para descubrir los personajes.
      </p>
    </section>
  );
}
