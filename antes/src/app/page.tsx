import NavHome from '@/app/components/home/nav'
import Footer from '@/app/components/footer'
import { EventCard } from '@/app/components/event_card'
import { QAndACard } from '@/app/components/q-and-a_card'
import { Title } from '@/app/components/home/title'
import { Work } from '@/app/components/home/work'

const title = { 
  image: "title-background", 
  text: "Hoe kunnen wij je helpen?",
  link: "#",
}

const work = { 
  image: "img/event.png", 
  title: "Werken bij Antes!",
  description: "Wij hebben jou veel te bieden. Om aan te sluiten op jouw wensen, talenten en ambities kijken we samen waar jij het beste tot je recht komt. Jij staat centraal.",
  link: "#",
}

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
  title: "Suggesties voor beginner?",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  date: "12-12-2024",
  reactions: 12,
  icon: "img/profile.png",
  name: "Sara Leekman",
  link: "#",
}

export default function Home() {
  return (
    <>
      <header>
        <NavHome/>
        <Title title={title}/>
      </header>
      <br />
      <main className='flex flex-wrap justify-center m-auto p-5 gap-10 max-w-[1280px]'>
        <Work work={work}/>
        <div className='flex flex-col w-full gap-10'>
          <h2 className='text-center'>asdfasdfasdf</h2>
          <div className='flex flex-wrap lg:justify-between justify-center gap-10'>
            <QAndACard qanda={qanda}/>
            <EventCard event={event}/>
          </div>
        </div>
        
        
      </main>
      <br />
      <Footer/>
    </>
  )
}
