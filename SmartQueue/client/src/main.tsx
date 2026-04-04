import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //react-dom/client is used to create the root element
import './index.css'
import App from './App.tsx'//import the App component

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
