"use client"
import React, { useState, useMemo, useEffect } from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import ArrowRight from '@/app/components/icons/arrow_right'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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

export default function Calendar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<ApiResponse<EventItems[]> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const timeSlots = Array.from({ length: 24 }, (_, index) => index < 10 ? `0${index}` : `${index}`)
  const dayLabels = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"]
  const timeSlotHeight = 100 / timeSlots.length
  const currentDate = new Date()
  const local = 'nl-NL'
  const [currentWeek, setCurrentWeek] = useState(0)
  const handleWeekChange = (direction: number) => setCurrentWeek(prevWeek => prevWeek + direction)
  const handleCurrentWeek = () => setCurrentWeek(0)

  const adjustedDate = useMemo(() => {
    const date = new Date(currentDate)
    date.setDate(date.getDate() - date.getDay() + getStartDayOfWeek() + currentWeek * 7)
    return date
  }, [currentDate, currentWeek])

  const currentMonth = useMemo(() => {
    const month = adjustedDate.toLocaleString('default', { month: 'long' });
    return month.charAt(0).toUpperCase() + month.slice(1);
  }, [adjustedDate]);

  useEffect(() => {
    FetchData(setData, setLoading, `/api/v1/calendar/${session?.user.id}`)
  }, [session])

  if (status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoading) return <p className='text-center'>Loading data...</p>
  if (data?.status === "error") return <p className='text-center'>No data find</p>

  return (
    <>
      <NavDashboard user={session?.user} />
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col justify-center items-center gap-10'>
          <h1 className="font-font1 font-bold text-center text-primary text-5xl">Agenda</h1>
          <div className="flex lg:flex-row flex-col justify-between items-center w-full gap-8">
            <div className="text-3xl font-bold">{`${currentMonth} ${adjustedDate.getFullYear()}`}</div>
            <div className="flex gap-2">
              {/* Week Navigation Buttons */}
              <button className='w-fit px-4 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={() => handleWeekChange(-1)}>
                <ArrowRight className="rotate-180 fill-font2 h-5" />
              </button>
              <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handleCurrentWeek}>
                Week
              </button>
              <button className='w-fit px-4 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={() => handleWeekChange(1)}>
                <ArrowRight className="fill-font2 h-5" />
              </button>
            </div>
          </div>
          <div className="grid w-full">
            {/* Calendar Grid */}
            <div className="w-fit"></div>
            <div className="col-span-7 flex">
              {dayLabels.map((day, index) => (
                <div key={`day-label-${index}`} className="flex-1 py-4 text-center">
                  {`${day} ${getUpdatedDayNumber(index, adjustedDate, currentWeek)}`}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {timeSlots.map((time: any, index: number) => (
                <div key={`time-slot-${index}`} className="text-center">{`${time}:00`}</div>
              ))}
            </div>
            <div className="col-start-2 row-start-2 col-span-7 row-span-6 relative border-r border-b">
              {timeSlots.map((_, index) => (
                <div key={`grid-hour-${index}`} className="absolute border-t" style={{ top: `calc(${index * timeSlotHeight}%)`, width: '100%' }}></div>
              ))}
              {dayLabels.map((_, index) => (
                <div key={`grid-day-${index}`} className="absolute border-l" style={{ left: `calc(${index * (100 / 7)}%)`, height: '100%' }}></div>
              ))}
              {data?.data.map(event => generateEventCard(event, adjustedDate, timeSlotHeight))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

  function convertTimeToMinutes(date: any) {
    return date.getHours() * 60 + date.getMinutes()
  }

  function getStartDayOfWeek() {
    return dayLabels.indexOf("Ma")
  }

  function getUpdatedDayNumber(index: any, date: any, weekOffset: any) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + index + weekOffset * 7)
    return newDate.getDate()
  }

  function generateEventCard(event: any, adjustedDate: any, timeSlotHeight: any) {
    const startMinutes = convertTimeToMinutes(new Date(event.dateStart))
    const endMinutes = convertTimeToMinutes(new Date(event.dateEnd))
    const dayIndex = new Date(event.dateStart).getDay() - adjustedDate.getDay()

    const isSameWeek = adjustedDate.getFullYear() === new Date(event.dateStart).getFullYear() &&
      adjustedDate.getMonth() === new Date(event.dateStart).getMonth() &&
      adjustedDate.getDate() <= new Date(event.dateStart).getDate() &&
      new Date(event.dateStart).getDate() <= adjustedDate.getDate() + 6

    if (isSameWeek ) {
      const top = `calc(${startMinutes / 60 * timeSlotHeight}%)`
      const height = `calc(${(endMinutes - startMinutes) / 60 * timeSlotHeight}%)`
      const left = `calc(${dayIndex * (100 / 7)}%)`

      return (
        <Link href={`event/${event.id}`} className="flex flex-col gap-1 bg-secondary text-font2 px-2 py-1 rounded-lg absolute" style={{ top, height, left, width: 'calc(100% / 7)' }}>
          <div className="font-bold">{event.title}</div>
          <div className="text-sm">{`${new Date(event.dateStart).toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })} - ${new Date(event.dateEnd).toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })}`}</div>
        </Link>
      )
    }
    return null
  }
}
