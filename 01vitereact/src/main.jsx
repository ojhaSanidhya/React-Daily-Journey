import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// This jsx or js file are injected in index.html directly ->Vite
// Naming convention of function & file is only with first letter capital
