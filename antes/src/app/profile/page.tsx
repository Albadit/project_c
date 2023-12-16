'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav';
import { Input } from '@/app/components/input';
import { SelectMenu } from '@/app/components/select_menu';

const user = {
  name: "Sara",
  email: "saraleekman@outlook.com",
  image: "/img/profile.png",
}

const functies = [
  { id: "1", name: 'Behavioral neuroscience' },
  { id: "2", name: 'Behavioral psychology' },
  { id: "3", name: 'Clinical psychology' },
  { id: '4', name: 'Cognitive psychology'},
  { id: "5", name: 'Community psychology'},
]

export default function Profile() {
  return (
    <>
      <NavDashboard user={user}/>
      <main className='m-auto px-5 py-12 max-w-[1000px]'>
        <section className='flex flex-col gap-5  font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Profiel</h1>
          <hr />
          <form action="" className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Persoonlijke informatie</h2>
            <div className='flex flex-row gap-5 items-center'>
              <img src="img/profile.png" alt="profile" className='h-[100px]'/>
              <div className='flex flex-col gap-2'>
                <label htmlFor="upload-photo" className='w-fit px-5 py-2 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Verander Avatar</label>
                <input type="file" name="photo" id="upload-photo" className='hidden'/>
                <p className='text-sm text-font1'>JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            <Input label='Naam' name='first_name' type='text' value={user.name}/>
            <SelectMenu label='User Function' name="user_function" options={functies}/>
            <Input label='Email' name='email' type='email' value={user.email}/>
            {/* <Input label='Bio' name='bio' type='textarea' value={user.bio}/> */}
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
