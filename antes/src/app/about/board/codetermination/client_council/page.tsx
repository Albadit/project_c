"use client";
import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/app/components/home/nav'

export default function ClientCouncil() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Cliëntenraad</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenu />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <p className='text-secondary text-left text-xl'>De cliëntenraad van Antes komt op voor de gemeenschappelijke belangen van cliënten van Antes.</p>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Wat doet de cliëntenraad?</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De cliëntenraad bestaat uit en is er voor cliënten. Deze raad adviseert het bestuur van Antes. Je kunt hierbij denken aan  adviezen over voeding, huisvesting, privacy en activiteiten voor cliënten.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>De cliëntenraad:</p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-secondary text-xl'>- Komt op voor de belangen van cliënten</p>
                            <p className='text-secondary text-xl'>- Vertelt wat cliënten van de zorg bij Antes vinden</p>
                            <p className='text-secondary text-xl'>- Gaat na of er zaken verbeterd kunnen worden</p>
                            <p className='text-secondary text-xl'>- Informeert cliënten</p>
                            <p className='text-secondary text-xl'>- Adviseert over ontwikkelingen bij Antes</p>
                            <p className='text-secondary text-xl'>- Heeft overleg met andere cliëntenraden</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Wie zitten er in de cliëntenraad?</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>In de cliëntenraad zitten mensen die behandeld worden bij Antes. Ook kunnen er mensen in zitten die hun behandeling al achter de rug hebben. Allemaal hebben ze dus ervaring met Antes.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Hoe werkt de cliëntenraad?</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De cliëntenraad vergadert regelmatig. Ze bespreekt dan onderwerpen die op dat moment relevant zijn. Regelmatig is de directie of het bestuur van Antes aanwezig om te overleggen.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Verder bezoekt de raad regelmatig de afdelingen. Of er is daar een spreekuur. Tijdens zo&apos;n spreekuur evalueren we de zorg en wat er beter kan. Ook horen we graag wat jij belangrijk vindt. Heb je vragen? Deze beantwoorden we graag. Als we het antwoord niet hebben, word je gekkoppeld aan de juiste persoon.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Wat doet de cliëntenraad niet?</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De cliëntenraad houdt zich met algemene zaken bezig. Heb je een klacht of een persoonlijke wens? Dan kun je niet bij ons terecht. Neem in dat geval contact op met je behandelaar of begeleider, de <Link href='https://www.anteszorg.nl/clienten/jouw-rechten/patientenvertrouwenspersoon' className='text-primary'>patiëntenvertrouwenspersoon</Link> of de <Link href='https://www.anteszorg.nl/clienten/jouw-rechten/klachtenregeling' className='text-primary'>klachtencommissie</Link>.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Jouw mening telt</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Laat ons weten wat je vindt van de zorg bij Antes. Heb je ideeën of tips, dan horen wij die graag. Ben je enthousiast en wil je meedenken? Neem dan contact met ons op.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Contactgegevens</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Voor vragen kun je contact opnemen met:</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Email cliëntenraadAntes@anteszorg.nl </p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-xl'>Divisie Ouderen, NAH en Ziekenhuispsychiatrie / Divisie Wonen:</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-2x1'>T 06 10 28 67 25 </p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-xl'>Divisie Ambulant</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-2x1'>T 06 51 99 28 68</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-xl'>Divisie Klinisch Zuid/ Divisie Klinisch Noord en Acute Psychiatrie / Centrale Cliëntenraad:</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='flex text-secondary text-x1'>T 06 83 38 26 78</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}