import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'
import { EventCard } from '@/app/components/EventCard';

export default function Home() {
  return (
    <>
      <HeaderHome />
      <EventCard
        title="Event: Connectiedag!"
        date="2023-30-01"
        location="Meld je aan voor de connectiedag"
        imageSrc="event.png"
      />
    </>
  )
}
