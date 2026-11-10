import { Link } from "react-router";

export default function Error() {
  return (
    <section className="not-found-panel" aria-labelledby="page-missing">
      <h1 className="page-title" id="page-missing">Página no encontrada</h1>
      <p>La dirección que buscas no existe o ha cambiado.</p>
      <Link className="button button-primary" to="/inicio">
        Ir al inicio
      </Link>
    </section>
  );
}
