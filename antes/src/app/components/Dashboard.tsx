"use client";
import Image from 'next/image'
import { useState } from 'react'
import { QACard } from '@/app/components/qa_card'
import { EventCard } from '@/app/components/event_card'
import { ELearnCard } from '@/app/components/e_learn_card';


export default function Dashboard() {
    return (
        <main>
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Welkom terug Tom Nook!</p>
                </div>
            </div>
            <div className='flex flex-col w-full gap-10 mt-[100px]'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-[400px]'>
                    <p className="w-fit text-primary text-2xl font-bold drop-shadow-lg">Nieuwste Q & A</p>
                    <p className="w-fit text-primary text-2xl font-bold drop-shadow-lg">Nieuwste Evenement</p>
                </div>
            </div>
            <div className='flex flex-col w-full gap-10 mt-[10px]'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <QACard qa={{}} />
                    <EventCard event={{}} />
                </div>
            </div>
            <div className='flex flex-col w-full gap-10 mt-[48px]'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="w-fit text-primary text-2xl font-bold drop-shadow-lg">E-Learning progressie</p>
                </div>
            </div>
            <div className='flex flex-col w-full gap-10'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <ELearnCard elearn={{}} />
                </div>
            </div>
        </main>
    )
}