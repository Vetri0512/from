import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { IntlProvider } from 'react-intl';
import English from "./Languages/en.json"

// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale='en' messages={English}>

    <App />
    </IntlProvider>
  </StrictMode>,
)
