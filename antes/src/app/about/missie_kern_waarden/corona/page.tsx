"use client";

import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/app/components/home/nav'

export default function Corona() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Corona</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <p className='text-secondary text-left text-2xl'>Antes neemt maatregelen waarmee we jouw en onze gezondheid beschermen. Het is belangrijk dat we ons hier samen aan houden. In ieder geval aan de algemene hygiënemaatregelen zoals geen handen schudden, regelmatig je handen wassen, ruimtes ventileren.</p>
                        <p><Link href="https://www.parnassiagroep.nl/corona?_ga=2.226038746.1915736437.1701171356-1970662864.1694080243"><button className='bg-secondary text-[#FAFAFA] rounded py-2 px-4'>Lees hoe Parnassia Groep omgaat met Corona</button></Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}