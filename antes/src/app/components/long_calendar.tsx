// components/Calendar.js
import React from 'react';

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

export const LongCalendar = (props: Props) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const timesOfDay = Array.from({ length: 24 }, (_, index) => index < 10 ? `0${index}:00` : `${index}:00`)
  const timesOfDayGrid = 24 * 2

  return (
    <div className="flex flex-col p-5 w-full">
      <div className='flex flex-row w-full mb-4'>
        <div className='w-20'></div>
        <div className='grid grid-cols-7 w-full' >
          {daysOfWeek.map((day, index) => (
            <div key={index} className="flex flex-col text-center font-bold">
              <p>{day}</p>
              <p>{day}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex flex-row h-fit'>
        <div className='relative flex flex-col w-20'>
          {timesOfDay.map((time, index) => (
            <div className='flex flex-row justify-center items-start h-28 relative'>
              <p key={index} className="text-center font-bold absolute top-[-13px]">
                {time}
              </p>
            </div>
          ))}
        </div>
        <div className='relative w-full'>
          <div className='absolute top-0 left-0 grid grid-rows-day grid-cols-7 w-full h-full'>
            <div className='bg-secondary rounded-lg m-1 px-3 py-1 col-start-7 row-[_1_/_span_1440]'>
              <p className='text-font2 truncate'>asdasdasd</p>
            </div>
            <div className='bg-secondary rounded-lg m-1 px-3 py-1 col-start-1 row-[_61_/_span_60]'>
              <p className='text-font2 truncate'>asdasdasd</p>
            </div>
          </div>
          <div className='grid grid-cols-7 w-full'>
            {Array.from({ length: timesOfDayGrid }).map((_, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {daysOfWeek.map((day, colIndex) => (
                  <div key={`${rowIndex}-${colIndex}`} className="h-14 outline outline-1 outline-offset-[-0.5px]"></div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
