function ToolIcon() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 0 0 3.1 5.7l-7.8 7.8a1.5 1.5 0 0 1-2.1-2.1l7.8-7.8a4 4 0 0 0 5.7-3.1l-2.8 1.1-2.9-2.9 1-2.7Z" />
    </svg>
  )
}

export default function Header({ onLogin }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <div className="brand__icon">
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
