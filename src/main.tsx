import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './app.css' // <-- CERTIFIQUE-SE DE QUE ESTA LINHA EXISTE E APONTA PARA O SEU ARQUIVO COM O @import "tailwindcss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)