import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/tailwind.css'
import { Routing } from './router/Routes.tsx'
import { AuthContextProvider } from './components/context/AuthContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  </StrictMode>,
)
