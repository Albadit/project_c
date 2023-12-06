"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import SideMenuWorkWithUs from '@/app/SideMenuWorkWithUs/page';
import Nav from '@/app/components/home/nav'

export default function Flexpool() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Flexpool</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenuWorkWithUs />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Onze Flexpool bestaat uit ervaren professionals en studenten. Begeleiders, verzorgenden en verpleegkundigen die zich flexibel inzetten op verschillende locaties van Antes.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Ben jij agoog, verpleegkundige of verzorgende IG? Houd je ervan om regelmatig op een andere werkplek met andere collega’s te werken? Dan is de Flexpool misschien iets voor jou! Werken in de ggz is dynamisch, maar als flexmedewerker ben je een echte vliegende keep! Het is verantwoordelijk werk, je omgeeft je met doelgroepen van verschillende leeftijden met verschillende culturen en problemen die allemaal hun eigen manier van benaderen nodig hebben.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Wanneer je voor onze Flexpool werkt, ben je in dienst van Antes. Je kunt snel ingezet worden als er op een afdeling te weinig personeel is (bijvoorbeeld door vakantie, zwangerschap, vacatureruimte etc.), maar je kunt natuurlijk ook op een vaste afdeling geplaatst worden. Je hebt zelf invloed op je rooster. Je geeft je beschikbaarheid door. Daar wordt bij het inplannen rekening mee gehouden. Je werkt flexibel en niet op vaste werkdagen- en tijden. We maken samen afspraken over jouw beschikbaarheid en inzet.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Nog even de voordelen op een rij:</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                <p>- Door jouw beschikbaarheid door te geven kun je zelf bepalen wanneer jij werkt</p>
                                <p>- Flexibiliteit en zekerheid tegelijk via diverse contractvormen</p>
                                <p>- Je kunt je werk combineren met privé of studie en werken in jouw regio.</p>
                                <p>- Onze locaties zijn in Poortugaal, Rotterdam-Zuid, Rotterdam-Noord en op de Zorgboulevard bij het Maasstad ziekenhuis.</p>
                                <p>- Je krijgt elke maand een mooi salaris</p>
                            </div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                Wil je meer weten over het werken als flexmedewerker bij Antes? Neem dan telefonisch contact op met de afdeling Recruitment via T:088 358 50 50.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}