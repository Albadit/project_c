import { FC } from 'react';
import Calendar from './icon/calendar';
import Link from 'next/link';
import IconArrowForwardRounded from '@/app/components/icon/arrow_forward_rounded';

interface QAndACardProps {
  qanda: {
    image: string
    title: string
    description: string
    location: string
    date: string
    reactions: number
  }
}

export const QAndACard: FC<QAndACardProps> = ({ qanda }) => {
  const { image, title, description, location, date, reactions } = qanda;
  return (
    <div className='flex flex-col justify-between w-[555px] min-h-[700px] p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1'>
      <img src={image} alt="event" className='h-[280px] object-cover object-center rounded'/>
      <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-5'>
        <div className='flex flex-row items-center text-extra'>
          <Calendar className='fill-extra h-5'/> 
          <p>{date}</p>
          <p>|</p>
        </div>
      </div>
      <div className='flex flex-col grow gap-3 py-5'>
        <h2 className='text-xl font-semibold text-primary'>Event: {title}</h2>
        <p className='text-extra line-clamp-5'>{description}</p>
        <p>Locatie: {location}</p>
      </div>
      <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-5'>
        <div className='flex flex-row items-center '>
          <Calendar className='fill-extra h-5'/> 
          <p className='text-extra'>{date}</p>
        </div>
        <Link href="#" className='flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold'>Lees meer <IconArrowForwardRounded className='fill-font2 h-5'/></Link>
      </div>
    </div>
  );
};