import { FC } from 'react';
import Calendar from './icon/calendar';
import Link from 'next/link';
import IconArrowForwardRounded from './icon/arrow_forward_rounded';

interface EventCardProps {
  event: {
    image: string
    title: string
    description: string
    location: string
    date: string
  }
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
  const { image, title, description, location, date } = event;
  return (
    <div className='flex flex-col justify-between w-[555px] min-h-[700px] p-7 rounded-lg bg-background shadow-cbs'>
      <img src={image} alt="event" className='h-[350px] object-cover object-center rounded'/>
      <div className='flex flex-col grow gap-3 py-5'>
        <h2 className='text-xl font-semibold font-font1 text-primary'>Event: {title}</h2>
        <p className='text-base font-font1 text-extra line-clamp-5'>{description}</p>
        <p className='text-base font-font1 text-font1'>Locatie: {location}</p>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <Calendar className='fill-extra h-5'/> 
          <p className='text-extra'>{date}</p>
        </div>
        <Link href="#" className='flex flex-row items-center gap-2 px-4 py-3 rounded-lg text-base bg-primary text-font2 font-semibold'>Lees meer <IconArrowForwardRounded className='fill-font2 h-5'/></Link>
      </div>
    </div>
  );
};