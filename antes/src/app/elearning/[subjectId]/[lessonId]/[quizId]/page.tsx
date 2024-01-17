"use client"
import React, { useEffect, useState } from "react"
import Footer from "@/components/footer"
import { NavDashboard } from "@/components/dashboard/nav"
import { Quiz, QuizProps } from "@/components/quiz"
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

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
      FetchData(setData, setLoading, `/api/v1/elearning/${session?.user.id}/${params.subjectId}/${params.lessonId}/${params.quizId}`)
    }
  }, [status, session?.user.id, params.subjectId, params.lessonId, params.quizId])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="m-auto p-5 my-12 max-w-[1280px]">
        <section className="flex flex-col justify-center items-center font-font2">
          <Quiz quiz={data?.data || { id: "0", quizData: [] }}/>
        </section>
      </main>
      <Footer />
    </>
  )
}