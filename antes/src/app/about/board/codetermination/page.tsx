"use client";
import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/components/home/nav'

export default function Codetermination() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Medezeggenschap</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <p className='text-secondary text-left text-2xl'> Medezeggenschap is bij Antes geregeld in de cliëntenraad, de familieraad en de ondernemingsraad.</p>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>De cliëntenraad</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De cliëntenraad van Antes komt op voor de gemeenschappelijke belangen van cliënten van Antes.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>De familieraad</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De familieraad komt op voor de gezamenlijke belangen van familie en naasten en draagt zo bij aan goede zorg voor hen. De familieraad is een medezeggenschapsorgaan en heeft bevoegdheden gebaseerd op een overeenkomst met de bestuurder van Antes als vertegenwoordiger in de regio.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>De ondernemingsraad</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>In de <Link href='https://or-online.nl/wet-op-de-ondernemingsraden-wor/' className='text-primary'>Wet op de Ondernemingsraden</Link> (WOR) staat precies vermeld waar de ondernemingsraad invloed op kan uitoefenen. De ondernemingsraad kan al naar gelang het onderwerp advies of instemming geven.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}