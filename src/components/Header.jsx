function ToolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 12 6-6M4 12l6 6M4 12h10m6 0-6-6m6 6-6 6" />
    </svg>
  )
}

export default function Header({ onLogin }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <div className="brand__icon" aria-hidden="true">
            <ToolIcon />
          </div>
          <span>Kaamsathi</span>
        </div>

        <button
          type="button"
          onClick={onLogin}
          className="login-button"
        >
          Log in
        </button>
      </div>
    </header>
  )
}
