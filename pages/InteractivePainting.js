import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  // 🔹 Define aquí tus personajes/capas full-size (mismo tamaño que el fondo)
  const personajes = [
    {
      id: "ignacio",
      nombre: "San Ignacio de Loyola",
      fechas: "1491–1556",
      descripcion: "Fundador de la Compañía de Jesús.",
      src: "/capas/ignacio.png"
    },
    {
      id: "antonio",
      nombre: "San Antonio de Padua",
      fechas: "1195–1231",
      descripcion: "Fraile franciscano.",
      src: "/capas/dios.png"
    },
    {
      id: "nicolas",
      nombre: "San Nicolás de Bari",
      fechas: "270–342",
      descripcion: "Obispo y figura clave de la caridad cristiana.",
      src: "/capas/espiritu.png"
    }
    // Agrega aquí más personajes, todos con PNG del mismo tamaño que cuadro_base
  ];

  // 🔹 Cargar cada capa en un canvas invisible para lectura de pixeles
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

  // 🔹 Detección pixel-perfect: busca de la capa superior a la inferior
  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const firstId = personajes[0]?.id;
    const baseImg = firstId ? imgRefs.current[firstId] : null;
    if (!baseImg) return;

    const x =
      ((e.clientX - rect.left) / rect.width) * baseImg.width;
    const y =
      ((e.clientY - rect.top) / rect.height) * baseImg.height;

    let detected = null;

    // Recorremos las capas de arriba hacia abajo (última en el array = más arriba)
    for (let i = personajes.length - 1; i >= 0; i--) {
      const p = personajes[i];
      const canvas = canvasRefs.current[p.id];
      if (!canvas) continue;

      const ctx = canvas.getContext("2d");
      const pixel = ctx.getImageData(
        Math.floor(x),
        Math.floor(y),
        1,
        1
      ).data;
      const alpha = pixel[3];

      if (alpha > 10) {
        detected = p;
        break; // nos quedamos con el primer pixel visible encontrado
      }
    }

    setActive(detected);
  };

  const handleLeave = () => {
    setActive(null);
  };

  return (
    <section
      style={{
        padding: "2rem 1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem"
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          margin: 0
        }}
      >
        Personajes del Patrocinio de San José
      </h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          cursor: "pointer"
        }}
      >
        {/* 🔹 Imagen base (pintura completa) */}
        <img
          src="/cuadro_base.jpg"
          alt="Pintura Patrocinio de San José"
          style={{ width: "100%", display: "block" }}
        />

        {/* 🔹 Capa activa: se dibuja encima de la pintura */}
        {active && (
          <img
            src={active.src}
            alt={active.nombre}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: "block",
              pointerEvents: "none",
              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.7))",
              transition: "0.15s ease"
            }}
          />
        )}

        {/* 🔹 Tooltip de información del personaje */}
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
              fontSize: "0.9rem"
            }}
          >
            <h3
              style={{
                margin: "0 0 4px",
                fontSize: "1rem"
              }}
            >
              {active.nombre}
            </h3>
            <strong
              style={{
                display: "block",
                marginBottom: "4px"
              }}
            >
              {active.fechas}
            </strong>
            <p
              style={{
                margin: 0,
                lineHeight: 1.4
              }}
            >
              {active.descripcion}
            </p>
          </div>
        )}
      </div>

      <p
        style={{
          maxWidth: "900px",
          margin: 0,
          fontSize: "0.95rem",
          lineHeight: 1.5,
          opacity: 0.8
        }}
      >
        Pasa el cursor sobre la pintura para descubrir el nombre y la
        historia de cada figura.
      </p>
    </section>
  );
}
