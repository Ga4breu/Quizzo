import React, { useState, useEffect } from 'react';
import Questions from './components/Questions';

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

  return (
    <div className="App min-h-screen flex flex-col">
      <header className="w-[80%] mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-b-3xl">
      <h1 className="text-3xl font-bold text-white text-center">Welcome to Quizzo!</h1>
      <p className="text-sm font-bold text-white text-center mt-4">The questions will be reset in:</p>
        <div className="text-center text-white font-bold">
          {Object.keys(timeLeft).length ? (
            Object.keys(timeLeft).map((interval, i) => (
              <span key={i}>
                {timeLeft[interval]}{interval}{" "}
              </span>
            ))
          ) : (
            <span>Time's up!</span>
          )}
        </div>
      </header>
      <div className="flex-grow">
        <Questions />
      </div>
    </div>
  );
}

export default App;
