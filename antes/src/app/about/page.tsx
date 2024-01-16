"use client";
import Link from "next/link";
import { AboutCard } from '@/components/home/about_card';
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/components/home/nav'

const aboutus1 = {
    id: 1,
    image: "img/e_learing.png",
    title: "Bestuur",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "about/board",
}
const aboutus2 = {
    id: 2,
    image: "img/e_learing.png",
    title: "Jaarcijfers",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "about/annual_figures",
}
const aboutus3 = {
    id: 3,
    image: "img/e_learing.png",
    title: "Missie en kernwaarden",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "about/missie_kern_waarden",
}
const aboutus4 = {
    id: 4,
    image: "img/e_learing.png",
    title: "Organogram",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "about/organogram",
}

export default function AboutUs() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Over Ons</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <AboutCard aboutus={aboutus1} />
                            <AboutCard aboutus={aboutus2} />
                            <AboutCard aboutus={aboutus3} />
                            <AboutCard aboutus={aboutus4} />
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary font-bold text-left text-2xl'>Over Ons</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Antes (ontstaan uit een fusie met  fusie van Delta psychiatrisch centrum Poortugaal en Bouman GGZ) fuseerde in oktober 2017 met Parnassia Groep. Als ketenzorgbedrijf heeft Antes in haar werkgebied een belangrijke rol in het realiseren van een goede afstemming en samenwerking tussen de zorgbedrijven van Parnassia Groep.</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Werkgebied</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Het werkgebied van Antes omvat:
                                <p>- Rotterdam-Rijnmond,</p>
                                <p>- Nieuwe Waterweg-Noord, </p>
                                <p>- Drechtsteden, </p>
                                <p>- Alblasserwaard-Vijfheerenlanden, </p>
                                <p>- Zuid-Hollandse eilanden. </p>
                                Daarbinnen is Antes actief in meer dan 15 gemeenten, waaronder de gemeente Rotterdam.
                            </div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Niet EPA-cliënten</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>De zorg voor niet EPA-cliënten wordt door de andere onderdelen van Parnassia Groep in de regio uitgevoerd, te weten:
                                <p className='text-primary'><Link href="https://www.indigowest.nl/?_ga=2.221477720.1915736437.1701171356-1970662864.1694080243">- Indigo (in en rondom de huisartsen)</Link></p>
                                <p className='text-primary'><Link href="https://www.psyq.nl/?_ga=2.221346776.1915736437.1701171356-1970662864.1694080243">- i-psy/PsyQ</Link></p>
                                <p className='text-primary'><Link href="https://www.youz.nl/?_ga=2.221346776.1915736437.1701171356-1970662864.1694080243">- Youz</Link></p>
                                <p className='text-primary'><Link href="https://www.fivoor.nl/">- Fivoor (Fivoor is een jointventure voor de forensisch/intensieve zorg samen met Altrecht).</Link></p>
                            </div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Grofweg wordt meer dan 50% van de patiënten in de regio door de andere zorgbedrijven bediend.</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Beleid</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-2xl'>Antes zet, als onderdeel van Parnassia Groep, in op de vijf speerpunten van het bedrijfsplan Parnassia Groep:
                                <p className='text-secondary text-2xl'>1: Cliënten die ons van harte aanbevelen</p>
                                <p className='text-secondary text-2xl'>2: Onze hulpverlening eerder, dichterbij, en zo mogelijk korter en lichter</p>
                                <p className='text-secondary text-2xl'>3: Extern partnerschap - Parnassia Groep draagt merkbaar bij</p>
                                <p className='text-secondary text-2xl'>4: Interne verbinding - de kracht van de groep benutten</p>
                                <p className='text-secondary text-2xl'>5: Een gezond, positief en uitdagend werkklimaat - elke collega telt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}