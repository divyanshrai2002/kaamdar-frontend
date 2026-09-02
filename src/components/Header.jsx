import React from 'react'

export default function Header({ onLogin }) {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 mb-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6" /></svg>
          </div>
          <span className="text-lg font-medium">Kaamsathi</span>
        </div>
        <button onClick={onLogin} className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">Log in</button>
      </div>
    </header>
  )
}
