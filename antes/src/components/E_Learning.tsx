"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import Arrowright from "@/app/components/icons/arrow_right";
import ArrowLeft from "@/app/components/icons/arrow_left";
import { ELearingCard } from '@/app/components/e_learn_card';
import { OnderwerpCard } from '@/app/components/Onderwerp_card';

export default function E_Learning() {
    return (
        <main>
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">E-Learning</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <ELearingCard elearing={{}} />
                    <ELearingCard elearing={{}} />
                </div>
                <div className='flex items-stretch justify-center 2xl:justify-end 2xl:mr-[331px] gap-6'>
                    <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
                        <ArrowLeft className="fill-font2 h-5" />
                    </button>
                    <button className="bg-secondary hover:bg-[#0840A3] text-[#FAFAFA] font-bold py-3 px-10 rounded">
                        <Arrowright className="fill-font2 h-5" />
                    </button>
                </div>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Onderwerpen</p>
                </div>
                <div className='flex flex-wrap 2xl:flex-row justify-center gap-10'>
                    <OnderwerpCard onderwerp={{}} />
                    <OnderwerpCard onderwerp={{}} />
                    <OnderwerpCard onderwerp={{}} />
                </div>
                <div className='flex flex-wrap 2x;:flex-row justify-center gap-10'>
                    <OnderwerpCard onderwerp={{}} />
                    <OnderwerpCard onderwerp={{}} />
                    <OnderwerpCard onderwerp={{}} />
                </div>
            </div>
        </main>
    )
}