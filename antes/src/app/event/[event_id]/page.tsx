"use client"
import React, { useEffect, useState } from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react'
import NavHome from '@/app/components/home/nav'
import Calendar from "@/app/components/icons/calendar"
import { useParams, useRouter } from 'next/navigation'
import { PostData, FetchData } from '@/app/components/functions'

type EventItems = {
  id: string
  title: string
  description: string
  location: string
  image: string
  dateStart: string
  dateEnd: string
}

type ApiResponse<T> = {
  status: string
  data: T
}

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0')
  const minutes = String(convert.getMinutes()).padStart(2, '0')
  const seconds = String(convert.getSeconds()).padStart(2, '0')

  return `${day}-${month}-${year} ${hours}:${minutes}`
  // return `${day}-${month}-${year}`
}

export default function Dashboard() {
  const params = useParams()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<EventItems> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    FetchData(setData, setLoading, `/api/v1/event/${params.event_id}`)
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const addcal = await PostData({
      userId: session?.user.id
    }, `/api/v1/event/${params.event_id}`)

    if (addcal.status === "success") {
      setMessage('je bent aangemeld')
    } else {
      setMessage('je bent al aangemeld')
    }
  }

  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='flex justify-center m-auto lg:p-12 p-5'>
      {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
        <section className="flex lg:flex-row-reverse flex-col justify-between lg:w-full w-[600px] gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
          <img src={data?.data.image} alt="event" className="lg:w-[60%] w-full lg:min-h-[580px] h-[280px] object-cover object-center rounded"/>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-col justify-center gap-3">
              <h2 className="text-xl font-semibold text-primary">Event: {data?.data.title}</h2>
              <p className="text-extra">{data?.data.description}</p>
              <p>Locatie: {data?.data.location}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex flex-row items-center gap-2">
                <Calendar className="fill-extra h-5" />
                <p className="text-extra text-sm">{formatDate(data?.data.dateStart || "")}</p>
              </div>
              {session && status === "authenticated" ? (
              <>
                <button type='button' onClick={handleSubmit} className="flex flex-row items-center justify-center lg:w-max w-full gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
                  Meld je aan!
                </button>
                {message ? (<p className='text-extra'>{message}</p>) : (<></>)}
              </>
              ) : (<></>)}
            </div>
          </div>
        </section>
      ))}
      </main>
      <Footer/>
    </>
  )
}