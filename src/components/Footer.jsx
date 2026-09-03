export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <div className="site-footer__brand-row">
            <span className="site-footer__mark">K</span>
            <p className="site-footer__brand">Kaamsathi</p>
          </div>
          <p className="site-footer__tagline">A simpler way to find trusted local help.</p>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#workers">For workers</a>
          <a href="mailto:support@kaamsathi.com">Support</a>
        </nav>

        <p className="site-footer__copyright">© 2026 Kaamsathi. Built for local communities.</p>
      </div>
    </footer>
  )
}
