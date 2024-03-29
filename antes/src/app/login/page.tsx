"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/input';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const context = {
  logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
  passwordForget: { url:"/forget_password", text: "Wachtwoord vergeten?" },
  cacheLogin: { text: "Onthoud mij" },
  btn: { url: "/dashboard",text: "Login" }
}

export default function Login() {
  const [message, setMessage] = useState('');
  const router = useRouter()
  const { data: session, status } = useSession()
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    if (email && password) {
      const exist = await signIn('credentials', {
        ...{
          email: email,
          password: password,
        },
        redirect: false,
      })
      if(exist?.status === 200) {
        router.push("/dashboard")
      } else {
        setMessage("Verkeerde email of wachtwoord.");
      }
    } else {
      setMessage("Verkeerde email of wachtwoord.");
    }
  }

  if (session && status === "authenticated") router.push("/dashboard")

  return (
    <main className='flex flex-row justify-center login:h-screen h-fit'>
      <div className="bg-login bg-center grow bg-cover bg-no-repeat md:block hidden"></div>
      <div className='flex flex-col justify-center gap-12 w-full max-w-[490px] p-5 md:p-12'>
        <Link href={context.logo.url}>
          <img src={context.logo.img} alt={context.logo.alt} className='w-max'/>
        </Link>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
          <Input label="Email" name="email" type="email" value=''/>
          <Input label="Wachtword" name="password" type="password" value=''/>
          <div className='flex md:flex-row flex-col justify-between lg:items-center items-start gap-2'>
            <div className='flex flex-row gap-3 items-center text-font1'>
              <input type="checkbox" name="" id="remember" className='rounded text-callToAction border-font1/30 focus:ring-2 focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'/> 
              <label htmlFor="remember">{context.cacheLogin.text}</label>
            </div>
          </div>
          <button type='submit' title="login" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
          <p className='text-error'>{message}</p>
          <Link href={context.passwordForget.url} className='underline text-hyperlink'>{context.passwordForget.text}</Link>
        </form>
      </div>
    </main>
  )
}
