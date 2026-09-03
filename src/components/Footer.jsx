export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__about">
          <div className="site-footer__brand-row">
            <span className="site-footer__mark" aria-hidden="true">K</span>
            <strong>Kaamsathi</strong>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#workers">For workers</a>
          <a href="mailto:support@kaamsathi.com">Support</a>
        </nav>

        <div className="site-footer__help">
          <a href="mailto:support@kaamsathi.com">Need help? Support</a>
        </div>

        <div className="site-footer__bottom">
          <span>Verified professionals</span>
          <span>Copyright 2026 Kaamsathi</span>
        </div>
      </div>
    </footer>
  )
}
