import ListadoTrabajos from "./ListadoTrabajo";

export default function Portafolio() {
  return (
    <div>
      <header className="page-intro compact">
        <h1 className="page-title">Proyectos</h1>
        <p>
          Una selección de conceptos ficticios para mostrar enfoques de
          diseño y desarrollo. No representan trabajos publicados.
        </p>
      </header>
      <ListadoTrabajos />
    </div>
  )
}
