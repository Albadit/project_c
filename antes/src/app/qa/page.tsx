'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import NavHome from '@/app/components/home/nav'
import { QACardList } from '@/app/components/dashboard/qa_card_list';
import { Paginator } from '@/app/components/paginator';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

type QAItems = {
  id: string
  name: string
  image: string
  dateCreate: string
  title: string
  tags: string[]
  reactions: number
}

type QAData = {
  tags: string[];
  question: QAItems[];
}

type ApiResponse<T> = {
  status: string;
  data: T;
}

export default function Qa() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<QAData> | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/qa/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
          {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : 
          (<>
            <div className='flex flex-row gap-2 overflow-x-auto'>
            {data?.data.tags.map((item: any, index: any) => (
              <span key={index} className='cursor-pointer bg-[#EAEAEA] whitespace-nowrap text-extra py-2 px-4 rounded-full hover:bg-primary hover:text-font2 ease-in duration-300' >{item}</span>
            ))}
            </div>
            {data?.data.question.map((item: any, index: any) => (
              <QACardList key={index} qaData={item}/>
            ))}
            {/* <Paginator qaList={question}/> */}
          </>))}
        </section>
      </main>
      <Footer/>
    </>
  )
}
