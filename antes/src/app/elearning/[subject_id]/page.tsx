"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ProgressCircle } from '@/app/components/progress_circle'
import { useParams } from 'next/navigation'
import { PostData, FetchData } from '@/app/components/functions'

const elearning = {
  id: 1,
  image: "/img/elearning.png",
  title: "H1. Introduction",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  user_chapters: 3,
  max_chapters: 11,
  progress: 85,
}

const course = [
  {
    id: "1",
    name: "Introduction to the course sdfsd",
  },
  {
    id: "1",
    name: "Introduction to the course",
  },
  {
    id: "1",
    name: "Introduction to the course",
  },
  {
    id: "1",
    name: "Introduction to the course",
  },
]


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

type Subject = {
  id: string
  title: string
  description: string
  image: string
  lessons: Lesson[]
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


  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null }
  
  console.log(`/api/v1/elearning/${session?.user.id}/${params.subject_id}`)
  console.log(data)
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className="flex md:flex-row flex-col gap-5 font-font2 text-font1">
          <div className="flex flex-col bg-section border border-inputBorder shadow-cbs rounded-lg max-w-[400px]">
            <img className="w-full rounded-t-lg" src={data?.data.image} alt="/" />
            <div className="flex flex-row items-center justify-between gap-4 py-6 px-6">
              <img className="h-[50px] rounded-full" src={session?.user?.image || ""} alt="/" />
              <p className='font-font1 text-lg font-bold text-primary'>{session?.user?.name}</p>
            </div>
            <div className="flex flex-row justify-between border-extra border-t py-4 px-6">
              <p className="font-semibold">Lessons completed</p>
              <p>{elearning.user_chapters}</p>
            </div>
            <div className="flex flex-row justify-between border-extra border-t py-4 px-6">
              <p className="font-semibold">Total lessons</p>
              <p>{elearning.max_chapters}</p>
            </div>
            <div className="flex flex-row justify-center border-extra border-t py-4 px-6">
              <ProgressCircle progress={elearning.progress} />
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
                  <Link key={`course-${index}`} href={`/elearing/${params.subject_id}/${item.id}`} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
                    {`Lees ${index + 1} - ${item.title}`}
                  </Link>
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