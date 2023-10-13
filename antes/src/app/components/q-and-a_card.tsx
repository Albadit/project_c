import { FC } from 'react';
import Link from 'next/link';
import Calendar from '@/app/components/icons/calendar';
import ArrowForwardRounded from '@/app/components/icons/arrow_forward_rounded';
import Chat from '@/app/components/icons/chat';

interface QAndACardProps {
  qanda: {
    image: string
    title: string
    description: string
    date: string
    reactions: number
    icon: string
    name: string
    link: string
  }
}

export const QAndACard: FC<QAndACardProps> = ({ qanda }) => {
  const { image, title, description, date, reactions, icon, name, link } = qanda;
  return (
    <div className='flex flex-col justify-between w-[525px] gap-5 p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1'>
      <img src={image} alt="event" className='h-[280px] object-cover object-center rounded'/>
      <div className='flex flex-row items-center gap-2 text-extra'>
        <Calendar className='fill-extra h-5'/>
        <p className='text-sm'>{date}</p>
        <p>|</p>
        <Chat className='fill-extra h-5'/>
        <p className='text-sm'>{reactions} Reacties</p>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-semibold text-primary'>{title}</h2>
        <p className='text-extra line-clamp-3 lg:line-clamp-6'>{description}</p>
      </div>
      <hr className='border-font1/20'/>
      <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-5'>
        <div className='flex flex-row items-center gap-5'>
          <img src={icon} alt={name} className='rounded-full h-[44px]'/>
          <p className='text-extra font-semibold'>{name}</p>
        </div>
        <Link href={link} className='flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm'>Lees meer <ArrowForwardRounded className='fill-font2 h-5'/></Link>
      </div>
    </div>
  );
};