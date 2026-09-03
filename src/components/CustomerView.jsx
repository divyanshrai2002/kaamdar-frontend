import { useState } from 'react'

export default function CustomerView({ onBack, initialTab = 'register', language = 'en', translations }) {
  const [tab, setTab] = useState(initialTab)
  const t = translations[language]

  return (
    <div className="auth-panel mx-auto max-w-md rounded-[2rem] border border-indigo-100 bg-white/95 p-6 shadow-[0_20px_80px_-40px_rgba(79,70,229,0.45)] sm:p-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
      >
        ← {t.back}
      </button>

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.35-4.35" />
          <path d="M8.5 11h5" />
        </svg>
      </div>

      <h2 className="mb-1 text-center text-2xl font-semibold tracking-tight text-slate-800">{t.customerAccount}</h2>
      <p className="mb-6 text-center text-sm text-slate-500">{t.customerIntro}</p>

      <div className="mb-6 grid grid-cols-2 rounded-2xl border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => setTab('register')}
          className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
            tab === 'register' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'
          }`}
        >
          {t.register}
        </button>
        <button
          type="button"
          onClick={() => setTab('login')}
          className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
            tab === 'login' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'
          }`}
        >
          {t.loginTab}
        </button>
      </div>

      {tab === 'register' ? (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            {t.fullName}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={language === 'hi' ? 'प्रिय नायर' : 'Priya Nair'} />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.phoneNumber}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="+91 98xxxxxx21" />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.homeAddress}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={language === 'hi' ? 'सेक्टर 14, गुरुग्राम' : 'Sector 14, Gurugram'} />
          </label>
          <button type="button" className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            {t.createAccount}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            {t.phoneNumber}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="+91 98xxxxxx21" />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            {t.otp}
            <input className="mt-1.5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder={t.fourDigitCode} />
          </label>
          <button type="button" className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            {t.loginTab}
          </button>
        </div>
      )}
    </div>
  )
}
