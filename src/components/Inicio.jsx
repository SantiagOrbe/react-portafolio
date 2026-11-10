import { Link } from "react-router";
import ListadoTrabajos from "./ListadoTrabajo";

export default function Inicio() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 id="home-title">Diseño y desarrollo web con intención.</h1>
          <p>
            Soy Santiago, desarrollador web. Este espacio reúne conceptos de
            proyectos y servicios para crear experiencias digitales claras,
            útiles y accesibles.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/portafolio">
              Explorar proyectos
            </Link>
            <Link className="button button-secondary" to="/contacto">
              Contactar
            </Link>
          </div>
        </div>

        <div className="hero-console" aria-hidden="true">
          <div className="console-window">
            <div className="console-top">
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-title">portfolio.jsx</span>
            </div>
            <code className="console-code">
              <span className="code-key">const</span> enfoque = {"{"}
              {"\n"}  diseño: <span className="code-value">"claro"</span>,
              {"\n"}  código: <span className="code-value">"cuidado"</span>,
              {"\n"}  impacto: <span className="code-value">"útil"</span>
              {"\n"}{"}"}
            </code>
          </div>
        </div>
      </section>

      <section className="home-projects" aria-labelledby="featured-title">
        <div className="section-heading">
          <h2 id="featured-title">Proyectos de muestra</h2>
          <p>
            Ejercicios conceptuales para explorar distintas necesidades y
            soluciones digitales.
          </p>
        </div>
        <ListadoTrabajos limite={2} />
      </section>
    </div>
  )
}
