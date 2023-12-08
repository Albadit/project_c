'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';

type QuizData = {
  id: number
  title: string
  time: string
  description: string
  quiz: QuizQuestion[]
}

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export const getData = async () => {
  // return await fetch('http://localhost:3000/api/v1/quiz')
  //   .then(res => res.json())
  //   .catch(err => { throw new Error('Failed to fetch data')} )

  const res = await fetch('http://localhost:3000/api/v1/quiz')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
export default function QuizPage({}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [data, setData] = useState<QuizData | undefined>(undefined);

  useEffect	(() => {
    const fetch = async () => {
      const data = await getData();
      console.log("fetch", data)
      setData(data);
    }
    fetch();
  }, [])
  const handleOptionSelect = () => {
    if (selectedOption) {
      setUserAnswers([...userAnswers.slice(0, currentQuestion), selectedOption]);

      if (data && currentQuestion + 1 < data.quiz.length) {
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
    (answer, index) => data && answer === data.quiz[index].correctAnswer
  );
  const score = (correctAnswers.length / (data ? data.quiz.length : 0)) * 100;
  const passed = score >= 60;
  
  return (
    <>
      {!data ? <div>Loading...</div>
      : showResults ? (
        console.log(data),
        <div className='flex flex-col gap-8 w-full'>
          <h1 className="text-3xl font-bold">Quiz Resultaat</h1>
          <ul className='flex flex-col gap-2'>
            {data.quiz.map((question, index) => (
              <li key={index} className="mb-2">
                <strong>{question.question}</strong>
                <div>
                  Uw antwoord: {userAnswers[index]}
                  {userAnswers[index] === question.correctAnswer ? (
                    <span className="text-success font-bold">Correct!</span>
                  ) : (
                    <span className="text-error font-bold">Incorrect!</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className='flex flex-col gap-4'>
          <p className={`font-bold text-xl ${passed ? 'text-success' : 'text-error'}`}>
            {passed ? 'Gefeliciteerd je hebt de quiz behaald!' : 'Helaas, u heeft de quiz niet behaald :('}
          </p>
          <p className='font-semibold'>
            U moest minstens 60% van de vragen goed hebben.
          </p>
          <p className='font-semibold'>
            U heeft {correctAnswers.length} van de {data.quiz.length} vragen goed.
          </p>
          <p className={`font-semibold ${passed ? 'text-success' : 'text-error'}`}>
            Uw score: {score.toFixed(2)}%
          </p>
          </div>

          <div className='flex flex-row gap-12 rounded-md text-[#ffff] font-semibold'>
            <Link href={"/elearing/1"} className='bg-primary rounded-md px-3 py-2'>
              Terug naar de cursus
            </Link>
            {!passed && (
              <button
                className="bg-primary rounded-md py-2 px-3"
                onClick={resetQuiz}
              >
                Quiz hernemen
              </button>
            )}
          </div>
        </div>
      ) : (
        console.log(data.description),
        <div className='flex flex-col gap-6 w-full'>
          <h1 className="text-primary text-3xl font-bold">Vraag {currentQuestion + 1}</h1>
          <div className='flex flex-col gap-2'>
          <p className="text-xl font-semibold">{data.quiz[currentQuestion].question}</p>
          <hr />
          </div>
          <div className='flex flex-col gap-4'>
            {data.quiz[currentQuestion].options.map((option, index) => (
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
            className="bg-secondary text-[#ffff] py-2 px-4 mt-12 rounded-md cursor-pointer"
            onClick={handleOptionSelect}
          >
            Volgende vraag
          </button>
        
        </div>
      )}
    </>
  );
};