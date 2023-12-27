import React, { useMemo, useState } from 'react'
import ArrowRight from '@/app/components/icons/arrow_right'

function generateMonth(year: number, month: number, startOnMonday = false) {
  const daysInMonth = new Date(year, month, 0).getDate()
  let startDay = new Date(year, month - 1, 1).getDay()

  if (startOnMonday) {
    startDay = startDay === 0 ? 6 : startDay - 1
  }

  const prevMonth = month === 1 ? 12 : month - 1
  const prevMonthYear = month === 1 ? year - 1 : year
  const daysInPrevMonth = new Date(prevMonthYear, prevMonth, 0).getDate()

  let prevMonthDays = Array.from({ length: startDay }, (_, i) => ({
    day: daysInPrevMonth - startDay + i + 1,
    month: prevMonth,
    year: prevMonthYear
  }))

  const endDay = new Date(year, month, 0).getDay()
  let adjustedEndDay = startOnMonday ? (endDay === 0 ? 6 : endDay - 1) : endDay
  let nextMonthDays = Array.from({ length: 6 - adjustedEndDay }, (_, i) => ({
    day: i + 1,
    month: month === 12 ? 1 : month + 1,
    year: month === 12 ? year + 1 : year
  }))

  let days = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    month: month,
    year: year
  }))

  let grid = [...prevMonthDays, ...days, ...nextMonthDays]

  return grid.reduce((weeks: any, day, index) => {
    if (index % 7 === 0) weeks.push([])
    weeks[weeks.length - 1].push(day)
    return weeks
  }, [])
}

function getWeekDays(baseDate: Date, local: string, weekdays: "long" | "short" | "narrow", startOnMonday: boolean = false) {
  let weekDays = []

  // Determine the starting day of the week (0 for Sunday, 1 for Monday)
  const startDay = startOnMonday ? 1 : 0

  // Adjust baseDate to the next starting day (Sunday or Monday)
  while (baseDate.getDay() !== startDay) {
    baseDate.setDate(baseDate.getDate() + 1)
  }

  // Generate the week days starting from the chosen day
  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(local, { weekday: weekdays }))
    baseDate.setDate(baseDate.getDate() + 1)
  }

  return weekDays
}

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1)
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

  const startOnMonday = true
  const local = 'nl-NL'
  const days = getWeekDays(new Date(), local, "narrow", startOnMonday)
  const weeks = useMemo(() => generateMonth(currentYear, currentMonth, startOnMonday), [currentYear, currentMonth, startOnMonday])

  const monthName = new Intl.DateTimeFormat(local, { month: 'long' }).format(new Date(currentYear, currentMonth - 1))

  const isCurrentDay = (day: any) => {
    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()
    
    return day.day === currentDay && day.month === currentMonth && day.year === currentYear
  }

  const isCurrentMonth = (day: any) => {
    return day.month === currentMonth && day.year === currentYear
  }

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth % 12 + 1)
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1)
    }
  }

  const goToPrevMonth = () => {
    setCurrentMonth(currentMonth === 1 ? 12 : currentMonth - 1)
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1)
    }
  }

  const resetToCurrentDate = () => {
    const today = new Date()
    setCurrentDate(today)
    setCurrentMonth(today.getMonth() + 1)
    setCurrentYear(today.getFullYear())
  }

  return (
    <div className='max-w-full'>
      <div className='flex flex-row justify-between items-center max-w-[350px] w-full mt-8'>
        <button onClick={goToPrevMonth}><ArrowRight className='w-5 fill-extra rotate-180'/></button>
        <p onClick={resetToCurrentDate} className='font-semibold text-xl font-font1'>{monthName} {currentYear}</p>
        <button onClick={goToNextMonth}><ArrowRight className='w-5 fill-extra'/></button>
      </div>
      <div className='text-font1 font-font2 overflow-x-auto'>
        <div className='w-max'>
          {/* Weekday Headers */}
          <div className="grid grid-cols-7">
            {days.map((day, index) => (
              <span key={index} className="text-center py-2 font-normal">{day}</span>
            ))}
          </div>

          {/* Calendar Days */}
          <div className='calender grid grid-rows-6 p-0.5'>
            {weeks.map((week: any, i: any) => (
              <div key={i} className='grid grid-cols-7'>
                {week.map((day: any, index: any) => (
                  <div key={index} className={`text-center outline outline-[1px] outline-offset-0 outline-inputBorder px-4 py-2.5 ${isCurrentMonth(day) ? 'bg-section' : 'text-extra bg-[#f9fafb]'}`}>
                    <span className={`${isCurrentDay(day) ? 'text-font2 font-medium bg-secondary rounded-full p-1.5 m-[-6px]' : ''}`}>{day.day}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
