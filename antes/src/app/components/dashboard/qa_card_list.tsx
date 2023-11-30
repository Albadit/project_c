import React from "react";
import Link from "next/link";
import Chat from "@/app/components/icons/chat";

type QAItems = {
  id: number
  name: string
  img: string
  datetime: string
  title: string
  latestComment: string
  tags: string[]
  reactions: number
  url: string
}

type Props = {
  qaList: QAItems[]
}

export const QACardList = (props: Props) => {
  return (
    <>
    {props.qaList.map((item) => (
    <Link key={item.id} href={item.url}>
      <div className='flex flex-col py-6 px-7 gap-4 rounded-lg bg-section shadow-cbs'>
        <div className='flex flex-row items-center gap-5'>
          <img src={item.img} alt="profile" className="h-full w-auto"/>
          <div className='flex flex-col'>
            <p className='font-semibold font-font1'>{item.name}</p>
            <span className='text-sm text-extra'>{item.datetime}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold font-font1'>{item.title}</p>
          <p className='text-extra truncate'>{item.latestComment}</p>
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