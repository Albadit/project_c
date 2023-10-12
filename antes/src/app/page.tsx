import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'
import { EventCard } from '@/app/components/EventCard';
import { QnACard } from '@/app/components/QnACard';

export default function Home() {
  return (
    <>
      <HeaderHome />
      <div className='flex flex-row gap-32 items-center justify-center my-[99px]'>

        <QnACard
          title='Suggesties voor beginners?'
          description='test'
          imageSrc='afbeeldingvrouwq&A.png'
        />
      <EventCard
        title="Event: Connectiedag!"
        date="2023-30-01"
        location="Meld je aan voor de connectiedag"
        imageSrc="event.png"
      />
      </div>
    </>
  )
}
