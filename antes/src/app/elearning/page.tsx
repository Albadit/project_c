"use client"
import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import { ELearningCard, ElearningProps } from '@/components/dashboard/elearning_card'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

type ApiResponse<T> = {
  status: string
  data: T
}

export default function ELearning() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<ElearningProps[]> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "authenticated") {
      FetchData(setData, setLoading, `/api/v1/elearning/${session?.user.id}`)
    }
  }, [status, session?.user.id])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>
  
  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col gap-20'>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl break-words">E-Learning</h1>
            <div className='flex flex-wrap justify-center gap-8'>
              {data?.data.map((item: ElearningProps, index: number) => 
                <div key={index} className="w-full max-w-[390px]">
                  <ELearningCard key={index} elearning={item}/>
                </div>
              )}
            </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
