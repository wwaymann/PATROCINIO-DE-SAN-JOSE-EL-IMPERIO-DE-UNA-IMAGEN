<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Patrocinio de San José — El imperio de una imagen</title>
  <meta name="description" content="Lanzamiento del libro Patrocinio de San José — El imperio de una imagen. Reseña, fecha y lugar, formulario de registro y descargas del eBook."/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://db.onlinewebfonts.com/c/3e50ef03ad2b5b310b83f47172d6dcd2?family=Matona" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <style>
    /* ========= THEME ========= */
    :root{
      --bg:#ffffff;
      --text:#19110e;
      --muted:#403533; /* base clara inspirada en la portada */
      --accent:#e04310; /* rojo portada */
      --orange:#e04310;
      --terracotta:#b96b3a;
      --burnt:#742f12;
      --rust:#af4a1d;
      --card-1:#f9f4ef;
      --card-2:#fdfaf7;
      --ring:rgba(224,67,16,.35);
    }
    :root[data-theme='light']{
      --bg:#ffffff; --text:#19110e; --muted:#403533;
      --accent:#e04310; --orange:#e04310; --terracotta:#b96b3a; --burnt:#742f12; --rust:#af4a1d;
      --card-1:#f9f4ef; --card-2:#fdfaf7; --ring:rgba(224,67,16,.35);
    }

    *{box-sizing:border-box}
    html,body{margin:0;background:var(--bg);color:var(--text);font-family:"Crimson Text", serif;}
    a{color:var(--accent);text-decoration:none}
    a:hover{text-decoration:underline}
    .container{max-width:1120px;margin:0 auto;padding:0 20px}

    /* Header */
    header{position:sticky;top:0;z-index:40;background:linear-gradient(180deg, color-mix(in oklab, var(--bg), transparent 10%), color-mix(in oklab, var(--bg), transparent 30%));backdrop-filter:saturate(140%) blur(8px);border-bottom:1px solid var(--ring)}
    .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
    .brand{display:flex;align-items:center;gap:12px}
    .brand-logo{width:36px;height:36px;border:2px solid var(--accent);border-radius:12px}
    .brand-title{font-family:"Matona","Cinzel", serif;letter-spacing:.06em;font-weight:800;color:var(--accent)}
    .cta-top{display:flex;gap:10px;align-items:center}
    .btn{appearance:none;border:none;cursor:pointer;border-radius:999px;padding:10px 16px;font-weight:600;letter-spacing:.02em}
    .btn-primary{background:var(--accent);color:#1b1615}
    .btn-ghost{background:transparent;color:var(--accent);border:1px solid var(--accent)}
    .toggle{border:1px solid var(--ring);background:transparent;color:var(--text);border-radius:999px;padding:8px 12px;cursor:pointer}

    /* Hero */
    .hero{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:center;padding:64px 0 40px;border-bottom:1px solid var(--ring)}
    .kicker{color:var(--orange);font-weight:600;letter-spacing:.1em;text-transform:uppercase}
    h1{font-family:"Matona","Cinzel", serif;font-size:clamp(38px,6.5vw,72px);line-height:1.02;margin:10px 0;color:var(--accent);text-transform:uppercase;letter-spacing:.18em;}
    h1 span{
      display:block;
      margin-top:18px;
      font-family:"Crimson Text", serif;
      font-style:italic;
      font-size:0.58em;
      letter-spacing:.02em;
      color:var(--text);
      text-transform:none;
    }
    .subtitle{font-size:clamp(18px,3vw,22px);opacity:.9}
    .hero-author{margin-top:32px;font-family:"Crimson Text", serif;font-size:1.05rem;letter-spacing:.04em;}
    .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:18px}
    .badge{display:inline-flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;background:var(--card-2);border:1px solid var(--ring)}
    .badge img{height:48px;display:block}
    .hero-media{position:relative}
    .hero::before{
      content:"";
      position:absolute;
      left:-32px;
      top:12%;
      bottom:18%;
      width:6px;
      background:var(--accent);
    }
    .hero::after{
      content:"";
      position:absolute;
      left:10%;
      right:38%;
      top:10%;
      height:3px;
      background:var(--accent);
    }
    .frame{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--ring);box-shadow:0 12px 40px rgba(0,0,0,.45)}
    .frame::after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 0 2px color-mix(in oklab, var(--accent), transparent 80%)}
    .hero-img{display:block;width:100%;height:auto}

    /* Info evento */
    .event-bar{display:flex;gap:18px;flex-wrap:wrap;align-items:center;background:linear-gradient(90deg, color-mix(in oklab, var(--accent), transparent 85%), transparent);border:1px solid var(--ring);border-radius:14px;padding:12px 16px;margin-top:14px}
    .event-pill{display:flex;gap:8px;align-items:center;padding:6px 10px;border-radius:999px;background:var(--card-1);border:1px solid var(--ring);font-weight:600}

    /* Secciones */
    .section{padding:60px 0}
    .section h2{font-family:"Matona","Cinzel", serif;color:var(--accent);font-size:clamp(28px,4vw,40px);margin:0 0 10px}
    .lede{font-size:22px;opacity:.95}
    .grid{display:grid;gap:26px}
    .grid.cols-2{grid-template-columns:1fr 1fr}
    .card{background:linear-gradient(180deg, var(--card-1), var(--card-2));border:1px solid var(--ring);border-radius:16px;padding:22px}

    /* Descargas */
    .download{display:grid;gap:18px}
    .download a{display:block}
    .download .note{opacity:.8}

    /* Formulario */
    form{display:grid;gap:14px;margin-top:10px}
    label{font-weight:700;color:var(--muted)}
    input,select,textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--ring);background:var(--card-2);color:var(--text)}
    input[type="checkbox"]{width:auto}
    .form-row{display:grid;gap:14px;grid-template-columns:1fr 1fr}
    .actions{display:flex;gap:10px;align-items:center}
    .hint{opacity:.75}
    .success{display:none;margin-top:8px;color:var(--accent);font-weight:700}

    /* Paleta */
    .palette{display:flex;gap:10px;flex-wrap:wrap}
    .swatch{width:46px;height:46px;border-radius:10px;border:1px solid rgba(255,255,255,.2)}

    /* Footer */
    footer{padding:36px 0;border-top:1px solid var(--ring);opacity:.9}

    @media (max-width: 920px){ .hero{grid-template-columns:1fr} .form-row{grid-template-columns:1fr} }
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand">
        <div class="brand-logo" aria-hidden="true"></div>
        <div class="brand-title">Patrocinio de San José</div>
      </div>
      <div class="cta-top">
        <button id="themeToggle" class="toggle" type="button" title="Cambiar tema">Tema claro/oscuro</button>
        <a href="#descargas" class="btn btn-ghost">Descargas</a>
        <a href="#resena" class="btn btn-primary">Leer reseña</a>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- HERO -->
    <section class="hero" aria-label="Presentación">
      <div>
        <div class="kicker">Lanzamiento  libro</div>
        <h1>Patrocinio de San José<br/><span style="color:var(--text);opacity:.9">El imperio de una imagen</span></h1>
        $1
        <p class="hero-author">Natalia Portugueis Coronel</p>

        <!-- Info del evento editable desde JS -->
        <div id="eventBar" class="event-bar" aria-live="polite"></div>

        <div class="hero-cta">
          <a class="badge" href="#descargas" title="Descargar eBook para iOS">
            <img alt="Descargar eBook iOS" src="ebook_ios_banner.png"/>
          </a>
          <a class="badge" href="#descargas" title="Descargar eBook para Android">
            <img alt="Descargar eBook Android" src="ebook_android_banner.png"/>
          </a>
        </div>
      </div>
      <div class="hero-media">
        <figure class="frame">
          <img class="hero-img" alt="Composición visual del libro" src="hero_patrocinio.jpg"/>
        </figure>
      </div>
    </section>

    <!-- RESEÑA -->
    <section id="resena" class="section">
      <div class="grid cols-2">
        <div>
          <h2>Reseña breve</h2>
          <p class="lede">Este libro propone una lectura crítica y a la vez sensible de la imagen de San José como figura tutelar y política. A partir de pinturas, grabados, estampas y documentos, se indaga cómo su iconografía se convirtió en un verdadero “imperio de la imagen”, articulando devoción doméstica, encargos institucionales y narrativas públicas.</p>
          <p>La edición combina investigación histórica con un ensayo visual cuidadosamente curado. Las obras dialogan con textos claros y amenos que acercan al lector a los contextos de producción, circulación y recepción de estas imágenes: desde talleres andinos hasta imprentas europeas, del santuario local a las celebraciones multitudinarias.</p>
          <p>Una invitación a mirar con atención los símbolos, los gestos y las materialidades que han dado forma al patrocinio de San José a lo largo de los siglos.</p>
        </div>
        <aside class="card">
          <h3 style="font-family:'Matona','Cinzel',serif;margin:0 0 8px;color:var(--accent)">Detalles de la edición</h3>
          <ul style="margin:0;padding-left:18px;line-height:1.7">
            <li>Formato: tapa blanda y eBook</li>
            <li>Idioma: español</li>
            <li>Imágenes restauradas y comentadas</li>
            <li>Diseño editorial con paleta inspirada en terracotas, oros y negros</li>
          </ul>
        </aside>
      </div>
    </section>

    <!-- DESCARGAS -->
    <section id="descargas" class="section">
      <h2>Descargar eBook</h2>
      <div class="download">
        <a id="linkIos" href="#" aria-label="Descargar eBook para iOS (Apple Books)">
          <img alt="Banner iOS" style="width:100%;height:auto;border-radius:12px;border:1px solid var(--ring)" src="ebook_ios_banner.png"/>
        </a>
        <a id="linkAndroid" href="#" aria-label="Descargar eBook para Android (Google Play o EPUB)">
          <img alt="Banner Android" style="width:100%;height:auto;border-radius:12px;border:1px solid var(--ring)" src="ebook_android_banner.png"/>
        </a>
        <p class="note">Reemplaza los enlaces de arriba con las URLs finales de Apple Books y Google Play o tu tienda preferida.</p>
      </div>
    </section>

    <!-- REGISTRO / RSVP -->
    <section id="registro" class="section">
      <div class="grid cols-2">
        <div>
          <h2>Registro al lanzamiento</h2>
          <p class="lede">Déjanos tus datos para enviarte la invitación y un capítulo de muestra cuando esté disponible.</p>
          <form id="rsvpForm" novalidate>
            <div class="form-row">
              <div>
                <label for="nombre">Nombre</label>
                <input id="nombre" name="nombre" required placeholder="Nombre y apellidos"/>
              </div>
              <div>
                <label for="email">Correo electrónico</label>
                <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com"/>
              </div>
            </div>
            <div class="form-row">
              <div>
                <label for="preferencia">Plataforma preferida</label>
                <select id="preferencia" name="preferencia">
                  <option>iOS (Apple Books)</option>
                  <option>Android (Google Play)</option>
                  <option>Edición impresa</option>
                </select>
              </div>
              <div>
                <label for="asistencia">Asistencia</label>
                <select id="asistencia" name="asistencia">
                  <option>Confirmo asistencia</option>
                  <option>Me interesa, avísenme</option>
                </select>
              </div>
            </div>
            <label class="hint"><input type="checkbox" id="capitulo" name="capitulo" checked/> Enviar capítulo de muestra cuando esté listo</label>
            <div class="actions">
              <button class="btn btn-primary" type="submit">Enviar registro</button>
              <button id="addCalendar" class="btn btn-ghost" type="button">Añadir al calendario</button>
              <span id="formSuccess" class="success">¡Registro enviado! Revisa tu correo.</span>
            </div>
            <p class="hint">Nota: por defecto el formulario intenta usar <code>/api/registro</code> (Vercel/Next.js). También puedes configurar <code>FORM_ENDPOINT</code> a un servicio de formularios externo.</p>
          </form>
        </div>
        <aside class="card">
          <h3 style="font-family:'Matona','Cinzel',serif;margin:0 0 8px;color:var(--accent)">¿Dónde será?</h3>
          <ul style="margin:0;padding-left:18px;line-height:1.7" id="eventDetails"></ul>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
            <a id="mapLink" class="btn btn-ghost" target="_blank" rel="noopener">Ver mapa</a>
            <a id="ticketsLink" class="btn btn-ghost" target="_blank" rel="noopener">Más información</a>
          </div>
        </aside>
      </div>
    </section>

    <!-- PALETA DE COLOR -->
    <section class="section" aria-label="Paleta">
      <h2>Paleta cromática</h2>
      <div class="palette">
        <div class="swatch" title="#1b1615" style="background:#1b1615"></div>
        <div class="swatch" title="#ddac79" style="background:#ddac79"></div>
        <div class="swatch" title="#e04310" style="background:#e04310"></div>
        <div class="swatch" title="#b96b3a" style="background:#b96b3a"></div>
        <div class="swatch" title="#742f12" style="background:#742f12"></div>
        <div class="swatch" title="#af4a1d" style="background:#af4a1d"></div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container" style="display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center">
      <small>&copy; <span id="year"></span> Patrocinio de San José — El imperio de una imagen.</small>
      <small>Diseño web inspirado en la estética del libro. Paleta: dorados, terracotas y negro.</small>
    </div>
  </footer>

  <script>
    // ========= CONFIGURA AQUÍ LOS DATOS DEL EVENTO =========
    const CONFIG = {
      DATE: "[Fecha por definir]",         // Ej: "Sáb 30 nov 2025"
      TIME: "[Hora por definir]",         // Ej: "19:30 h"
      VENUE: "[Lugar / institución]",     // Ej: "Museo Nacional de Bellas Artes"
      ADDRESS: "[Dirección]",              // Ej: "José Miguel de la Barra 650, Santiago"
      CITY: "Santiago, Chile",
      MAP_URL: "https://maps.google.com",  // Reemplaza por enlace al mapa
      TICKETS_URL: "#",                    // Enlace a detalle o entradas
      IOS_URL: "#",                        // Apple Books / App Store
      ANDROID_URL: "#",                    // Google Play / tu tienda
      FORM_ENDPOINT: ""                    // Ej: "https://formspree.io/f/xxxxxx" (opcional)
    };

    // ========= TEMA =========
    const themeBtn = document.getElementById('themeToggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('psj_theme');
    if(saved){ root.setAttribute('data-theme', saved) }
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next); localStorage.setItem('psj_theme', next);
    });

    // ========= EVENT INFO (bar + aside) =========
    const eventBar = document.getElementById('eventBar');
    const pills = [
      ['📅', CONFIG.DATE], ['⏰', CONFIG.TIME], ['📍', CONFIG.VENUE], ['🗺️', CONFIG.CITY]
    ];
    eventBar.innerHTML = pills.map(([i,t]) => `<span class="event-pill"><span>${i}</span>${t}</span>`).join('');

    const details = document.getElementById('eventDetails');
    details.innerHTML = `
      <li><strong>Fecha:</strong> ${CONFIG.DATE}</li>
      <li><strong>Hora:</strong> ${CONFIG.TIME}</li>
      <li><strong>Lugar:</strong> ${CONFIG.VENUE}</li>
      <li><strong>Dirección:</strong> ${CONFIG.ADDRESS}</li>
      <li><strong>Ciudad:</strong> ${CONFIG.CITY}</li>
    `;

    document.getElementById('mapLink').href = CONFIG.MAP_URL;
    document.getElementById('ticketsLink').href = CONFIG.TICKETS_URL;
    document.getElementById('linkIos').href = CONFIG.IOS_URL;
    document.getElementById('linkAndroid').href = CONFIG.ANDROID_URL;

    // ========= RSVP =========
    const form = document.getElementById('rsvpForm');
    const successEl = document.getElementById('formSuccess');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      // Valida mínimos
      if(!data.nombre || !data.email){
        alert('Por favor completa nombre y correo.');
        return;
      }

      try {
        if(CONFIG.FORM_ENDPOINT){
          // Envío a servicio externo (Formspree, etc.)
          const fd = new FormData(form);
          const res = await fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', body: fd });
          if(!res.ok) throw new Error('Error de red');
        } else {
          // Envío a API local (Next.js) — implementa /api/registro (ver snippet abajo)
          const res = await fetch('/api/registro', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if(!res.ok) throw new Error('Error en el servidor');
        }
        successEl.style.display = 'inline';
        form.reset();
      } catch(err){
        console.error(err);
        alert('No se pudo enviar el registro. Configura FORM_ENDPOINT o la ruta /api/registro.');
      }
    });

    // ========= Añadir al calendario (ICS) =========
    document.getElementById('addCalendar').addEventListener('click', () => {
      const title = 'Lanzamiento — Patrocinio de San José';
      const desc = 'Presentación del libro: Patrocinio de San José — El imperio de una imagen';
      const dt = new Date(); // reemplaza si quieres fecha/hora reales
      const dtStart = dt.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
      const dtEnd = new Date(dt.getTime()+ 2*60*60*1000).toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
      const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:${CONFIG.VENUE}, ${CONFIG.ADDRESS}, ${CONFIG.CITY}
END:VEVENT
END:VCALENDAR`;
      const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'lanzamiento-san-jose.ics'; a.click();
      URL.revokeObjectURL(url);
    });

    // Año footer
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

  <!-- ===============================================
       SNIPPETS PARA NEXT.JS / VERCEL
       Copia en tu proyecto si deseas backend de correo simple.
  ================================================ -->
  <script type="text/plain" id="nextjs-snippets">
// pages/index.tsx (usa Tailwind si lo prefieres)
import Head from 'next/head';
export default function Landing(){
  return (
    <main> {/* Pega aquí el HTML del <main> adaptado a JSX si deseas */} </main>
  );
}

// pages/api/registro.ts — ejemplo básico (Vercel)
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end();
  const { nombre, email, preferencia, asistencia, capitulo } = req.body || {};
  // TODO: Guarda en tu DB o envía correo con un servicio (Resend, SendGrid, etc.)
  console.log('RSVP', { nombre, email, preferencia, asistencia, capitulo });
  return res.status(200).json({ ok:true });
}
  </script>
</body>
</html>
