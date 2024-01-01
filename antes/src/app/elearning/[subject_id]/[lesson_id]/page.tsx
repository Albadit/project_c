"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import { NavDashboard } from "@/components/dashboard/nav"
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/components/functions'
import { Video } from "@/components/video"
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

const lesson = {
  imagecourse: "/img/lesson.png",
  title: "Introduction",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita in fugit amet nulla sint autem tempore dolorem ab veniam, obcaecati aperiam quibusdam blanditiis natus assumenda vero ad reprehenderit pariatur accusamus nobis sunt possimus cupiditate. Consequatur aperiam modi ut tenetur, est enim quas ea pariatur! Pariatur voluptatem, laudantium eius repellat provident consequuntur inventore, voluptas explicabo officia fugit rem unde qui itaque amet, ab voluptatum. Tempore molestiae dolores hic accusantium quod, dolorem neque ab sunt aspernatur eum eveniet odit qui necessitatibus alias numquam? Magnam ipsa dolorem consequuntur similique nesciunt, laudantium inventore quo iure vitae. Ut sequi omnis quis voluptatibus, debitis blanditiis.",
}

type Lesson = {
  id: string
  subjectId: string
  quizId: string | null
  order: number
  title: string
  lessonData: any[]
}

type ApiResponse<T> = {
  status: string
  data: T
}

export default function ElearningLesson() {
  const embedId = "I-MmRYP9bdk"
  const params = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<Lesson> | null>(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    if (status === "authenticated") {
      FetchData(setData, setLoading, `/api/v1/elearning/${session?.user.id}/${params.subject_id}/${params.lesson_id}`)
    }
  }, [status, session?.user.id])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="m-auto p-5 my-12 max-w-[1280px]">
        <section className="flex flex-col p-10 gap-10 bg-section shadow-cbs rounded-lg font-font2 text-font1">
          <h1 className="font-font1 text-primary font-bold text-5xl break-words">{data?.data.title}</h1>
          <div className="flex flex-col gap-8">
            <Video embedId={embedId} />
            <h2 className="font-semibold text-2xl font-font1">Welcome to {lesson.title}!</h2>
            <p className="font-font2 text-base leading-5">{lesson.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            {data?.data.quizId ? (
            <>
              <p className="font-light font-font2 text-extra text-ms">Nadat je deze video hebt afgerond, moet je een aantal vragen over de les beantwoorden om door te gaan naar de volgende les.</p>
              <Link href={`/elearning/${params.subject_id}/${params.lesson_id}/${data?.data.quizId}`} className="w-fit px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
                Quiz doen
              </Link>
            </>
            ) : (
            <>
              <p className="font-light font-font2 text-extra text-ms">Er is nog geen quiz voor deze les.</p>
            </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}