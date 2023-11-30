"use client"
import React, { useState, useMemo } from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import ArrowRight from '@/app/components/icons/arrow_right';
import Link from 'next/link';

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
  // Fixed time slots and grid lines
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const dayLabels = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

  const timeSlotHeight = 100 / timeSlots.length; 

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentYear = currentDate.getFullYear()
  const startDayOfWeek = getStartDayOfWeek()

  return (
    <>
      {/* Header */}
      <NavDashboard user={user}/>
      
      <main className='m-auto p-5 my-12 max-w-[1280px]'>
        <section className='flex flex-col justify-center items-center gap-10'>
          {/* Title */}
          <h1 className="font-font1 font-bold text-center text-primary text-5xl">Agenda</h1>

          {/* Month and Week Selector */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="text-3xl font-bold">{`${currentMonth} ${currentYear}`}</div>
            <button className="bg-[#3939bf] font-bold text py-2 px-4 text-[#ffffff] rounded">← Week →</button>
          </div>

          {/* Calendar Box */}
          <div className="grid gap-1 shadow-md mx-6 mb-6 p-4 rounded-md w-full">
            {/* Empty top-left corner */}
            <div className=""></div>

            {/* Days of the week */}
            <div className="col-span-7 flex py-2 px-4 rounded-md">
              {dayLabels.map((day, index) => (
                <div key={`day-label-${index}`} className="flex-1 text-center">
                  {day} {getUpdatedDayNumber(index, startDayOfWeek)}
                </div>
              ))}
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
              {generateEventCard("Di", "12:00", "13:00", "Event: Hans")}
              {generateEventCard("Za", "09:00", "14:00", "Event: Hans")}
              {generateEventCard("Ma", "15:00", "17:00", "Event: Hans")}
              {generateEventCard("Di", "10:00", "11:30", "Event: Hans")}
              {/* You can add more event cards here */}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );

  function convertTimeToMinutes(time: any) {
    const [hours, minutes] = time.split(":").map(Number);
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

  function getUpdatedDayNumber(index: any, startDayOfWeek: any) {
    const dayNumber = currentDate.getDate() + index - startDayOfWeek - 2;
    return dayNumber > 0 ? dayNumber : "";
  }

  function generateEventCard(day: any, startTime: any, endTime: any, eventName: any) {
    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);
    const top = `calc(${startMinutes / 60 - 8} * ${timeSlotHeight}%)`;
    const height = `calc(${(endMinutes - startMinutes) / 60 * timeSlotHeight}%)`;
    const left = `calc(${getDayIndex(day) * (100 / 7)}%)`; 
    const width = 'calc(100% / 7)';

    return (
      <div
        key={`${day}-${startTime}`}
        className="bg-[#3939bf] text-[#ffffff] p-2 rounded-md mb-2 absolute"
        style={{ top, height, left, width }}
      >
        <div className="font-bold">{eventName}</div>
        <div className="text-sm">{` ${startTime} - ${endTime}`}</div>
      </div>
    );
  }
}