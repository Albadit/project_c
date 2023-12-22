"use client"
import React from "react"
import Link from "next/link"
import Footer from "@/app/components/footer"
import { NavDashboard } from "@/app/components/dashboard/nav"
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/app/components/functions'

const lesson = {
  imagecourse: "/img/lesson.png",
  title: "Introduction",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita in fugit amet nulla sint autem tempore dolorem ab veniam, obcaecati aperiam quibusdam blanditiis natus assumenda vero ad reprehenderit pariatur accusamus nobis sunt possimus cupiditate. Consequatur aperiam modi ut tenetur, est enim quas ea pariatur! Pariatur voluptatem, laudantium eius repellat provident consequuntur inventore, voluptas explicabo officia fugit rem unde qui itaque amet, ab voluptatum. Tempore molestiae dolores hic accusantium quod, dolorem neque ab sunt aspernatur eum eveniet odit qui necessitatibus alias numquam? Magnam ipsa dolorem consequuntur similique nesciunt, laudantium inventore quo iure vitae. Ut sequi omnis quis voluptatibus, debitis blanditiis.",
}

export default function ElearningLesson() {
  const embedId = "I-MmRYP9bdk"
  const params = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null }

  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="m-auto p-5 my-12 max-w-[1280px]">
        <section className="flex flex-col p-10 gap-10 bg-section shadow-cbs rounded-lg font-font2">
          <div className="aspect-w-16 aspect-h-9 shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-font1 text-primary font-bold text-3xl">{lesson.title}</h1>
            <p className="font-semibold text-xl font-med">Welcome to {lesson.title}!</p>
            <p className="">{lesson.description}</p>
            <p className="font-light">After finishing this video you will need to answer a couple of questions about the lesson to move on to the next lesson.</p>
          </div>
          <Link href={`/elearing/${params.course_id}/${params.lesson_id}/quiz`} className="w-fit px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
            Take quiz
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}