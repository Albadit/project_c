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
  img: string
  dateCreate: string
  title: string
  tags: string[]
  reactions: number
}

export default function Qa() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<QAItems[]>([])
  const [isLoading, setLoading] = useState(true)
  const [datatags, setDatatags] = useState<string[]>([])
  const [isLoadingtags, setLoadingtags] = useState(true)

  useEffect(() => {
    fetch('/api/v1/qa/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

    fetch('/api/v1/qa/tags')
    .then((res) => res.json())
    .then((data) => {
      setDatatags(data)
      setLoadingtags(false)
    })
  }, [])
  
  return (
    <>
      {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='m-auto p-5 my-12 max-w-[750px]'>
        <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Q & A Vragen</h1>
          <hr />
          {isLoading && isLoadingtags ? (<p className='text-center'>Loading data...</p>) : (!data && !datatags ? (<p className='text-center'>No profile data</p>) : 
          (<>
            <div className='flex flex-row gap-2 overflow-x-auto'>
            {datatags.map((item) => (
              <span key={item} className='bg-[#EAEAEA] whitespace-nowrap text-extra py-2 px-4 rounded-full hover:bg-primary hover:text-font2 ease-in duration-300'>{item}</span>
            ))}
            </div>
            <QACardList qaList={data}/>
            {/* <Paginator qaList={question}/> */}
          </>))}
        </section>
      </main>
      <Footer/>
    </>
  )
}
