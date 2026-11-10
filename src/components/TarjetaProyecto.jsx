import { Link } from "react-router";

export default function TarjetaProyecto({ trabajo }) {
  return (
    <article className="project-card">
      <Link
        className={`project-art project-art--${trabajo.arte}`}
        to={`/proyecto/${trabajo.id}`}
        aria-label={`Ver concepto de ${trabajo.titulo}`}
      >
        <span className="project-art-label">{trabajo.nombreVisual}</span>
        <span className="concept-label">Concepto ficticio</span>
      </Link>
      <div className="project-card-body">
        <span className="project-category">{trabajo.categoria}</span>
        <h3>
          <Link className="project-title-link" to={`/proyecto/${trabajo.id}`}>
            {trabajo.titulo}
          </Link>
        </h3>
        <p>{trabajo.descripcion}</p>
        <ul className="tag-list" aria-label="Tecnologías">
          {trabajo.tecnologias.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
        <div className="project-card-links">
          <a
            className="text-link"
            href={trabajo.repositorio}
            target="_blank"
            rel="noreferrer"
          >
            Repositorio (ejemplo)
          </a>
          <a
            className="text-link"
            href={trabajo.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo (ejemplo)
          </a>
        </div>
      </div>
    </article>
  );
}
