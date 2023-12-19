import React from "react";
import Link from "next/link";
import Chat from "@/app/components/icons/chat";

type QAItems = {
  id: string
  name: string
  image: string
  dateCreate: string
  title: string
  tags: string[]
  reactions: number
}


type Props = {
  qaData: QAItems
}

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0');
  const minutes = String(convert.getMinutes()).padStart(2, '0');
  const seconds = String(convert.getSeconds()).padStart(2, '0');

  // return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return `${day}-${month}-${year}`
}

export const QACardList = (props: Props) => {
  return (
    <Link key={props.qaData.id} href={"/qa/" + props.qaData.id}>
      <div className='flex flex-col py-6 px-7 gap-4 rounded-lg bg-section shadow-cbs'>
        <div className='flex flex-wrap items-center gap-5'>
          <img src={props.qaData.image} alt="profile" className="h-[40px] rounded-full"/>
          <div className='flex flex-col'>
            <p className='font-semibold font-font1'>{props.qaData.name}</p>
            <span className='text-sm text-extra'>{formatDate(props.qaData.dateCreate)}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold font-font1'>{props.qaData.title}</p>
        </div>
        <div className='flex flex-wrap gap-4'>
          <div className='flex flex-wrap gap-2 grow'>
            {props.qaData.tags.map((tag) => (
              <span key={tag} className='bg-[#EAEAEA] py-1 px-2.5 rounded text-[12px] text-extra'>{tag}</span>
            ))}
          </div>
          <div className='flex flex-row items-center gap-2'>
            <Chat className="fill-extra h-5" />
            <p className="text-sm text-extra">{props.qaData.reactions}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}