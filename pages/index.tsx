        <section id="registro" className="section">
          <div className="grid cols-2">
            <div>
              <h2>Registro al lanzamiento</h2>
              <p className="lede">
                Completa el formulario para confirmar tu asistencia y recibir información del
                lanzamiento.
              </p>

              {/* Google Form embebido */}
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
                  id="addCalendar"
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
