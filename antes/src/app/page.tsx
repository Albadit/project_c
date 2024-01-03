'use client'
import React, { useEffect, useState } from 'react'
import NavHome from '@/components/home/nav'
import Footer from '@/components/footer'
import Title from '@/components/home/title'
import Work from '@/components/home/work'
import { QACard } from '@/components/qa_card'
import { EventCard } from '@/components/event_card'
import Info from '@/components/home/info'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'
import { PostData, FetchData } from '@/components/functions'

type EventItems = {
  id: string
  title: string
  image: string
  description: string
  dateStart: string
  location: string
}

type QaItems = {
  id: string
  title: string
  name: string
  profile: string
  image: string
  dateCreate: string
  reactions: number
  bio: string
}

type HomeData = {
  event: EventItems
  qa: QaItems
}

type ApiResponse<T> = {
  status: string
  data: T
}

export default function Home() {
  const [data, setData] = useState<ApiResponse<HomeData> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    FetchData(setData, setLoading, `/api/v1/cards`)
  }, [])

  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

  return (<>
    <NavHome />
    <Title />
    <main className='flex flex-wrap justify-center m-auto p-5 my-12 gap-10 max-w-[1280px]'>
      <Work />
      <section className='flex flex-col w-full gap-10 my-12 '>
        <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>ANTES NIEUWS</h2>
        <div className='flex flex-wrap xl:justify-between justify-center gap-10'>
          {data?.data.qa ? <QACard qa={data.data.qa} /> : <p>No Q&A data available</p>}
          {data?.data.event ? <EventCard event={data.data.event} /> : <p>No Event data available</p>}
        </div>
      </section>
      <Info />
    </main>
    <br />
    <Footer />
  </>)
}