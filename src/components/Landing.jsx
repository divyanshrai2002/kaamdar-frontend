import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import RoleCard from './RoleCard'
import CustomerView from './CustomerView'
import WorkerView from './WorkerView'

export default function Landing({ language = 'en', setLanguage, translations }) {
  const [view, setView] = useState('landing')
  const isAuthView = view !== 'landing'
  const t = translations[language]

  return (
    <div className={`app-shell${isAuthView ? ' app-shell--auth' : ''}`}>
      <Header
        onLogin={() => setView('customer-login')}
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />

      <main className={`page-content${isAuthView ? ' page-content--auth' : ''}`}>
        {view === 'landing' && (
          <section className="landing-page">
            <div className="landing-hero">
              <p className="hero-eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <div className="finder">
                <input type="search" placeholder={t.searchPlaceholder} aria-label="Search for a service" />
                <button type="button" className="finder-go" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4.35-4.35" />
                  </svg>
                </button>
              </div>

              <div className="service-chips">
                {t.serviceChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>

            <p className="continue-label">{t.continueAs}</p>

            <div className="role-grid">
              <RoleCard
                title={t.customerRoleTitle}
                subtitle={t.customerRoleSubtitle}
                onClick={() => setView('customer-register')}
                variant="customer"
                tag={t.customerTag}
                cta={t.customerRoleCta}
              />
              <RoleCard
                title={t.workerRoleTitle}
                subtitle={t.workerRoleSubtitle}
                onClick={() => setView('worker-register')}
                variant="worker"
                tag={t.workerTag}
                cta={t.workerRoleCta}
              />
            </div>

            <section className="trust" aria-label="Kaamsathi statistics">
              <div className="trust-item">
                <strong>12k+</strong>
                <span>{t.verifiedPros}</span>
              </div>
              <div className="trust-item">
                <strong>4.7</strong>
                <span>{t.avgRating}</span>
              </div>
              <div className="trust-item">
                <strong>40+</strong>
                <span>{t.localities}</span>
              </div>
            </section>
          </section>
        )}

        {view.startsWith('customer') && (
          <CustomerView
            key={view}
            initialTab={view === 'customer-login' ? 'login' : 'register'}
            onBack={() => setView('landing')}
            language={language}
            translations={translations}
          />
        )}
        {view.startsWith('worker') && (
          <WorkerView
            key={view}
            initialTab={view === 'worker-login' ? 'login' : 'register'}
            onBack={() => setView('landing')}
            language={language}
            translations={translations}
          />
        )}
      </main>

      {!isAuthView && <Footer language={language} translations={translations} />}
    </div>
  )
}
