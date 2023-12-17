"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { useRouter } from 'next/navigation'

const context = {
  logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
  account: { url:"/login", text: "Heb je al een account?" },
  btn: { text: "Stuur Email" }
}

export default function ResetPassword() {
  const [message, setMessage] = useState('');
  const router = useRouter(); 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    if (email) {
      setMessage("Email is verzonden.");
      setTimeout(() => {
        router.push("/login");
      }, 2000)
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
          <Input label='Email' name="email" type="email" value=''/>
          <button title="reset_password" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
          <p className='text-success'>{message}</p>
        </form>
      </div>
    </main>
  )
}
