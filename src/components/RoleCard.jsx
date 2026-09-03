function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.35-4.35" />
      <path d="M8.5 11h5" />
    </svg>
  )
}

function BriefcaseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
    </svg>
  )
}

const cardTheme = {
  customer: {
    iconWrap: 'role-card__icon role-card__icon--customer',
    button: 'role-card__button role-card__button--customer',
    cta: 'Continue as customer',
    Icon: SearchIcon,
  },
  worker: {
    iconWrap: 'role-card__icon role-card__icon--worker',
    button: 'role-card__button role-card__button--worker',
    cta: 'Continue as worker',
    Icon: BriefcaseIcon,
  },
}

export default function RoleCard({ title, subtitle, onClick, variant = 'customer' }) {
  const theme = cardTheme[variant]
  const Icon = theme.Icon

  return (
    <article className={`role-card role-card--${variant}`}>
      <div className="role-card__content">
        <div className={theme.iconWrap}>
          <Icon className="role-card__icon-svg" />
        </div>

        <p className="role-card__label">{variant === 'customer' ? 'For your home' : 'Grow your work'}</p>
        <h3>{title}</h3>
        <p className="role-card__description">{subtitle}</p>
      </div>

      <button
        type="button"
        onClick={onClick}
        className={theme.button}
      >
        {theme.cta}
      </button>
    </article>
  )
}
