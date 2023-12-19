'use client'
import React from 'react';
import Footer from '@/app/components/footer';
import { NavDashboard } from '@/app/components/dashboard/nav';
import { Input } from '@/app/components/input';
import { SelectMenu } from '@/app/components/select_menu';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type UserFunctionItems = {
  id: string;
  name: string;
}

type ApiResponse<T> = {
  status: string;
  data: T;
}

async function Post(data: any, url: string) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<ApiResponse<UserFunctionItems> | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/v1/user_function')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
    fetch('/api/v1/user')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  const handleSubmitProfile = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bio = formData.get('bio');
    
    if (bio) {
      const register = await Post({
        bio: bio,
      }, "/api/v1/user_update")
      if (register === true) {
        router.push("/login");
      } else {
        setMessage("Verkeerde data.");
      }
    } else {
      setMessage("De input staat leeg.");
    }
  }

  const handleSubmitPassword = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const newPassword = formData.get('new-password');
    
    if (password && newPassword) {
      const register = await Post({
        password: password,
        newPassword: newPassword,
      }, "/api/v1/user_update")
      if (register === true) {
        router.push("/login");
      } else {
        setMessage(register);
      }
    } else {
      setMessage("De input staat leeg.");
    }
  }

  if (!session && status === "loading") return <p className='text-center'>Loading data...</p>
  if (status === "unauthenticated") { router.push('/'); return null; }

  if (isLoading) return <p className='text-center'>Loading data...</p>
  if (data?.status === "error") return <p className='text-center'>No data find</p>

  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className='m-auto px-5 py-12 max-w-[1000px]'>
        <section className='flex flex-col gap-5  font-font2'>
          <h1 className='font-font1 font-bold text-primary text-5xl'>Profiel</h1>
          <hr />
          <form onSubmit={handleSubmitProfile} className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Persoonlijke informatie</h2>
            <div className='flex flex-row gap-5 items-center'>
              <img src={"/img/" + session?.user?.image} alt="profile" className='h-[100px] rounded-full'/>
              <div className='flex flex-col gap-2'>
                <label htmlFor="upload-photo" className='w-fit px-5 py-2 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Verander Avatar</label>
                <input type="file" name="photo" id="upload-photo" className='hidden'/>
                <p className='text-sm text-font1'>JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            {/* <Input label='Naam' name='name' type='text' value={session?.user.name}/> */}
            {/* <SelectMenu label='User Function' name="user_function" options={data?.data || []} index={2}/> */}
            {/* <Input label='Email' name='email' type='email' value={session?.user.email}/> */}
            {/* <Input label='Bio' name='bio' type='textarea' value={user.bio}/> */}
            <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
          </form>
          <hr />
          <form onSubmit={handleSubmitPassword} className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Verander wachtwoord</h2>
            <Input label='Huidig Wachtwoord' name='password' type='password' value=''/>
            <Input label='Nieuw Wachtwoord' name='new-password' type='password' value=''/>
            <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  )
}
