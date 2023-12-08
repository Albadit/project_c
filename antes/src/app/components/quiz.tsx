'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

const quizData = [
  {
    "question": "Sinds wanneer bestaat GGZ-Nederland?",
    "options": ["1923", "1975", "1948", "1900"],
    "correctAnswer": "1975"
  },
  {
    "question": "Wat is de reden dat er minder bedden beschikbaar zijn bij de GGZ?",
    "options": ["Bezuinigen", "Behandeling aan huis beter voor patient", "Aantal bedden is afgestemd op omringde landen"],
    "correctAnswer": "Bezuinigen"
  },
  {
    "question": "Wat is het Dolhuys?",
    "options": ["Een krankzinngenstichting in Nederland", "Simulatie voor schizofrenie", "Museum voor psychiatrie in Haarlem"],
    "correctAnswer": "Museum voor psychiatrie in Haarlem"
  },
  {
    "question": "Hoeveel persoonlijkheidsstoornissen zijn er?",
    "options": ["8", "12", "14", "10"],
    "correctAnswer": "10"
  },
  {
    "question": "Hoelang duurt een jaar?",
    "options": ["1", "2", "3", "365"],
    "correctAnswer": "365"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/elearning')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  console.log(data);

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
    <>
      {showResults ? (
        <div className='flex flex-col gap-8 w-full'>
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <ul className='flex flex-col gap-2'>
            {quizData.map((question: any, index: any) => (
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
              You answered {correctAnswers.length} out of {quizData.length} questions correctly
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
      ) : (
        <div className='flex flex-col gap-6 w-full'>
          <h1 className="text-primary text-3xl font-bold">Question {currentQuestion + 1}</h1>
          <div className='flex flex-col gap-2'>
            <p className="text-xl font-semibold">{quizData[currentQuestion].question}</p>
            <hr />
          </div>
          <div className='flex flex-col gap-4'>
            {quizData[currentQuestion].options.map((option: any, index: any) => (
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
      )}
    </>
  );
};