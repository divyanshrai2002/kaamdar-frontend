import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import RoleCard from './RoleCard'
import CustomerView from './CustomerView'
import WorkerView from './WorkerView'

const serviceChips = ['Electrician', 'Plumber', 'Painter', 'Cleaner', 'AC repair', 'Cook']

export default function Landing() {
  const [view, setView] = useState('landing')
  const isAuthView = view !== 'landing'

  return (
    <div className={`app-shell${isAuthView ? ' app-shell--auth' : ''}`}>
      <Header onLogin={() => setView('customer-login')} />

      <main className={`page-content${isAuthView ? ' page-content--auth' : ''}`}>
        {view === 'landing' && (
          <section className="landing-page">
            <div className="landing-hero">
              <p className="hero-eyebrow">Serving 40+ localities near you</p>
              <h1>
                Trusted help for every home job
              </h1>
              <p>
                Verified electricians, plumbers, cleaners and cooks - booked in minutes, or find your next job.
              </p>
              <div className="finder">
                <input type="search" placeholder="What do you need help with?" aria-label="Search for a service" />
                <button type="button" className="finder-go" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4.35-4.35" />
                  </svg>
                </button>
              </div>

              <div className="service-chips">
                {serviceChips.map((chip) => (
                  <span key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <p className="continue-label">Continue as</p>

            <div className="role-grid">
              <RoleCard
                title="I need a worker"
                subtitle="Search nearby professionals, compare price and ratings, and book in minutes."
                onClick={() => setView('customer-register')}
                variant="customer"
              />
              <RoleCard
                title="I provide services"
                subtitle="Get discovered by customers nearby, set your own rate, and grow your work."
                onClick={() => setView('worker-register')}
                variant="worker"
              />
            </div>

            <section className="trust" aria-label="Kaamsathi statistics">
              <div className="trust-item">
                <strong>12k+</strong>
                <span>Verified pros</span>
              </div>
              <div className="trust-item">
                <strong>4.7</strong>
                <span>Avg. rating</span>
              </div>
              <div className="trust-item">
                <strong>40+</strong>
                <span>Localities</span>
              </div>
            </section>
          </section>
        )}

        {view.startsWith('customer') && (
          <CustomerView
            key={view}
            initialTab={view === 'customer-login' ? 'login' : 'register'}
            onBack={() => setView('landing')}
          />
        )}
        {view.startsWith('worker') && (
          <WorkerView
            key={view}
            initialTab={view === 'worker-login' ? 'login' : 'register'}
            onBack={() => setView('landing')}
          />
        )}
      </main>

      {!isAuthView && <Footer />}
    </div>
  )
}
