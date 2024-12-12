import { useState, useEffect, useRef } from 'react';

import { LanguageContextProvider } from '../../context/languageContext';
import Events from '../Events/Events';
import Blog from "../Blog/Blog";
import './App.css'



function App() {
  
  return (
    <LanguageContextProvider>
      <Blog />
    </LanguageContextProvider>
  )
}

export default App
