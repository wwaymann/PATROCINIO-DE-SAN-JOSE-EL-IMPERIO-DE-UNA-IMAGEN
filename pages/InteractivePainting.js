import { useState } from "react";

const personajesData = [
  {
    id: "ignacio",
    nombre: "San Ignacio de Loyola",
    fechas: "1491–1556",
    descripcion:
      "Fundador de la Compañía de Jesús, sostiene el emblema IHS y el libro de la regla.",
    src: "/capas/ignacio_full.png" // PNG del mismo tamaño que el fondo
  },
  {
    id: "antonio",
    nombre: "San Antonio de Padua",
    fechas: "1195–1231",
    descripcion:
      "Fraile franciscano, sostiene al Niño Jesús sobre un libro y un lirio blanco.",
    src: "/capas/antonio_full.png"
  },
  {
    id: "nicolas",
    nombre: "San Nicolás de Bari",
    fechas: "270–342",
    descripcion:
      "Obispo con capa magna, mitra, báculo y libro con tres esferas.",
    src: "/capas/nicolas_full.png"
  }
  // Agrega aquí el resto de los personajes, cada uno en su PNG full-size
];

export default function InteractivePainting({
  personajes = personajesData,
  baseImage = "/cuadro_base.jpg",
  maxWidth = 900,
  showTitle = "Personajes del Patrocinio de San José"
}) {
  const [active, setActive] = useState(null);

  return (
    <section
      style={{
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem"
      }}
    >
      {showTitle && (
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", margin: 0 }}>
          {showTitle}
        </h2>
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: `${maxWidth}px`,
          margin: "0 auto"
        }}
      >
        {/* FONDO */}
        <img
          src={baseImage}
          alt="Pintura Patrocinio de San José"
          style={{ width: "100%", display: "block" }}
        />

        {/* CAPAS FULL-SIZE SUPERPUESTAS */}
        {personajes.map((p, index) => (
          <button
            key={p.id}
            type="button"
            onMouseEnter={() => setActive(p)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p)}
            onBlur={() => setActive(null)}
            onTouchStart={() => setActive(p)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
              border: "none",
              padding: 0,
              background: "transparent",
              // para que la capa activa “se levante” visualmente
              transition: "transform 0.25s ease, filter 0.25s ease",
              transform:
                active?.id === p.id ? "translateY(-4px) scale(1.02)" : "none",
              filter:
                active?.id === p.id
                  ? "drop-shadow(0 0 8px rgba(0,0,0,0.7))"
                  : "none",
              zIndex: 10 + index
            }}
          >
            <img
              src={p.src}
              alt={p.nombre}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none" // para que el hover lo controle el botón, no la imagen
              }}
            />
          </button>
        ))}

        {/* TOOLTIP */}
        {active && (
          <div
            className="interactive-tooltip"
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              background: "rgba(0,0,0,0.85)",
              color: "white",
              padding: "14px 18px",
              borderRadius: "10px",
              maxWidth: "260px",
              fontSize: "0.9rem",
              zIndex: 999
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem" }}>
              {active.nombre}
            </h3>
            <strong style={{ display: "block", marginBottom: "6px" }}>
              {active.fechas}
            </strong>
            <p style={{ margin: 0, lineHeight: 1.4 }}>{active.descripcion}</p>
          </div>
        )}
      </div>

      <p
        style={{
          maxWidth: `${maxWidth}px`,
          textAlign: "center",
          fontSize: "0.95rem",
          lineHeight: 1.5
        }}
      >
        Pasa el cursor o toca sobre cada figura para ver su nombre, fechas y una
        breve descripción.
      </p>
    </section>
  );
}
