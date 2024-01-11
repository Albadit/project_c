"use client";

import Link from "next/link";
import SideMenuWork from '@/app/work/side_menu_work/page';
import Nav from '@/app/components/home/nav'

export default function VolunteerWork() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Vrijwilligerswerk</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenuWork /> */}
                    <div className='hidden sm:flex'><SideMenuWork /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenuWork /></div>
                        <div className='flex gap-5 4xl:gap-10 text-extra'>
                            <div className='text-secondary text-left text-2xl'>Bij Antes helpen tal van vrijwilligers onze cliënten binding te houden met de samenleving. Door het geven van positieve aandacht laten vrijwilligers cliënten merken dat ze ertoe doen en dat ze de moeite waard zijn. Vrijwilligers dragen zo bij aan het verbeteren van de kwaliteit van leven en herstel van psychiatrische cliënten. Ben je geïnteresseerd in zinvol vrijwilligerswerk? Je kunt van onschatbare waarde zijn voor mensen met psychische problemen bij jou in de buurt.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Wat wil je doen?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Bij Antes zijn er veel mogelijkheden voor vrijwilligerswerk. Het gaat om het samen doen van laagdrempelige activiteiten, zoals samen koffie drinken, een praatje maken, een spelletje doen, wandelen, een boodschapje doen, muziek luisteren, iets creatiefs, sportiefs of muzikaals doen, iets koken of bakken of samen in het groen werken. Of meehelpen met een activiteit op een afdeling. Dat kun je met één of meerdere cliënten doen. Heb je zelf een idee? Neem dan contact op met Vrijwilligerswerk Antes.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Hoe vaak je wilt…</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>De tijdinvestering van het vrijwilligerswerk kan variëren: van een paar uur in de week tot een paar uur per maand tot een paar keer per jaar.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Interesse?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Reageer op een vacature (vink bij dienstverband vrijwilligerswerk aan). Of neem contact op met ons.
                                <p className='text-secondary text-left text-xl'>- Rochelle de Gouveia: 0623114016 (coördinator Vrijwilligerswerk Antes)</p>
                                <p className='text-secondary text-left text-xl'>- Zita Istha: 0657425308 (consulent van het Maatjesproject) </p></div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'>Samen kun je de wensen en mogelijkheden bespreken.</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Meer informatie</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Meer informatie over vrijwilligerswerk vind je in de folder:</div>
                        </div>
                        <div className='flex gap-5'>
                            <Link href="https://www.anteszorg.nl/documents/10193/17717368/Folder+vrijwilligerswerk+Parnassia+Groep.pdf/ad561382-bb0f-41a4-1bea-ee932c1f6504?t=1696245012496" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Folder vrijwilligerswerk Parnassia Groep</button></Link>
                            <Link href="https://werkenbijparnassiagroep.nl/vacatures/vrijwilligers?_ga=2.9626995.776596900.1701802004-1970662864.16940802431" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Vacatures Parnassia Groep</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}