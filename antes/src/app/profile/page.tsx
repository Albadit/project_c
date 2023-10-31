'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav';
import { Input } from '@/app/components/input';
import { SelectMenu } from '@/app/components/select_menu';

const user = {
  id: 4,
  role_id: 1,
  profile: "/img/profile.png",
  first_name: "Sara",
  last_name: "Leekman",
  function_id: 3,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  email: "saraleekman@outlook.com",
}

const functies = [
  { id: 1, name: 'Behavioral neuroscience' },
  { id: 2, name: 'Behavioral psychology' },
  { id: 3, name: 'Clinical psychology' },
  { id: 4, name: 'Cognitive psychology'},
  { id: 5, name: 'Community psychology'},
]

export default function Profile() {
  return (
    <>
      <NavDashboard user={user}/>
      <main className='m-auto p-5 max-w-[1000px]'>
        <section className='flex flex-col gap-5 mt-12 font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Profiel</h1>
          <hr />
          <form action="" className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Persoonlijke informatie</h2>
            <div className='flex flex-row justify-stretch gap-5'>
              <Input label='Voornaam' name='first_name' type='text' value={user.first_name}/>
              <Input label='Achternaam' name='last_name' type='text' value={user.last_name}/>
            </div>
            <SelectMenu name="Functie" value={functies}/>
            <Input label='Email' name='email' type='email' value={user.email}/>
            <Input label='Bio' name='bio' type='text' value={user.bio}/>
            <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
          </form>
          <hr />
          <form action="" className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Verander wachtwoord</h2>
            <Input label='Huidig Wachtwoord' name='email' type='password' value=''/>
            <Input label='Nieuw Wachtwoord' name='bio' type='password' value=''/>
            <Input label='Bevestig Wachtwoord' name='bio' type='password' value=''/>
            <button className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  )
}
