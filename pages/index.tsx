import Head from "next/head";
import { useEffect } from "react";
import { bindLandingInteractions } from "../components/landing-interactions";

export default function Landing() {
  useEffect(bindLandingInteractions, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#211718" />
        <meta name="description" content="Patrocinio de San José. El imperio de una imagen, investigación de Natalia Portugueis Coronel sobre la pintura de Gaspar Miguel de Berrío. Lee el libro en línea o descarga el EPUB gratuito." />
        <meta property="og:title" content="Patrocinio de San José · El imperio de una imagen" />
        <meta property="og:description" content="Una investigación de Natalia Portugueis Coronel. Lee el libro en línea o descarga el EPUB gratuito." />
        <meta property="og:image" content="https://www.patrociniodesanjose.cl/banner-patrocinio-san-jose-1.jpg" />
        <meta property="og:url" content="https://www.patrociniodesanjose.cl/" />
        <title>Patrocinio de San José · El imperio de una imagen</title>
        <link rel="stylesheet" href="/patrocinio/fonts.css" />
        <link rel="stylesheet" href="/patrocinio/site.css" />
        <link rel="canonical" href="https://www.patrociniodesanjose.cl/" />
      </Head>
      <a className="skip" href="#contenido">Ir al contenido</a>
      <header className="header" id="inicio">
        <div className="wrap header-inner">
          <a className="wordmark" href="#inicio">Patrocinio de San José</a>
          <nav aria-label="Navegación principal">
            <a href="#presentacion">El libro</a>
            <a href="#autora">La autora</a>
            <a href="#contacto">Contacto</a>
            <a href="#preview" className="nav-reader">Leer el eBook</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="titulo">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="label">Investigación en historia del arte</p>
              <h1 id="titulo">Patrocinio de<br />San José</h1>
              <p className="subtitle">El imperio de una imagen</p>
              <p className="author-credit">Natalia Portugueis Coronel</p>
              <div className="actions">
                <a href="#preview" className="button solid">Leer en línea</a>
                <a href="/Epub/Patrocinio%20San%20Jose%CC%80.%20El%20imperio%20de%20una%20imagen.epub" download className="button outline">Descargar EPUB</a>
              </div>
              <p className="availability">Edición digital de acceso gratuito</p>
            </div>
            <figure className="painting">
              <a className="painting-link" href="/patrocinio/assets/obra.webp" data-open-art aria-label="Ampliar la pintura Patrocinio de San José">
                <img src="/patrocinio/assets/obra-pequena.webp" alt="Pintura barroca con San José al centro, rodeado por figuras celestiales y terrenales bajo su manto." loading="eager" />
                <span className="art-control" aria-hidden="true">Ampliar obra <span>+</span></span>
              </a>
              <figcaption><cite>Patrocinio de San José</cite> · Gaspar Miguel de Berrío, 1744<br /> Colección Museo Nacional de Bellas Artes</figcaption>
            </figure>
          </div>
        </section>

        <div className="work-strip">
          <dl className="wrap work-facts">
            <div><dt>Lugar de creación</dt><dd>Potosí, Bolivia</dd></div>
            <div><dt>Año de la obra</dt><dd>1744</dd></div>
            <div><dt>En la colección del MNBA desde</dt><dd>1965</dd></div>
          </dl>
        </div>

        <section className="paper" id="presentacion" aria-labelledby="libro">
          <div className="wrap editorial">
            <div>
              <p className="label">Presentación</p>
              <h2 id="libro">La historia de una pintura</h2>
            </div>
            <div className="body-copy">
              <p><em>Patrocinio de San José. El imperio de una imagen</em> es una investigación de historia del arte publicada en una tirada de 150 ejemplares de distribución gratuita y en una edición digital de libre acceso. El proyecto contó con el financiamiento del Fondo del Patrimonio Cultural, convocatoria 2024, del Servicio Nacional del Patrimonio Cultural de Chile.</p>
              <div className="launch">
                <h3>Lanzamiento en el Museo Nacional de Bellas Artes</h3>
                <p><time dateTime="2025-11-20T17:00:00-03:00">Jueves 20 de noviembre de 2025, 17:00 horas</time></p>
                <p>Conversatorio con Natalia Portugueis y Constanza Acuña, doctora en Historia del Arte.</p>
                <a className="text-link" href="https://www.mnba.gob.cl/noticias/patrocinio-de-san-jose-el-imperio-de-una-imagen">Ver publicación del museo</a>
              </div>
            </div>
          </div>
        </section>

        <section className="reading" id="preview" aria-labelledby="lector">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="label">Edición digital</p>
                <h2 id="lector">Leer el eBook</h2>
              </div>
              <div className="actions">
                <a className="button outline" href="https://heyzine.com/flip-book/bae6eed35a.html" target="_blank" rel="noopener noreferrer">Abrir en otra pestaña</a>
                <a className="button solid" href="/Epub/Patrocinio%20San%20Jose%CC%80.%20El%20imperio%20de%20una%20imagen.epub" download>Descargar EPUB</a>
              </div>
            </div>
            <iframe className="reader" src="https://heyzine.com/flip-book/bae6eed35a.html" title="Visor interactivo del eBook Patrocinio de San José" allow="clipboard-write; fullscreen" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </section>

        <section className="paper" id="resena-autora" aria-labelledby="resena">
          <div className="wrap editorial">
            <div>
              <p className="label">Reseña</p>
              <h2 id="resena">Medio siglo de lecturas</h2>
            </div>
            <div className="body-copy">
              <p>La investigación sigue la trayectoria de la pintura que Gaspar Miguel de Berrío realizó en Potosí en 1744, a partir de su adquisición por el Museo Nacional de Bellas Artes en 1965. Al revisar cómo se recibió, estudió y exhibió la obra durante medio siglo, Portugueis examina las prácticas, omisiones y programas que dieron forma al relato de la historia del arte chileno.</p>
              <p>El libro identifica las figuras y motivos de la pintura y propone dos interpretaciones de sus posibles significados. La edición digital incorpora animaciones y recursos interactivos con un propósito educativo y de divulgación, para acercar a las y los lectores a la obra y a sus distintas capas de significado.</p>
            </div>
          </div>
        </section>

        <section className="video-section" aria-labelledby="video">
          <div className="wrap video-layout">
            <div>
              <p className="label">El libro en video</p>
              <h2 id="video">Presentación audiovisual</h2>
              <a className="text-link" href="https://www.youtube.com/watch?v=mRmlSOAWq3I" target="_blank" rel="noopener noreferrer">Ver en YouTube</a>
            </div>
            <iframe className="video" src="https://www.youtube-nocookie.com/embed/mRmlSOAWq3I" title="Video de Patrocinio de San José. El imperio de una imagen" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </section>

        <section className="paper" id="autora" aria-labelledby="nombre">
          <div className="wrap editorial">
            <div>
              <p className="label">La autora</p>
              <h2 id="nombre">Natalia Portugueis Coronel</h2>
            </div>
            <div className="body-copy">
              <p>Licenciada en Arte con mención en Grabado y magíster en Teoría e Historia del Arte por la Universidad de Chile, Natalia Portugueis ha dedicado las últimas dos décadas a la educación en museos.</p>
              <p>Entre 2010 y 2017 coordinó el área de Mediación y Educación del Museo Nacional de Bellas Artes. Desde 2018 se desempeña en la Subdirección de Educación y Programas Públicos del Museo de Bomberos de Santiago. En paralelo desarrolla proyectos artísticos independientes y trabaja en la gestión de iniciativas de divulgación y educación en derechos humanos.</p>
            </div>
          </div>
        </section>

        <section className="paper contact" id="contacto" aria-labelledby="contacto-titulo">
          <div className="wrap editorial">
            <div className="contact-intro">
              <h2 id="contacto-titulo">Contacto</h2>
              <p>Escribe a Natalia Portugueis Coronel sobre el libro.</p>
              <a className="text-link" id="contacto-correo" href="mailto:nataliaportugueis@gmail.com">nataliaportugueis@gmail.com</a>
            </div>
            <form className="contact-form" aria-labelledby="contacto-titulo" aria-describedby="contacto-ayuda" hidden>
              <div className="contact-fields">
                <label>Nombre
                  <input name="nombre" autoComplete="name" maxLength={100} required />
                </label>
                <label>Tu correo electrónico
                  <input name="correo" type="email" autoComplete="email" maxLength={254} required />
                </label>
              </div>
              <label>Asunto
                <input name="asunto" maxLength={120} required />
              </label>
              <label>Mensaje
                <textarea name="mensaje" rows={6} maxLength={1500} required></textarea>
              </label>
              <p id="contacto-ayuda">Se abrirá un borrador en tu aplicación de correo para que puedas revisarlo y enviarlo.</p>
              <button type="submit" className="button solid">Abrir borrador de correo</button>
              <p className="contact-status" role="status"></p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <h2>Créditos</h2>
          <div className="credits">
            <a href="https://www.patrimoniocultural.gob.cl/" target="_blank" rel="noopener noreferrer"><img src="/serpat.png" alt="Servicio Nacional del Patrimonio Cultural" width="942" height="432" loading="lazy" /></a>
            <a href="https://walterwaymann.wixsite.com/walter-waymann" target="_blank" rel="noopener noreferrer"><img src="/Logo_WalterWaymann.png" alt="Walter Waymann" width="2006" height="543" loading="lazy" /></a>
            <a href="https://www.instagram.com/estudio_pagana/" target="_blank" rel="noopener noreferrer"><img src="/Logo_pagana-01.png" alt="Estudio Pagana" width="3548" height="2250" loading="lazy" /></a>
          </div>
          <div className="footer-end">
            <small>© 2026 Patrocinio de San José. El imperio de una imagen.</small>
          </div>
        </div>
      </footer>

      <dialog className="art-dialog" aria-labelledby="arte-titulo">
        <form method="dialog" className="dialog-heading">
          <h2 id="arte-titulo">Patrocinio de San José</h2>
          <div className="dialog-actions">
            <button type="button" data-zoom aria-pressed="false">Ampliar</button>
            <button autoFocus>Cerrar</button>
          </div>
        </form>
        <div className="art-scroll" tabIndex={0} aria-label="Imagen ampliable. Usa las teclas de dirección para desplazarte cuando esté ampliada.">
          <img data-art-image alt="Pintura Patrocinio de San José, de Gaspar Miguel de Berrío" />
        </div>
        <p>Gaspar Miguel de Berrío · Potosí, 1744 · Colección Museo Nacional de Bellas Artes</p>
      </dialog>
    </>
  );
}
