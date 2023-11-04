import React, { useState, useEffect } from 'react';
import seedrandom from 'seedrandom'; // You'll need to install the seedrandom package
import questionsData from './questionsdata'; // Ensure this path is correct
import Modal from './Modal'; // Update with the correct path to your Modal component

function Questions() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    // Generate a seed based on the current date
    const today = new Date();
    const seed = today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString();

    // Seed the random number generator
    const rng = seedrandom(seed);
    
    // Custom shuffle function that uses the seeded RNG
    function seededShuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(rng() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // Shuffle the questions array with the seeded RNG and take the first 5 questions
    setRandomQuestions(seededShuffle([...questionsData]).slice(0, 5));
  }, []);

const handleAnswer = (answer, questionId) => {
  setSelectedAnswers((prevSelectedAnswers) => {
    const updatedAnswers = {
      ...prevSelectedAnswers,
      [questionId]: answer
    };

    // Check if all questions have been answered
    if (Object.keys(updatedAnswers).length === randomQuestions.length) {
      let newScore = 0;
      randomQuestions.forEach((question) => {
        if (updatedAnswers[question.id]?.isCorrect) {
          newScore += 1;
        }
      });

      // Update score, set quiz as completed, and show the modal
      setScore(newScore);
      setCompleted(true); // this was missing
      console.log(completed);
    }

    return updatedAnswers;
  });
};

  const handleCloseModal = () => {
    setShowModal(false);
    setCompleted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md mx-auto">
        {randomQuestions.map((question) => (
          <div key={question.id} className="mb-8">
            <h1 className="text-lg font-bold mb-4">{question.title}</h1>
            <div className="flex flex-col">
              {question.answers.map((answer) => {
                const isSelected = selectedAnswers[question.id]?.id === answer.id;
                let buttonClasses = 'text-white p-2 rounded my-2 transition duration-300';
                if (isSelected) {
                  buttonClasses += selectedAnswers[question.id]?.isCorrect ? ' bg-green-500' : ' bg-red-500';
                } else {
                  buttonClasses += ' bg-blue-500 hover:bg-blue-700';
                }

                return (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(answer, question.id)}
                    className={buttonClasses}
                    disabled={isSelected}
                  >
                    {answer.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal score={score} total={randomQuestions.length} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Questions;
