import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  // 🔹 12 SANTOS – PRIMERA FILA – DE IZQUIERDA A DERECHA
  const personajes = [
    {
      id: "ignacio",
      nombre: "San Ignacio de Loyola",
      fechas: "1491–1556",
      descripcion:
        "Jesuita. Hábito negro. Porta el emblema IHS rodeado de rayos y el libro de sus reglas con la divisa 'Ad Majorem Gloriam Dei'.",
      src: "/capas/ignacio_full.png"
    },
    {
      id: "antonio",
      nombre: "San Antonio de Padua",
      fechas: "1195–1231",
      descripcion:
        "Franciscano. Sostiene al Niño Jesús sentado sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png"
    },
    {
      id: "nicolas",
      nombre: "San Nicolás de Bari",
      fechas: "270–342",
      descripcion:
        "Obispo. Porta capa magna, mitra, báculo y un libro con tres esferas alusivas a su caridad.",
      src: "/capas/nicolas_full.png"
    },
    {
      id: "agustin",
      nombre: "San Agustín de Hipona",
      fechas: "354–430",
      descripcion:
        "Obispo y Doctor de la Iglesia. Porta báculo, pluma y un libro.",
      src: "/capas/agustin_full.png"
    },
    {
      id: "gregorio",
      nombre: "San Gregorio Magno",
      fechas: "† 604",
      descripcion:
        "Papa. Tiara pontificia, cruz triple, pluma en la mano derecha y libro en la izquierda.",
      src: "/capas/gregorio_full.png"
    },
    {
      id: "domingo",
      nombre: "Santo Domingo de Guzmán",
      fechas: "1170–1221",
      descripcion:
        "Dominico. Hábito blanco y negro. Porta rosario, rama de lirios blancos y un libro cerrado.",
      src: "/capas/domingo_full.png"
    },
    {
      id: "francisco",
      nombre: "San Francisco de Asís",
      fechas: "1182–1226",
      descripcion:
        "Fundador franciscano. Hábito café. Estigmas visibles. Porta un crucifijo.",
      src: "/capas/francisco_full.png"
    },
    {
      id: "jeronimo",
      nombre: "San Jerónimo",
      fechas: "347–420",
      descripcion:
        "Vestido como cardenal. Porta pluma y libro. León a sus pies como símbolo de su historia.",
      src: "/capas/jeronimo_full.png"
    },
    {
      id: "ambrosio",
      nombre: "San Ambrosio de Milán",
      fechas: "340–396",
      descripcion:
        "Obispo y Doctor de la Iglesia. Porta báculo, libro y pluma.",
      src: "/capas/ambrosio_full.png"
    },
    {
      id: "bernardo",
      nombre: "San Bernardo de Claraval",
      fechas: "1090–1153",
      descripcion:
        "Cisterciense. Manto blanco, mitra, pluma, libro y báculo abacial.",
      src: "/capas/bernardo_full.png"
    },
    {
      id: "juan_de_dios",
      nombre: "San Juan de Dios",
      fechas: "1495–1550",
      descripcion:
        "Fundador de la Orden Hospitalaria. Hábito gris oscuro. Porta un crucifijo y una granada.",
      src: "/capas/juan_de_dios_full.png"
    },
    {
      id: "francisco_javier",
      nombre: "San Francisco Javier",
      fechas: "1506–1552",
      descripcion:
        "Misionero jesuita. Porta un lirio en la derecha y un crucifijo en la izquierda.",
      src: "/capas/francisco_javier_full.png"
    }
  ];

  // 🔹 Cargar PNGs en canvas invisible
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

  // 🔹 Detección pixel-perfect + tracking del cursor
  const handleMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const baseImg = imgRefs.current[personajes[0].id];
    if (!baseImg) return;

    const x = ((clientX - rect.left) / rect.width) * baseImg.width;
    const y = ((clientY - rect.top) / rect.height) * baseImg.height;

    setCursor({
      x: clientX - rect.left,
      y: clientY - rect.top
    });

    let detected = null;

    // revisa capas desde la superior hacia la inferior
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

  // 🔹 validación para evitar que el popup se salga de los bordes
  const keepInside = (val, min, max) => Math.max(min, Math.min(val, max));

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
      <h2 style={{ margin: 0 }}>Primera Fila – Santos</h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          cursor: "pointer"
        }}
      >
        {/* Fondo */}
        <img
          src="/cuadro_base.jpg"
          style={{ width: "100%", display: "block" }}
        />

        {/* Capa activa */}
        {active && (
          <img
            src={active.src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              pointerEvents: "none",
              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.6))"
            }}
          />
        )}

        {/* Tooltip pegado al cursor */}
        {active && (
          <div
            style={{
              position: "absolute",
              top: keepInside(cursor.y + 25, 10, 880),
              left: keepInside(cursor.x + 25, 10, 860),
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
                fontSize: "0.98rem"
              }}
            >
              {active.nombre}
            </h3>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: "bold",
                marginBottom: "4px"
              }}
            >
              {active.fechas}
            </div>
            <p style={{ margin: 0, fontSize: "0.82rem", lineHeight: 1.3 }}>
              {active.descripcion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
