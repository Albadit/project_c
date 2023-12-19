"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { useRouter } from 'next/navigation'

const context = {
  logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
  btn: { text: "Stuur Email" }
}

export default function ResetPassword() {
  const [message, setMessage] = useState('');
  const router = useRouter(); 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');
    if (password === confirmPassword) {
      // update in database
      router.push("/login");
    } else {
      setMessage("Wachtwoorden komen niet overeen.");
    }
  }

  return (
    <main className='flex flex-row justify-center reset:h-screen h-fit'>
      <div className="bg-login bg-center grow bg-cover bg-no-repeat md:block hidden"></div>
      <div className='flex flex-col gap-12 justify-center w-full max-w-[490px] p-5 md:p-12'>
        <Link href={context.logo.url}>
          <img src={context.logo.img} alt={context.logo.alt} className='w-max'/>
        </Link>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
          <Input label="Wachtwoord" name="password" type="password" value=""/>
          <Input label="Bevestigen Wachtwoord" name="confirm_password" type="password" value=""/>
          <button type="submit" title="reset_password" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
          <p className='text-error'>{message}</p>
        </form>
      </div>
    </main>
  )
}
