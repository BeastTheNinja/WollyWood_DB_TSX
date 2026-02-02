import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/tailwind.css'
import { Routing } from './router/Routes.tsx'
import { AuthContextProvider } from './components/context/AuthContextProvider.tsx'
import { DarkModeProvider } from './components/context/darkmodeContextProvider.tsx'

// Main entry point - renders the app with context providers
// DarkModeProvider wraps AuthContextProvider to provide dark mode functionality
// AuthContextProvider provides user authentication state throughout the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </DarkModeProvider>
  </StrictMode>,
)
