import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'
import E_Learning from '@/app/components/E_Learning'
// import Dashboard from '@/app/components/Dashboard'

export default function Home() {
  return (
    <>
      <HeaderHome />
      {/* <Dashboard /> */}
      <E_Learning />

    </>
  )
}
