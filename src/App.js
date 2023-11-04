import React, { useState, useEffect } from 'react';
import Questions from './components/Questions';
import translations from './components/Translations';

function App() {
  const calculateTimeLeft = () => {
    // Set the countdown to 24 hours from now
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const difference = +tomorrow - +now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });
  // New state for language selection
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'pt' : 'en'));
  };

  // Translations based on the selected language
  const { headerTitle, headerSubtitle, timesUp } = translations[language];

  return (
    <div className="App min-h-screen flex flex-col">
      <header className="w-[80%] mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-b-3xl relative">
        {/* Toggle switch container */}
        <div className="absolute top-6 right-6">
          {/* Toggle Switch */}
          <label htmlFor="lang-toggle" className="flex items-center cursor-pointer">
            {/* Toggle Line */}
            <div className="relative">
              <input type="checkbox" id="lang-toggle" className="sr-only" checked={language === 'pt'} onChange={toggleLanguage} />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out ${language === 'pt' ? 'translate-x-6' : ''}`}></div>
            </div>
            {/* Flags */}
            <span className="flex items-center ml-3">
              <span className="block w-6 h-6">
                {language === 'en' ? '🇧🇷' : '🇺🇸'}
              </span>
            </span>
          </label>
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white text-center">{headerTitle}</h1>
          <p className="text-sm font-bold text-white text-center mt-4">{headerSubtitle}</p>
        </div>

        {/* Countdown Timer */}
        <div className="text-center text-white font-bold mt-4">
          {Object.keys(timeLeft).length ? (
            Object.keys(timeLeft).map((interval, i) => (
              <span key={i}>
                {timeLeft[interval]}{interval}{" "}
              </span>
            ))
          ) : (
            <span>{timesUp}</span>
          )}
        </div>
      </header>
      <main className="flex-grow">
      <Questions language={language} />
      </main>
    </div>
  );
}
export default App;