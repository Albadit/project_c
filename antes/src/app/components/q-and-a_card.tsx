import { FC } from 'react';
import Calendar from './icon/calendar';
import Link from 'next/link';
import IconArrowForwardRounded from '@/app/components/icon/arrow_forward_rounded';
import Chat from '@/app/components/icon/chat';

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
    <div className='flex flex-col justify-between w-[555px] min-h-[700px] p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1'>
      <img src={image} alt="event" className='h-[280px] object-cover object-center rounded'/>
      <div className='flex flex-row items-center gap-2 py-5 text-extra'>
        <Calendar className='fill-extra h-5'/> 
        <p className='text-sm'>{date}</p>
        <p>|</p>
        <Chat className='fill-extra h-5'/>
        <p className='text-sm'>{reactions} Reacties</p>
      </div>
      <div className='flex flex-col grow gap-3'>
        <h2 className='text-xl font-semibold text-primary'>{title}</h2>
        <p className='text-extra line-clamp-3 lg:line-clamp-6'>{description}</p>
      </div>
      <hr className='border-font1/20 grow'/>
      <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-5'>
        <div className='flex flex-row items-center gap-5'>
          <img src={icon} alt={name} className='rounded-full'/>
          <p className='text-extra font-semibold'>{name}</p>
        </div>
        <Link href={link} className='flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm'>Lees meer <IconArrowForwardRounded className='fill-font2 h-5'/></Link>
      </div>
    </div>
  );
};