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

// -----------------------------------------------------------------------
// PERSONAJES TEMPORALES (REDUCIDOS)
// -----------------------------------------------------------------------
const PERSONAJES = [
  {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "inscripción latina del cantar de los cantares, 'me senté a la sombra del que tanto había deseado'.",
    src: "/capas/texto_primer nivel.png",
  },
];

/* -------------------------------------------------------------
   COMPONENTE PRINCIPAL
------------------------------------------------------------- */
export default function InteractivePainting() {
  const { speak, cancel } = useTooltipVoice();

  const [mute, setMute] = useState(false);  // 🔊 botón de sonido

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
     DETECCIÓN PIXEL PERFECT + SONIDO
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

    // 🔊 voz solamente si no está muteado
    if (!mute && found && found !== active) {
      speak(found.descripcion);
    }

    // 🔇 cortar voz al salir
    if ((!found && active) || mute) {
      cancel();
    }

    setActive(found);
  };

  const handleLeave = () => {
    cancel();
    setActive(null);
  };

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
        patrocinio de san josé interactivo
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

        {/* 🔊 BOTÓN DE SONIDO */}
        <button
          onClick={() => {
            setMute(!mute);
            cancel();
          }}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            background: "rgba(255,255,255,0.35)",
            border: "1px solid rgba(255,255,255,0.6)",
            backdropFilter: "blur(6px)",
            padding: "8px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 999,
            fontSize: "1.2rem"
          }}
        >
          {mute ? "🔇" : "🔊"}
        </button>

      </div>
    </section>
  );
}
