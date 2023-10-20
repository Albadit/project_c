import React from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { SelectMenu } from '../components/select_menu';

const context = {
  logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
  account: { url:"/login", text: "Heb je al een account?" },
  btn: { text: "Registreer" }
}

const functies = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook'},
]

export default function Login() {
  return (
    <main className='flex flex-row justify-center'>
      <div className="bg-login bg-center h-screen grow bg-cover bg-no-repeat md:block hidden"></div>
      <div className='flex flex-col gap-12 justify-center w-full max-w-[30.625rem] p-5 md:p-12'>
        <Link href={context.logo.url}>
          <img src={context.logo.img} alt={context.logo.alt} className='w-max'/>
        </Link>
        <form action="" className='flex flex-col justify-center gap-5'>
          <Input label="Voornaam" name="first-name" type="text" value=''/>
          <Input label="Achternaam" name="last-name" type="text" value=''/>
          <SelectMenu name="Functions" value={functies}/>
          <Input label="Email" name="email" type="email" value=''/>
          <Input label="Wachtword" name="password" type="password" value=''/>
          <Input label="Bevestigen Wachtword" name="confirm-password" type="password" value=''/>
          <div className='flex md:flex-row flex-col justify-between lg:items-center items-start'>
            <Link href={context.account.url} className='underline text-hyperlink'>{context.account.text}</Link>
          </div>
          <button type="button" title="register" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
        </form>
      </div>
    </main>
  )
}
