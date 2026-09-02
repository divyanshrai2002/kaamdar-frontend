// import React from 'react'

export default function RoleCard({ title, subtitle, onClick, variant = 'customer' }) {
  const bg = variant === 'customer' ? 'bg-indigo-50' : 'bg-yellow-50'
  const accent = variant === 'customer' ? 'text-indigo-600' : 'text-yellow-600'

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg p-6 ${bg} flex flex-col`}> 
      <div className="flex flex-col items-center mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-white shadow-sm">
          <div className={`${accent} text-2xl`}>{variant === 'customer' ? '🔎' : '🧰'}</div>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="mt-auto">
        <button
          type="button"
          onClick={onClick}
          className={`w-full py-3 rounded-full text-sm font-medium appearance-none border-0 focus:outline-none transition-colors ${
            variant === 'customer'
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-yellow-500 hover:bg-yellow-600 text-white'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
