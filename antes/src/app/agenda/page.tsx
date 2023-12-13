"use client"
import React, { useState, useMemo } from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import ArrowRight from '@/app/components/icons/arrow_right';
import Link from 'next/link';
import { events } from '../event/page';

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

export default function Calendar() {
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const dayLabels = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
  const timeSlotHeight = 100 / timeSlots.length;
  const currentDate = useMemo(() => {
    return new Date();
  }, []);
  const startDayOfWeek = getStartDayOfWeek();


  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentMonth, setCurrentMonth] = useState("");

  const handleWeekChange = (direction: any) => {
    console.log(`Changing week by ${direction}`);
    setCurrentWeek((prevWeek) => prevWeek + direction);
  };

  const handleCurrentWeek = () => {
    setCurrentWeek(0);
  };

  const adjustedDate = useMemo(() => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - date.getDay() + startDayOfWeek);
    date.setDate(date.getDate() + currentWeek * 7);
    return date;
  }, [currentDate, currentWeek, startDayOfWeek]);

  React.useEffect(() => {
    const month = adjustedDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + adjustedDate.toLocaleString('default', { month: 'long' }).slice(1);
    setCurrentMonth(month);
  }, [adjustedDate]);


  return (
    <>
      {/* Header */}
      <NavDashboard user={user} />

      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col justify-center items-center gap-10'>
          {/* Title */}
          <h1 className="font-font1 font-bold text-center text-primary text-5xl">Agenda</h1>

          {/* Month and Week Selector */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="text-3xl font-bold">{`${currentMonth} ${adjustedDate.getFullYear()}`}</div>
            <div className="flex gap-2">
              <button className="bg-[#3939bf] font-bold text py-2 px-4 text-[#ffffff] rounded" onClick={() => handleWeekChange(-1)}>
                ←
              </button>
              <button className="bg-[#3939bf] font-bold text py-2 px-4 text-[#ffffff] rounded" onClick={handleCurrentWeek}>
                Week
              </button>
              <button className="bg-[#3939bf] font-bold text py-2 px-4 text-[#ffffff] rounded" onClick={() => handleWeekChange(1)}>
                →
              </button>

            </div>
          </div>

          {/* Calendar Box */}
          <div className="grid gap-1 shadow-md mx-6 mb-6 p-4 rounded-md w-full">
            {/* Empty top-left corner */}
            <div className=""></div>

            {/* Days of the week */}
            <div className="col-span-7 flex py-2 px-4 rounded-md">
              {dayLabels.map((day, index) => {
                const { dayNumber } = getUpdatedDayNumber(index, startDayOfWeek, currentWeek);
                return (
                  <div key={`day-label-${index}`} className="flex-1 text-center">
                    {`${day} ${dayNumber} `}
                  </div>
                );
              })}
            </div>

            {/* Time slots */}
            <div className="flex flex-col gap-8">
              {timeSlots.map((time, index) => (
                <div key={`time-slot-${index}`} className="text-center" style={{ height: `${timeSlotHeight}%` }}>
                  {time}
                </div>
              ))}
            </div>

            {/* Agenda cells */}
            <div className="col-start-2 row-start-2 col-span-7 row-span-6 relative">
              {/* Grid lines for each hour */}
              {Array.from({ length: 10 }, (_, index) => (
                <div
                  key={`grid-hour-${index}`}
                  className="absolute border-t"
                  style={{ top: `calc(${index * timeSlotHeight}%)`, width: '100%' }}
                ></div>
              ))}

              {/* Grid lines for each day */}
              {Array.from({ length: 7 }, (_, index) => (
                <div
                  key={`grid-day-${index}`}
                  className="absolute border-l"
                  style={{ left: `calc(${index * (100 / 7)}%)`, height: '100%' }}
                ></div>
              ))}

              {/* Event cards */}
              {events.map(event => generateEventCard(event))}
              {/* You can add more event cards here */}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

  function convertTimeToMinutes(date: Date): number {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours * 60 + minutes;
  }


  function getDayIndex(day: string) {
    const daysOfWeek = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
    return daysOfWeek.indexOf(day);
  }

  function getStartDayOfWeek() {
    const daysOfWeek = ["Ma", "Di", "Wo", "Do", "Vr", "Za"];
    return daysOfWeek.indexOf(dayLabels[0]);
  }



  function getUpdatedDayNumber(index: any, startDayOfWeek: any, currentWeek: any) {
    const currentDate = new Date();
    const mondayDate = new Date(currentDate);
    mondayDate.setDate(mondayDate.getDate() - mondayDate.getDay() + (mondayDate.getDay() === 0 ? -6 : 1) + startDayOfWeek);

    let dayNumber = mondayDate.getDate() + index + currentWeek * 7;

    // Houd het aantal dagen in de huidige maand bij
    let daysInMonth = new Date(mondayDate.getFullYear(), mondayDate.getMonth() + 1, 0).getDate();

    let monthOffset = 0; // Variabele om bij te houden hoeveel maanden we zijn veranderd

    // Als de dag kleiner is dan 1, ga een maand terug en herhaal dit tot de dag binnen het bereik van de maand valt
    while (dayNumber <= 0) {
      monthOffset -= 1;
      mondayDate.setMonth(mondayDate.getMonth() - 1);
      daysInMonth = new Date(mondayDate.getFullYear(), mondayDate.getMonth() + 1, 0).getDate();
      dayNumber += daysInMonth;
    }

    // Als de dag groter is dan het aantal dagen in de maand, ga een maand vooruit en herhaal dit tot de dag binnen het bereik van de maand valt
    while (dayNumber > daysInMonth) {
      monthOffset += 1;
      dayNumber -= daysInMonth;
      mondayDate.setMonth(mondayDate.getMonth() + 1);
      daysInMonth = new Date(mondayDate.getFullYear(), mondayDate.getMonth() + 1, 0).getDate();
    }

    return { dayNumber, monthOffset };
  }

  function generateEventCard(event: any) {
    const startMinutes = convertTimeToMinutes(event.start);
    const endMinutes = convertTimeToMinutes(event.end);
    const formattedStartTime = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedEndTime = event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const isSameWeek = adjustedDate.getFullYear() === event.start.getFullYear() &&
      adjustedDate.getMonth() === event.start.getMonth() &&
      adjustedDate.getDate() <= event.start.getDate() &&
      event.start.getDate() <= adjustedDate.getDate() + 6;

      // teveel pijn aan hoofd please fix dit ik kan niet rekenen de datum is een maand en dag verkeerd dacht ik

    if (isSameWeek) {
      const top = `calc(${startMinutes / 60 - 8} * ${timeSlotHeight}%)`;
      const height = `calc(${(endMinutes - startMinutes) / 60 * timeSlotHeight}%)`;
      const left = `calc(${getDayIndex(dayLabels[event.start.getDay()]) * (100 / 7)}%)`;
      const width = 'calc(100% / 7)';

      return (
        <div
          key={`event-${event.id}`}
          className="bg-[#3939bf] text-[#ffffff] p-2 rounded-md mb-2 absolute"
          style={{ top, height, left, width }}
        >
          <div className="font-bold">{event.title}</div>
          <div className="text-sm">{`${formattedStartTime} - ${formattedEndTime}`}</div>
        </div>
      );
    }

    return null; // Return null if the event is not in the current week
  }


}