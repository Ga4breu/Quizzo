import React, { useState, useEffect } from 'react';
import seedrandom from 'seedrandom';
import questionsData from './questionsdata';
import questoesData from './questoesdata';
import Modal from './Modal';

function Questions({ language }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    const today = new Date();
    const seed = today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString();
    const rng = seedrandom(seed);

    function seededShuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(rng() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    // Use a single questions array, regardless of language
    const combinedQuestions = questionsData.map((q) => {
      const translation = questoesData.find((qt) => qt.id === q.id);
      return {
        ...q,
        title: language === 'en' ? q.title : translation.title,
        answers: language === 'en' ? q.answers : translation.answers,
      };
    });

    setRandomQuestions(seededShuffle(combinedQuestions).slice(0, 5));
    setSelectedAnswers({});
    setScore(0);

  }, [language]);

  const handleAnswer = (answer, questionId) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = { ...prevSelectedAnswers, [questionId]: answer };
      if (Object.keys(updatedAnswers).length === randomQuestions.length) {
        let newScore = 0;
        randomQuestions.forEach((question) => {
          if (updatedAnswers[question.id]?.isCorrect) {
            newScore += 1;
          }
        });
        setScore(newScore);
        setCompleted(true);
        setShowModal(true);
        console.log(completed)
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
        <Modal
          score={score}
          total={randomQuestions.length}
          onClose={handleCloseModal}
          language={language}
        />
      )}
    </div>
  );
}

export default Questions;
