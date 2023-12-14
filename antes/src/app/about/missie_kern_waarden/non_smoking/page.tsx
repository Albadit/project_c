"use client";

import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/app/components/home/nav'

export default function Nonsmoking() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Rookvrij</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <p className='text-secondary text-left text-2xl'> Binnen Parnassia Groep zijn alle zorginstellingen rookvrij voor medewerkers, cliënten en bezoekers. Dit is <Link href="https://www.rijksoverheid.nl/actueel/nieuws/2021/06/29/rookruimtes-in-openbare-gebouwen-per-1-juli-gesloten#:~:text=Per%201%20juli%20zijn%20rookruimtes,die%20datum%20rookvrij%20zullen%20zijn." className='text-primary'>een wettelijke verplichting sinds 1 juli 2021.</Link> Hierin staat dat er een rookverbod geldt op de werkplek en in openbare gebouwen, zoals zorginstellingen.</p>
                        <p><Link href="https://www.rijksoverheid.nl/actueel/nieuws/2021/06/29/rookruimtes-in-openbare-gebouwen-per-1-juli-gesloten#:~:text=Per%201%20juli%20zijn%20rookruimtes,die%20datum%20rookvrij%20zullen%20zijn."><button className='bg-secondary text-[#FAFAFA] rounded py-2 px-4'>Meer info over rookvrij Parnassia Groep</button></Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}