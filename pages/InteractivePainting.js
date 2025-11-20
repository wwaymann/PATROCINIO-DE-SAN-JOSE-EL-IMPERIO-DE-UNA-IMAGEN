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
  // PRIMERA NIVEL, PRIMERA FILA
  // -----------------------------------------------------------------------
 const PERSONAJES = [
    {
    id: "texto_cartela_inferior",
    nombre: "sub umbra illius quam desideraveram sedi",
    descripcion:
      "Cantar de los Cantares 2:3 «Bajo la sombra del deseado me senté».",
    src: "/capas/texto_primer nivel.png",
    }, 
    {
    id: "angeles_querubines",
    nombre: "querubines",
    descripcion:
      "Representados como cabezas aladas.",
    src: "/capas/querubines_primer_nivel.png",
    },
    {
      id: "ignacio",
      nombre: "san ignacio de loyola",
      fechas: "1491–1556",
      descripcion:
        "Con hábito negro, porta el emblema IHS rodeado de rayos y el libro de reglas con la divisa 'Ad Majorem Gloriam Dei'.",
      src: "/capas/ignacio_full.png",
    },
    {
      id: "antonio",
      nombre: "san antonio de padua",
      fechas: "1195–1231",
      descripcion:
        "Con hábito café oscuro, sostiene al niño jesús sobre un libro y un lirio blanco.",
      src: "/capas/antonio_full.png",
    },
    {
      id: "nicolas",
      nombre: "san nicolás de bari",
      fechas: "270–342",
      descripcion:
        "Vestido de pontifical, porta mitra, capa magna, báculo y un libro con tres esferas.",
      src: "/capas/nicolas_full.png",
    },
    {
      id: "agustin",
      nombre: "san agustín de hipona",
      fechas: "354–430",
      descripcion:
        "Vestido de obispo, porta báculo, pluma y libro. Doctor de la iglesia.",
      src: "/capas/agustin_full.png",
    },
    {
      id: "gregorio",
      nombre: "san gregorio magno",
      fechas: "† 604",
      descripcion:
        "Papa. Vestido de pontifical con tiara papal, porta cruz triple, pluma en la derecha y libro en la izquierda.",
      src: "/capas/gregorio_full.png",
    },
    {
      id: "domingo",
      nombre: "santo domingo de guzmán",
      fechas: "1170–1221",
      descripcion:
        "Con hábito bicolor, túnica blanca y manteo negro, porta rosario, lirios blancos y un libro cerrado.",
      src: "/capas/domingo_full.png",
    },
    {
      id: "francisco",
      nombre: "san francisco de asís",
      fechas: "1182–1226",
      descripcion: "Con hábito café y estigmas visibles, porta un crucifijo.",
      src: "/capas/francisco_full1.png",
    },
    {
      id: "jeronimo",
      nombre: "san jerónimo",
      fechas: "347–420",
      descripcion:
        "Vestido como cardenal, porta pluma y libro. Con un león a sus pies.",
      src: "/capas/jeronimo_full.png",
    },
    {
      id: "ambrosio",
      nombre: "san ambrosio de milán",
      fechas: "340–396",
      descripcion:
        "Vestido de obispo, porta báculo, libro y pluma. Doctor de la iglesia.",
      src: "/capas/ambrosio_full.png",
    },
    {
      id: "bernardo",
      nombre: "san bernardo de claraval",
      fechas: "1090–1153",
      descripcion:
        "Con mitra y cogulla blanca de abad de la orden del Císter, porta pluma, libro y báculo.",
      src: "/capas/bernardo_full.png",
    },
    {
      id: "juan_de_dios",
      nombre: "san juan de dios",
      fechas: "1495–1550",
      descripcion:
        "Con hábito de sayal, porta un crucifijo y una granada.",
      src: "/capas/juan_de_dios_full.png",
    },
    {
      id: "francisco_javier",
      nombre: "san francisco javier",
      fechas: "1506–1552",
      descripcion:
        "Con hábito jesuita, porta lirio blanco y crucifijo.",
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
        "Con hábito franciscano, porta libro con pequeña iglesia sobre él y árbol.",
      src: "/capas/buenaventura_full.png",
    },
    {
      id: "monica",
      nombre: "santa mónica de hipona",
      fechas: "siglo IV",
      descripcion:
        "Con toca blanca y telas negras, sostiene un libro y un crucifijo.",
      src: "/capas/monica_full.png",
    },
    {
      id: "francisco_de_paula",
      nombre: "san francisco de paula",
      fechas: "1416–1507",
      descripcion:
        "Con hábito pardo, porta divisa 'charitas' y un bastón.",
      src: "/capas/francisco_de_paula_full.png",
    },
    {
      id: "barbara",
      nombre: "santa bárbara",
      fechas: "siglo III",
      descripcion:
        "Vestida como princesa con corona, porta palma de martirio y torre en llamas.",
      src: "/capas/barbara_full.png",
    },
    {
      id: "gertrudis",
      nombre: "santa gertrudis la magna",
      fechas: "1256–1302",
      descripcion: "Con hábito de agustina, porta corazón inflamado y báculo.",
      src: "/capas/gertrudis_full.png",
    },
    {
      id: "teresa",
      nombre: "santa teresa de ávila",
      fechas: "1515–1582",
      descripcion:
        "Con hábito marrón y capa blanca, porta una pluma y un libro.",
      src: "/capas/teresa_full.png",
    },
    {
      id: "apolonia",
      nombre: "santa apolonia de alejandría",
      fechas: "† 249",
      descripcion:
        "Vestida como princesa con corona, porta palma de martirio y tenaza con diente.",
      src: "/capas/apolonia_full.png",
    },
    {
      id: "tomas",
      nombre: "santo tomás de aquino",
      fechas: "1225–1274",
      descripcion:
        "Con túnica gris decorada, porta cáliz y lirio.",
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
        "Con hábito franciscano, muceta doctoral y solideo, porta libro y báculo.",
      src: "/capas/duns_scoto_full.png",
    },
    

    
    // -----------------------------------------------------------------------
    // SEGUNDO NIVEL
    // -----------------------------------------------------------------------
   
{
  id: "angeles mantos1",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_01.png"
},

    {
  id: "angeles mantos2",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_02.png"
},
    {
  id: "angeles mantos3",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_03.png"
},
    {
  id: "angeles mantos4",
  nombre: "ángel portador del manto",
  descripcion:
    "Sostiene el amplio manto que san José extiende sobre los santos bajo su patrocinio.",
  src: "/capas/angeles_capa_full_04.png"
},
    
 {
  id: "angeles_musicos_inferior",
  nombre: "ángeles músicos",
  descripcion:
    "Ángeles tocando instrumentos como órgano de tubos, trompeta natural, guitarra barroca, fagot, arpa y violín.",
  src: "/capas/angeles_musicos_01.png"
},
    {
  id: "angeles_musicos_superior",
  nombre: "ángeles músicos",
  descripcion:
    "Ángeles tocando instrumentos como órgano de tubos, trompeta natural, guitarra barroca, fagot, arpa y violín.",
  src: "/capas/angeles_musicos_02.png"
},
     {
    id: "angeles_querubines",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como niños alados y como pequeñas cabezas aladas.",
    src: "/capas/querubines.png"
 },
 {
    id: "san_jose",
  nombre: "san josé",
  descripcion:
    "Entronizado, coronado y con amplio manto sobre los santos bajo su protección. Sostiene rama de lirios blancos y anillo.",
  src: "/capas/san_jose.png"
},

   
   {
    id: "texto_filacteria_lateral",
    nombre: "annulo suo suvarravit me et decoravit me corona",
    descripcion:
      "Texto de antífona, que puede traducirse como: con su anillo me desposó y me adornó con una corona.",
    src: "/capas/texto_vertical.png"
},

     {
    id: "texto_filacteria_central",
    nombre: "constituit eum dominum domus suae et principem omnis possessionis suae",
    descripcion:
      "Cita del salmo 105:21, que dice: «Lo puso por señor de su casa, Y por gobernador de todas sus posesiones».",
    src: "/capas/texto_horizontal.png"
},

  

 // -------------------------------------------------------------
// TERCER NIVEL
// -------------------------------------------------------------


 {
    id: "arcangel_gabriel",
    nombre: "arcángel gabriel",
    descripcion:
      "Sostiene rama de lirios en mano derecha y anillo en izquierda.",
    src: "/capas/gabriel_full.png" // ajusta al nombre real de tu archivo
  },
  {
    id: "arcangel_miguel",
    nombre: "arcángel miguel",
    descripcion:
      "Porta espada flamígera en mano derecha y cruz en izquierda.",
    src: "/capas/miguel_full.png"
  },
  {
    id: "arcangel_rafael",
    nombre: "arcángel rafael",
    descripcion:
      "Sostiene pescado en mano derecha y báculo o vara en la izquierda.",
    src: "/capas/rafael_full.png"
  },
  {
    id: "angel_de_la_guarda",
    nombre: "ángel de la guarda",
    descripcion:
      "Porta corazón en mano derecha y guía a un niño con la izquierda.",
    src: "/capas/angel_guardia_full.png"
  },
  {
    id: "san_juan_bautista",
    nombre: "san juan bautista",
    descripcion:
      "Representado como asceta, con sayo de pelo de camello y capa roja. Sostiene un cayado rematado en cruz con la filacteria 'Ecce agnus dei' y un cordero sobre un libro.",
    src: "/capas/juan_bautista_full.png"
  },
  {
    id: "virgen_maria",
    nombre: "virgen maría",
    descripcion:
      "Representada como Inmaculada Concepción y virgen del Carmen: coronada, sentada sobre una nube, luna a sus pies, halo de doce estrellas, cetro en la mano derecha y anillo con filacteria en la izquierda. Viste hábito café y capa blanca carmelita con escapulario en el pecho.",
    src: "/capas/virgen_maria_full.png"
  },
  {
    id: "santa_ana",
    nombre: "santa ana",
    descripcion:
      "Madre de la virgen, de apariencia anciana, sentada sobre nube, manos juntas en oración y mirada dirigida hacia su hija.",
    src: "/capas/santa_ana_full.png"
  },
  {
    id: "san_joaquin",
    nombre: "san joaquín",
    descripcion:
      "Padre de la virgen, representado como anciano, sentado sobre nube, en actitud orante y mirando hacia la Trinidad.",
    src: "/capas/san_joaquin_full.png"
  },
  {
    id: "trinidad_padre",
    nombre: "dios padre",
    descripcion:
      "Figura central de la Trinidad antropomorfa. Entronizado, con capa pluvial, sosteniendo un cetro en la mano derecha y el mundo en la izquierda.",
    src: "/capas/trinidad_padre_full.png"
  },
  {
    id: "trinidad_hijo",
    nombre: "dios hijo",
    descripcion:
      "Sentado a la diestra del padre, con capa pluvial. Porta una cruz en la mano derecha y un cetro en la izquierda.",
    src: "/capas/trinidad_hijo_full.png"
  },
  {
    id: "trinidad_espiritu_santo",
    nombre: "espíritu santo",
    descripcion:
      "Representado antropomórficamente, con capa pluvial. Sostiene una vara de lirios blancos coronada por una paloma y un cetro en la mano derecha.",
    src: "/capas/trinidad_espiritu_full.png"
  },
  {
    id: "texto_banda_trinidad",
    nombre: "ite ad ioseph",
    descripcion:
      "Cita de Génesis 41:55, cuya traducción es «Id a José».",
    src: "/capas/texto_tercer_nivel.png"
},
 {
    id: "querubinesTrinidad",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como pequeñas cabezas aladas.",
    src: "/capas/querubinesTrinidad.png",
  },

   {
    id: "querubinesMaria",
    nombre: "querubines",
    descripcion:
      "Querubines, representados como pequeñas cabezas aladas.",
    src: "/capas/querubinesMaria.png"
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
