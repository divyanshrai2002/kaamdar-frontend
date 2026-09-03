import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import RoleCard from './RoleCard'
import CustomerView from './CustomerView'
import WorkerView from './WorkerView'

const serviceChips = ['Electrician', 'Plumber', 'Painter', 'Cleaner', 'AC repair']

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
              <h1>
                Trusted help for every home job
              </h1>
              <p>
                Find a verified electrician, plumber, cleaner or cook nearby - or get work as a skilled professional.
              </p>

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
