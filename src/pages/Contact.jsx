export default function Contact() {
  return (
    <section className="page-shell page-section">
      <span className="eyebrow">Contato</span>
      <h1 className="section-heading">Vamos conversar</h1>
      <p className="section-intro">
        Estou aberto a oportunidades, projetos freelance e colaborações.
      </p>
      <div className="contact-grid">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="surface-panel contact-link"
        >
          <strong>LinkedIn ↗</strong>
          <span>Conecte-se comigo</span>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="surface-panel contact-link"
        >
          <strong>GitHub ↗</strong>
          <span>Veja meus projetos</span>
        </a>
        <a href="mailto:seuemail@email.com" className="surface-panel contact-link">
          <strong>E-mail →</strong>
          <span>Entre em contato direto</span>
        </a>
      </div>
    </section>
  );
}
