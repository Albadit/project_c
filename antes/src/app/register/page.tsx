"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { useRouter } from 'next/navigation'
import { SelectMenu } from '../components/select_menu';

const context = {
  logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
  account: { url:"/login", text: "Heb je al een account?" },
  btn: { text: "Registreer" },
  register: { url: "/terms" }
}

const functies = [
  { id: 1, name: 'Behavioral neuroscience' },
  { id: 2, name: 'Behavioral psychology' },
  { id: 3, name: 'Clinical psychology' },
  { id: 4, name: 'Cognitive psychology'},
  { id: 5, name: 'Community psychology'},
]

export default function Login() {
  const [message, setMessage] = useState('');
  const router = useRouter(); 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    if (email) {
      setMessage("Email is verzonden.");
      // update in database
      setTimeout(() => {
        router.push("/login");
      }, 2000)
    }
  }

  return (
    <main className='flex flex-row justify-center register:h-screen h-fit'>
      <div className="bg-login bg-center grow bg-cover bg-no-repeat md:block hidden"></div>
      <div className='flex flex-col gap-12 justify-center w-full max-w-[30.625rem] p-5 md:p-12'>
        <Link href={context.logo.url}>
          <img src={context.logo.img} alt={context.logo.alt} className='w-max'/>
        </Link>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
          <Input label="Voornaam" name="first-name" type="text" value=''/>
          <Input label="Achternaam" name="last-name" type="text" value=''/>
          <SelectMenu name="Functions" value={functies}/>
          <Input label="Email" name="email" type="email" value=''/>
          <Input label="Wachtwoord" name="password" type="password" value=''/>
          <Input label="Bevestigen Wachtwoord" name="confirm-password" type="password" value=''/>
          <div className='flex flex-row gap-3 items-top text-font1 text-sm'>
            <input type="checkbox" name="" className='rounded text-callToAction border-font1/30 focus:ring-2 focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'/> 
            <label className='m-[-1px]'>Ga akkoord met de <Link href={context.register.url} className='underline underline-offset-1 text-hyperlink'>Antes-gebruikersovereenkomst en het privacybeleid</Link></label>
          </div>
          <button type="button" title="register" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
          <Link href={context.account.url} className='underline text-hyperlink'>{context.account.text}</Link>
          <p className='text-error'>{message}</p>
        </form>
      </div>
    </main>
  )
}
