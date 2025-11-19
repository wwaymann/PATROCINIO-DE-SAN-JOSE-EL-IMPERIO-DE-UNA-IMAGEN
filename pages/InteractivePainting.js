import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  // 🔹 PERSONAJES (Primera fila, según tu descripción)
  const personajes = [
    {
      id: "ignacio",
      nombre: "San Ignacio de Loyola",
      fechas: "1491–1556",
      descripcion:
        "Fundador de la Compañía de Jesús. Viste hábito negro. Porta el emblema IHS rodeado de rayos y el libro de sus reglas con la divisa 'Ad Majorem Gloriam Dei'.",
      src: "/capas/ignacio_full.png"
    },
    {
      id: "antonio",
      nombre: "San Antonio de Padua",
      fechas: "1195–1231",
      descripcion:
        "Fraile franciscano y Doctor de la Iglesia. Porta al Niño Jesús sentado sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png"
    },
    {
      id: "nicolas",
      nombre: "San Nicolás de Bari",
      fechas: "270–342",
      descripcion:
        "Obispo de Mira, representado con capa magna y mitra. Porta báculo y un libro con tres esferas, alusivas a las bolsas de oro de su caridad.",
      src: "/capas/nicolas_full.png"
    }
  ];

  // 🔹 Cargar cada capa en un canvas invisible para detección pixel-perfect
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

  // 🔹 Detección precisa por pixel y profundidad
  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const baseId = personajes[0].id;
    const baseImg = imgRefs.current[baseId];
    if (!baseImg) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    setCursor({ x: clientX - rect.left, y: clientY - rect.top });

    const x = ((clientX - rect.left) / rect.width) * baseImg.width;
    const y = ((clientY - rect.top) / rect.height) * baseImg.height;

    let detected = null;

    // Capas de arriba hacia abajo
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
        break;
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
      <h2 style={{ fontSize: "1.5rem", margin: 0 }}>
        Personajes – Primera Fila
      </h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          cursor: "pointer"
        }}
      >
        {/* 🔹 FONDO */}
        <img
          src="/cuadro_base.jpg"
          alt="Pintura completa"
          style={{ width: "100%", display: "block" }}
        />

        {/* 🔹 Capa resaltada */}
        {active && (
          <img
            src={active.src}
            alt={active.nombre}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              pointerEvents: "none",
              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.7))",
              transition: "0.15s ease"
            }}
          />
        )}

        {/* 🔹 POPUP pegado al puntero */}
        {active && (
          <div
            style={{
              position: "absolute",
              top: cursor.y + 20,
              left: cursor.x + 20,
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(4px)",
              borderRadius: "10px",
              padding: "12px 18px",
              maxWidth: "260px",
              pointerEvents: "none",
              color: "#000",
              boxShadow: "0 2px 10px rgba(0,0,0,0.25)"
            }}
          >
            <h3
              style={{
                margin: "0 0 4px",
                color: "#c40000",
                fontFamily: "Matona, serif",
                fontSize: "1.1rem"
              }}
            >
              {active.nombre}
            </h3>
            <strong style={{ display: "block", marginBottom: "4px" }}>
              {active.fechas}
            </strong>
            <p style={{ margin: 0, lineHeight: 1.4 }}>{active.descripcion}</p>
          </div>
        )}
      </div>

      <p style={{ maxWidth: "900px", margin: 0, opacity: 0.8 }}>
        Mueve el cursor o toca la pintura para revelar la información.
      </p>
    </section>
  );
}
