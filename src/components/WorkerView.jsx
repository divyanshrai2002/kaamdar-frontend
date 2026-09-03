import { useState } from 'react'

export default function WorkerView({ onBack, initialTab = 'register', language = 'en', translations }) {
  const [tab, setTab] = useState(initialTab)
  const t = translations[language]

  return (
    <div className="auth-panel mx-auto max-w-md rounded-[2rem] border border-amber-100 bg-white/95 p-6 shadow-[0_20px_80px_-40px_rgba(245,158,11,0.45)] sm:p-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
      >
        ← {t.back}
      </button>

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M3 12h18" />
        </svg>
      </div>

      <h2 className="mb-1 text-center text-2xl font-semibold tracking-tight text-slate-800">{t.workerAccount}</h2>
      <p className="mb-6 text-center text-sm text-slate-500">{t.workerIntro}</p>

      <div className="mb-6 grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => setTab('register')}
          className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
            tab === 'register' ? 'bg-amber-100 text-amber-700' : 'text-slate-500'
          }`}
        >
          {t.register}
        </button>
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
            tab === 'login' ? 'bg-amber-100 text-amber-700' : 'text-slate-500'
          }`}
        >
          {t.loginTab}
        </button>
      </div>

      {tab === 'register' ? (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            {t.fullName}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder={language === 'hi' ? 'राहुल कुमार' : 'Rahul Kumar'} />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.email}
            <input type="email" className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="rahul@email.com" />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.phoneNumber}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="+91 98xxxxxx21" />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.serviceCategory}
            <select className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-300">
              <option>{language === 'hi' ? 'इलेक्ट्रीशियन' : 'Electrician'}</option>
              <option>{language === 'hi' ? 'प्लंबर' : 'Plumber'}</option>
              <option>{language === 'hi' ? 'कारपेंटर' : 'Carpenter'}</option>
              <option>{language === 'hi' ? 'पेंटर' : 'Painter'}</option>
              <option>{language === 'hi' ? 'श्रमिक' : 'labour'}</option>
            </select>
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-600">
              {t.experience}
              <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="6" />
            </label>
            <label className="block text-sm font-medium text-slate-600">
              {t.rate}
              <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="300" />
            </label>
          </div>
          <button type="button" className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">
            {t.sendOtp}
          </button>
          <p className="text-center text-xs text-slate-500">{t.verificationNote}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            {t.email}
            <input type="email" className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="you@example.com" />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.password}
            <input type="password" className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-300" placeholder="••••••••" />
          </label>
          <button type="button" className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">
            {t.loginTab}
          </button>
        </div>
      )}
    </div>
  )
}
