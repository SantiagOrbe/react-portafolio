export default function Servicios() {
  return (
    <div className="page">
      <header className="page-intro compact">
        <h1 className="page-title">Servicios</h1>
        <p>
          Diseño y desarrollo web pensados para que cada interacción sea
          clara, rápida y útil.
        </p>
      </header>
      <section className="service-grid" aria-label="Servicios">
        <article className="service">
          <h2>Diseño de interfaces</h2>
          <p>
            Estructuras visuales claras que ayudan a las personas a encontrar
            lo que necesitan.
          </p>
        </article>
        <article className="service">
          <h2>Desarrollo web</h2>
          <p>
            Sitios y experiencias web adaptables, construidos con atención al
            rendimiento y al mantenimiento.
          </p>
        </article>
        <article className="service">
          <h2>Mejora de sitios</h2>
          <p>
            Revisión de contenido, accesibilidad y experiencia para detectar
            oportunidades de mejora.
          </p>
        </article>
      </section>
    </div>
  )
}
