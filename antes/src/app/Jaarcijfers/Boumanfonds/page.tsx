"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import { Bestuur_card } from '@/app/components/Bestuur_card';
import SideMenu from '@/app/SideMenu/page';
import HeaderHome from '@/app/header_home'

export default function Boumanfonds() {
    return (
        <main>
            <HeaderHome />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Boumanfonds</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenu />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <p className='text-secondary text-left text-2xl'> De stichting 'Professor Boumanfonds' is de steunstichting van Antes. Hoofddoel van deze ANBI stichting is het verbeteren van de leefomstandigheden van mensen die te maken hebben met meervoudige geestelijke gezondheidszorg- en verslavingsproblematiek.</p>
                        <p className='text-secondary text-left text-xl'> De Stichting wil een platform zijn voor het bevorderen van (sociale) netwerken en wil bijdragen aan het vormen van oplossingen voor maatschappelijke problemen die voortvloeien uit meervoudige geestelijke gezondheidszorg- en verslavingsproblematiek. </p>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-2xl'>Bestuur</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-2xl'>Stichting Professor Boumanfonds is bij akte opgericht op 25 september 1956. Op 2 mei 2023 zijn de statuten van de stichting voor het laatste gewijzigd.
                                Het statutaire bestuur wordt benoemd door het bestuur van Antes Zorg BV. Aan de bestuurders wordt geen beloning toegekend.
                                Momenteel bestaat het bestuur van de stichting uit 3 leden:
                                Bas Molijn (voorzitter)
                                Wim van Beek (secretaris)
                                Laura van Goor (penningmeester)</p>
                        </div>
                        <p><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded"><Link href="https://www.anteszorg.nl/documents/19931481/0/Beleidsplan+Professor+Boumanfonds.pdf/2a1d905f-65ec-4aac-7409-4170381e2376?t=1646395144754">Lees het beleidsplan</Link></button></p>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-2xl'>Cijfers</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-2xl'><Link href="" className='text-primary'>Jaarrekening 2022</Link></p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-2xl'>De ondernemingsraad</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-2xl'>In de <Link href='https://or-online.nl/wet-op-de-ondernemingsraden-wor/' className='text-primary'>Wet op de Ondernemingsraden</Link> (WOR) staat precies vermeld waar de ondernemingsraad invloed op kan uitoefenen. De ondernemingsraad kan al naar gelang het onderwerp advies of instemming geven.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}