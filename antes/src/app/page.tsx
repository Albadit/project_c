import NavHome from '@/app/components/home/nav'
import Footer from '@/app/components/footer'
import Title from '@/app/components/home/title'
import Work from '@/app/components/home/work'
import { EventCard } from '@/app/components/event_card'
import { QAndACard } from '@/app/components/q-and-a_card'
import Info from '@/app/components/home/info'

const event = { 
  image: "img/event.png", 
  title: "Connectiedag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  location: "Rotterdam",
  date: "12-12-2024",
  link: "#",
}

const qanda = { 
  image: "img/q-and-a.png", 
  date: "12-12-2024",
  reactions: 12,
  title: "Suggesties voor beginner?",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  profile: "img/profile.png",
  name: "Sara Leekman",
  link: "#",
}

export default function Home() {
  return (
    <>
      <header>
        <NavHome/>
        <Title/>
      </header>
      <br />
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <Work/>
        <div className='flex flex-col w-full gap-10 my-12 '>
          <h2 className='font-font1 font-semibold text-center text-primary text-5xl'>ANTES NIEUWS</h2>
          <div className='flex flex-wrap xl:justify-between justify-center gap-10'>
            <QAndACard qanda={qanda}/>
            <EventCard event={event}/>
          </div>
        </div>
        <Info/>
      </main>
      <br />
      <Footer/>
    </>
  )
}
