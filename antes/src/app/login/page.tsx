import React from 'react';
import { Input } from '@/app/components/input';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <main className='flex flex-col gap-12 w-1/3 m-auto'>
        <img src="./img/antes_logo.png" alt="logo" className='w-max'/>
        <form action="" className='flex flex-col justify-center gap-5'>
          <Input name="Email" type="email" value="fgsdhfghd" placeholder="" disabled={true}/>
          <Input name="Password" type="password" value="" placeholder="" disabled={false}/>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-5 items-center'>
              <input type="checkbox" name="" id=""/> 
              <p>Onthoud mij</p>
            </div>
            <Link href="#">Wachtwoord vergeten?</Link>
          </div>
          <button className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Login</button>
        </form>
      </main>
    </>
  )
}
