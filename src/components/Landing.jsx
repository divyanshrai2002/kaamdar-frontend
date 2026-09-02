import React, { useState } from 'react'
import Header from './Header'
import RoleCard from './RoleCard'
import CustomerView from './CustomerView'
import WorkerView from './WorkerView'

export default function Landing() {
  const [view, setView] = useState('landing')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header onLogin={() => setView('customer')} />

      <main className="max-w-3xl mx-auto p-6">
        {view === 'landing' && (
          <section className="text-center mb-8">
            <div className="flex flex-col items-center gap-3 mb-6 mt-10">
              <div className="w-40 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="w-32 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="w-24 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold mb-3">Trusted help for every home job</h1>
            <p className="text-lg text-gray-500 mb-8">Find a verified electrician, plumber, cleaner or cook nearby — or get work as a skilled professional.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <RoleCard
                title="I need a worker"
                subtitle="Search nearby professionals, compare price and ratings, and book in minutes."
                onClick={() => setView('customer')}
                variant="customer"
              />
              <RoleCard
                title="I provide services"
                subtitle="Get discovered by customers nearby, set your own rate, and grow your work."
                onClick={() => setView('worker')}
                variant="worker"
              />
            </div>
          </section>
        )}

        {view === 'customer' && <CustomerView onBack={() => setView('landing')} />}
        {view === 'worker' && <WorkerView onBack={() => setView('landing')} />}
      </main>
    </div>
  )
}
