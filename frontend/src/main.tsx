import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/tailwind.css'
import { Routing } from './router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
