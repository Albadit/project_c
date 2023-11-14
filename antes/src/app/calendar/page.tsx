"use client"
import React, { useState, useMemo } from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import ArrowRight from '@/app/components/icons/arrow_right';

const user = {
  id: 1,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

const events = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2023, 1, 1, 9, 0, 0),
    end: new Date(2023, 1, 1, 13, 0, 0)
  },
  {
    id: 1,
    title: "MS training",
    start: new Date(2023, 2, 5, 14, 0, 0),
    end: new Date(2023, 2, 5, 16, 30, 0),
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2023, 3, 12, 8, 30, 0),
    end: new Date(2023, 3, 12, 12, 30, 0),
  },
  {
    id: 3,
    title: "Birthday Party",
    start: new Date(2023, 4, 11, 7, 0, 0),
    end: new Date(2023, 4, 11, 10, 30, 0)
  }
];

function generateMonth(year: number, month: number, startOnMonday = false) {
  const daysInMonth = new Date(year, month, 0).getDate();
  let startDay = new Date(year, month - 1, 1).getDay();

  if (startOnMonday) {
    startDay = startDay === 0 ? 6 : startDay - 1;
  }

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevMonthYear = month === 1 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevMonthYear, prevMonth, 0).getDate();

  let prevMonthDays = Array.from({ length: startDay }, (_, i) => ({
    day: daysInPrevMonth - startDay + i + 1,
    month: prevMonth,
    year: prevMonthYear
  }));

  const endDay = new Date(year, month, 0).getDay();
  let adjustedEndDay = startOnMonday ? (endDay === 0 ? 6 : endDay - 1) : endDay;
  let nextMonthDays = Array.from({ length: 6 - adjustedEndDay }, (_, i) => ({
    day: i + 1,
    month: month === 12 ? 1 : month + 1,
    year: month === 12 ? year + 1 : year
  }));

  let days = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    month: month,
    year: year
  }));

  let grid = [...prevMonthDays, ...days, ...nextMonthDays];

  return grid.reduce((weeks: any, day, index) => {
    if (index % 7 === 0) weeks.push([]);
    weeks[weeks.length - 1].push(day);
    return weeks;
  }, []);
}

function getWeekDays(baseDate: Date, local: string, weekdays: "long" | "short" | "narrow", startOnMonday: boolean = false) {
  let weekDays = [];

  // Determine the starting day of the week (0 for Sunday, 1 for Monday)
  const startDay = startOnMonday ? 1 : 0;

  // Adjust baseDate to the next starting day (Sunday or Monday)
  while (baseDate.getDay() !== startDay) {
    baseDate.setDate(baseDate.getDate() + 1);
  }

  // Generate the week days starting from the chosen day
  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(local, { weekday: weekdays }));
    baseDate.setDate(baseDate.getDate() + 1);
  }

  return weekDays;
}

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const startOnMonday = true;
  const local = 'nl-NL'
  const days = getWeekDays(new Date(), local, "narrow", startOnMonday);
  const weeks = useMemo(() => generateMonth(currentYear, currentMonth, startOnMonday), [currentYear, currentMonth]);

  const monthName = new Intl.DateTimeFormat(local, { month: 'long' }).format(new Date(currentYear, currentMonth - 1));

  const isCurrentDay = (day: any) => {
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    
    return day.day === currentDay && day.month === currentMonth && day.year === currentYear;
  };

  const isCurrentMonth = (day: any) => {
    return day.month === currentMonth && day.year === currentYear;
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth % 12 + 1);
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
    }
  };

  const goToPrevMonth = () => {
    setCurrentMonth(currentMonth === 1 ? 12 : currentMonth - 1);
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
    }
  };

  return (
    <>
    <NavDashboard user={user}/>
    <main className="flex flex-col justify-center items-center gap-5 p-5 my-12">
      <h1 className='font-font1 font-bold text-center text-primary text-5xl'>Calender</h1>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center max-w-[350px] w-full mt-8'>
          <button onClick={goToPrevMonth}><ArrowRight className='w-5 fill-extra rotate-180'/></button>
          <p className='font-semibold text-xl font-font1'>{monthName} {currentYear}</p>
          <button onClick={goToNextMonth}><ArrowRight className='w-5 fill-extra'/></button>
        </div>
        <div className='text-font1 font-font2 overflow-x-auto max-w-full'>
          <table>
            <thead>
              <tr className='text-center'>
                {days.map((day, index) => 
                <th key={index} className="py-2 font-normal">{day}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week: any, i: any) => (
                <tr key={i}>
                  {week.map((day: any, index: any) => (
                    <td key={index} className={`text-center border border-inputBorder px-4 py-2.5 ${isCurrentMonth(day) ? 'bg-section' : 'text-extra bg-[#f9fafb]'}`}>
                      <span className={`${isCurrentDay(day) ? 'text-font2 font-medium bg-secondary rounded-full p-1.5 m-[-6px]' : ''}`}>{day.day}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section className='flex flex-col gap-5 font-font2 text-font1 max-w-[750px] w-full'>
        <h2 className='font-semibold text-xl font-font1'>Aankomende evenementen</h2>
        <div className=''>
          <div className="flex sm:flex-row flex-col text-extra py-4 border-b-[1px] border-extra/20 ">
            <p className='w-28 sm:p-0 pb-4'>{new Date().toLocaleDateString(local, { weekday: 'short' })}, {new Date().toLocaleDateString(local, { month: 'short' })} {new Date().getDate()}</p>
            <p className='grow'>Er staat niets op het programma van vandaag</p>
          </div>
          {events.map((item) => 
          <div key={item.id} className="flex sm:flex-row flex-col py-4 border-b-[1px] border-extra/20">
            <p className='text-extra w-28 sm:p-0 pb-4'>{item.start.toLocaleDateString(local, { weekday: 'short' })}, {item.start.toLocaleDateString(local, { month: 'short' })} {item.start.getDate()}</p>
            <p className='grow font-medium'>{item.title}</p>
            <p>{item.start.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })} - {item.end.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
          </div>
          )}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};