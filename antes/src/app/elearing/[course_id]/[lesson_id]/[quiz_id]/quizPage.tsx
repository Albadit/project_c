'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { quizData } from './quizData';

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
          <h1 className="text-3xl font-bold mb-4 ">Quiz Results</h1>
          <ul>
            {quizData.map((question, index) => (
              <li key={index} className="mb-2">
                <strong>{question.question}</strong>
                <div>
                  Your answer: {userAnswers[index]}
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
            {passed ? 'Congratulations! You passed!' : 'Sorry, you did not pass.'}
          </p>
          <p className='font-semibold'>
            You need to have at least 60% of the answers correct
          </p>
          <p className='font-semibold'>
            You answered {correctAnswers.length} out of {quizData.length} questions correctly
          </p>
          <p className={`font-semibold ${passed ? 'text-[#4e9138]' : 'text-[#f32f2f]'}`}>
            Your score: {score.toFixed(2)}%
          </p>

          <div className='flex justify-between rounded-md text-[#ffff] py-12 px-12 font-semibold'>
            <Link href={"/elearing/1"} className='bg-primary flex justify-center items-center rounded-md px-3 ml-8 py-4'>
              Go back to course overview 
            </Link>
            {!passed && (
              <button
                className="bg-primary py-4 rounded-md px-3 "
                onClick={resetQuiz}
              >
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className='py-40 px-40'>
          <h1 className="text-primary text-3xl font-bold mb-4  flex justify-start">Question {currentQuestion + 1}</h1>
          <p className="mt-12 text-xl font-semibold mb-12 border-b-2">{quizData[currentQuestion].question}</p>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${
                  selectedOption === option
                    ? 'bg-primary text-[#ffff] rounded-md border light-gray-border font-semibold'
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
            Next Question
          </button>
        
        </div>
      )}
    </div>
  );
};

export default QuizPage;
