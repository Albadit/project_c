"use client"
import React, { useState, useEffect } from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react';
import { Input } from '@/app/components/input';
import { InputDateTime } from '@/app/components/input_datetime';
import Link from 'next/link';
import NavHome from '@/app/components/home/nav';
import Modal from '@/app/components/modal';
import Calendar from '@/app/components/calendar';

let events = [
  {
    id: 0,
    title: "Connectiedag!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Rotterdam",
    dateStart: new Date(2023, 11, 12, 9, 0, 0),
    dateEnd: new Date(2023, 11, 1, 13, 0, 0),
  },
  {
    id: 1,
    title: "MS training",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Rotterdam",
    dateStart: new Date(2024, 5, 5, 14, 0, 0),
    dateEnd: new Date(2024, 5, 5, 16, 30, 0),
  },
  {
    id: 2,
    title: "Team lead meeting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Rotterdam",
    dateStart: new Date(2024, 3, 12, 8, 30, 0),
    dateEnd: new Date(2024, 3, 12, 12, 30, 0),
  },
  {
    id: 3,
    title: "Birthday Party",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Rotterdam",
    dateStart: new Date(2024, 4, 11, 7, 0, 0),
    dateEnd: new Date(2024, 4, 11, 10, 30, 0),
  }
];

type EventItems = {
  id: string
  title: string
  dateStart: string
  dateEnd: string
}

type ApiResponse<T> = {
  status: string;
  data: T;
}

function isEventCurrentDay(day: any) {
  if (!events.some(event => event.dateStart.getDate() === day.getDate())) {
    const placeholderEvent = {
      id: "/event",
      title: "Er staat niets op het programma van vandaag",
      description: "",
      location: "",
      dateStart: day,
      dateEnd: day
    }
  
    events.unshift(placeholderEvent);
  }

  // Filter out events that have already passed (excluding the current day)
  events = events.filter(event => event.dateStart > day || event.dateStart.getDate() === day.getDate());

  // Sort events based on DateStart date
  // events.sort((a: any, b: any) => a.DateStart - b.DateStart);
}

async function Post(data: any, url: string) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

export default function Event() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<EventItems> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const currentDate = new Date();
  const dateTime = currentDate.toISOString().split('.')[0];
  const local = 'nl-NL'
  isEventCurrentDay(currentDate);

  async function fetchData() {
    try {
      const response = await fetch('/api/v1/event');
      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const form = e.target
    const title = formData.get('title')
    const image = formData.get('image')

    if (title) {
      const newQa = await Post({
        userEmail: session?.user?.email,
        title: title,
        image: image,
      }, "/api/v1/event")

      if (newQa) {
        setIsModalOpen(false)
        form.elements['title'].value = '';
        fetchData()
      } else {
        setMessage('Er is iets fout gegaan')
      }
    } else {
      setMessage('De input staat leeg')
    }
  }

  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className="flex flex-col justify-center items-center gap-8 p-5 my-12">
        <h1 className='font-font1 font-bold text-center text-primary text-5xl'>Events</h1>
        <Calendar/>
        <section className='flex flex-col gap-5 font-font2 text-font1 max-w-[750px] w-full'>
        <div className='flex flex-row justify-end'>
            <Modal title='Nieuw Event' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-end'>
                <Input label='Naam' name='title' type='text' value=''/>
                <Input label='Beschrijving' name='description' type='textarea' value=''/>
                <Input label='Locatie' name='location' type='text' value=''/>
                <InputDateTime label='Startdatum' name='dateStart' value='' min={dateTime} max=''/>
                <InputDateTime label='Einddatum' name='dateEnd' value='' min={dateTime} max=''/>
                {/* add image button */}
                <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
                {message ? (<p className='text-error'>{message}</p>) : (<></>)}
              </form>
            </Modal>
          </div>
          <h2 className='font-semibold text-xl font-font1'>Aankomende evenementen</h2>
          {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
            <div>
              {events.map((item) => 
              <Link key={item.id} href={`event/${item.id}`} className="flex sm:flex-row flex-col py-4 border-b-[1px] border-extra/20">
                <p className='text-extra w-28 sm:p-0 pb-4'>{item.dateStart.toLocaleDateString(local, { weekday: 'short' })}, {item.dateStart.getDate()} {item.dateStart.toLocaleDateString(local, { month: 'short' })}</p>
                <p className={`grow ${item.id === -1 ? 'text-extra' : 'font-medium'}`}>{item.title}</p>
                <p className={`${item.id === -1 ? 'hidden' : ''}`}>{item.dateStart.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })} - {item.dateEnd.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
              </Link>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  )
}