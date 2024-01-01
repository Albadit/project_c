"use client"
import React, { useEffect, useState } from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ProgressCircle } from '@/components/progress_circle'
import { useParams } from 'next/navigation'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

type UserProgress = {
  id: string
  userId: string
  lessonId: string
}

type Lesson = {
  id: string
  subjectId: string
  quizId: string | null
  order: number
  title: string
  lessonData: any[]
  userProgress: UserProgress[]
}

type Progression = {
  totalLessons: number
  userProgress: number
  procent: number
}

type Subject = {
  id: string
  title: string
  description: string
  image: string
  lessons: Lesson[]
  progression: Progression
}

type ApiResponse<T> = {
  status: string
  data: T
}

export default function ElearningCourse() {
  const params = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<Subject> | null>(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    if (status === "authenticated") {
      FetchData(setData, setLoading, `/api/v1/elearning/${session?.user.id}/${params.subject_id}`)
    }
  }, [status, session?.user.id])


  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

  const isLessonCompleted = (lessonId: string) => {
    if (data?.data.lessons) {
      const userProgress = data.data.lessons.find((lesson) => lesson.id === lessonId)?.userProgress
      return userProgress && userProgress.length > 0
    }
    return false;
  }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className="flex md:flex-row flex-col gap-5 font-font2 text-font1">
          <div className="flex flex-col bg-section border border-inputBorder shadow-cbs rounded-lg max-w-[400px]">
            <img className="w-full rounded-t-lg" src={data?.data.image} alt="/" />
            <div className="flex flex-row items-center justify-between gap-4 py-6 px-6">
              <img className="h-[50px] rounded-full" src={session?.user?.image || ""} alt="profile" />
              <p className='font-font1 text-lg font-bold text-primary'>{session?.user?.name}</p>
            </div>
            <div className="flex flex-row justify-between border-extra border-t py-4 px-6">
              <p className="font-semibold">Lessen voltooid</p>
              <p>{data?.data.progression.userProgress}</p>
            </div>
            <div className="flex flex-row justify-between border-extra border-t py-4 px-6">
              <p className="font-semibold">Totale lessen</p>
              <p>{data?.data.progression.totalLessons}</p>
            </div>
            <div className="flex flex-row justify-center border-extra border-t py-4 px-6">
              <ProgressCircle progress={data?.data.progression.procent || 100} />
            </div>
          </div>

          {/* second child content */}
          <div className="flex flex-col py-8 px-10 gap-10 bg-section border border-inputBorder shadow-cbs rounded-lg w-full">
            <h1 className="font-font1 font-bold text-primary text-5xl text-warp break-words">{data?.data.title}</h1>
            <p className="font-font2 text-extra text-ms leading-5">{data?.data.description}</p>
            <div className="flex flex-col gap-5 font-bold">
              <p className="border-primary border-b-2 w-fit">Course</p>
              <div className='flex flex-col gap-5 w-fit'>
                {data?.data.lessons.map((item: Lesson, index: any) => (
                  <button
                    key={`course-${index}`}
                    onClick={() => {!isLessonCompleted(item.id) && (router.push(`/elearning/${params.subject_id}/${item.id}`))}}
                    disabled={isLessonCompleted(item.id)}
                    className={`px-6 py-2.5 rounded-lg bg-primary text-left text-font2 font-semibold text-md disabled:bg-primary/60`}
                  >
                    {`Lees ${index + 1} - ${item.title} ${isLessonCompleted(item.id) ? ('(Voltooid)') : ('')}`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}