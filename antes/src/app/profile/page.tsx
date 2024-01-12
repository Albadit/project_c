'use client'
import React from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import { Input } from '@/components/input'
import { SelectMenu, SelectOption } from '@/components/select_menu'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { PostData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'

type User = {
  id: string
  roleId: string
  userFunctionId: string
  image: string
  name: string
  bio: string
  email: string
  emailVerified: null | boolean
  password: string
}

type ApiResponse<T> = {
  status: string
  data: T
}

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [dataUserFunction, setDataUserFunction] = useState<ApiResponse<SelectOption[]> | null>(null)
  const [isLoadingUserFunction, setLoadingUserFunction] = useState(true)
  const [dataUser, setDataUser] = useState<ApiResponse<User> | null>(null)
  const [isLoadingUser, setLoadingUser] = useState(true)
  const [messageProfile, setMessageProfile] = useState('')
  const [messagePassword, setMessagePassword] = useState('')

  const handleSubmitProfile = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userFunctionId = formData.get('user_function')
    const bio = formData.get('bio')
    
    if (bio) {
      const update = await PostData({
        userId: session?.user.id,
        userFunctionId: userFunctionId,
        bio: bio,
      }, `/api/v1/user/${session?.user.id}`)
      if (update.status === "success") {
        setMessageProfile("Profiel is opgeslagen")
      } else {
        setMessageProfile("Verkeerde data")
      }
    } else {
      setMessageProfile("De input staat leeg")
    }
  }

  const handleSubmitPassword = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const form = e.target
    const currentPassword = formData.get('password')
    const newPassword = formData.get('new-password')
    
    if (currentPassword && newPassword) {
      const password = await PostData({
        currentPassword: currentPassword,
        newPassword: newPassword,
      }, `/api/v1/user/${session?.user.id}`)
      if (password.status === "success") {
        setMessagePassword("Wachtwoord is geupdate")
        form.elements['password'].value = ''
        form.elements['new-password'].value = ''
      } else {
        setMessagePassword(password.status)
      }
    } else {
      setMessagePassword("De input staat leeg.")
    }
  }

  useEffect(() => {
    FetchData(setDataUserFunction, setLoadingUserFunction, '/api/v1/user_function')
    FetchData(setDataUser, setLoadingUser, `/api/v1/user/${session?.user.id}`)
  }, [status, session?.user.id])

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }

  if (isLoadingUserFunction && isLoadingUser) return <LoadingScreen/> 
  if (dataUserFunction?.status === "error" && dataUser?.status === "error") return <NoDataFind/>

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
              <img src={session?.user?.image|| ""} alt="profile" className='h-[100px] rounded-full'/>
              <div className='flex flex-col gap-2'>
                <label htmlFor="upload-photo" className='w-fit px-5 py-2 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Verander Avatar</label>
                <input type="file" name="photo" id="upload-photo" className='hidden'/>
                <p className='text-sm text-font1'>JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            <Input label='Naam' name='name' type='text' value={dataUser?.data?.name || ''} disabled={true}/>
            <Input label='Email' name='email' type='email' value={dataUser?.data?.email || ''} disabled={true}/>
            <SelectMenu label='Gebruiker Functie' name="user_function" options={dataUserFunction?.data as SelectOption[]} index={dataUser?.data?.userFunctionId}/>
            <Input label='Bio' name='bio' type='textarea' value={dataUser?.data?.bio || ''}/>
            <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
            {messageProfile ? (<p className='text-success'>{messageProfile}</p>) : (<></>)}
          </form>
          <hr />
          <form onSubmit={handleSubmitPassword} className='flex flex-col gap-5'>
            <h2 className='font-font1 font-bold text-font1 text-3xl'>Verander wachtwoord</h2>
            <Input label='Huidig Wachtwoord' name='password' type='password' value=''/>
            <Input label='Nieuw Wachtwoord' name='new-password' type='password' value=''/>
            <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
            {messagePassword ? (<p className='text-success'>{messagePassword}</p>) : (<></>)}
          </form>
        </section>
      </main>
      <Footer/>
    </>
  )
}
