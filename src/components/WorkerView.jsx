import React, { useState } from 'react'

export default function WorkerView({ onBack }) {
  const [tab, setTab] = useState('register')

  return (
    <div className="max-w-sm mx-auto">
      <button onClick={onBack} className="mb-4 text-sm text-gray-600">← Back</button>

      <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center mx-auto mb-4">
        <div className="text-yellow-600 text-xl">🧰</div>
      </div>

      <h2 className="text-lg font-medium text-center mb-1">Worker account</h2>
      <p className="text-sm text-gray-500 text-center mb-4">Get matched with nearby jobs.</p>

      <div className="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-4">
        <button onClick={() => setTab('register')} className={`flex-1 py-2 text-sm ${tab === 'register' ? 'bg-yellow-100 text-yellow-700' : ''}`}>Register</button>
        <button onClick={() => setTab('login')} className={`flex-1 py-2 text-sm ${tab === 'login' ? 'bg-yellow-100 text-yellow-700' : ''}`}>Log in</button>
      </div>

      {tab === 'register' ? (
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Full name</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="Rahul Kumar" />
          <label className="text-sm text-gray-600">Phone number</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="+91 98xxxxxx21" />
          <label className="text-sm text-gray-600">Service category</label>
          <select className="w-full border border-gray-200 rounded-md p-2">
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Carpenter</option>
            <option>Painter</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input className="border border-gray-200 rounded-md p-2" placeholder="Experience (yrs)" />
            <input className="border border-gray-200 rounded-md p-2" placeholder="Rate (Rs./hr)" />
          </div>
          <button className="w-full py-2 rounded-md bg-yellow-500 text-white">Submit for verification</button>
          <p className="text-xs text-gray-500 text-center">Our team verifies your profile before it goes live.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="text-sm text-gray-600">Phone number</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="+91 98xxxxxx21" />
          <label className="text-sm text-gray-600">OTP</label>
          <input className="w-full border border-gray-200 rounded-md p-2" placeholder="4-digit code" />
          <button className="w-full py-2 rounded-md bg-yellow-500 text-white">Log in</button>
        </div>
      )}
    </div>
  )
}
