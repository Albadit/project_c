"use client";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/components/home/nav'

export default function Organogram() {
  return (
    <main>
      <Nav />
      <div className='flex flex-col w-full gap-10 my-12'>
        <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
          <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Organogram</p>
        </div>
        <div className='flex justify-center gap-5 2xl:gap-10'>
          {/* <SideMenu /> */}
          <div className='hidden sm:flex'><SideMenu /></div>
          <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
            <div className='md:hidden'><SideMenu /></div>
            <div className='flex gap-5 4xl:gap-10'>
              <div className='text-secondary text-left text-2xl'>Het bestuur is samen met de directeuren zorg en directeuren bedrijfsvoering gemeenschappelijk verantwoordelijk voor het gezamenlijke eindresultaat van Antes. Onder Antes vallen vijf divisies:</div>
            </div>
            <div className='flex gap-5 2xl:gap-10'>
              <div className='text-secondary text-left text-xl'>
                <p>- Volwassenen Ambulant</p>
                <p>- Volwassenen Klinisch Noord</p>
                <p>- Volwassenen Klinisch Zuid</p>
                <p>- Ouderen, NAH en Ziekenhuispsychiatrie</p>
                <p>- Wonen</p>
              </div>
            </div>
            <div className='flex gap-5 3xl:gap-10'>
              <div className='text-secondary text-left text-xl'>
                Elke divisie wordt aangestuurd door een duaal directieteam. Antes heeft eigen ondersteunende diensten, maar maakt ook gebruik van de ondersteunende diensten van Parnassia Groep.
              </div>
            </div>
            <div className='justify-center'>
              <img src="/img/PGOrganogram.jpg" alt="event" className="h-[450px] w-[290px] rounded" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}