import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { LanguageContextProvider } from './context/languageContext';
import router from './Router';
import './index.css'
import App from './components/App/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContextProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </LanguageContextProvider>
  </StrictMode>,
)
