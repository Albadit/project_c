// components/Calendar.js
import React, { useState } from 'react'
import ArrowRight from '@/app/components/icons/arrow_right'

export type EventItems = {
  id: string
  title: string
  description: string
  location: string
  image: string
  dateStart: string
  dateEnd: string
}

type Props = {
  events: EventItems[]
}

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0')
  const minutes = String(convert.getMinutes()).padStart(2, '0')
  const seconds = String(convert.getSeconds()).padStart(2, '0')

  // return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
  return `${hours}:${minutes}`
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
}

export const LongCalendar = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const startDayMonday = true
  const local = startDayMonday ? 'nl-NL' : 'us-US'

  const timesOfDay = Array.from({ length: 24 }, (_, index) => (index < 10 ? `0${index}:00` : `${index}:00`))
  const timesOfDayGrid = 24 * 2

  const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
    const startOfWeek = new Date(currentDate)
    const startDay = startDayMonday ? 7 : 1
    startOfWeek.setDate(currentDate.getDate() - ((currentDate.getDay() + startDay) % 7) + 1) // Set to the first day (Monday) of the current week
    const day = new Date(startOfWeek)
    day.setDate(startOfWeek.getDate() + index)
    const formattedDate = day.getDate()
    return { abbreviated: day.toLocaleDateString(local, { weekday: 'short' }), number: formattedDate, fullDate: day }
  })

  const singleDay = (() => {
    const startOfWeek = new Date(currentDate)
    const startDay = startDayMonday ? 1 : 0 // Adjust if the week starts on Monday
    startOfWeek.setDate(currentDate.getDate() - ((currentDate.getDay() + startDay) % 1))
  
    const formattedDate = startOfWeek.getDate()
  
    return [
      {
        abbreviated: startOfWeek.toLocaleDateString(local, { weekday: 'short' }),
        number: formattedDate,
        fullDate: startOfWeek,
      },
    ]
  })()

  const renderWeek = () => {
    const today = new Date()
    return daysOfWeek.map(({ abbreviated, number, fullDate }, index) => (
      <div key={`days-${index}`} className='flex lg:flex-row flex-col justify-center items-center gap-2 text-center font-bold'>
        <p>{abbreviated}</p>
        <p className={`flex justify-center items-center w-8 h-8 ${isSameDay(today, fullDate) ? 'bg-secondary rounded-full text-font2' : ''}`}>
          {number}
        </p>
      </div>
    ))
  }

  const renderDay = () => {
    const today = new Date()
    return daysOfWeek.map(({ abbreviated, number, fullDate }, index) => (
      <div key={`days-${index}`} className='flex lg:flex-row flex-col justify-center items-center gap-2 text-center font-bold'>
        <p>{abbreviated}</p>
        <p className={`flex justify-center items-center w-8 h-8 ${isSameDay(singleDay[0].fullDate, fullDate) ? 'bg-secondary rounded-full text-font2' : ''}`}>
          {number}
        </p>
      </div>
    ))
  }

  const renderEventsWeek = () => {
    return props.events.map((event) => {
      const startDate = new Date(event.dateStart)
      const endDate = new Date(event.dateEnd)

      const startRow = Math.floor(startDate.getHours() * 60 + startDate.getMinutes())
      const endRow = Math.ceil(endDate.getHours() * 60 + endDate.getMinutes())
      const spanRows = endRow - startRow
      const dayIndex = daysOfWeek.findIndex((day) => isSameDay(startDate, day.fullDate))

      if (dayIndex < 0 || dayIndex >= daysOfWeek.length) {
        return null
      }

      const gridStyles: React.CSSProperties = {
        gridRow: `${startRow + 1} / span ${spanRows}`,
        gridColumn: `${dayIndex + 1}`,
      }

      return (
        <div key={event.id} className="bg-secondary rounded-lg m-1 lg:px-3 px-2 py-1" style={gridStyles}>
          <p className='text-font2 truncate'>{event.title}</p>
          <p className='text-font2 truncate'>{`${formatDate(event.dateStart)} - ${formatDate(event.dateEnd)}`}</p>
          <p className='text-font2 truncate'>{event.location}</p>
          <p className='text-font2 truncate'>{event.description}</p>
        </div>
      )
    })
  }

  const renderEventsDay = () => {
    return props.events.map((event) => {
      const startDate = new Date(event.dateStart)
      const endDate = new Date(event.dateEnd)

      const startRow = Math.floor(startDate.getHours() * 60 + startDate.getMinutes())
      const endRow = Math.ceil(endDate.getHours() * 60 + endDate.getMinutes())
      const spanRows = endRow - startRow
      const dayIndex = singleDay.findIndex((day) => isSameDay(startDate, day.fullDate))

      if (dayIndex < 0 || dayIndex >= daysOfWeek.length) {
        return null
      }

      const gridStyles: React.CSSProperties = {
        gridRow: `${startRow + 1} / span ${spanRows}`,
      }

      return (
        <div key={event.id} className="bg-secondary rounded-lg m-1 lg:px-3 px-2 py-1" style={gridStyles}>
          <p className='text-font2 truncate'>{event.title}</p>
          <p className='text-font2 truncate'>{`${formatDate(event.dateStart)} - ${formatDate(event.dateEnd)}`}</p>
          <p className='text-font2 truncate'>{event.location}</p>
          <p className='text-font2 truncate'>{event.description}</p>
        </div>
      )
    })
  }

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() - 7)
    setCurrentDate(newDate)
  }

  const handleNextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + 7)
    setCurrentDate(newDate)
  }

  const handlePrevDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() - 1)
    setCurrentDate(newDate)
  }

  const handleNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + 1)
    setCurrentDate(newDate)
  }

  const handleResetToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="flex flex-col md:p-5 gap-6 w-full">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5">
        <p onClick={handleResetToToday} className='font-semibold text-xl font-font1'>{currentDate.toLocaleDateString(local, { month: 'long', year: 'numeric' })}</p>
        <div className="md:flex hidden gap-5">
          {/* <button onClick={handlePrevWeek}><ArrowRight className='w-5 fill-extra rotate-180'/></button>
          <button onClick={handleNextWeek}><ArrowRight className='w-5 fill-extra'/></button> */}
          <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handlePrevWeek}>
            <ArrowRight className="rotate-180 fill-font2 h-5" />
          </button>
          <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handleNextWeek}>
            <ArrowRight className="fill-font2 h-5" />
          </button>
        </div>

        <div className="flex md:hidden gap-5">
          {/* <button onClick={handlePrevWeek}><ArrowRight className='w-5 fill-extra rotate-180'/></button>
          <button onClick={handleNextWeek}><ArrowRight className='w-5 fill-extra'/></button> */}
          <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handlePrevDay}>
            <ArrowRight className="rotate-180 fill-font2 h-5" />
          </button>
          <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handleNextDay}>
            <ArrowRight className="fill-font2 h-5" />
          </button>
        </div>
      </div>

      <div className="md:flex hidden flex-row w-full">
        <div className="w-20"></div>
        <div className="grid grid-cols-7 w-full">{renderWeek()}</div>
      </div>

      <div className="flex md:hidden flex-row w-full">
        <div className="grid grid-cols-7 w-full">{renderDay()}</div>
      </div>

      <div className='flex flex-row h-fit'>
        <div className='relative flex flex-col w-20'>
          {timesOfDay.map((time, index) => (
            <div key={`times-${index}`} className='flex flex-row justify-center items-start h-28 relative'>
              <p className="text-center font-bold absolute top-[-13px]">
                {time}
              </p>
            </div>
          ))}
        </div>
        <div className='relative w-full'>
          <div className='absolute top-0 left-0 md:grid hidden grid-rows-day grid-cols-7 w-full h-full'>
            {renderEventsWeek()}
          </div>
          <div className='absolute top-0 left-0 grid md:hidden grid-rows-day w-full h-full'>
            {renderEventsDay()}
          </div>
          <div className='md:grid hidden grid-cols-7 w-full'>
            {Array.from({ length: timesOfDayGrid }).map((_, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {daysOfWeek.map((day, colIndex) => (
                  <div key={`${rowIndex}-${colIndex}`} className='h-14 outline outline-1 outline-offset-[-0.5px]'></div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className='grid md:hidden grid-rows-7 w-full'>
            {Array.from({ length: timesOfDayGrid }).map((_, rowIndex) => (
              <div key={rowIndex} className='h-14 outline outline-1 outline-offset-[-0.5px]'></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
