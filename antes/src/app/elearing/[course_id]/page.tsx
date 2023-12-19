"use client"
import React from 'react';
import Link from "next/link";
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ProgressCircle } from '@/app/components/progress_circle';
import { useParams } from 'next/navigation';

const elearning = {
  id: 1,
  image: "/img/e_learing.png",
  title: "H1. Introduction",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  user_chapters: 3,
  max_chapters: 11,
  isenrolled: true,
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

export default function ElearningCourse() {
  const params = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className="flex md:flex-row flex-col gap-5 font-font2 text-font1">
          <div className="flex flex-col bg-section border border-inputBorder shadow-cbs rounded-lg">
            <img className="w-full rounded-t-lg" src={elearning.image} alt="/" />
            <div className="flex flex-col items-center justify-between gap-4 py-6 px-6">
              <img className="h-[40px] rounded-full" src={session?.user?.image || ""} alt="/" />
              <h2 className="font-font1 text-lg font-bold text-primary">
                {elearning.isenrolled ? "You are enrolled" : "You are not enrolled"}
              </h2>
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
          <div className="flex flex-col py-8 px-10 gap-10 bg-section border border-inputBorder shadow-cbs rounded-lg">
            <h1 className="font-font1 font-bold text-primary text-5xl text-warp break-words">{elearning.title}</h1>
            <p className="font-font2 text-extra text-ms leading-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nobis eaque repellat fuga ex mollitia cum optio adipisci libero
              voluptatibus iusto sed aut officia aliquam fugit, sunt sit at eius
              ipsum? Dignissimos nostrum eum, illum alias neque exercitationem
              reprehenderit quo quidem asperiores laboriosam, ipsa quisquam.
              Facere sapiente reiciendis culpa? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Animi nobis eaque repellat fuga ex
              mollitia cum optio adipisci libero voluptatibus iusto sed aut
              officia aliquam fugit, sunt sit at eius ipsum?
            </p>
            <div className="flex flex-col gap-5 font-bold">
              <p className="border-primary border-b-2 w-fit">Course</p>
              <div className='flex flex-col gap-5 w-fit'>
                {course.map((item: any, index: any) => (
                  <Link key={item.id} href={`/elearing/${params.course_id}/${item.id}`} className="px-6 py-2.5 rounded-lg bg-primary text-font2 font-semibold text-md">
                    {`Lees ${index + 1} - ${item.name}`}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}