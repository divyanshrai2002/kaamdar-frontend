
import { useState } from 'react'
import Landing from './components/Landing'
import { translations } from './i18n'

function App() {
  const [language, setLanguage] = useState('en')

  return <Landing language={language} setLanguage={setLanguage} translations={translations} />
}

export default App
