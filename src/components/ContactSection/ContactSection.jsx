import { useEffect } from 'react';
import './_ContactSection.scss';
import { contact } from '../../utils/contact/contact';

export default function ContactSection() {
  useEffect(() => {
    contact();
  }, []);

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contáctame</h2>
      <p className="send-message">
        Envíame un mensaje si deseas trabajar conmigo.
        <br />
        <small>- Usa el formulario o titocristian.am@gmail.com -</small>
      </p>

      <div className="contact-container">
        <form
          className="contact-form"
          id="contact-form"
          action={`${import.meta.env.VITE_FORM_URL}/${
            import.meta.env.VITE_FORM_EMAIL
          }`}
          method="POST"
        >
          <div className="name-email-container">
            {/* <!-- Name --> */}
            <div className="input-name">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
              />
              <p className="error-name">
                Debes poner el nombre para que pueda dirigirme a ti en mi
                respuesta.
              </p>
            </div>

            {/* <!-- Email --> */}
            <div className="input-email">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu email"
              />
              <p className="error-email">
                Debes poner el email para que pueda responderte.
              </p>
            </div>
          </div>

          {/* <!-- Message --> */}
          <div className="message-container">
            <div className="input-message">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <p className="error-message">
              Debes poner el mensaje para saber la razón por la que me
              contactas.
            </p>
          </div>

          <div className="btn-submit">
            <p>Enviar</p>
          </div>

          {/* <!-- Special features --> */}
          <input
            type="hidden"
            name="_next"
            value="https://titoworld.dev/contact"
          />
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
        </form>
      </div>

      <div className="contact-popup-container">
        <div className="contact-popup"></div>
      </div>
    </section>
  );
}
