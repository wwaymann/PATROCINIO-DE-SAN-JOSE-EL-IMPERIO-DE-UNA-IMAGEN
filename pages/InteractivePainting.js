import React, {
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";

/* -------------------------------------------------------------
   VOZ PARA TOOLTIP
------------------------------------------------------------- */
function useTooltipVoice() {
  const synthRef = useRef(null);
  const voiceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const synth = window.speechSynthesis;
    synthRef.current = synth;

    const load = () => {
      const voices = synth.getVoices();
      const es = voices.find(v =>
        v.lang.toLowerCase().startsWith("es")
      );
      voiceRef.current = es || voices[0];
    };

    load();
    synth.onvoiceschanged = load;
  }, []);

  const speak = useCallback(text => {
    if (!text || !synthRef.current) return;
    synthRef.current.cancel();

    const u = new SpeechSynthesisUtterance(text);
    if (voiceRef.current) u.voice = voiceRef.current;
    u.rate = 1;
    synthRef.current.speak(u);
  }, []);

  const cancel = useCallback(() => {
    if (synthRef.current) synthRef.current.cancel();
  }, []);

  return { speak, cancel };
}

/* -------------------------------------------------------------
   PERSONAJES
------------------------------------------------------------- */

const PERSONAJES = [
  /* ---------------- PRIMER NIVEL ---------------- */
  {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "inscripción latina del cantar de los cantares: «me senté a la sombra del que tanto había deseado». alude al amparo de san josé.",
    src: "/capas/texto_primer nivel.png",
  },

  {
    id: "angeles_querubines_1",
    nombre: "ángeles y querubines inferiores",
    descripcion:
      "ángeles y querubines entre el nivel de santos y san josé, portando instrumentos y filacterias.",
    src: "/capas/querubines_primer_nivel.png",
  },

  {
    id: "ignacio",
    nombre: "san ignacio de loyola",
    fechas: "1491–1556",
    descripcion:
      "jesuita. hábito negro. porta el emblema ihs y un libro con reglas.",
    src: "/capas/ignacio_full.png",
  },

  {
    id: "antonio",
    nombre: "san antonio de padua",
    fechas: "1195–1231",
    descripcion: "franciscano. sostiene al niño jesús sobre un libro.",
    src: "/capas/antonio_full.png",
  },

  {
    id: "nicolas",
    nombre: "san nicolás de bari",
    fechas: "270–342",
    descripcion:
      "obispo. mitra, capa magna, báculo y tres esferas de caridad.",
    src: "/capas/nicolas_full.png",
  },

  {
    id: "agustin",
    nombre: "san agustín de hipona",
    fechas: "354–430",
    descripcion: "obispo. porta báculo, pluma y libro.",
    src: "/capas/agustin_full.png",
  },

  {
    id: "gregorio",
    nombre: "san gregorio magno",
    fechas: "†604",
    descripcion: "papa. tiara, cruz triple, libro y pluma.",
    src: "/capas/gregorio_full.png",
  },

  {
    id: "domingo",
    nombre: "santo domingo de guzmán",
    fechas: "1170–1221",
    descripcion:
      "dominico. hábito bicolor. rosario, lirios y libro.",
    src: "/capas/domingo_full.png",
  },

  {
    id: "francisco",
    nombre: "san francisco de asís",
    fechas: "1182–1226",
    descripcion: "hábito café. estigmas visibles. crucifijo.",
    src: "/capas/francisco_full1.png",
  },

  {
    id: "jeronimo",
    nombre: "san jerónimo",
    fechas: "347–420",
    descripcion:
      "cardenal. pluma, libro y un león a sus pies.",
    src: "/capas/jeronimo_full.png",
  },

  {
    id: "ambrosio",
    nombre: "san ambrosio de milán",
    fechas: "340–396",
    descripcion:
      "obispo. báculo, libro y pluma. doctor de la iglesia.",
    src: "/capas/ambrosio_full.png",
  },

  {
    id: "bernardo",
    nombre: "san bernardo de claraval",
    fechas: "1090–1153",
    descripcion:
      "cisterciense. mitra, pluma, libro y báculo.",
    src: "/capas/bernardo_full.png",
  },

  {
    id: "juan_de_dios",
    nombre: "san juan de dios",
    fechas: "1495–1550",
    descripcion:
      "hábito gris. porta crucifijo y una granada.",
    src: "/capas/juan_de_dios_full.png",
  },

  {
    id: "francisco_javier",
    nombre: "san francisco javier",
    fechas: "1506–1552",
    descripcion: "jesuita. lirio blanco y crucifijo.",
    src: "/capas/francisco_javier_full.png",
  },

  /* ---------------- SEGUNDO NIVEL ---------------- */
  {
    id: "angeles_manto_1",
    nombre: "ángeles portadores del manto",
    descripcion:
      "ángeles que sostienen el amplio manto protector de san josé.",
    src: "/capas/angeles_capa_full_01.png",
  },

  {
    id: "angeles_musicos_inferior",
    nombre: "ángeles músicos inferiores",
    descripcion:
      "ángeles con instrumentos barrocos animando el nivel intermedio.",
    src: "/capas/angeles_musicos_01.png",
  },

  {
    id: "angeles_musicos_superior",
    nombre: "ángeles músicos superiores",
    descripcion:
      "ángeles bajo la trinidad con instrumentos de viento y cuerdas.",
    src: "/capas/angeles_musicos_02.png",
  },

  {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae…",
    descripcion:
      "«lo hizo señor de su casa y príncipe de todas sus posesiones».",
    src: "/capas/texto_horizontal.png",
  },

  /* ---------------- SAN JOSÉ ---------------- */
  {
    id: "san_jose",
    nombre: "san josé",
    descripcion:
      "entronizado al centro, coronado y protector bajo un amplio manto.",
    src: "/capas/san_jose.png",
  },

  /* ---------------- TERCER NIVEL ---------------- */
  {
    id: "arcangel_gabriel",
    nombre: "arcángel gabriel",
    descripcion:
      "porta lirios y anillo. mensajero de la anunciación.",
    src: "/capas/gabriel_full.png",
  },

  {
    id: "arcangel_miguel",
    nombre: "arcángel miguel",
    descripcion:
      "espada flamígera y cruz. jefe de las milicias celestiales.",
    src: "/capas/miguel_full.png",
  },

  {
    id: "arcangel_rafael",
    nombre: "arcángel rafael",
    descripcion:
      "porta pez y báculo. protector de viajeros.",
    src: "/capas/rafael_full.png",
  },

  {
    id: "virgen_maria",
    nombre: "virgen maría",
    descripcion:
      "inmaculada, coronada, luna a sus pies, hábito carmelita.",
    src: "/capas/virgen_maria_full.png",
  },

  {
    id: "santa_ana",
    nombre: "santa ana",
    descripcion:
      "madre de la virgen. anciana en oración.",
    src: "/capas/santa_ana_full.png",
  },

  {
    id: "san_joaquin",
    nombre: "san joaquín",
    descripcion:
      "padre de la virgen. anciano en actitud orante.",
    src: "/capas/san_joaquin_full.png",
  },

  {
    id: "texto_banda_trinidad",
    nombre: "ite ad ioseph",
    descripcion:
      "«vayan a josé». lema devocional de protección e intercesión.",
    src: "/capas/texto_tercer_nivel.png",
  },

];

