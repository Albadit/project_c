import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'
import Dashboard from '@/app/components/Dashboard'

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Dashboard />
    </>
  )
}
