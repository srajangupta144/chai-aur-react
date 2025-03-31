import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* to understand the flow chai is imported and used */}
    <Chai />                                        
  </StrictMode>,
)
