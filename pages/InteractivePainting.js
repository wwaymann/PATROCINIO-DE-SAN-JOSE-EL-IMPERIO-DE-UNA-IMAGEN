import { useEffect, useRef, useState } from "react";

export default function InteractivePainting() {
  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const [zooming, setZooming] = useState(false);
  const [zoomPoint, setZoomPoint] = useState({ x: 0, y: 0 });

  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  // -----------------------------------------------------------------------
  // PRIMERA FILA (12 figuras)
  // -----------------------------------------------------------------------
  const personajes = [
    {
      id: "ignacio",
      nombre: "san ignacio de loyola",
      fechas: "1491–1556",
      descripcion:
        "jesuita. hábito negro. porta el emblema ihs rodeado de rayos y el libro de reglas con la divisa 'ad majorem gloriam dei'.",
      src: "/capas/ignacio_full.png",
    },
    {
      id: "antonio",
      nombre: "san antonio de padua",
      fechas: "1195–1231",
      descripcion:
        "franciscano. sostiene al niño jesús sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png",
    },
    {
      id: "nicolas",
      nombre: "san nicolás de bari",
      fechas: "270–342",
      descripcion:
        "obispo. porta mitra, capa magna, báculo y un libro con tres esferas alusivas a su caridad.",
      src: "/capas/nicolas_full.png",
    },
    {
      id: "agustin",
      nombre: "san agustín de hipona",
      fechas: "354–430",
      descripcion:
        "obispo. porta báculo, pluma y libro. doctor de la iglesia.",
      src: "/capas/agustin_full.png",
    },
    {
      id: "gregorio",
      nombre: "san gregorio magno",
      fechas: "† 604",
      descripcion:
        "papa. porta tiara, cruz triple, pluma en la derecha y libro en la izquierda.",
      src: "/capas/gregorio_full.png",
    },
    {
      id: "domingo",
      nombre: "santo domingo de guzmán",
      fechas: "1170–1221",
      descripcion:
        "dominico. hábito bicolor. porta rosario, lirios blancos y un libro.",
      src: "/capas/domingo_full.png",
    },
    {
      id: "francisco",
      nombre: "san francisco de asís",
      fechas: "1182–1226",
      descripcion: "hábito café. estigmas visibles. porta un crucifijo.",
      src: "/capas/francisco_full1.png",
    },
    {
      id: "jeronimo",
      nombre: "san jerónimo",
      fechas: "347–420",
      descripcion:
        "cardenal. porta pluma y libro. león a sus pies como símbolo tradicional.",
      src: "/capas/jeronimo_full.png",
    },
    {
      id: "ambrosio",
      nombre: "san ambrosio de milán",
      fechas: "340–396",
      descripcion:
        "obispo. porta báculo, libro y pluma. doctor de la iglesia.",
      src: "/capas/ambrosio_full.png",
    },
    {
      id: "bernardo",
      nombre: "san bernardo de claraval",
      fechas: "1090–1153",
      descripcion:
        "cisterciense. manto blanco, mitra, pluma, libro y báculo abacial.",
      src: "/capas/bernardo_full.png",
    },
    {
      id: "juan_de_dios",
      nombre: "san juan de dios",
      fechas: "1495–1550",
      descripcion:
        "hábito gris. porta un crucifijo y una granada. fundador de la orden hospitalaria.",
      src: "/capas/juan_de_dios_full.png",
    },
    {
      id: "francisco_javier",
      nombre: "san francisco javier",
      fechas: "1506–1552",
      descripcion:
        "jesuita. porta un lirio blanco en la derecha y un crucifijo en la izquierda.",
      src: "/capas/francisco_javier_full.png",
    },

    // -----------------------------------------------------------------------
    // SEGUNDA FILA (10 figuras)
    // -----------------------------------------------------------------------
    {
      id: "buenaventura",
      nombre: "san buenaventura",
      fechas: "1218–1274",
      descripcion:
        "franciscano. porta un libro con una pequeña iglesia sobre él y un árbol en su mano izquierda.",
      src: "/capas/buenaventura_full.png",
    },
    {
      id: "monica",
      nombre: "santa mónica de hipona",
      fechas: "siglo IV",
      descripcion:
        "madre de san agustín. toca blanca y telas negras de viuda. sostiene un libro y un crucifijo.",
      src: "/capas/monica_full.png",
    },
    {
      id: "francisco_de_paula",
      nombre: "san francisco de paula",
      fechas: "1416–1507",
      descripcion:
        "fundador de los mínimos. hábito pardo. porta la divisa 'charitas' y un bastón.",
      src: "/capas/francisco_de_paula_full.png",
    },
    {
      id: "barbara",
      nombre: "santa bárbara",
      fechas: "siglo III",
      descripcion:
        "mártir. princesa con corona. palma del martirio y torre en llamas.",
      src: "/capas/barbara_full.png",
    },
    {
      id: "gertrudis",
      nombre: "santa gertrudis la magna",
      fechas: "1256–1302",
      descripcion: "agustina. corazón inflamado y báculo.",
      src: "/capas/gertrudis_full.png",
    },
    {
      id: "teresa",
      nombre: "santa teresa de ávila",
      fechas: "1515–1582",
      descripcion:
        "carmelita descalza. hábito marrón y capa blanca. porta una pluma y un libro.",
      src: "/capas/teresa_full.png",
    },
    {
      id: "apolonia",
      nombre: "santa apolonia de alejandría",
      fechas: "† 249",
      descripcion:
        "mártir. princesa con corona. palma del martirio y tenaza con diente.",
      src: "/capas/apolonia_full.png",
    },
    {
      id: "tomas",
      nombre: "santo tomás de aquino",
      fechas: "1225–1274",
      descripcion:
        "doctor angélico. túnica gris decorada. cáliz y lirio.",
      src: "/capas/tomas_full.png",
    },
    {
      id: "clara",
      nombre: "santa clara de asís",
      fechas: "1193–1243",
      descripcion: "porta custodia eucarística y báculo.",
      src: "/capas/clara_full.png",
    },
    {
      id: "duns_scoto",
      nombre: "san juan duns escoto",
      fechas: "1266–1308",
      descripcion:
        "franciscano y doctor sutil. muceta doctoral, solideo, libro y báculo.",
      src: "/capas/duns_scoto_full.png",
    },
  


 // -----------------------------------------------------------------------
    // SEGUNDO NIVEL Angeles
    // -----------------------------------------------------------------------
    {
      id: "angeles que sostienen la capa de san josé",
      nombre: "angeles de la capa",
     descripcion:
        "angeles que sostienen la capa de san josé.",
      src: "/capas/angeles_capa_full",

    },
  ];       
  
  // -----------------------------------------------------------------------
  // Cargar cada PNG en canvas para detección pixel-perfect
  // -----------------------------------------------------------------------
  useEffect(() => {
    personajes.forEach((p) => {
      const img = new Image();
      img.src = p.src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);

        canvasRefs.current[p.id] = canvas;
        imgRefs.current[p.id] = img;
      };
    });
  }, []);

  // -----------------------------------------------------------------------
  // Detección de personaje bajo el cursor
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
      y: clientY - rect.top,
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

  const handleLeave = () => {
    setActive(null);
  };

  // -----------------------------------------------------------------------
  // ZOOM — toggle por click (click → zoom, click → volver)
  // -----------------------------------------------------------------------
  const handleToggleZoom = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    if (!zooming) {
      setZoomPoint({ x, y });
      setZooming(true);
    } else {
      setZooming(false);
    }
  };

  // -----------------------------------------------------------------------
  // Tooltip — posición inteligente y fuera del zoom
  // -----------------------------------------------------------------------
  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  let tooltipPosition = {};
  if (active && containerRef.current) {
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    const TW = 260;
    const TH = 150;
    const margin = 20;

    const leftSide = cursor.x < w / 2;
    const topSide = cursor.y < h / 2;

    let left = leftSide ? cursor.x + margin : cursor.x - TW - margin;
    let top = topSide ? cursor.y + margin : cursor.y - TH - margin;

    left = clamp(left, 10, w - TW - 10);
    top = clamp(top, 10, h - TH - 10);

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
        alignItems: "center",
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "2rem",
          color: "#c40000",
          fontFamily: "Matona, serif",
          fontSize: "1.6rem",
          letterSpacing: "0.06em",
        }}
      >
        Patrocinio de san José Interactivo
      </h2>

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleToggleZoom}
        onTouchEnd={handleToggleZoom}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* WRAPPER QUE SE ESCALA — ZOOM */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformOrigin: `${zoomPoint.x}px ${zoomPoint.y}px`,
            transform: zooming ? "scale(1.6)" : "scale(1)",
            transition: "transform 0.35s ease-out",
          }}
        >
          {/* FONDO */}
          <img
            src="/cuadro_base.jpg"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: active ? "grayscale(1) brightness(0.9)" : "none",
              transition: "filter 0.25s ease-out",
            }}
            alt=""
          />

          {/* PERSONAJE RESALTADO */}
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
                filter: `
                  drop-shadow(0 0 8px rgba(255, 210, 120, 0.55))
                  drop-shadow(0 0 14px rgba(255, 210, 120, 0.35))
                  drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))
                `,
                transition: "transform 0.2s ease-out, filter 0.2s ease-out",
              }}
              alt=""
            />
          )}
        </div>

        {/* TOOLTIP — ahora fuera del zoom */}
        {active && (
          <div
            style={{
              position: "absolute",
              ...tooltipPosition,
              background: "rgba(255,255,255,0.90)",
              padding: "10px 14px",
              borderRadius: "8px",
              maxWidth: "240px",
              pointerEvents: "none",
              boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
              zIndex: 40,
              transform: "scale(1)", // aseguramos que no reciba zoom
            }}
          >
            <h3
              style={{
                margin: "0 0 4px",
                color: "#c40000",
                fontFamily: "Matona, serif",
                fontSize: "0.95rem",
              }}
            >
              {active.nombre}
            </h3>

            <div
              style={{
                fontSize: "0.88rem",
                fontWeight: "bold",
                marginBottom: "4px",
                fontFamily: "Garamond, serif",
              }}
            >
              {active.fechas}
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.86rem",
                lineHeight: 1.3,
                fontFamily: "Garamond, serif",
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
