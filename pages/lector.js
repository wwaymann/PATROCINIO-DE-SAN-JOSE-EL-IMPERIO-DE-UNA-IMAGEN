// pages/lector.js
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { Document, Page, pdfjs } from 'react-pdf'

// Configuración del worker de pdf.js (obligatorio para que funcione en producción)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// CONFIG GENERAL DEL LIBRO
const BOOK_CONFIG = {
  PDF_URL: '/psj-libro.pdf', // pon aquí el nombre real del PDF dentro de /public
  TITLE: 'Patrocinio de San José – El Imperio de una imagen',
  SUBTITLE: 'Visor interactivo',
  CHAPTERS: [
    // Ejemplos, ajusta las páginas a tu estructura real
    { id: 'portada', label: 'Portada', page: 1 },
    { id: 'presentacion', label: 'Presentación', page: 2 },
    { id: 'intro', label: 'Introducción', page: 4 },
    { id: 'cap1', label: 'Capítulo 1', page: 8 },
    { id: 'cap2', label: 'Capítulo 2', page: 16 },
    { id: 'anexos', label: 'Anexos', page: 40 }
  ]
}

export default function Lector() {
  const [isClient, setIsClient] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.2)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const viewerRef = useRef(null)

  useEffect(() => {
    // Evitar problemas con SSR: solo renderiza <Document> en el cliente
    setIsClient(true)
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  function onDocumentLoadError(err) {
    console.error(err)
    setError('No se pudo cargar el PDF.')
    setIsLoading(false)
  }

  function goToPage(p) {
    if (!numPages) return
    const target = Math.min(Math.max(p, 1), numPages)
    setPageNumber(target)
    // scroll al inicio del visor en cada cambio de página
    if (viewerRef.current) {
      viewerRef.current.scrollTop = 0
    }
  }

  function nextPage() {
    goToPage(pageNumber + 1)
  }

  function prevPage() {
    goToPage(pageNumber - 1)
  }

  function zoomIn() {
    setScale((s) => Math.min(s + 0.2, 3))
  }

  function zoomOut() {
    setScale((s) => Math.max(s - 0.2, 0.6))
  }

  function resetZoom() {
    setScale(1.2)
  }

  // Zoom también con Ctrl + rueda del mouse (opcional, nice-to-have)
  function handleWheelZoom(e) {
    if (!e.ctrlKey) return
    e.preventDefault()
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  return (
    <>
      <Head>
        <title>{BOOK_CONFIG.TITLE} – Lector</title>
        <meta
          name="description"
          content="Visor interactivo del libro Patrocinio de San José."
        />
      </Head>

      <div className="page">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h1 className="book-title">{BOOK_CONFIG.TITLE}</h1>
            <p className="book-subtitle">{BOOK_CONFIG.SUBTITLE}</p>
          </div>

          <div className="sidebar-section">
            <h2 className="sidebar-section-title">Capítulos</h2>
            <ul className="chapter-list">
              {BOOK_CONFIG.CHAPTERS.map((ch) => (
                <li key={ch.id}>
                  <button
                    className={
                      'chapter-btn ' +
                      (pageNumber >= ch.page ? 'chapter-btn--active' : '')
                    }
                    onClick={() => goToPage(ch.page)}
                  >
                    <span className="chapter-label">{ch.label}</span>
                    <span className="chapter-page">p. {ch.page}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-footer">
            <p className="hint">
              • Haz clic en un capítulo para saltar a esa página.
              <br />
              • Puedes seleccionar texto con el cursor dentro de la página.
            </p>
          </div>
        </aside>

        <main className="main">
          <header className="toolbar">
            <div className="toolbar-left">
              <button onClick={prevPage} disabled={pageNumber <= 1}>
                ◀ Página anterior
              </button>
              <button onClick={nextPage} disabled={numPages && pageNumber >= numPages}>
                Página siguiente ▶
              </button>
              <span className="page-indicator">
                Página {pageNumber}
                {numPages ? ` / ${numPages}` : ''}
              </span>
            </div>

            <div className="toolbar-right">
              <button onClick={zoomOut}>−</button>
              <span className="zoom-label">{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn}>+</button>
              <button onClick={resetZoom}>Reset</button>
            </div>
          </header>

          <section
            className="viewer-container"
            ref={viewerRef}
            onWheel={handleWheelZoom}
          >
            {error && (
              <div className="message message--error">
                {error}
              </div>
            )}

            {!error && (
              <>
                {isLoading && (
                  <div className="message message--info">
                    Cargando PDF…
                  </div>
                )}

                {isClient && (
                  <Document
                    file={BOOK_CONFIG.PDF_URL}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={null} // manejamos el loading arriba
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      renderTextLayer
                      renderAnnotationLayer={false}
                    />
                  </Document>
                )}
              </>
            )}
          </section>

          <footer className="footer">
            <p>
              Visor simple tipo “flipbook”. Se puede mejorar con animaciones de
              cambio de página (deslizamiento, efecto libro, etc.) más adelante.
            </p>
          </footer>
        </main>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            sans-serif;
          background: #0b0b10;
        }

        .page {
          display: flex;
          min-height: 100vh;
          color: #f5f5f5;
          background: radial-gradient(circle at top left, #1f2933 0, #020617 60%);
        }

        .sidebar {
          width: 280px;
          padding: 20px;
          border-right: 1px solid rgba(148, 163, 184, 0.25);
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sidebar-header {
          border-bottom: 1px solid rgba(148, 163, 184, 0.3);
          padding-bottom: 12px;
        }

        .book-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .book-subtitle {
          margin: 4px 0 0;
          font-size: 0.8rem;
          color: #9ca3af;
        }

        .sidebar-section-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #9ca3af;
          margin: 0 0 8px;
        }

        .chapter-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chapter-btn {
          width: 100%;
          border: none;
          border-radius: 999px;
          padding: 6px 10px;
          background: transparent;
          color: #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
        }

        .chapter-btn:hover {
          background: rgba(148, 163, 184, 0.15);
          transform: translateX(2px);
        }

        .chapter-btn--active {
          background: linear-gradient(90deg, #38bdf8, #6366f1);
          color: #0b1120;
          font-weight: 600;
        }

        .chapter-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 8px;
        }

        .chapter-page {
          font-variant-numeric: tabular-nums;
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .sidebar-footer {
          margin-top: auto;
          font-size: 0.75rem;
          color: #9ca3af;
          border-top: 1px solid rgba(148, 163, 184, 0.3);
          padding-top: 10px;
        }

        .hint {
          margin: 0;
          line-height: 1.4;
        }

        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.25);
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 0.95),
            rgba(15, 23, 42, 0.6)
          );
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .toolbar-left,
        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .toolbar button {
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.6);
          background: rgba(15, 23, 42, 0.9);
          color: #e5e7eb;
          padding: 4px 10px;
          font-size: 0.8rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: background 0.15s ease, transform 0.1s ease,
            border-color 0.15s ease;
        }

        .toolbar button:hover:enabled {
          background: rgba(37, 99, 235, 0.25);
          border-color: #60a5fa;
          transform: translateY(-1px);
        }

        .toolbar button:disabled {
          opacity: 0.4;
          cursor: default;
        }

        .page-indicator {
          font-size: 0.8rem;
          color: #d1d5db;
          padding-left: 6px;
        }

        .zoom-label {
          font-size: 0.8rem;
          min-width: 3ch;
          text-align: center;
        }

        .viewer-container {
          flex: 1;
          overflow: auto;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .viewer-container :global(canvas) {
          box-shadow: 0 22px 45px rgba(15, 23, 42, 0.9);
          border-radius: 8px;
        }

        .message {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          max-width: 420px;
          margin: 40px auto;
        }

        .message--info {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.5);
        }

        .message--error {
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(248, 113, 113, 0.7);
        }

        .footer {
          padding: 10px 16px 14px;
          border-top: 1px solid rgba(148, 163, 184, 0.25);
          font-size: 0.75rem;
          color: #9ca3af;
          background: rgba(15, 23, 42, 0.85);
        }

        /* Responsivo básico */
        @media (max-width: 900px) {
          .page {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid rgba(148, 163, 184, 0.25);
          }

          .sidebar-header {
            text-align: center;
          }

          .chapter-btn {
            border-radius: 12px;
          }

          .toolbar {
            position: static;
          }
        }
      `}</style>
    </>
  )
}
