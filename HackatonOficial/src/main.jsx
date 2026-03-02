import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './services/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
