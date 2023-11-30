import Image from 'next/image'
import HeaderHome from '@/app/header_home'
import About_Us from '@/app/AboutUs/page'
import Bestuur from '@/app/Bestuur/page'
import Jaarcijfers from '@/app/Jaarcijfers/page'
import Dashboard from '@/app/components/Dashboard'
import MissieKernWaarden from '@/app/MissieKernWaarden/page'
import Organogram from '@/app/Organogram/page'

export default function Home() {
  return (
    <>
      <HeaderHome />
      {/* <Dashboard /> */}
      {/* <Bestuur /> */}
      <About_Us />
      {/* <Jaarcijfers /> */}
      {/* <MissieKernWaarden /> */}
      {/* <Organogram /> */}
    </>
  )
}
