import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  // -----------------------------------------------------------------------
  // PRIMERA FILA – 12 santos – izquierda → derecha (nombres en minúscula)
  // -----------------------------------------------------------------------
  const personajes = [
    {
      id: "ignacio",
      nombre: "san ignacio de loyola",
      fechas: "1491–1556",
      descripcion:
        "Jesuita. Hábito negro. Porta el emblema IHS rodeado de rayos y el libro de reglas con la divisa 'Ad Majorem Gloriam Dei'.",
      src: "/capas/ignacio_full.png"
    },
    {
      id: "antonio",
      nombre: "san antonio de padua",
      fechas: "1195–1231",
      descripcion:
        "Franciscano. Sostiene al Niño Jesús sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png"
    },
    {
      id: "nicolas",
      nombre: "san nicolás de bari",
      fechas: "270–342",
      descripcion:
        "Obispo. Porta mitra, capa magna, báculo y un libro con tres esferas alusivas a su caridad.",
      src: "/capas/nicolas_full.png"
    },
    {
      id: "agustin",
      nombre: "san agustín de hipona",
      fechas: "354–430",
      descripcion:
        "Obispo. Porta báculo, pluma y libro. Doctor de la Iglesia.",
      src: "/capas/agustin_full.png"
    },
    {
      id: "gregorio",
      nombre: "san gregorio magno",
      fechas: "† 604",
      descripcion:
        "Papa. Porta tiara, cruz triple, pluma en la derecha y libro en la izquierda.",
      src: "/capas/gregorio_full.png"
    },
    {
      id: "domingo",
      nombre: "santo domingo de guzmán",
      fechas: "1170–1221",
      descripcion:
        "Dominico. Hábito bicolor. Porta rosario, lirios blancos y un libro.",
      src: "/capas/domingo_full.png"
    },
    {
      id: "francisco",
      nombre: "san francisco de asís",
      fechas: "1182–1226",
      descripcion:
        "Hábito café. Estigmas visibles. Porta un crucifijo.",
      // Ojo con el nombre del archivo: ajústalo si en el servidor se llama distinto.
      src: "/capas/francisco_full1.png"
    },
    {
      id: "jeronimo",
      nombre: "san jerónimo",
      fechas: "347–420",
      descripcion:
        "Cardenal. Porta pluma y libro. León a sus pies como símbolo tradicional.",
      src: "/capas/jeronimo_full.png"
    },
    {
      id: "ambrosio",
      nombre: "san ambrosio de milán",
      fechas: "340–396",
      descripcion:
        "Obispo. Porta báculo, libro y pluma. Doctor de la Iglesia.",
      src: "/capas/ambrosio_full.png"
    },
    {
      id: "bernardo",
      nombre: "san bernardo de claraval",
      fechas: "1090–1153",
      descripcion:
        "Cisterciense. Manto blanco, mitra, pluma, libro y báculo abacial.",
      src: "/capas/bernardo_full.png"
    },
    {
      id: "juan_de_dios",
      nombre: "san juan de dios",
      fechas: "1495–1550",
      descripcion:
        "Hábito gris. Porta un crucifijo y una granada. Fundador de la Orden Hospitalaria.",
      src: "/capas/juan_de_dios_full.png"
    },
    {
      id: "francisco_javier",
      nombre: "san francisco javier",
      fechas: "1506–1552",
      descripcion:
        "Jesuita. Porta un lirio blanco en la derecha y un crucifijo en la izquierda.",
      src: "/capas/francisco_javier_full.png"
    }
  ];

  // -----------------------------------------------------------------------
  // CARGA DE PNG EN CANVAS
  // -----------------------------------------------------------------------
  useEffect(() => {
    personajes.forEach((p) => {
      const img = new Image();
      img.src = p.src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;   // debe ser 1080
        canvas.height = img.height; // debe ser 927

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);

        canvasRefs.current[p.id] = canvas;
        imgRefs.current[p.id] = img;
      };
    });
  }, []);

  // -----------------------------------------------------------------------
  // DETECCIÓN PIXEL PERFECT
  // -----------------------------------------------------------------------
  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const baseWidth = 1080;
    const baseHeight = 927;

    const scaleX = baseWidth / rect.width;
    const scaleY = baseHeight / rect.height;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    setCursor({
      x: clientX - rect.left,
      y: clientY - rect.top
    });

    let detected = null;

    for (let i = personajes.length - 1; i >= 0; i--) {
      const p = personajes[i];
      const canvas = canvasRefs.current[p.id];
      if (!canvas) continue;

      const ctx = canvas.getContext("2d");
      const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;

      if (pixel[3] > 10) {
        detected = p;
        break;
      }
    }

    setActive(detected);
  };

  const handleLeave = () => setActive(null);

  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  // -----------------------------------------------------------------------
  // CÁLCULO DE POSICIÓN DEL TOOLTIP (para no tapar al santo)
  // -----------------------------------------------------------------------
  let tooltipPosition = {};
  if (active && containerRef.current) {
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    const margin = 20;
    const tooltipW = 260; // estimado
    const tooltipH = 140; // estimado

    const isLeft = cursor.x < w / 2;
    const isTop = cursor.y < h / 2;

    // Si el cursor está a la izquierda, ponemos el tooltip a la derecha, y viceversa.
    let left = isLeft
      ? cursor.x + margin
      : cursor.x - margin - tooltipW;

    // Si el cursor está arriba, el tooltip va abajo, y viceversa.
    let top = isTop
      ? cursor.y + margin
      : cursor.y - margin - tooltipH;

    left = clamp(left, 10, w - tooltipW - 10);
    top = clamp(top, 10, h - tooltipH - 10);

    tooltipPosition = { left, top };
  }

  // -----------------------------------------------------------------------
  // RENDER
  // -----------------------------------------------------------------------
  return (
    <section
      style={{
        padding: "2rem 1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>primera fila – santos</h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          overflow: "visible",
          cursor: "pointer"
        }}
      >
        {/* FONDO: se pone blanco y negro con personaje activo */}
        <img
          src="/cuadro_base.jpg"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: active ? "grayscale(1) brightness(0.9)" : "none",
            transition: "filter 0.25s ease-out"
          }}
          alt=""
        />

        {/* CAPA RESALTADA CON GLOW DORADO SUAVE Y DESPLAZAMIENTO MÍNIMO */}
        {active && (
          <img
            src={active.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              pointerEvents: "none",
              transform: "translateY(-3px) scale(1.01)",
              transformOrigin: "center",
              transition: "transform 0.2s ease-out, filter 0.2s ease-out",
              filter: `
                drop-shadow(0 0 8px rgba(255, 210, 120, 0.55))
                drop-shadow(0 0 14px rgba(255, 210, 120, 0.35))
                drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))
              `
            }}
            alt=""
          />
        )}

        {/* TOOLTIP – reposicionado para no tapar al santo */}
        {active && containerRef.current && (
          <div
            style={{
              position: "absolute",
              ...tooltipPosition,
              background: "rgba(255,255,255,0.90)",
              padding: "10px 14px",
              borderRadius: "8px",
              maxWidth: "240px",
              pointerEvents: "none",
              boxShadow: "0 3px 10px rgba(0,0,0,0.25)"
            }}
          >
            <h3
              style={{
                margin: "0 0 4px",
                color: "#c40000",
                fontFamily: "Matona, serif",
                fontSize: "0.95rem",
                textTransform: "none"
              }}
            >
              {active.nombre}
            </h3>

            <div
              style={{
                fontSize: "0.88rem",
                fontWeight: "bold",
                marginBottom: "4px",
                fontFamily: "Garamond, 'Times New Roman', serif"
              }}
            >
              {active.fechas}
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.86rem",
                lineHeight: 1.3,
                fontFamily: "Garamond, 'Times New Roman', serif"
              }}
            >
              {active.descripcion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
