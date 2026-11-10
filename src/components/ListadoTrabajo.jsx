import trabajos from "../data/trabajos";
import TarjetaProyecto from "./TarjetaProyecto";

export default function ListadoTrabajos({ limite }) {
  const proyectos = typeof limite === "number"
    ? trabajos.slice(0, limite)
    : trabajos;

  return (
    <div className="project-grid">
      {proyectos.map((trabajo) => (
        <TarjetaProyecto key={trabajo.id} trabajo={trabajo} />
      ))}
    </div>
  );
}
