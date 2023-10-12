import NavHome from '@/app/components/nav_home'
import Footer from '@/app/components/footer'
import { EventCard } from '@/app/components/event_card'
import { QAndACard } from '@/app/components/q-and-a_card'
import { Title } from '@/app/components/title'
import { Work } from '@/app/components/work'

const work = { 
  image: "title-background", 
  text: "Hoe kunnen wij je helpen?",
  link: "#",
}

const title = { 
  image: "title-background", 
  text: "Hoe kunnen wij je helpen?",
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
      <main className='flex flex-wrap justify-evenly m-5 gap-10'>
        <Work work={work}/>
        <QAndACard qanda={qanda}/>
        <EventCard event={event}/>
      </main>
      <br />
      <Footer/>
    </>
  )
}
