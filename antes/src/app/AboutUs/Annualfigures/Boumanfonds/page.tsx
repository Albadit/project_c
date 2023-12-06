"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import { Bestuur_card } from '@/app/components/Board_card';
import SideMenu from '@/app/SideMenuAboutUs/page';
import Nav from '@/app/components/home/nav'

export default function Boumanfonds() {
    return (
        <main>
            <Nav />
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
                            <p className='font-bold text-secondary text-xl'>Bestuur</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Stichting Professor Boumanfonds is bij akte opgericht op 25 september 1956. Op 2 mei 2023 zijn de statuten van de stichting voor het laatste gewijzigd.
                                Het statutaire bestuur wordt benoemd door het bestuur van Antes Zorg BV. Aan de bestuurders wordt geen beloning toegekend.
                                Momenteel bestaat het bestuur van de stichting uit 3 leden:
                                Bas Molijn (voorzitter)
                                Wim van Beek (secretaris)
                                Laura van Goor (penningmeester)</p>
                        </div>
                        <p><Link href="https://www.anteszorg.nl/documents/19931481/0/Beleidsplan+Professor+Boumanfonds.pdf/2a1d905f-65ec-4aac-7409-4170381e2376?t=1646395144754"><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Lees het beleidsplan</button></Link></p>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Cijfers</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/23245540/Jaarrekening+Prof+Boumansfonds+2022.pdf/e36c2fdf-90a2-0bca-7a34-8d5cddc94118?t=1674548218386" className='text-primary'>Jaarrekening 2022</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/23245540/Jaarrekening+Stichting+Professor+Boumanfonds+2021.pdf/9bba0e21-fd30-9275-9a09-a69491ce6b09?t=1652447778492" className='text-primary'>Jaarrekening 2021</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/0/jaarrekening+Prof+Boumanfonds+2020.pdf/f49e339e-c8bc-09aa-db87-689d49e0344a?t=1646395191804" className='text-primary'>Jaarrekening 2020</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/0/Balans+en+resultaatrekening+2015+Professor+Boumanfonds.pdf/a8fb7a94-2e57-f18f-013c-a28be9bd7638?t=1647261384160" className='text-primary'>Balans en resultaatrekening 2015</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/0/Balans+en+resultaatrekening+2014+Professor+Boumanfonds.pdf/b08b66c1-2083-f247-0ab7-123e6664d7e7?t=1647261383915" className='text-primary'>Balans en resultaatrekening 2014</Link></p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Jaarverslagen</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/23245540/Jaarverslag+Stichting+Professor+Boumanfonds+2022.pdf/fa7bb9f8-58f6-b672-6796-c624c1c62a77?t=1674548077955" className='text-primary'>Jaarverslag 2022</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/23245540/Jaarverslag+Stichting+Professor+Boumanfonds+2021.pdf/1fdd031f-d1a4-dd21-06c0-68200740e893?t=1652447778737" className='text-primary'>Jaarverslag 2021</Link></p>
                            <p className='text-xl'><Link href="https://www.anteszorg.nl/documents/19931481/0/Jaarverslag+Professor+Boumanfonds+2020.pdf/dfc45db8-41b0-d920-661b-7cb8c0808a3c?t=1646395296989" className='text-primary'>Jaarverslag 2020</Link></p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='font-bold text-secondary text-xl'>Contactgegevens</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-secondary text-xl'>Stichting Professor Boumanfonds</p>
                            <p className='text-secondary text-xl'>Postbus 8549</p>
                            <p className='text-secondary text-xl'>3009 AM Rotterdam</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-secondary text-xl'>Bezoekadres:</p>
                            <p className='text-secondary text-xl'>Albrandswaardsedijk 74,</p>
                            <p className='text-secondary text-xl'>gebouw I (het kantoor),</p>
                            <p className='text-secondary text-xl'>3172 AA Poortugaal</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-secondary text-xl'>T 088 358 50 50</p>
                            <p className='text-secondary text-xl'>RSIN: 816043620</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}