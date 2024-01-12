"use client"
import React, { useState, useEffect } from 'react'
import Footer from '@/components/footer'
import { NavDashboard } from '@/components/dashboard/nav'
import { useSession } from 'next-auth/react'
import { Input } from '@/components/input'
import { SelectMenu, SelectOption } from '@/components/select_menu'
import Modal from '@/components/modal'
import { PostData, PatchData, DeleteData, FetchData } from '@/components/functions'
import { LoadingScreen, LoadingData, NoDataFind } from '@/components/loader'
import { useRouter } from 'next/navigation'

type UserItems = {
  id: string
  name: string
  email: string
  userFunctionId: string
  userFunctionName: string
  roleId: string
  roleName: string
}

type ApiResponse<T> = {
  status: string
  data: T
}

type ModalStates = {
  [key: number]: boolean
}

export default function Admin() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [dataRole, setDataRole] = useState<ApiResponse<SelectOption[]> | null>(null)
  const [isLoadingRole, setLoadingRole] = useState(true)
  const [dataUserFunction, setDataUserFunction] = useState<ApiResponse<SelectOption[]> | null>(null)
  const [isLoadingUserFunction, setLoadingUserFunction] = useState(true)
  const [dataUser, setDataUser] = useState<ApiResponse<UserItems[]> | null>(null)
  const [isLoadingUser, setLoadingUser] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [modalStates, setModalStates] = useState<ModalStates>({})
  const [deleteModalStates, setDeleteModalStates] = useState<ModalStates>({})

  const openEditModal = (userId: number) => {
    setModalStates(prev => ({ ...prev, [userId]: true }))
  }
  
  const closeEditModal = (userId: number) => {
    setModalStates(prev => ({ ...prev, [userId]: false }))
  }

  const toggleDeleteModal = (userId: number) => {
    setDeleteModalStates(prev => ({ ...prev, [userId]: !prev[userId] }));
  };

  useEffect(() => {
    FetchData(setDataRole, setLoadingRole, '/api/v1/role')
    FetchData(setDataUserFunction, setLoadingUserFunction, '/api/v1/user_function')
    FetchData(setDataUser, setLoadingUser, '/api/v1/user')
  }, [])
  
  const handleSubmitAdd = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const form = e.target
    const name = formData.get('name')
    const email = formData.get('email')
    const userFunction = formData.get('user_function')
    const userRole = formData.get('user_role')

    if (name && email && userFunction && userRole) {
      const newUser = await PostData({
        name: name,
        email: email,
        userFunctionId: userFunction,
        userRoleId: userRole,
      }, `/api/v1/user`)

      if (newUser.status === "success") {
        setIsModalOpen(false)
        form.elements['name'].value = ''
        form.elements['email'].value = ''
        form.elements['user_function'].value = ''
        form.elements['user_role'].value = ''
        FetchData(setDataUser, setLoadingUser, '/api/v1/user')
      } else {
        setMessage('Er is iets fout gegaan')
      }
    } else {
      setMessage('De input staat leeg')
    }
  }

  const handleSubmitUpdate = async (e: any, userId: string, index: number) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get(`name_${userId}`)
    const email = formData.get(`email_${userId}`)
    const userFunction = formData.get(`user_function_${userId}`)
    const userRole = formData.get(`user_role_${userId}`)

    if (name && email && userFunction && userRole) {
      const newUser = await PatchData({
        id: userId,
        name: name,
        email: email,
        userFunctionId: userFunction,
        userRoleId: userRole,
      }, `/api/v1/user`)

      if (newUser.status === "success") {
        closeEditModal(index)
        FetchData(setDataUser, setLoadingUser, '/api/v1/user')
      } else {
        setMessage('Er is iets fout gegaan')
      }
    } else {
      setMessage('De input staat leeg')
    }
  }

  const handleSubmitDelete = async (e: any, userId: string, index: number) => {
    const newDelete = await DeleteData({
      id: userId,
    }, `/api/v1/user`)

    if (newDelete.status === "success") {
      toggleDeleteModal(index)
      FetchData(setDataUser, setLoadingUser, '/api/v1/user')
    } else {
      setMessage('Er is iets fout gegaan')
    }
  }

  if (status === "loading") return <LoadingScreen/>
  if (status === "unauthenticated") { router.push('/'); return null }
  if (isLoadingUser && isLoadingUserFunction && isLoadingRole) return <LoadingScreen/> 
  if (dataUser?.status === "error") return <NoDataFind/>
  if ((session?.user?.level ?? 0) >= 2) { router.push('/'); return null }

  return (
    <>
      <NavDashboard user={session?.user}/>
      <main className="flex flex-col justify-center items-center gap-8 p-5 my-12 ">
        <h1 className='font-font1 font-bold text-center text-primary text-5xl'>Gebruikers</h1>
        <section className='flex flex-col gap-5 font-font2 text-font1 max-w-[1000px] w-full'>
          <div className='flex flex-row justify-end'>
            <Modal title='Nieuw Gebruiker' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <form onSubmit={handleSubmitAdd} className='flex flex-col gap-4 items-end'>
                <Input label='Naam' name='name' type='text' value=''/>
                <Input label='Email' name='email' type='email' value=''/>
                <SelectMenu label='Functie' name="user_function" options={dataUserFunction?.data as SelectOption[]} />
                <SelectMenu label='Rol' name="user_role" options={dataRole?.data as SelectOption[]} />
                <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
                {message ? (<p className='text-error'>{message}</p>) : (<></>)}
              </form>
            </Modal>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full border-collapse'>
              <thead>
                <tr className='[&>th]:py-2 [&>th]:px-4 [&>th]:text-left [&>th]:font-semibold border-b-[1px] border-extra/50'>
                  <th>Naam</th>
                  <th>Email</th>
                  <th>Functie</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataUser?.data?.map((user: UserItems, index: number) => (
                  <tr key={user.id} className='odd:bg-extra/20 [&>td]:py-1 [&>td]:px-4 border-b-[1px] border-extra/50'>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.userFunctionName}</td>
                    <td>{user.roleName}</td>
                    <td className='flex flex-row gap-5'>
                    <button onClick={() => openEditModal(index)} className='bg-[#ffc107] text-font1 w-fit px-6 py-2.5 rounded-lg font-semibold text-sm'>Aanpassen</button>
                      <Modal title='Aanpassen' bgcolor='bg-[#ffc107]' visibility={true} isModalOpen={modalStates[index]} setIsModalOpen={() => closeEditModal(index)}>
                        <form onSubmit={(e) => handleSubmitUpdate(e, user.id, index)} className='flex flex-col gap-4 items-end'>
                          <Input label='Naam' name={`name_${user.id}`} type='text' value={user.name}/>
                          <Input label='Email' name={`email_${user.id}`} type='email' value={user.email}/>
                          <SelectMenu label='Functie' name={`user_function_${user.id}`} options={dataUserFunction?.data as SelectOption[]} index={user.userFunctionId}/>
                          <SelectMenu label='Rol' name={`user_role_${user.id}`} options={dataRole?.data as SelectOption[]} index={user.roleId}/>
                          <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
                          {message ? (<p className='text-error'>{message}</p>) : (<></>)}
                        </form>
                      </Modal>
                      <button onClick={() => toggleDeleteModal(index)} className='w-fit px-6 py-2.5 rounded-lg bg-error text-font2 font-semibold text-sm'>Verwijderen</button>
                      <Modal title='Gebruiker verwijderen' visibility={true} isModalOpen={deleteModalStates[index]} setIsModalOpen={() => toggleDeleteModal(index)}>
                        <form onSubmit={(e) => handleSubmitDelete(e, user.id, index)} className='flex flex-col gap-4 w-full'>
                          <p className='text-left'>Weet je zeker dat je <span className='font-bold'>{user.email}</span> wilt verwijderen?</p>
                          <div className='flex justify-end gap-4'>
                            <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-error text-font2 font-semibold text-sm'>Verwijderen</button>
                            <button onClick={() => toggleDeleteModal(index)} className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Annuleren</button>
                          </div>
                        </form>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}