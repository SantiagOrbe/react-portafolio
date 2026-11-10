export default function Contacto() {
  return (
    <div className="page">
      <header className="page-intro compact">
        <h1 className="page-title">Contacto</h1>
        <p>
          ¿Tienes una idea o una pregunta? Cuéntame un poco sobre lo que
          necesitas.
        </p>
      </header>
      <section className="contact-panel" aria-label="Formulario de contacto">
        <p className="form-note">
          Este formulario es una muestra visual y todavía no envía mensajes.
        </p>
        <div className="contact-form">
          <label htmlFor="contact-name">
            Nombre
            <input id="contact-name" name="name" type="text" autoComplete="name" />
          </label>
          <label htmlFor="contact-email">
            Correo electrónico
            <input id="contact-email" name="email" type="email" autoComplete="email" />
          </label>
          <label htmlFor="contact-message">
            Mensaje
            <textarea id="contact-message" name="message" />
          </label>
          <button className="button button-primary" type="button" disabled>
            Envío no disponible aún
          </button>
        </div>
      </section>
    </div>
  )
}
