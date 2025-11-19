import { useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);

  const personajes = [
    {
      id: "ignacio",
      nombre: "San Ignacio de Loyola",
      fechas: "1491–1556",
      descripcion: "Fundador de la Compañía de Jesús.",
      src: "/capas/ignacio.png",
      style: { top: "18%", left: "22%", width: "9%" }
    },
    {
      id: "antonio",
      nombre: "San Antonio de Padua",
      fechas: "1195–1231",
      descripcion: "Fraile franciscano y predicador.",
      src: "/capas/antonio.png",
      style: { top: "20%", left: "40%", width: "9%" }
    },
    {
      id: "nicolas",
      nombre: "San Nicolás de Bari",
      fechas: "270–342",
      descripcion: "Obispo y figura de generosidad cristiana.",
      src: "/capas/nicolas.png",
      style: { top: "22%", left: "58%", width: "9%" }
    }
    // Agrega aquí el resto de tus personajes…
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* IMAGEN BASE */}
      <img
        src="/cuadro_base.jpg"
        alt="Pintura base"
        style={{ width: "100%", display: "block" }}
      />

      {/* CAPAS INTERACTIVAS */}
      {personajes.map((p) => (
        <div
          key={p.id}
          onMouseEnter={() => setActive(p)}
          onMouseLeave={() => setActive(null)}
          onTouchStart={() => setActive(p)}
          style={{
            position: "absolute",
            cursor: "pointer",
            transition: "transform 0.25s ease",
            transform: active?.id === p.id ? "translateY(-8px) scale(1.05)" : "none",
            ...p.style
          }}
        >
          <img src={p.src} alt={p.nombre} style={{ width: "100%", pointerEvents: "none" }} />
        </div>
      ))}

      {/* TOOLTIP / TARJETA */}
      {active && (
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "15px 20px",
            borderRadius: "8px",
            maxWidth: "260px",
            animation: "fadeIn 0.3s ease"
          }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>{active.nombre}</h3>
          <strong style={{ display: "block", marginBottom: "6px" }}>{active.fechas}</strong>
          <p style={{ margin: 0 }}>{active.descripcion}</p>
        </div>
      )}
    </div>
  );
}
