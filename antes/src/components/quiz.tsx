'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/components/functions'

export type QuizDataProps = {
  options: string[]
  question: string
  correctAnswer: string
}

export type QuizProps = {
  id: string
  quizData: QuizDataProps[]
}

type Props = {
  quiz: QuizProps
}

export const Quiz = (props: Props) => {
  const { data: session, status } = useSession()
  const params = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [passed, setPassed] = useState<boolean>(false)
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([])
  const [score, setScore] = useState<number>(0)

  const retryQuiz = () => {
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResults(false)
    setPassed(false)
  }

  const handleOptionSelect = async () => {
    if (!selectedOption || !props.quiz.quizData) return;
  
    const newUserAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newUserAnswers);
  
    if (currentQuestion + 1 < props.quiz.quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      const newCorrectAnswers = newUserAnswers.filter((answer, index) => answer === props.quiz.quizData[index].correctAnswer)
      const newScore = (newCorrectAnswers.length / props.quiz.quizData.length) * 100
      const newPassed = newScore >= 60

      setCorrectAnswers(newCorrectAnswers)
      setScore(newScore)
      setPassed(newPassed)
      setShowResults(true)
      
      if (newPassed && session) {
        const userProgress = await PostData({
          lessonId: params.lesson_id,
        }, `/api/v1/elearning/${session.user.id}/${params.subject_id}/${params.lesson_id}/${params.quiz_id}`)
      }
    }
  }

  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { return null }

  return (
    <>
      {showResults ? (
        <div className='flex flex-col gap-8'>
        <h1 className="text-3xl font-bold">Quiz Results</h1>
        <ul className='flex flex-col gap-2'>
          {props.quiz.quizData.map((question: any, index: number) => (
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
          <p className='font-semibold'>You answered {correctAnswers.length} out of {props.quiz.quizData.length} questions correctly</p>
          <p className={`font-semibold ${passed ? 'text-success' : 'text-error'}`}>Your score: {score.toFixed(2)}%</p>
        </div>
        <div className='flex flex-row gap-12 rounded-md text-[#ffff] font-semibold'>
          {!passed && (
            <button onClick={retryQuiz} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
              Retry Quiz
            </button>
          )}
          <Link href={`/elearning/${params.subject_id}`} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
            Ga terug naar de course
          </Link>
        </div>
      </div>
      ) : (
        <div className='flex flex-col gap-6 max-w-[500px] w-full'>
          <h1 className="text-primary text-3xl font-bold">Question {currentQuestion + 1}</h1>
          <div className='flex flex-col gap-2'>
            <p className="text-xl font-semibold">{props.quiz.quizData[currentQuestion].question}</p>
            <hr />
          </div>
          <div className='flex flex-col gap-4'>
            {props.quiz.quizData[currentQuestion].options.map((option: any, index: number) => (
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