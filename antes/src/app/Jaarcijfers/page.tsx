"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import SideMenu from '@/app/SideMenu/page';
import HeaderHome from '@/app/header_home'

export default function Jaarcijfers() {
    return (
        <main>
            <HeaderHome />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Kerngegevens en jaarcijfers</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenu />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Antes Zorg B.V. is onderdeel van Parnassia Groep. Voor informatie over kerngegevens en jaarcijfers verwijzen we naar het <Link href="https://www.parnassiagroep.nl/wie-we-zijn/jaarbericht-2022?_ga=2.217191254.1915736437.1701171356-1970662864.1694080243" className='text-primary'>Jaarbericht 2022 van Parnassia Groep</Link>.</div>
                        </div>
                        <div className='flex gap-5 font-semibold 2xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Bij de Kamer Van Koophandel staan wij als volgt ingeschreven:</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                <p>Antes Zorg bv</p>
                                <p>KVK nummer: 69742049</p>
                                <p>Bezoekadres: Albrandswaardsedijk 74, gebouw I (het kantoor), 3172 AA</p>
                                <p>Poortugaal</p>
                                <p>Postadres: Postbus 8549, 3009 AM Rotterdam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}