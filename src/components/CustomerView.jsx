import React, { useState } from 'react'

export default function CustomerView({ onBack }) {
  const [tab, setTab] = useState('register')

  return (
    <div className="max-w-sm mx-auto">
      <button onClick={onBack} className="mb-4 text-sm text-gray-600">← Back</button>

      <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
        <div className="text-indigo-600 text-xl">🔎</div>
      </div>

      <h2 className="text-lg font-medium text-center mb-1">Customer account</h2>
      <p className="text-sm text-gray-500 text-center mb-4">Find and book trusted workers nearby.</p>

      <div className="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-4">
        <button onClick={() => setTab('register')} className={`flex-1 py-2 text-sm ${tab === 'register' ? 'bg-indigo-100 text-indigo-700' : ''}`}>Register</button>
        <button onClick={() => setTab('login')} className={`flex-1 py-2 text-sm ${tab === 'login' ? 'bg-indigo-100 text-indigo-700' : ''}`}>Log in</button>
      </div>

      {tab === 'register' ? (
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Full name</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="Priya Nair" />
          <label className="text-sm text-gray-600">Phone number</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="+91 98xxxxxx21" />
          <label className="text-sm text-gray-600">Home address</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="Sector 14, Gurugram" />
          <button className="w-full py-2 rounded-md bg-indigo-600 text-white">Create account</button>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Phone number</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="+91 98xxxxxx21" />
          <label className="text-sm text-gray-600">OTP</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="4-digit code" />
          <button className="w-full py-2 rounded-md bg-indigo-600 text-white">Log in</button>
        </div>
      )}
    </div>
  )
}
