"use client"
import React, { useEffect, useState } from "react"
import Footer from "@/app/components/footer"
import { NavDashboard } from "@/app/components/dashboard/nav"
import { Quiz, QuizProps } from "@/app/components/quiz"
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/app/components/functions'

type ApiResponse<T> = {
  status: string
  data: T
}

export default function ElearningQuiz() {
  const router = useRouter()
  const params = useParams()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<QuizProps> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "authenticated") {
      FetchData(setData, setLoading, `/api/v1/elearning/${session?.user.id}/${params.subject_id}/${params.lesson_id}/${params.quiz_id}`)
    }
  }, [status, session?.user.id])

  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="m-auto p-5 my-12 max-w-[1280px]">
        <section className="flex flex-col justify-center items-center font-font2">
        {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
          <Quiz quiz={data?.data || { id: "0", quizData: [] }}/>
        ))}
        </section>
      </main>
      <Footer />
    </>
  )
}