// components/Calendar.js
import React, { useState } from 'react'
import ArrowRight from '@/components/icons/arrow_right'

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
  const hours = String(convert.getHours()).padStart(2, '0')
  const minutes = String(convert.getMinutes()).padStart(2, '0')
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
        <div key={event.id} className="flex flex-col gap-2 bg-secondary rounded-lg m-1 lg:px-3 px-2 py-1" style={gridStyles}>
          <p className='text-font2 break-words line-clamp-5'>{event.title}</p>
          <p className='text-font2 break-words line-clamp-5'>{`${formatDate(event.dateStart)} - ${formatDate(event.dateEnd)}`}</p>
          <p className='text-font2 break-words line-clamp-5'>{event.location}</p>
          <p className='text-font2 break-words line-clamp-5'>{event.description}</p>
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
        <div key={event.id} className="flex flex-col gap-2 bg-secondary rounded-lg m-1 lg:px-3 px-2 py-1" style={gridStyles}>
          <p className='text-font2 break-words line-clamp-5'>{event.title}</p>
          <p className='text-font2 break-words line-clamp-5'>{`${formatDate(event.dateStart)} - ${formatDate(event.dateEnd)}`}</p>
          <p className='text-font2 break-words line-clamp-5'>{event.location}</p>
          <p className='text-font2 break-words line-clamp-5'>{event.description}</p>
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

  const handleResetToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="flex flex-col lg:p-5 gap-6 w-full text-font1">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-5">
        <p onClick={handleResetToToday} data-testid="current-date" className='font-semibold text-xl font-font1'>
          {currentDate.toLocaleDateString(local, { month: 'long', year: 'numeric' })} </p>        
          <div className="lg:flex hidden gap-5">
          <button data-testid="prev-button" className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handlePrevWeek}>
            <ArrowRight className="rotate-180 fill-font2 h-5" />
          </button>
          <button data-testid="next-button" className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm' onClick={handleNextWeek}>
            <ArrowRight className="fill-font2 h-5" />
          </button>
        </div>
      </div>

      <div className="lg:flex hidden flex-row w-full">
        <div className="w-20"></div>
        <div className="grid grid-cols-7 w-full">{renderWeek()}</div>
      </div>

      <div className="flex lg:hidden flex-row w-full">
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
          <div className='relative lg:grid hidden grid-cols-7 w-full h-full border'>
            <div className={`absolute grid grid-rows-hour w-full`}>
              {Array.from({ length: timesOfDayGrid }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className={`${timesOfDayGrid - 1 === rowIndex ? ('') : ('border-b-[1px]')}`}></div>
              ))}
            </div>
            <div className={`absolute grid grid-cols-7 w-full h-full`}>
              {daysOfWeek.map((day, colIndex) => (
                <div key={`col-${colIndex}`} className={`h-full ${daysOfWeek.length - 1 === colIndex ? ('') : ('border-r-[1px]')}`}></div>
              ))}
            </div>
          </div>
          <div className='grid lg:hidden grid-rows-hour border w-full'>
            {Array.from({ length: timesOfDayGrid }).map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className={`${timesOfDayGrid - 1 === rowIndex ? ('') : ('border-b-[1px]')}`}></div>
            ))}
          </div>
          <div className='absolute top-0 left-0 lg:grid hidden grid-rows-day grid-cols-7 w-full h-full'>
            {renderEventsWeek()}
          </div>
          <div className='absolute top-0 left-0 grid lg:hidden grid-rows-day w-full h-full'>
            {renderEventsDay()}
          </div>
        </div>
      </div>
    </div>
  )
}
