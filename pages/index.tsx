import Head from 'next/head'
import { useEffect } from 'react'

const CONFIG = {
  DATE: '22 Noviembre',
  TIME: '19:00 hrs',
  VENUE: 'Museo Nacional de Bellas Artes',
  ADDRESS: 'José Miguel de la Barra 650, Santiago',
  CITY: 'Santiago, Chile',
  MAP_URL: 'https://maps.app.goo.gl/XEuH5wU11vUN1NhCA',
  TICKETS_URL: '#',
  IOS_URL: '#',
  ANDROID_URL: '#',
  // ya no usamos form propio, pero dejo la clave por si vuelves a usar /api/registro o un servicio externo
  FORM_ENDPOINT: ''
}

export default function Home() {
  // Tema claro/oscuro
  useEffect(() => {
    const root = document.documentElement
    if (!root.getAttribute('data-theme')) {
      root.setAttribute('data-theme', 'light')
    }
    const saved = typeof window !== 'undefined' ? localStorage.getItem('psj_theme') : null
    if (saved) root.setAttribute('data-theme', saved)

    const btn = document.getElementById('themeToggle')
    const onClick = () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
      root.setAttribute('data-theme', current)
      localStorage.setItem('psj_theme', current)
    }
    if (btn) btn.addEventListener('click', onClick)
    return () => {
      if (btn) btn.removeEventListener('click', onClick)
    }
  }, [])

  const handleAddCalendar = () => {
    const title = 'Lanzamiento — Patrocinio de San José'
    const desc = 'Presentación del libro: Patrocinio de San José — El imperio de una imagen'
    const dt = new Date()
    const dtStart = dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const dtEnd = new Date(dt.getTime() + 2 * 60 * 60 * 1000)
      .toISOString()
      .replace(/[-:]/g, '')
      .split('.')[0] + 'Z'

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:${CONFIG.VENUE}, ${CONFIG.ADDRESS}, ${CONFIG.CITY}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lanzamiento-san-jose.ics'
    a.click()
    URL.revokeObjectURL(url)
  }

  const year = new Date().getFullYear()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Patrocinio de San José — El imperio de una imagen</title>
        <meta
          name="description"
          content="Lanzamiento libro Patrocinio de San José — El imperio de una imagen. Reseña, fecha y lugar, formulario de registro y descargas del eBook."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://db.onlinewebfonts.com/c/3e50ef03ad2b5b310b83f47172d6dcd2?family=Matona"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ESTILOS GLOBALES */}
      <style jsx global>{`
        :root {
          --bg: #ffffff;
          --text: #19110e;
          --muted: #403533;
          --accent: #e04310;
          --orange: #e04310;
          --terracotta: #b96b3a;
          --burnt: #742f12;
          --rust: #af4a1d;
          --card-1: #f9f4ef;
          --card-2: #fdfaf7;
          --ring: rgba(224, 67, 16, 0.35);
        }
        :root[data-theme='light'] {
          --bg: #ffffff;
          --text: #19110e;
          --muted: #403533;
          --accent: #e04310;
          --orange: #e04310;
          --terracotta: #b96b3a;
          --burnt: #742f12;
          --rust: #af4a1d;
          --card-1: #f9f4ef;
          --card-2: #fdfaf7;
          --ring: rgba(224, 67, 16, 0.35);
        }

        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: 'Crimson Text', serif;
        }
        a {
          color: var(--accent);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: linear-gradient(
            180deg,
            color-mix(in oklab, var(--bg), transparent 10%),
            color-mix(in oklab, var(--bg), transparent 30%)
          );
          backdrop-filter: saturate(140%) blur(8px);
          border-bottom: 1px solid var(--ring);
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-logo {
          width: 36px;
          height: 36px;
          border: 2px solid var(--accent);
          border-radius: 12px;
        }
        .brand-title {
          font-family: 'Matona', 'Cinzel', serif;
          letter-spacing: 0.06em;
          font-weight: 500;
          color: var(--accent);
        }
        .cta-top {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .btn {
          appearance: none;
          border: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .btn-primary {
          background: var(--accent);
          color: #1b1615;
        }
        .btn-ghost {
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
        }
        .toggle {
          border: 1px solid var(--ring);
          background: transparent;
          color: var(--text);
          border-radius: 999px;
          padding: 8px 12px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
          padding: 64px 0 40px;
          border-bottom: 1px solid var(--ring);
        }
        .kicker {
          color: var(--orange);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
           h1{font-family:"Matona","Cinzel", serif;font-size:clamp(38px,6.5vw,72px);line-height:1.02;margin:10px 0;color:var(--accent);text-transform:uppercase;letter-spacing:.18em;}

        h1 span {
          display: block;
          margin-top: 18px;
          font-family: 'Crimson Text', serif;
          font-style: italic;
          font-size: 0.58em;
          letter-spacing: 0.02em;
          color: var(--text);
          text-transform: none;
        }
        .subtitle {
          font-size: clamp(18px, 3vw, 22px);
          opacity: 0.9;
        }
        .hero-author {
          margin-top: 18px;
          font-family: 'Crimson Text', serif;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 18px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 14px;
          background: var(--card-2);
          border: 1px solid var(--ring);
        }
        .badge img {
          height: 48px;
          display: block;
        }
        .hero-media {
          position: relative;
        }
        .hero::before {
          content: '';
          position: absolute;
          left: -32px;
          top: 12%;
          bottom: 18%;
          width: 6px;
          background: var(--accent);
        }
        .hero::after {
          content: '';
          position: absolute;
          left: 10%;
          right: 38%;
          top: 10%;
          height: 3px;
          background: var(--accent);
        }
        .frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--ring);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
        }
        .frame::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 2px color-mix(in oklab, var(--accent), transparent 80%);
        }
        .hero-img {
          display: block;
          width: 100%;
          height: auto;
        }

        .event-bar {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
          background: linear-gradient(
            90deg,
            color-mix(in oklab, var(--accent), transparent 85%),
            transparent
          );
          border: 1px solid var(--ring);
          border-radius: 14px;
          padding: 12px 16px;
          margin-top: 14px;
        }
        .event-pill {
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--card-1);
          border: 1px solid var(--ring);
          font-weight: 600;
        }

        .section {
          padding: 60px 0;
        }
        .section h2 {
          font-family: 'Matona', 'Cinzel', serif;
          color: var(--accent);
          font-size: clamp(28px, 4vw, 40px);
          margin: 0 0 10px;
        }
        .lede {
          font-size: 22px;
          opacity: 0.95;
        }
        .grid {
          display: grid;
          gap: 26px;
        }
        .grid.cols-2 {
          grid-template-columns: 1fr 1fr;
        }
        .card {
          background: linear-gradient(180deg, var(--card-1), var(--card-2));
          border: 1px solid var(--ring);
          border-radius: 16px;
          padding: 22px;
        }

        .download {
          display: grid;
          gap: 18px;
        }
        .download a {
          display: block;
        }
        .download .note {
          opacity: 0.8;
        }

        .palette {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .swatch {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        footer {
          padding: 36px 0;
          border-top: 1px solid var(--ring);
          opacity: 0.9;
        }

        @media (max-width: 920px) {
          .hero {
            grid-template-columns: 1fr;
          }
          /* ← NUEVO: todas las secciones con .grid cols-2 pasan a 1 columna en móvil */
          .grid.cols-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <div className="container nav">
          <div className="brand">
            <div className="brand-logo" aria-hidden="true" />
            <div className="brand-title">Patrocinio de San José</div>
          </div>
          <div className="cta-top">
            <button
              id="themeToggle"
              className="toggle"
              type="button"
              title="Cambiar tema"
            >
              Tema claro/oscuro
            </button>
            <a href="#descargas" className="btn btn-ghost">
              Descargas
            </a>
            <a href="#resena" className="btn btn-primary">
              Leer reseña
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero" aria-label="Presentación">
          <div>
            <div class="kicker">Lanzamiento libro</div>

            <h1>
              Patrocinio de San José
              <br />
              <span>El imperio de una imagen</span>
            </h1>
            <p className="hero-author">Autora: Natalia Portugueis Coronel</p>

            <div className="event-bar" aria-live="polite">
              {[
                ['📅', CONFIG.DATE],
                ['⏰', CONFIG.TIME],
                ['📍', CONFIG.VENUE],
                ['🗺️', CONFIG.CITY]
              ].map(([icon, text]) => (
                <span key={icon} className="event-pill">
                  <span>{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            <div className="hero-cta">
              <a
                className="badge"
                href="#descargas"
                title="Descargar eBook para iOS"
              >
                <img alt="Descargar eBook iOS" src="/ebook_ios_banner.png" />
              </a>
              <a
                className="badge"
                href="#descargas"
                title="Descargar eBook para Android"
              >
                <img alt="Descargar eBook Android" src="/ebook_android_banner.png" />
              </a>
            </div>
          </div>
          <div className="hero-media">
            <figure className="frame">
              <img
                className="hero-img"
                alt="Composición visual del libro"
                src="/hero_patrocinio.jpg"
              />
            </figure>
          </div>
        </section>

        {/* RESEÑA */}
        <section id="resena" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Reseña</h2>
              <p className="lede">
                Este libro propone una lectura crítica y a la vez sensible de la imagen de San José
                como figura tutelar y política. A partir de pinturas, grabados, estampas y
                documentos, se indaga cómo su iconografía se convirtió en un verdadero “imperio de
                la imagen”, articulando devoción doméstica, encargos institucionales y narrativas
                públicas.
              </p>
              <p>
                La edición combina investigación histórica con un ensayo visual cuidadosamente
                curado. Las obras dialogan con textos claros y amenos que acercan al lector a los
                contextos de producción, circulación y recepción de estas imágenes: desde talleres
                andinos hasta imprentas europeas, del santuario local a las celebraciones
                multitudinarias.
              </p>
              <p>
                Una invitación a mirar con atención los símbolos, los gestos y las materialidades
                que han dado forma al patrocinio de San José a lo largo de los siglos.
              </p>
            </div>
            <aside className="card">
              <h3
                style={{
                  fontFamily: 'Matona, Cinzel, serif',
                  margin: '0 0 8px',
                  color: 'var(--accent)'
                }}
              >
                Detalles de la edición
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                <li>Formato: tapa blanda y eBook</li>
                <li>Idioma: español</li>
                <li>Imágenes restauradas y comentadas</li>
                <li>Diseño editorial con paleta inspirada en terracotas, oros y negros</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ACERCA DE LA AUTORA */}
        <section id="autora" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Acerca de la autora</h2>
              <p className="lede">
                Natalia Portugueis Coronel investiga la relación entre arte, devoción y espacio
                público en el mundo hispano. Su trabajo se ha centrado en las imágenes de culto,
                los relatos que las rodean y las formas en que comunidades diversas las han
                resignificado a lo largo del tiempo.
              </p>
              <p>
                En <em>Patrocinio de San José — El imperio de una imagen</em>, articula años de
                investigación en archivos, museos y colecciones privadas, proponiendo una lectura
                accesible pero rigurosa de la iconografía josefina. El libro combina la precisión
                histórica con una mirada muy cercana a la experiencia contemporánea de mirar y
                habitar estas imágenes.
              </p>
            </div>
            <aside className="card">
              <h3
                style={{
                  fontFamily: 'Matona, Cinzel, serif',
                  margin: '0 0 8px',
                  color: 'var(--accent)'
                }}
              >
                Líneas de trabajo
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                <li>Historia del arte y cultura visual</li>
                <li>Imágenes devocionales y política de la memoria</li>
                <li>Relaciones entre iconografía, espacio urbano y comunidad</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* REGISTRO CON GOOGLE FORM */}
        <section id="registro" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Registro al lanzamiento</h2>
              <p className="lede">
                Completa el formulario para confirmar tu asistencia y recibir información del
                lanzamiento.
              </p>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSchxaUg9AjWHibY7OniBQ5eQugSJNRz6Y1fm6sJWUUjzjyYig/viewform?embedded=true"
                  width="100%"
                  height={800}
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                >
                  Cargando…
                </iframe>
              </div>

              <div className="actions" style={{ marginTop: 16 }}>
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={handleAddCalendar}
                >
                  Añadir al calendario
                </button>
              </div>

              <p className="hint">Cupos limitados.</p>
            </div>

            <aside className="card">
              <h3
                style={{
                  fontFamily: 'Matona, Cinzel, serif',
                  margin: '0 0 8px',
                  color: 'var(--accent)'
                }}
              >
                ¿Dónde será?
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                <li>
                  <strong>Fecha:</strong> {CONFIG.DATE}
                </li>
                <li>
                  <strong>Hora:</strong> {CONFIG.TIME}
                </li>
                <li>
                  <strong>Lugar:</strong> {CONFIG.VENUE}
                </li>
                <li>
                  <strong>Dirección:</strong> {CONFIG.ADDRESS}
                </li>
                <li>
                  <strong>Ciudad:</strong> {CONFIG.CITY}
                </li>
              </ul>
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  flexWrap: 'wrap',
                  marginTop: 10
                }}
              >
                <a
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener"
                  href={CONFIG.MAP_URL}
                >
                  Ver mapa
                </a>
                <a
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener"
                  href={CONFIG.TICKETS_URL}
                >
                  Más información
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <small>
            &copy; <span>{year}</span> Patrocinio de San José — El imperio de una imagen.
          </small>
          <small>
            Diseño web inspirado en la estética del libro. Paleta: dorados, terracotas y negro.
          </small>
        </div>
      </footer>
    </>
  )
}
