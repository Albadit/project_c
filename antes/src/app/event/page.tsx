"use client"
import React, { useState, useEffect } from 'react'
import Footer from '@/app/components/footer'
import { NavDashboard } from '@/app/components/dashboard/nav'
import { useSession } from 'next-auth/react'
import { Input } from '@/app/components/input'
import { InputDateTime } from '@/app/components/input_datetime'
import Link from 'next/link'
import NavHome from '@/app/components/home/nav'
import Modal from '@/app/components/modal'
import Calendar from '@/app/components/calendar'
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

export default function Event() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<EventItems[]> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const local = 'nl-NL'

  useEffect(() => {
    FetchData(setData, setLoading, '/api/v1/event')
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const form = e.target
    const image = null
    const title = formData.get('title')
    const description = formData.get('description')
    const location = formData.get('location')
    const dateStart = formData.get('date_start')
    const dateEnd = formData.get('date_end')

    if (title && description && location && dateStart && dateEnd) {
      const newEvent = await PostData({
        title: title,
        description: description,
        location: location,
        image: image,
        dateStart: dateStart,
        dateEnd: dateEnd,
      }, "/api/v1/event")

      if (newEvent.status === "success") {
        setIsModalOpen(false)
        form.elements['title'].value = ''
        form.elements['description'].value = ''
        form.elements['location'].value = ''
        form.elements['date_start'].value = ''
        form.elements['date_end'].value = ''
        FetchData(setData, setLoading, '/api/v1/event')
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
                <InputDateTime label='Startdatum' name='date_start' value='' min='' max=''/>
                <InputDateTime label='Einddatum' name='date_end' value='' min='' max=''/>
                {/* add image button */}
                <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
                {message ? (<p className='text-error'>{message}</p>) : (<></>)}
              </form>
            </Modal>
          </div>
          <h2 className='font-semibold text-xl font-font1'>Aankomende evenementen</h2>
          {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
            <div>
              {data?.data.map((item) => 
              <Link key={item.id} href={`event/${item.id}`} className="flex sm:flex-row flex-col py-4 border-b-[1px] border-extra/20">
                <p className='text-extra w-36 sm:p-0 pb-4'>
                  {new Date(item.dateStart).toLocaleDateString(local, { weekday: 'short' })},&nbsp;
                  {new Date(item.dateStart).getDate()}&nbsp;
                  {new Date(item.dateStart).toLocaleDateString(local, { month: 'short' })}&nbsp;
                  {new Date(item.dateStart).toLocaleDateString(local, { year: 'numeric' })}
                </p>
                <p className='grow font-medium'>
                  {item.title}
                </p>
                <p>
                  {new Date(item.dateStart).toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })} -&nbsp;
                  {new Date(item.dateEnd).toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit', hour12: false })}
                </p>
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