"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { PostData, FetchData } from '@/components/functions'
import { LongCalendar, EventItems } from '@/components/long_calendar'
import { NavDashboard } from '@/components/dashboard/nav'
import Footer from '@/components/footer'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

type ApiResponse<T> = {
  status: string
  data: T
}

export default function Calendar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<ApiResponse<EventItems[]> | null>(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    FetchData(setData, setLoading, `/api/v1/calendar/${session?.user.id}`)
  }, [session])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

  return (
    <>
    <NavDashboard user={session?.user} />
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col justify-center items-center gap-10'>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl">Agenda</h1>
          <LongCalendar events={data?.data || []}/>
        </section>
      </main>
      <Footer />
    </>
  )
}
