'use client'
import { useState } from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';

type QuizItems = {
  options: string[];
  question: string;
  correctAnswer: string;
}

type Props = {
  quiz: QuizItems[]
}

export const Quiz = (props: Props) => {
  const params = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = () => {
    if (!selectedOption || !props.quiz) return;

    const newUserAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newUserAnswers);

    if (currentQuestion + 1 < props.quiz.length ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  }

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  }

  const correctAnswers = userAnswers.filter((answer, index) => answer === props.quiz[index].correctAnswer);
  const score = (correctAnswers.length / props.quiz.length) * 100;
  const passed = score >= 60;

  return (
    <>
      {showResults ? (
        <div className='flex flex-col gap-8'>
        <h1 className="text-3xl font-bold">Quiz Results</h1>
        <ul className='flex flex-col gap-2'>
          {props.quiz.map((question: any, index: number) => (
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
          <p className='font-semibold'>You answered {correctAnswers.length} out of {props.quiz.length} questions correctly</p>
          <p className={`font-semibold ${passed ? 'text-success' : 'text-error'}`}>Your score: {score.toFixed(2)}%</p>
        </div>
        <div className='flex flex-row gap-12 rounded-md text-[#ffff] font-semibold'>
          {!passed && (
            <button onClick={retryQuiz} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
              Retry Quiz
            </button>
          )}
          <Link href={`/elearing/${params.course_id}`} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
            Ga terug naar de course
          </Link>
        </div>
      </div>
      ) : (
        <div className='flex flex-col gap-6 max-w-[500px] w-full'>
          <h1 className="text-primary text-3xl font-bold">Question {currentQuestion + 1}</h1>
          <div className='flex flex-col gap-2'>
            <p className="text-xl font-semibold">{props.quiz[currentQuestion].question}</p>
            <hr />
          </div>
          <div className='flex flex-col gap-4'>
            {props.quiz[currentQuestion].options.map((option: any, index: number) => (
              <button key={index} className={`${selectedOption === option ? 'bg-callToAction' : 'bg-white'} py-2 px-4 border border-inputBorder rounded-lg`} onClick={() => setSelectedOption(option)}>
              {option}
              </button>
            ))}
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-md" onClick={handleOptionSelect}>
            Next Question
          </button>
        </div>
      )}
    </>
  )
}