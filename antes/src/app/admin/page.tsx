"use client";
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react'
import Arrowright from "@/app/components/icons/arrow_right";
import ArrowLeft from "@/app/components/icons/arrow_left";
import React from 'react';
import NavHome from '@/app/components/home/nav'
import Footer from '@/app/components/footer'
import Title from '@/app/components/home/title'
import Work from '@/app/components/home/work'
import { QACard } from '@/app/components/qa_card'
import { EventCard } from '@/app/components/event_card'
import Info from '@/app/components/home/info'
import UserAddCard from '@/app/admin/UserAddCard/page'
import UserDeleteCard from './UserDeleteCard/page';
import UserInfo from './UserDeleteCard/UserInfo/page';

export default function Admin() {
    return (
        <main>
            <NavHome />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Admin</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <UserAddCard />
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <UserDeleteCard />
                </div>
            </div>
        </main>
    )
}