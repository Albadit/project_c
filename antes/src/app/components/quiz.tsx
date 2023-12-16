'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

type QuizItems = {
  options: string[];
  question: string;
  correctAnswer: string;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [data, setData] = useState<QuizItems[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/quiz')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const handleOptionSelect = () => {
    if (selectedOption) {
      setUserAnswers([...userAnswers.slice(0, currentQuestion), selectedOption]);

      if (currentQuestion + 1 < data.length) {
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
    (answer, index) => answer === data[index].correctAnswer
  );
  const score = (correctAnswers.length / data.length) * 100;
  const passed = score >= 60;

  return (
    <>
      {showResults ? (
        <div className='flex flex-col gap-8 w-full'>
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <ul className='flex flex-col gap-2'>
            {data.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong>
                <div>
                  Your answer: {userAnswers[index]}
                  {userAnswers[index] === question.correctAnswer ? (
                    <span className="text-success font-bold"> Correct!</span>
                  ) : (
                    <span className="text-error font-bold"> Incorrect!</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className='flex flex-col gap-4'>
            <p className={`font-bold text-xl ${passed ? 'text-success' : 'text-error'}`}>
              {passed ? 'Congratulations! You passed!' : 'Sorry, you did not pass.'}
            </p>
            <p className='font-semibold'>
              You need to have at least 60% of the answers correct
            </p>
            <p className='font-semibold'>
              You answered {correctAnswers.length} out of {data.length} questions correctly
            </p>
            <p className={`font-semibold ${passed ? 'text-success' : 'text-error'}`}>
              Your score: {score.toFixed(2)}%
            </p>
          </div>

          <div className='flex flex-row gap-12 rounded-md text-[#ffff] font-semibold'>
            <Link href={"/elearing/1"} className='bg-primary rounded-md px-3 py-2'>
              Go back to course overview 
            </Link>
            {!passed && (
            <button
              className="bg-primary rounded-md py-2 px-3"
              onClick={resetQuiz}
            >
              Retake Quiz
            </button>
            )}
          </div>
        </div>
      ) : (isLoading ? (<p className='text-center'>Loading data...</p>) : (!data ? (<p className='text-center'>No profile data</p>) : (
          <div className='flex flex-col gap-6 w-full'>
          <h1 className="text-primary text-3xl font-bold">Question {currentQuestion + 1}</h1>
          <div className='flex flex-col gap-2'>
            <p className="text-xl font-semibold">{data[currentQuestion].question}</p>
            <hr />
          </div>
          <div className='flex flex-col gap-4'>
            {data[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${
                  selectedOption === option
                    ? 'bg-callToAction'
                    : 'bg-white'
                } py-2 px-4 border border-inputBorder rounded-lg cursor-pointer`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="bg-secondary text-[#ffff] py-2 px-4 rounded-md cursor-pointer"
            onClick={handleOptionSelect}
          >
            Next Question
          </button>
        </div>
        ))
      )}
    </>
  );
};