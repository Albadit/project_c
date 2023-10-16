import React from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';

export default function Login() {
  const context = {
    logo: {url: "./img/antes_logo.png", alt: "antes logo"},
    passwordForget: { url:"#", text: "Wachtwoord vergeten?" },
    cacheLogin: { text: "Onthoud mij" },
    btn: { text: "Login" }
  }

  const functies = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook'},
  ]

  return (
    <>
      <main className='flex flex-row justify-center'>
        <div className="bg-login bg-center h-screen grow bg-cover bg-no-repeat md:block hidden"></div>
        <div className='flex flex-col gap-12 justify-center w-full max-w-[30.625rem] p-12'>
          <img src={context.logo.url} alt={context.logo.alt} className='w-max'/>
          <form action="" className='flex flex-col justify-center gap-5'>
            <Input name="Email" type="email" value="" placeholder="" disabled={false}/>
            <Input name="Password" type="password" value="" placeholder="" disabled={false}/>
            <Input name="Functie" type="select" value={functies} placeholder="" disabled={false}/>
            <div className='flex md:flex-row flex-col justify-between lg:items-center items-start'>
              <div className='flex flex-row gap-3 items-center'>
                <input type="checkbox" name="" id="remember" className='rounded'/> 
                <label htmlFor="remember">{context.cacheLogin.text}</label>
              </div>
              <Link href={context.passwordForget.url} className='underline text-hyperlink'>{context.passwordForget.text}</Link>
            </div>
            <button className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
          </form>
        </div>
      </main>
    </>
  )
}
