import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/ThemeContext.jsx'
import App from './App.jsx'
import { ToastProvider } from './components/Notification.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>

    <App />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
