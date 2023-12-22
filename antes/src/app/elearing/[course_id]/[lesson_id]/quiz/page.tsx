"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import { NavDashboard } from "@/app/components/dashboard/nav";
import { Quiz, QuizProps } from "@/app/components/quiz";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

type ApiResponse<T> = {
  status: string;
  data: T;
}

export default function ElearningQuiz() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<QuizProps[]> | null>(null);
  const [isLoading, setLoading] = useState(true)
  
  async function fetchData(api: string) {
    try {
      const response = await fetch(api);
      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData('/api/v1/quiz')
  }, [])

  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="m-auto p-5 my-12 max-w-[1280px]">
        <section className="flex flex-col justify-center items-center font-font2">
        {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
          <Quiz quiz={data?.data || []}/>
        ))}
        </section>
      </main>
      <Footer />
    </>
  )
}