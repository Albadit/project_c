"use client"
import React, { useEffect, useState } from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react';
import NavHome from '@/app/components/home/nav';
import Calendar from "@/app/components/icons/calendar";
import { useParams } from 'next/navigation';

const context = {
  image: "/img/event.png",
  title: "Connectiedag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  location: "Rotterdam",
  date: "12-12-2024",
  link: "#",
}

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
  status: string;
  data: T;
}

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0');
  const minutes = String(convert.getMinutes()).padStart(2, '0');
  const seconds = String(convert.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
  // return `${day}-${month}-${year}`
}

export default function Dashboard() {
  const params = useParams()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<EventItems> | null>(null)
  const [isLoading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const response = await fetch('/api/v1/event/' + params.event_id);
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
              <button type='button' className="flex flex-row items-center justify-center lg:w-max w-full gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
                Meld je aan!
              </button>
            </div>
          </div>
        </section>
      ))}
      </main>
      <Footer/>
    </>
  )
}