import Head from 'next/head'
import { useEffect } from 'react'

export default function Home(){
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('psj_theme');
    if(saved) root.setAttribute('data-theme', saved);
    (document.getElementById('themeToggle') as HTMLButtonElement)?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next!);
      localStorage.setItem('psj_theme', next!);
    });

    const CONFIG = (window as any).CONFIG;
    const eventBar = document.getElementById('eventBar')!;
    const pills = [ ['📅', CONFIG.DATE], ['⏰', CONFIG.TIME], ['📍', CONFIG.VENUE], ['🗺️', CONFIG.CITY] ];
    eventBar.innerHTML = pills.map(([i,t]) => `<span class="event-pill"><span>${i}</span>${t}</span>`).join('');

    const details = document.getElementById('eventDetails')!;
    details.innerHTML = `<li><strong>Fecha:</strong> ${CONFIG.DATE}</li><li><strong>Hora:</strong> ${CONFIG.TIME}</li><li><strong>Lugar:</strong> ${CONFIG.VENUE}</li><li><strong>Dirección:</strong> ${CONFIG.ADDRESS}</li><li><strong>Ciudad:</strong> ${CONFIG.CITY}</li>`;
    (document.getElementById('mapLink') as HTMLAnchorElement).href = CONFIG.MAP_URL;
    (document.getElementById('ticketsLink') as HTMLAnchorElement).href = CONFIG.TICKETS_URL;
    (document.getElementById('linkIos') as HTMLAnchorElement).href = CONFIG.IOS_URL;
    (document.getElementById('linkAndroid') as HTMLAnchorElement).href = CONFIG.ANDROID_URL;

    const form = document.getElementById('rsvpForm') as HTMLFormElement;
    const successEl = document.getElementById('formSuccess')!;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data['nombre'] || !data['email']) { alert('Por favor completa nombre y correo.'); return; }
      try{
        if(CONFIG.FORM_ENDPOINT){
          const fd = new FormData(form);
          const res = await fetch(CONFIG.FORM_ENDPOINT, { method:'POST', body: fd });
          if(!res.ok) throw new Error('Error de red');
        } else {
          const res = await fetch('/api/registro', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
          if(!res.ok) throw new Error('Error en el servidor');
        }
        (successEl as HTMLElement).setAttribute('style','display:inline');
        form.reset();
      }catch(err){ console.error(err); alert('No se pudo enviar el registro. Configura FORM_ENDPOINT o la ruta /api/registro.'); }
    });

    document.getElementById('addCalendar')?.addEventListener('click', () => {
      const CONFIG = (window as any).CONFIG;
      const title = 'Lanzamiento — Patrocinio de San José';
      const desc = 'Presentación del libro: Patrocinio de San José — El imperio de una imagen';
      const dt = new Date();
      const dtStart = dt.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
      const dtEnd = new Date(dt.getTime()+ 2*60*60*1000).toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
      const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${dtStart}\nDTEND:${dtEnd}\nSUMMARY:${title}\nDESCRIPTION:${desc}\nLOCATION:${CONFIG.VENUE}, ${CONFIG.ADDRESS}, ${CONFIG.CITY}\nEND:VEVENT\nEND:VCALENDAR`;
      const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'lanzamiento-san-jose.ics'; a.click();
      URL.revokeObjectURL(url);
    });

    (document.getElementById('year') as HTMLElement).textContent = String(new Date().getFullYear());
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Patrocinio de San José — El imperio de una imagen</title>
        <meta name="description" content="Lanzamiento del libro Patrocinio de San José — El imperio de una imagen." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root{ --bg:#1b1615; --text:#f3ede6; --muted:#d7cdc3; --accent:#ddac79; --orange:#e04310; --terracotta:#b96b3a; --burnt:#742f12; --rust:#af4a1d; --card-1:#201916; --card-2:#1a1412; --ring:rgba(221,172,121,.35);}
        :root[data-theme='light']{ --bg:#f7f4ef; --text:#1b1615; --muted:#3b2e2a; --accent:#b87f44; --orange:#cc3a10; --terracotta:#a56135; --burnt:#6a2a10; --rust:#a0461d; --card-1:#fffefd; --card-2:#fbf8f4; --ring:rgba(184,127,68,.35);}
        *{box-sizing:border-box} html,body{margin:0;background:var(--bg);color:var(--text);font-family:'Crimson Text', serif;}
        a{color:var(--accent);text-decoration:none} a:hover{text-decoration:underline}
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        header{position:sticky;top:0;z-index:40;background:linear-gradient(180deg, color-mix(in oklab, var(--bg), transparent 10%), color-mix(in oklab, var(--bg), transparent 30%));backdrop-filter:saturate(140%) blur(8px);border-bottom:1px solid var(--ring)}
        .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
        .brand{display:flex;align-items:center;gap:12px}
        .brand-logo{width:36px;height:36px;border:2px solid var(--accent);border-radius:12px}
        .brand-title{font-family:'Cinzel', serif;letter-spacing:.06em;font-weight:800;color:var(--accent)}
        .cta-top{display:flex;gap:10px;align-items:center}
        .btn{appearance:none;border:none;cursor:pointer;border-radius:999px;padding:10px 16px;font-weight:600;letter-spacing:.02em}
        .btn-primary{background:var(--accent);color:#1b1615}
        .btn-ghost{background:transparent;color:var(--accent);border:1px solid var(--accent)}
        .toggle{border:1px solid var(--ring);background:transparent;color:var(--text);border-radius:999px;padding:8px 12px;cursor:pointer}
        .hero{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:center;padding:44px 0 26px;border-bottom:1px solid var(--ring)}
        .kicker{color:var(--orange);font-weight:600;letter-spacing:.1em;text-transform:uppercase}
        h1{font-family:'Cinzel', serif;font-size:clamp(34px,6vw,64px);line-height:1.08;margin:10px 0;color:var(--accent)}
        .subtitle{font-size:clamp(18px,3vw,22px);opacity:.9}
        .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:18px}
        .badge{display:inline-flex;align-items:center;gap:12px;padding:10px 14px;border-radius:14px;background:var(--card-2);border:1px solid var(--ring)}
        .badge img{height:48px;display:block}
        .hero-media{position:relative}
        .frame{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--ring);box-shadow:0 12px 40px rgba(0,0,0,.45)}
        .frame::after{content:'';position:absolute;inset:0;box-shadow:inset 0 0 0 2px color-mix(in oklab, var(--accent), transparent 80%)}
        .hero-img{display:block;width:100%;height:auto}
        .event-bar{display:flex;gap:18px;flex-wrap:wrap;align-items:center;background:linear-gradient(90deg, color-mix(in oklab, var(--accent), transparent 85%), transparent);border:1px solid var(--ring);border-radius:14px;padding:12px 16px;margin-top:14px}
        .event-pill{display:flex;gap:8px;align-items:center;padding:6px 10px;border-radius:999px;background:var(--card-1);border:1px solid var(--ring);font-weight:600}
        .section{padding:60px 0}
        .section h2{font-family:'Cinzel', serif;color:var(--accent);font-size:clamp(28px,4vw,40px);margin:0 0 10px}
        .lede{font-size:22px;opacity:.95}
        .grid{display:grid;gap:26px}
        .grid.cols-2{grid-template-columns:1fr 1fr}
        .card{background:linear-gradient(180deg, var(--card-1), var(--card-2));border:1px solid var(--ring);border-radius:16px;padding:22px}
        .download{display:grid;gap:18px}
        .download a{display:block}
        .download .note{opacity:.8}
        form{display:grid;gap:14px;margin-top:10px}
        label{font-weight:700;color:var(--muted)}
        input,select,textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--ring);background:var(--card-2);color:var(--text)}
        input[type='checkbox']{width:auto}
        .form-row{display:grid;gap:14px;grid-template-columns:1fr 1fr}
        .actions{display:flex;gap:10px;align-items:center}
        .hint{opacity:.75}
        .success{display:none;margin-top:8px;color:var(--accent);font-weight:700}
        .palette{display:flex;gap:10px;flex-wrap:wrap}
        .swatch{width:46px;height:46px;border-radius:10px;border:1px solid rgba(255,255,255,.2)}
        footer{padding:36px 0;border-top:1px solid var(--ring);opacity:.9}
        @media (max-width: 920px){ .hero{grid-template-columns:1fr} .form-row{grid-template-columns:1fr} }
      `}</style>

      <header>
        <div className="container nav">
          <div className="brand">
            <div className="brand-logo" aria-hidden="true"></div>
            <div className="brand-title">Patrocinio de San José</div>
          </div>
          <div className="cta-top">
            <button id="themeToggle" className="toggle" type="button" title="Cambiar tema">Tema claro/oscuro</button>
            <a href="#descargas" className="btn btn-ghost">Descargas</a>
            <a href="#resena" className="btn btn-primary">Leer reseña</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero" aria-label="Presentación">
          <div>
            <div className="kicker">Lanzamiento del libro</div>
            <h1>Patrocinio de San José<br/><span style={{color:'var(--text)', opacity:.9 as any}}>El imperio de una imagen</span></h1>
            <p className="subtitle">Una edición que recorre la expansión devocional y visual de San José en el mundo hispano, su iconografía, sus usos sociales y su potencia simbólica en el arte virreinal y republicano.</p>
            <div id="eventBar" className="event-bar" aria-live="polite"></div>
            <div className="hero-cta">
              <a id="linkIos" className="badge" href="#descargas" title="Descargar eBook para iOS">
                <img alt="Descargar eBook iOS" src="/ebook_ios_banner.png" />
              </a>
              <a id="linkAndroid" className="badge" href="#descargas" title="Descargar eBook para Android">
                <img alt="Descargar eBook Android" src="/ebook_android_banner.png" />
              </a>
            </div>
          </div>
          <div className="hero-media">
            <figure className="frame">
              <img className="hero-img" alt="Composición visual del libro" src="/hero_patrocinio.jpg" />
            </figure>
          </div>
        </section>

        <section id="resena" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Reseña breve</h2>
              <p className="lede">Este libro propone una lectura crítica y a la vez sensible de la imagen de San José como figura tutelar y política. A partir de pinturas, grabados, estampas y documentos, se indaga cómo su iconografía se convirtió en un verdadero “imperio de la imagen”, articulando devoción doméstica, encargos institucionales y narrativas públicas.</p>
              <p>La edición combina investigación histórica con un ensayo visual cuidadosamente curado. Las obras dialogan con textos claros y amenos que acercan al lector a los contextos de producción, circulación y recepción de estas imágenes: desde talleres andinos hasta imprentas europeas, del santuario local a las celebraciones multitudinarias.</p>
              <p>Una invitación a mirar con atención los símbolos, los gestos y las materialidades que han dado forma al patrocinio de San José a lo largo de los siglos.</p>
            </div>
            <aside className="card">
              <h3 style={{fontFamily:'Cinzel, serif', margin:'0 0 8px', color:'var(--accent)'}}>Detalles de la edición</h3>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.7 as any}}>
                <li>Formato: tapa blanda y eBook</li>
                <li>Idioma: español</li>
                <li>Imágenes restauradas y comentadas</li>
                <li>Diseño editorial con paleta inspirada en terracotas, oros y negros</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="descargas" className="section">
          <h2>Descargar eBook</h2>
          <div className="download">
            <a id="linkIos" href="#" aria-label="Descargar eBook para iOS (Apple Books)">
              <img alt="Banner iOS" style={{width:'100%', height:'auto', borderRadius:12, border:'1px solid var(--ring)'}} src="/ebook_ios_banner.png" />
            </a>
            <a id="linkAndroid" href="#" aria-label="Descargar eBook para Android (Google Play o EPUB)">
              <img alt="Banner Android" style={{width:'100%', height:'auto', borderRadius:12, border:'1px solid var(--ring)'}} src="/ebook_android_banner.png" />
            </a>
            <p className="note">Reemplaza los enlaces de arriba con las URLs finales de Apple Books y Google Play o tu tienda preferida.</p>
          </div>
        </section>

        <section id="registro" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Registro al lanzamiento</h2>
              <p className="lede">Déjanos tus datos para enviarte la invitación y un capítulo de muestra cuando esté disponible.</p>
              <form id="rsvpForm" noValidate>
                <div className="form-row">
                  <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" name="nombre" required placeholder="Nombre y apellidos" />
                  </div>
                  <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label htmlFor="preferencia">Plataforma preferida</label>
                    <select id="preferencia" name="preferencia">
                      <option>iOS (Apple Books)</option>
                      <option>Android (Google Play)</option>
                      <option>Edición impresa</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="asistencia">Asistencia</label>
                    <select id="asistencia" name="asistencia">
                      <option>Confirmo asistencia</option>
                      <option>Me interesa, avísenme</option>
                    </select>
                  </div>
                </div>
                <label className="hint"><input type="checkbox" id="capitulo" name="capitulo" defaultChecked /> Enviar capítulo de muestra cuando esté listo</label>
                <div className="actions">
                  <button className="btn btn-primary" type="submit">Enviar registro</button>
                  <button id="addCalendar" className="btn btn-ghost" type="button">Añadir al calendario</button>
                  <span id="formSuccess" className="success">¡Registro enviado! Revisa tu correo.</span>
                </div>
                <p className="hint">Nota: por defecto el formulario intenta usar <code>/api/registro</code> (Vercel/Next.js). También puedes configurar <code>FORM_ENDPOINT</code> a un servicio de formularios externo.</p>
              </form>
            </div>
            <aside className="card">
              <h3 style={{fontFamily:'Cinzel, serif', margin:'0 0 8px', color:'var(--accent)'}}>¿Dónde será?</h3>
              <ul id="eventDetails" style={{margin:0,paddingLeft:18,lineHeight:1.7 as any}}></ul>
              <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:10}}>
                <a id="mapLink" className="btn btn-ghost" target="_blank" rel="noopener">Ver mapa</a>
                <a id="ticketsLink" className="btn btn-ghost" target="_blank" rel="noopener">Más información</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" aria-label="Paleta">
          <h2>Paleta cromática</h2>
          <div className="palette">
            <div className="swatch" title="#1b1615" style={{background:'#1b1615'}}></div>
            <div className="swatch" title="#ddac79" style={{background:'#ddac79'}}></div>
            <div className="swatch" title="#e04310" style={{background:'#e04310'}}></div>
            <div className="swatch" title="#b96b3a" style={{background:'#b96b3a'}}></div>
            <div className="swatch" title="#742f12" style={{background:'#742f12'}}></div>
            <div className="swatch" title="#af4a1d" style={{background:'#af4a1d'}}></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap',alignItems:'center'}}>
          <small>&copy; <span id="year"></span> Patrocinio de San José — El imperio de una imagen.</small>
          <small>Diseño web inspirado en la estética del libro. Paleta: dorados, terracotas y negro.</small>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{__html:`window.CONFIG = { DATE: '22 Noviembre', TIME: '19:00', VENUE: 'MUSEO NACIONAL DE BELLAS ARTES', ADDRESS: '[Dirección]', CITY: 'Santiago, Chile', MAP_URL: 'https://maps.app.goo.gl/p7KBKzmZYeMUxXPE6', TICKETS_URL: '#', IOS_URL: '#', ANDROID_URL: '#', FORM_ENDPOINT: '' };`}} />
    </>
  )
}
