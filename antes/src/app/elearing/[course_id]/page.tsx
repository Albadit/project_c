"use client"
import React from 'react';
import Link from "next/link";
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ProgressCircle } from '@/app/components/progress_circle';

const elearning = {
  id: 1,
  imagecourse: "/img/e_learing.png",
  imageuser: "/img/profile.png",
  title: "H1. Introduction",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  user_chapters: 3,
  max_chapters: 11,
  isenrolled: true,
  url: "#",
  progress: 80,
}

const lesson = {
  id: 1,
  Lesson: 1,
  url: "/elearing/1/1",
}

export default function ElearningCourse() {
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12'>
        <section>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl">{elearning.title}</h1>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {/* first child content */}
            <div className="md:col-span-1 w-full border border-inputBorder shadow-xl flex flex-col my-4 rounded-lg">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full bg-white" src={elearning.imagecourse} alt="/" />
                <div className="flex flex-row justify-center py-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="h-[40px] rounded-full" src={session?.user?.image || ""} alt="/" />
                  <h2 className="text-2xl font-bold text-primary pl-4 pt-1">
                    {elearning.isenrolled ? "You are enrolled" : "You are not enrolled"}
                  </h2>
                </div>
                <div className="flex justify-between border-t py-4 px-8">
                  <p className="font-semibold">Completion Time</p>
                  <p>10h and 3 minutes </p>
                </div>
                <div className="flex justify-between border-t py-4 px-8">
                  <p className="font-semibold">Lessons completed</p>
                  <p>{elearning.user_chapters}</p>
                </div>
                <div className="flex justify-between border-t py-4 px-8 border-b">
                  <p className="font-semibold">Total lessons</p>
                  <p>{elearning.max_chapters}</p>
                </div>
                <div className="flex justify-center border-t py-4 px-8 border-b">
                  <ProgressCircle progress={85} />
                </div>
              </div>
            </div>

            {/* second child content */}
            <div className="md:col-span-2 w-full border border-inputBorder shadow-xl flex flex-col my-4 rounded-lg">
              <p className="text-center text-gray-500 text-base font-normal font-['Roboto'] tracking-tight mt-20 ml-12 mr-12 text-[#A9A9A9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nobis eaque repellat fuga ex mollitia cum optio adipisci libero
                voluptatibus iusto sed aut officia aliquam fugit, sunt sit at eius
                ipsum? Dignissimos nostrum eum, illum alias neque exercitationem
                reprehenderit quo quidem asperiores laboriosam, ipsa quisquam.
                Facere sapiente reiciendis culpa? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi nobis eaque repellat fuga ex
                mollitia cum optio adipisci libero voluptatibus iusto sed aut
                officia aliquam fugit, sunt sit at eius ipsum? Dignissimos nostrum
                eum, illum alias neque exercitationem reprehenderit quo quidem
                asperiores laboriosam, ipsa quisquam. Facere sapiente reiciendis
                culpa?
              </p>
              <div className="flex flex-col mt-20 ml-16 space-y-4 font-bold">
                <div className="flex space-x-20 pb-6">
                  <p className="border-primary border-b-2">Course</p>
                </div>
                <div className="pb-8">
                  <Link href={lesson.url} className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
                    Lesson 1
                    <span className="hidden lg:inline">
                      - Introduction to the course
                    </span>
                    <span className=" pl-16">30 min</span>
                    {/* lesson time is now hardcoded */}
                  </Link>
                </div>
                <div className="pb-8">
                  <Link  href={lesson.url} className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
                    Lesson 1
                    <span className="hidden lg:inline">
                      - Introduction to the course
                    </span>
                    <span className=" pl-16">30 min</span>
                  </Link>
                </div>
                <div className="pb-8">
                  <Link href={lesson.url} className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
                    Lesson 1
                    <span className="hidden lg:inline">
                      - Introduction to the course
                    </span>
                    <span className=" pl-16">30 min</span>
                  </Link>
                </div>
                <div className="pb-8">
                  <Link href={lesson.url} className="bg-primary h-[50px] w-full sm:w-[100px] rounded-xl font-medium my-6 mx-auto px-2 sm:px-20 py-3 text-[#fff]">
                    Lesson 1
                    <span className="hidden lg:inline">
                      - Introduction to the course
                    </span>
                    <span className=" pl-16">30 min</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap sm:justify center justify-end items-center">
                <Link href={lesson.url} className="bg-secondary rounded-md font-bold mx-12 my-12 px-5 py-4 text-[#fff] text-center">
                  Start course
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}