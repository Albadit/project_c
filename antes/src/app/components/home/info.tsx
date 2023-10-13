import { FC } from 'react';
import Link from 'next/link';
import ArrowForwardRounded from '@/app/components/icons/arrow_forward_rounded';

interface InfoProps {
  info: {
    title: string
    link: string
  }
}

export const Info: FC<InfoProps> = ({ info }) => {
  const { title, link } = info;
  return (
    <div className='flex justify-between flex-col min-h-[600px] w-full gap-5 p-7 rounded-lg bg-info bg-no-repeat bg-cover bg-center shadow-cbs text-base font-font1 text-font2'>
      <div className='flex flex-col grow gap-5'>
        <h2 className='lg:text-5xl text-xl font-semibold'>{title}</h2>
        {/* <Link href={link} className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm'>Lees meer <ArrowForwardRounded className='fill-font2 h-5'/></Link> */}
      </div>
    </div>
  );
};