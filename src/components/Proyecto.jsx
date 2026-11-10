import { Link, useParams } from "react-router";
import trabajos from "../data/trabajos";

export default function Proyecto() {
  const params = useParams()
  const proyecto = trabajos.find(trabajo => String(trabajo.id) === params.id);

  if (!proyecto) {
    return (
      <section className="not-found-panel" aria-labelledby="project-missing">
        <h1 className="page-title" id="project-missing">No encontramos ese proyecto</h1>
        <p>Puede que el enlace no sea válido o que el concepto ya no esté disponible.</p>
        <Link className="button button-primary" to="/portafolio">
          Volver a proyectos
        </Link>
      </section>
    );
  }

  return (
    <div className="page page-work">
      <div
        className={`project-art project-art--${proyecto.arte} detail-art`}
        aria-label={`Imagen conceptual de ${proyecto.titulo}`}
        role="img"
      >
        <span className="project-art-label">{proyecto.nombreVisual}</span>
        <span className="concept-label">Concepto ficticio</span>
      </div>
      <header className="page-intro compact">
        <span className="project-category">{proyecto.categoria}</span>
        <h1 className="page-title">{proyecto.titulo}</h1>
        <p>{proyecto.descripcionLarga}</p>
        <ul className="tag-list" aria-label="Tecnologías">
          {proyecto.tecnologias.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="text-link" href={proyecto.repositorio} target="_blank" rel="noreferrer">
            Repositorio de ejemplo
          </a>
          <a className="text-link" href={proyecto.demo} target="_blank" rel="noreferrer">
            Demo de ejemplo
          </a>
        </div>
      </header>
    </div>
  )
} 