/* -------------------------------------------------------------
   COMPONENTE PRINCIPAL
------------------------------------------------------------- */
export default function InteractivePainting() {
  const { speak, cancel } = useTooltipVoice();

  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [zooming, setZooming] = useState(false);
  const [zoomPoint, setZoomPoint] = useState({ x: 0, y: 0 });

  const canvasRefs = useRef({});
  const imgRefs = useRef({});
  const containerRef = useRef(null);

  /* -------------------------------------------------------------
     CARGA DE PNG PARA DETECCIÓN
  ------------------------------------------------------------- */
  useEffect(() => {
    PERSONAJES.forEach(p => {
      const img = new Image();
      img.src = p.src;
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width;
        c.height = img.height;
        c.getContext("2d").drawImage(img, 0, 0);

        canvasRefs.current[p.id] = c;
        imgRefs.current[p.id] = img;
      };
    });
  }, []);

  /* -------------------------------------------------------------
     DETECCIÓN PIXEL PERFECT
  ------------------------------------------------------------- */
  const handleMove = e => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const baseW = 1080;
    const baseH = 927;

    const sx = baseW / rect.width;
    const sy = baseH / rect.height;

    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;

    const x = (cx - rect.left) * sx;
    const y = (cy - rect.top) * sy;

    setCursor({
      x: cx - rect.left,
      y: cy - rect.top,
    });

    let found = null;
    for (let i = PERSONAJES.length - 1; i >= 0; i--) {
      const p = PERSONAJES[i];
      const cvs = canvasRefs.current[p.id];
      if (!cvs) continue;

      const px = cvs
        .getContext("2d")
        .getImageData(Math.floor(x), Math.floor(y), 1, 1).data;

      if (px[3] > 10) {
        found = p;
        break;
      }
    }

    setActive(found);
  };

  const handleLeave = () => setActive(null);

  /* -------------------------------------------------------------
     ZOOM
  ------------------------------------------------------------- */
  const handleToggleZoom = e => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x =
      (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y =
      (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    if (!zooming) {
      setZoomPoint({ x, y });
      setZooming(true);
    } else {
      setZooming(false);
    }
  };

  /* -------------------------------------------------------------
     TOOLTIP POSITION
  ------------------------------------------------------------- */
  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  let tooltipPos = {};
  if (active && containerRef.current) {
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    const TW = 260;
    const TH = 150;
    const m = 20;

    const leftSide = cursor.x < w / 2;
    const topSide = cursor.y < h / 2;

    let L = leftSide ? cursor.x + m : cursor.x - TW - m;
    let T = topSide ? cursor.y + m : cursor.y - TH - m;

    tooltipPos = {
      left: clamp(L, 10, w - TW - 10),
      top: clamp(T, 10, h - TH - 10),
    };
  }

  /* -------------------------------------------------------------
     RENDER
  ------------------------------------------------------------- */
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
        {/* IMAGEN BASE */}
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
          <img
            src="/cuadro_base.jpg"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: active
                ? "grayscale(1) brightness(0.9)"
                : "none",
              transition: "filter 0.25s",
            }}
            alt=""
          />

          {/* PERSONAJE ILUMINADO */}
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
                  drop-shadow(0 0 8px rgba(255,210,120,0.55))
                  drop-shadow(0 0 14px rgba(255,210,120,0.35))
                  drop-shadow(0 4px 10px rgba(0,0,0,0.35))
                `,
                transition: "filter 0.2s, transform 0.2s",
              }}
              alt=""
            />
          )}
        </div>

        {/* TOOLTIP */}
        {active && (
          <div
            style={{
              position: "absolute",
              ...tooltipPos,
              background: "rgba(255,255,255,0.9)",
              padding: "10px 14px",
              borderRadius: "8px",
              maxWidth: "240px",
              pointerEvents: "none",
              boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
              zIndex: 40,
            }}
            onMouseEnter={() => speak(active.descripcion)}
            onMouseLeave={cancel}
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

            {active.fechas && (
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
            )}

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
