"use client"
import React from "react";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import Quiz from "@/app/components/quiz";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function ElearningQuiz() {
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="flex flex-col justify-center items-center m-auto p-5 quiz">
        <section className="max-w-[500px] w-full">
          <Quiz />
        </section>
      </main>
      <Footer />
    </>
  );
}