'use client'
import React from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import NavHome from '@/components/home/nav'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Modal from '@/components/modal'
import { Input } from '@/components/input'
import { QACardList, QaListProps } from '@/components/dashboard/qa_card_list'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

type QAData = {
  tags: string[];
  question: QaListProps[];
}

type ApiResponse<T> = {
  status: string;
  data: T;
}

export default function Qa() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<QAData> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    FetchData(setData, setLoading, '/api/v1/qa/')
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const form = e.target
    const title = formData.get('title')
    const image = formData.get('image')

    if (title) {
      const newQa = await PostData({
        userEmail: session?.user?.email,
        title: title,
        image: image,
      }, "/api/v1/qa")
      if (newQa.status === "success") {
        setIsModalOpen(false)
        form.elements['title'].value = '';
        FetchData(setData, setLoading, '/api/v1/qa/')
      } else {
        setMessage('Er is iets fout gegaan')
      }
    } else {
      setMessage('De input staat leeg')
    }
  }

  if (status === "loading") return <LoadingScreen/>
  if (isLoading) return <LoadingScreen/> 
  if (data?.status === "error") return <NoDataFind/>

  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          {session && status === "authenticated" ? (
            <div className='flex flex-row justify-end'>
            <Modal title='Nieuw Q&A' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-end'>
                <Input label='Vraag' name='title' type='textarea' value=''/>
                {/* add image button */}
                <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
                {message ? (<p className='text-error'>{message}</p>) : (<></>)}
              </form>
            </Modal>
          </div>
          ) : (<></>)}
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
            <div className='flex flex-row gap-2 overflow-x-auto'>
            {data?.data.tags.map((item: any, index: any) => (
              <span key={index} className='cursor-pointer bg-[#EAEAEA] whitespace-nowrap text-extra py-2 px-4 rounded-full hover:bg-primary hover:text-font2 ease-in duration-300' >{item}</span>
            ))}
            </div>
            {data?.data.question.map((item: any, index: any) => (
              <QACardList key={index} qa={item}/>
            ))}
            {/* <Paginator qaList={question}/> */}
        </section>
      </main>
      <Footer/>
    </>
  )
}
