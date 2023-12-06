'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import quizData  from './quizData.json';

async function getData() {
  const res = await fetch('http://localhost:3000/api/v1/elearning')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = () => {
    if (selectedOption) {
      setUserAnswers([...userAnswers.slice(0, currentQuestion), selectedOption]);

      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null); // Reset selected option after moving to the next question
      } else {
        setShowResults(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === quizData[index].correctAnswer
  );
  const score = (correctAnswers.length / quizData.length) * 100;
  const passed = score >= 60;


  return (
    <div className="flex justify-center items-center">
      {showResults ? (
        <div className='px-36 py-36'>
          <h1 className="text-3xl font-bold mb-4 ">Quiz Resultaat</h1>
          <ul>
            {quizData.map((question, index) => (
              <li key={index} className="mb-2">
                <strong>{question.question}</strong>
                <div>
                  Uw antwoord: {userAnswers[index]}
                  {userAnswers[index] === question.correctAnswer ? (
                    <span className="text-[#4e9138] font-bold ml-2">Correct!</span>
                  ) : (
                    <span className="text-[#f32f2f] font-bold ml-2">Incorrect!</span>
                  )}
                </div>
              </li>
            ))}
          </ul>


          <p className={`pt-6 font-bold text-xl ${passed ? 'text-[#4e9138]' : 'text-[#f32f2f]'}`}>
            {passed ? 'Gefeliciteerd je hebt de quiz behaald!' : 'Helaas, u heeft de quiz niet behaald :('}
          </p>
          <p className='font-semibold'>
            U moest minstens 60% van de vragen goed hebben.
          </p>
          <p className='font-semibold'>
            U heeft {correctAnswers.length} van de {quizData.length} vragen goed.
          </p>
          <p className={`font-semibold ${passed ? 'text-[#4e9138]' : 'text-[#f32f2f]'}`}>
            Uw score: {score.toFixed(2)}%
          </p>

          <div className='flex justify-between rounded-md text-[#ffff] py-12 px-12 font-semibold'>
            <Link href={"/elearing/1"} className='bg-primary flex justify-center items-center rounded-md px-3 ml-8 py-4'>
              Terug naar de cursus
            </Link>
            {!passed && (
              <button
                className="bg-primary py-4 rounded-md px-3 "
                onClick={resetQuiz}
              >
                Quiz hernemen
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className='py-40 px-40'>
          <h1 className="text-primary text-3xl font-bold mb-4  flex justify-start">Vraag {currentQuestion + 1}</h1>
          <p className="mt-12 text-xl font-semibold mb-12 border-b-2">{quizData[currentQuestion].question}</p>
          <div className='min-w-[800px]'>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${
                  selectedOption === option
                    ? 'bg-white text-white rounded-md border light-black'
                    : 'bg-white text-white border light-gray-border rounded-md'
                } py-2 px-4 mb-2 cursor-pointer w-full mt-1`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="bg-secondary text-[#ffff] py-2 px-4 mt-12 rounded-md cursor-pointer"
            onClick={handleOptionSelect}
          >
            Volgende vraag
          </button>
        
        </div>
      )}
    </div>
  );
};

export default QuizPage;
