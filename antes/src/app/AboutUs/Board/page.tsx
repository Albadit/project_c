"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import { Board_card } from '@/app/components/Board_card';
import SideMenu from '@/app/SideMenuAboutUs/page';
import Nav from '@/app/components/home/nav'

const bestuur1 = {
    id: 1,
    image: "/img/BasMolijn.jpg",
    name: "Bas Molijn",
    description: "Bestuurder Bedrijfsvoering",
    link: "",
}
const bestuur2 = {
    id: 2,
    image: "/img/LauraVanGoor.jpg",
    name: "Laura van Goor",
    description: "Bestuurder Zorg",
    link: "",
}

export default function Board() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Bestuur</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenu />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base'>
                        <p className='text-secondary text-left text-2xl'> Antes heeft <Link href='/Organogram' className='text-primary'>vijf divisies</Link> die worden aangestuurd door een collegiaal bestuur, dat bestuurlijk en statutair verantwoordelijk is voor het strategisch beleid en de behaalde resultaten van het zorgbedrijf. Het bestuur bestaat uit een bestuurder Zorg en een bestuurder Bedrijfsvoering.</p>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-2xl'>Ons Bestuur:</p>
                        </div>
                        <div className='flex justify-center gap-5 2xl:gap-10'>
                            <Board_card bestuur={bestuur1} />
                            <Board_card bestuur={bestuur2} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}