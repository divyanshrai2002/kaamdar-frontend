export default function Footer({ language = 'en', translations }) {
  const t = translations[language]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__about">
          <div className="site-footer__brand-row">
            <span className="site-footer__mark" aria-hidden="true">K</span>
            <strong>{t.brand}</strong>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#services">{t.footerServices}</a>
          <a href="#workers">{t.footerForWorkers}</a>
          <a href="mailto:support@kaamsathi.com">{t.footerSupport}</a>
        </nav>

        <div className="site-footer__help">
          <a href="mailto:support@kaamsathi.com">{t.footerNeedHelp}</a>
        </div>

        <div className="site-footer__bottom">
          <span>{t.footerVerified}</span>
          <span>{t.footerCopyright}</span>
        </div>
      </div>
    </footer>
  )
}
