"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import SideMenuWorkWithUs from '@/app/SideMenuWorkWithUs/page';
import Nav from '@/app/components/home/nav'
import Video from '@/app/components/video'

export default function WorkAsResidentialSupervisor() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Werken als woonbegeleider</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenuWorkWithUs />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Antes heeft <Link href='https://www.anteszorg.nl/hulp-bij-psychische-klachten/wonen-met-begeleiding' className='text-primary'>verschillende woonlocaties in de regio Rijnmond</Link>. Dit zijn woonlocaties waar bewoners zelfstandig met (intensieve) begeleiding wonen en waar sprake is van psychiatrische problemen, soms gecombineerd met middelengebruik.</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'> Antes heeft verschillende soorten woonlocaties:
                                <p>- Gemengde woonvormen</p>
                                <p>- Woonvormen specifiek voor mannen, vrouwen, ouderen of jong volwassenen</p>
                                <p>- Woonvormen specifiek voor mensen met een licht verstandelijke beperking</p>
                                <p>- Woonvormen specifiek voor mensen met alcoholproblematiek</p>
                            </div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>We hebben ook woonvormen voor bewoners die bijna klaar zijn om zelfstandig te gaan wonen.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary font-bold text-left text-xl'>Wat doe je als woonbegeleider?</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Als begeleider heb je een coachende en begeleidende rol. Een voorbeeld hiervan is het samen met de bewoners boodschappen doen en maaltijden bereiden. Jouw werkzaamheden bestaan verder uit het geven van preventie en voorlichting bijvoorbeeld over veilig middelengebruik.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>De omgang met familie en naasten vinden we bij Antes een belangrijk onderdeel van ons werk.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary font-bold text-left text-xl'>Ambulant begeleid wonen</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Als woonbegeleider kan je bij Antes ook aan de slag als ambulant begeleider. De ambulant begeleider helpt cliënten thuis. Je begeleidt patiënten vanuit de Wet Maatschappelijke Opvang (WMO). Je werkt nauw samen met de casusregisseur en met collega’s die betrokken zijn bij de behandeling van de patiënt. Als ambulant begeleider ondersteun je de patiënt bij hun maatschappelijk herstel. Dat betekent dat je ondersteuning biedt op het gebied van financiën, sociaal en persoonlijk functioneren, zelfzorg en gezondheid en het vinden van een zinvolle dag besteding.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Om aan de slag te gaan bij één van onze woonlocaties of als ambulante begeleider heb je een afgeronde Mbo-opleiding SPW (MMZ) of SD nodig en natuurlijk affiniteit met de doelgroep.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary font-bold text-left text-xl'>Welke woonlocaties hebben we?</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Op de pagina <Link href='https://www.anteszorg.nl/hulp-bij-psychische-klachten/wonen-met-begeleiding' className='text-primary'>Wonen bij Antes</Link> vind je alle woonlocaties van Antes.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary font-bold text-left text-xl'>Vacatures</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Ben je enthousiast geworden over het werken als woonbegeleider? </p>
                        </div>
                        <div className='flex gap-5'>
                            <Link href="https://werkenbijparnassiagroep.nl/vacatures/vrijwilligers?_ga=2.9626995.776596900.1701802004-1970662864.16940802431" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Bekijk de vacatures</button></Link>
                        </div>
                        <Video embedId="I-MmRYP9bdk" />
                    </div>
                </div>
            </div>
        </main>
    )
}