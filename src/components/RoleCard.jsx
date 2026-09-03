function SearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m3 11 9-8 9 8" />
      <path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" />
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
      <div className="role-card__top">
        <div className={theme.iconWrap}>
          <Icon className="role-card__icon-svg" />
        </div>
        <span className="role-card__tag">{variant === 'customer' ? 'Customer' : 'Professional'}</span>
      </div>

      <div className="role-card__content">
        <h3>{title}</h3>
        <p className="role-card__description">{subtitle}</p>
      </div>

      <button
        type="button"
        onClick={onClick}
        className={theme.button}
      >
        <span>{theme.cta}</span>
        <svg className="role-card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </button>
    </article>
  )
}
