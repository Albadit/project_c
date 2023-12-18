'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav'
import NavHome from '@/app/components/home/nav'
import AttachFile from '@/app/components/icons/attach_file';
import Smile from '@/app/components/icons/smile';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

type CreatorItems = {
  id: string
  title: string
  name: string
  email: string
  dateCreate: string
}

type QaAnswersItems = {
  id: string
  name: string
  email: string
  image: string
  dateCreate: string
  comment: string
}

type QaItems = {
  creator: CreatorItems
  qaAnswers: QaAnswersItems[]
  status: string
}

type ApiResponse<T> = {
  status: string;
  data: T;
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

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0');
  const minutes = String(convert.getMinutes()).padStart(2, '0');
  const seconds = String(convert.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  // return `${day}-${month}-${year}`
}

export default function Chat() {
  const params = useParams()
  const { data: session, status } = useSession()
  const [data, setData] = useState<ApiResponse<QaItems> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [comment, setComment] = useState('');

  async function fetchData() {
    try {
      const response = await fetch('/api/v1/qa/' + params.qa_id);
      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData()
    // const interval = setInterval(fetchData, 1000);
    // return () => clearInterval(interval);
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get('comment')
    
    if (comment) {
      const register = await Post({
        userEmail: session?.user?.email,
        questionId: params.qa_id,
        comment: comment
      }, "/api/v1/qa/" + params.qa_id)
      if (register) {
        setComment('');
        fetchData()
      } else {
        console.log('has been not send')
      }
    } else {
      console.log('De input staat leeg.')
    }
  }
  
  return (
    <>
    {session && status === "authenticated" ? (<NavDashboard user={session?.user}/>) : (<NavHome />)}
      <main className='m-auto p-5 my-12 max-w-[1000px]'>
        {isLoading ? (<p className='text-center'>Loading data...</p>) : ( data?.status === "error" ? (<p className='text-center'>No data find</p>) : (
          <section className='flex flex-col w-full gap-5 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>{data?.data.creator.title}</h1>
          <div className='flex flex-col text-extra'>
            <p>Gevraagd: {data?.data.creator.name}</p>
            <p>Datum: {formatDate(data?.data.creator.dateCreate ?? '')}</p>
          </div>
          <hr />
          {data?.data.qaAnswers.map((item, index) => (
            <div key={index} className={`flex ${session?.user?.email == item.email ? 'flex-row-reverse justify-start' : 'flex-row justify-start'} sm:gap-5 gap-2`}>
              <img src={"/img/" + item.image} alt="profile" className='h-[40px] rounded-full'/>
              <div className={`flex flex-col p-3 gap-3 rounded-lg shadow-cbs-sm w-full max-w-[500px] ${session?.user?.email == item.email ? 'bg-section' : 'bg-[#F0F0F0]'}`}>
                <p className={`font-font1 text-lg font-semibold ${session?.user?.email == item.email ? 'hidden' : 'block'}`}>{item.name}</p>
                <p className='text-extra text-ms leading-5'>{item.comment}</p>
                <p className='font-font1 text-extra text-right text-sm'>{formatDate(item.dateCreate)}</p>
              </div>
            </div>
          ))}
          {session && status === "authenticated" ? (
            <div className='flex flex-row justify-end gap-5 w-full'>
            <form onSubmit={handleSubmit} className='comment bg-section flex flex-col gap-2 p-3 max-w-[560px] w-full h-[120px] rounded-lg shadow-sm border-[1px] border-font1/20 focus-within:outline focus-within:outline-2 focus-within:outline-callToAction focus-within:outline-offset-[-2px] sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'>
              <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Schrijf jouw comment...' className='grow border-0 p-0 m-0 bg-section resize-none focus:ring-0 focus:border-transparent'/>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-1'>
                  <AttachFile className='h-[75%] rotate-[210deg] fill-extra'/>
                  <Smile className='h-[75%] fill-extra'/>
                </div>
                <button type="submit" className='px-2.5 py-1.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>comment</button>
              </div>
            </form>
          </div>
          ) : (<></>)}  
        </section>
        ))}
      </main>
      <Footer/>
    </>
  )
}
