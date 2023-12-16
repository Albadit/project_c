import React from "react";
import Link from "next/link";
import Chat from "@/app/components/icons/chat";

type QAItems = {
  id: string
  name: string
  img: string
  dateCreate: string
  title: string
  tags: string[]
  reactions: number
}

type Props = {
  qaList: QAItems[]
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export const QACardList = (props: Props) => {
  return (
    <>
    {props.qaList.map((item) => (
    <Link key={item.id} href={"/qa/" + item.id}>
      <div className='flex flex-col py-6 px-7 gap-4 rounded-lg bg-section shadow-cbs'>
        <div className='flex flex-row items-center gap-5'>
          <img src={item.img} alt="profile" className="h-full w-auto"/>
          <div className='flex flex-col'>
            <p className='font-semibold font-font1'>{item.name}</p>
            <span className='text-sm text-extra'>{formatDate(new Date(item.dateCreate))}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold font-font1'>{item.title}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-2'>
          {item.tags.map((tag) => (
            <span key={tag} className='bg-[#EAEAEA] py-1 px-2.5 rounded text-[12px] text-extra'>{tag}</span>
          ))}
          </div>
          <div className='flex flex-row items-center gap-2'>
            <Chat className="fill-extra h-5" />
            <p className="text-sm text-extra">{item.reactions}</p>
          </div>
        </div>
      </div>
    </Link>
    ))}
    </>
  )
}