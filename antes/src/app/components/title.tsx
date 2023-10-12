import { FC } from 'react';
import Link from 'next/link';
import ArrowForwardRounded from '@/app/components/icon/arrow_forward_rounded';

interface TitleProps {
  title: {
    image: string
    text: string
    link: string
  }
}

export const Title: FC<TitleProps> = ({ title }) => {
  const { image, text, link } = title;
  return (
    <div className={`flex flex-col justify-center items-center gap-12 w-full min-h-[500px] text-base font-font2 text-font1 bg-${image} bg-no-repeat bg-cover`}>
      <h1 className='text-font2 text-8xl text-center'>{text}</h1>
      <Link href={link} className='flex flex-row items-center justify-center gap-2 px-6 py-3 rounded-lg bg-background text-font1 text-xl'>Meer informatie <ArrowForwardRounded className='fill-font1 h-6'/></Link>
    </div>
  );
};