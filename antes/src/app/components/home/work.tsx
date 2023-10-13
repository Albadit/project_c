import { FC } from 'react';
import Link from 'next/link';
import ArrowForwardRounded from '@/app/components/icons/arrow_forward_rounded';

interface WorkProps {
  work: {
    image: string
    title: string
    description: string
    link: string
  }
}

export const Work: FC<WorkProps> = ({ work }) => {
  const { image, title, description, link } = work;
  return (
    <div className='flex justify-between lg:flex-row-reverse flex-col lg:h-[380px] lg:w-full w-[525px] gap-5 p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1'>
      <img src={image} alt="work" className='lg:w-[470px] w-full lg:h-full object-cover object-center rounded'/>
      <div className='flex flex-col justify-between items-start grow gap-5 '>
        <h2 className='lg:text-4xl text-xl font-semibold text-primary'>{title}</h2>
        <p className='text-extra line-clamp-6 lg:line-clamp-7 max-w-[600px]'>{description}</p>
        <Link href={link} className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm'>Lees meer <ArrowForwardRounded className='fill-font2 h-5'/></Link>
      </div>
    </div>
  );
};