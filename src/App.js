import React, { createContext, useState, useEffect, useContext } from 'react';
import Navbar from './components/NavBar';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'zh' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="App">
        <Navbar />
        <main className="container mt-4">
          <About />
          <Courses />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;