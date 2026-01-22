import Head from 'next/head'
import { useEffect } from 'react'

const CONFIG = {
  DATE: '20 Noviembre.',
  TIME: '17:00 h.',
  VENUE: 'Museo Nacional de Bellas Artes.',
  ADDRESS: 'José Miguel de la Barra 650.',
  CITY: 'Santiago, Chile.',
  MAP_URL: 'https://maps.app.goo.gl/XEuH5wU11vUN1NhCA',
  TICKETS_URL: '#',
  IOS_URL: '#',
  ANDROID_URL: '#',
  FORM_ENDPOINT: ''
}

export default function Home() {
  // Tema claro/oscuro (aunque ahora no hay botón, lo dejo preparado)
  useEffect(() => {
    const root = document.documentElement
    if (!root.getAttribute('data-theme')) {
      root.setAttribute('data-theme', 'light')
    }
    const saved =
      typeof window !== 'undefined' ? localStorage.getItem('psj_theme') : null
    if (saved) root.setAttribute('data-theme', saved)

    const btn = document.getElementById('themeToggle')
    const onClick = () => {
      const current =
        root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
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
    const desc =
      ' del libro: Patrocinio de San José — El imperio de una imagen'
    const dt = new Date()
    const dtStart = dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const dtEnd =
      new Date(dt.getTime() + 2 * 60 * 60 * 1000)
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
          content="Lanzamiento libro Patrocinio de San José — El imperio de una imagen. , reseña, fecha y lugar, registro y descargas del eBook."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://db.onlinewebfonts.com/c/3e50ef03ad2b5b310b83f47172d6dcd2?family=Matona"
          rel="stylesheet"
        />
        {/* EB Garamond para texto, como en la maqueta */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

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
          font-family: 'EB Garamond', serif;
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
        h1 {
          font-family: 'Matona', 'Cinzel', serif;
          font-size: clamp(38px, 6.5vw, 72px);
          line-height: 1.02;
          margin: 10px 0;
          color: var(--accent);
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0.08em;
        }
        h1 span {
          display: block;
          margin-top: 18px;
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.58em;
          letter-spacing: 0.02em;
          color: var(--text);
          text-transform: none;
        }
        .hero-author {
          margin-top: 24px;
          font-family: 'EB Garamond', serif;
          font-size: 1.05rem;
          letter-spacing: 0.04em;
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
          box-shadow: inset 0 0 0 2px
            color-mix(in oklab, var(--accent), transparent 80%);
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

        .actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .hint {
          opacity: 0.75;
        }

        footer {
          padding: 36px 0;
          border-top: 1px solid var(--ring);
          opacity: 0.9;
        }

        .title-banner {
          display: block;
          max-width: 100%;
          height: auto;
          margin-top: 16px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 920px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .grid.cols-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>{/* vacío por ahora */}</header>

      <main className="container">
        {/* HERO */}
        <section className="hero" aria-label="">
          <div>
            <div className="kicker">Ebook</div>

            {/* H1 oculto solo para SEO/accesibilidad */}
            <h1 className="sr-only">
              Patrocinio de San José — El imperio de una imagen
            </h1>

           {/* Imagen de título, como en tu portada */}
            <img
              className="title-banner"
              src="/banner-patrocinio-san-jose-1.jpg"
              alt="Patrocinio de San José. El imperio de una imagen. Autora: Natalia Portugueis Coronel."

          

            />
          </div>

<div style={{ position: 'relative', paddingTop: '56.25%' }}>
  <iframe
    src="https://www.youtube-nocookie.com/embed/mRmlSOAWq3I?autoplay=1&mute=1&loop=1&playlist=mRmlSOAWq3I"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }}
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>
</div>

          {/* Banner descarga Kindle */}
<div style={{ marginTop: '18px', textAlign: 'center' }}>
  <a
    href="https://www.amazon.com/dp/B0GHDPDG7W?ref=yb_qv_ov_kndl_dp_rw"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: 'inline-block' }}
  >
    <img
      src="/amazon-logo.png"
      alt="Descargar e-Book Kindle"
      style={{
        width: '100%',
        maxWidth: '420px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
      }}
    />
  </a>
  <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '6px' }}>
    App Kindle gratuita para leer el eBook
  </p>
</div>

          
        </section>

{/* VISTA PREVIA (Heyzine)  */}
<section id="preview" className="section">
  <h2>ver ebook</h2>

  <div style={{ position: 'relative', paddingTop: 'max(40%, 600px)', width: '100%', height: 0 }}>
    <iframe
      allowFullScreen
      allow="clipboard-write"
      scrolling="no"
      className="fp-iframe"
      src="https://heyzine.com/flip-book/bae6eed35a.html"
      style={{
        border: '1px solid lightgray',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0
      }}
    />
  </div>
</section>


        
     



        
        {/* PRESENTACIÓN */}
        <section id="presentacion" className="section">
          <div>
            <h2>presentación</h2>
            <p className="lede">
              El libro <em>Patrocinio de San José. El imperio de una imagen</em>{' '}
              es una investigación de historia del arte que cuenta con una edición de 150 ejemplares y un eBook, de distribución y acceso gratuito respectivamente, gracias al financiamiento del Fondo del Patrimonio Cultural, convocatoria 2024, del Servicio Nacional del Patrimonio Cultural de Chile. Fue lanzado en el Museo Nacional de Bellas Artes, el jueves 20 de noviembre de 2025 a las 17:00 horas, con un conversatorio con la autora, Natalia Portugueis, y la Doctora en Historia del Arte Constanza Acuña.

            </p>
          </div>
        </section>

        {/* RESEÑA + ACERCA DE LA AUTORA */}
        <section id="resena-autora" className="section">
          <div className="grid cols-2">
            {/* Columna izquierda: Reseña */}
            <div>
              <h2>reseña</h2>
              <p className="lede">
                <em>Patrocinio de San José. El imperio de una imagen</em> es una
                investigación sobre la vida de la pintura Patrocinio de San
                José, realizada por Gaspar Miguel de Berrío en 1744 en Potosí
                (Bolivia), desde que fue adquirida por el Museo Nacional de
                Bellas Artes en 1965. En el libro, la autora analiza la
                recepción y fortuna crítica de la pintura, tomando su caso como
                ejemplo para hacer un recorrido por medio siglo de escritura y
                exposiciones, que develan prácticas, omisiones y programas en la
                construcción de la narrativa de la historia del arte chileno.
                Junto con este estudio, Portugueis ofrece una completa
                identificación iconográfica de la pintura y un análisis
                iconológico con dos alternativas de lectura de sus posibles
                significados. La publicación en formato eBook posee un
                importante enfoque educativo y de divulgación que busca acercar
                a las y los lectores a la obra y a sus capas de significados,
                apoyándose con elementos animados e interactivos.
              </p>
            </div>

            {/* Columna derecha: Autora */}
            <aside className="card">
              <h2>acerca de la autora</h2>
              <p className="lede">
                Natalia Portugueis es Licenciada en Arte con mención en Grabado
                y Magíster en Teoría e Historia del Arte por la Universidad de
                Chile. Durante las últimas dos décadas ha trabajado en el ámbito
                de la educación en museos, destacando la Coordinación del área
                de Mediación y Educación del Museo Nacional de Bellas Artes
                (2010–2017) y la Subdirección de Educación y Programas Públicos
                del Museo de Bomberos de Santiago (2018 a la fecha). En forma
                paralela al trabajo vinculado a los museos, desarrolla proyectos
                artísticos independientes y de gestión en divulgación y
                educación en Derechos Humanos.
              </p>
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
          {/* Logos (sube los archivos a /public/logos/ y ajusta los nombres) */}
          <div
            className="footer-logos"
            style={{
              display: 'flex',
              gap: 18,
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
            aria-label="Organizan y patrocinan"
          >
            <a
              href="https://www.patrimoniocultural.gob.cl/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/serpat.png"
                alt="Serpat"
                style={{
                  height: 90,
                  width: 'auto',
                  display: 'block',
                  opacity: 0.95
                }}
              />
            </a>
            <a
              href="https://walterwaymann.wixsite.com/walter-waymann"
              target="_blank"
              rel="noopener"
            >
              <img
                src="Logo_WalterWaymann.png"
                alt="Logo Walter Waymann"
                style={{
                  height: 50,
                  width: 'auto',
                  display: 'block',
                  opacity: 0.95
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/estudio_pagana/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/Logo_pagana-01.png"
                alt="Logo Pagana"
                style={{
                  height: 100,
                  width: 'auto',
                  display: 'block',
                  opacity: 0.95
                }}
              />
            </a>
          </div>

          <small>
            &copy; <span>{year}</span> Patrocinio de San José. El imperio de una
            imagen.
          </small>

          <small>{/* Texto opcional del footer */}</small>
        </div>
      </footer>
    </>
  )
}
