"use client";
import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/components/home/nav'

export default function FamilyCouncil() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Familiebeleid</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <p className='text-secondary text-left text-2xl'> Binnen Parnassia Groep wordt hard gewerkt aan het realiseren van een goed familiebeleid. Een belangrijk onderdeel daarvan is de Familieraad. Deze is in de regio Rijnmond ingesteld voor de zorgbedrijven Antes, Indigo, i-psy, Youz, Reakt en PsyQ die allemaal onderdeel zijn van Parnassia Groep.</p>
                        <p className='text-secondary text-left text-xl'> De Familieraad komt op voor de gezamenlijke belangen van familie en naasten en draagt zo bij aan goede zorg voor hen. De Familieraad is een medezeggenschapsorgaan en heeft bevoegdheden gebaseerd op een overeenkomst met de bestuurder van Antes als vertegenwoordiger in de regio.</p>
                        <p><Link href="https://www.parnassiagroep.nl/documents/10193/3980893/PGfolderRegioRijnmond-0804B.pdf/7b721d59-3520-28d9-f3a2-7b26f18c0060?_ga=2.188899051.1915736437.1701171356-1970662864.1694080243"><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Informatiefolder regio Rijnmond</button></Link></p>
                        <div className='flex justify-start gap-1'>
                            <p className='font-bold text-secondary text-2xl'>Hoe werkt de Familieraad?</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Krachten bundelen</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Om ons werk als Familieraad goed te doen, is intensief contact met jou als familie nodig. Wij nodigen je uit ons te laten weten wat je van de zorg en hulpverlening vindt. Zo kunnen wij jouw belangen goed behartigen en jou goed vertegenwoordigen.</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Bij vragen en klachten</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Als de Familieraad regelmatig dezelfde vragen of klachten hoort over een zorgbedrijf, een afdeling of een regeling, helpt de raad bij het zoeken naar een oplossing. Voor de behandeling van individuele vragen of klachten verwijst de Familieraad door naar de <Link href='https://www.anteszorg.nl/familie-naasten/familievertrouwenspersoon' className='text-primary'>Familievertrouwenspersoon</Link>.</p>
                        </div>
                        <div className='flex justify-start gap-5 3xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Meld je aan</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>De Familieraad kan altijd versterking gebruiken. Ben je familielid of naaste van een patiënt? Neem dan contact op met Ruud Kraaijeveld, ondersteuner Familieraad, om te bespreken of een lidmaatschap iets voor jou is.</p>
                        </div>
                        <div className='flex justify-start gap-5 3xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Meer informatie</p>
                        </div>
                        <div className='flex justify-start gap-5 2xl:gap-10'>
                            <p className='text-secondary text-xl'>Wil je meer weten? Kijk op de pagina over de <Link href='https://www.parnassiagroep.nl/hoe-wij-helpen/familie-naasten/familieraad?_ga=2.150551542.1915736437.1701171356-1970662864.1694080243' className='text-primary'>familieraad en de klachtenfunctionaris</Link> op de site van Parnassia Groep. Antes is onderdeel van Parnassia Groep.
                                Natuurlijk kun je je vraag ook mailen aan:</p>
                        </div>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='text-secondary text-xl'>Theo Hoedemaker, voorzitter regionale familieraad Rijnmond</p>
                        </div>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='text-secondary text-xl'>Ruud Kraaijeveld, ondersteuner</p>
                        </div>
                        <div className='flex justify-start gap-5 3xl:gap-10'>
                            <p className='font-bold text-secondary text-xl'>Familieklachtrecht</p>
                        </div>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='text-secondary text-xl'>We hopen natuurlijk dat je tevreden bent over de hulpverleners en de zorg die jouw familielid/naaste krijgt. Maar het kan zijn dat jouw vragen niet naar tevredenheid beantwoord worden. Of dat er een verschil van mening is met de hulpverlener over de manier waarop je als familielid bij de behandeling betrokken wordt. Ook kun je niet tevreden zijn over de manier waarop wij met jou of jouw naaste omgaan.</p>
                        </div>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='text-secondary text-xl'>Parnassia Groep vindt het belangrijk om ongenoegens en wensen van familie zo vroeg mogelijk te horen. Daardoor kunnen deze meestal snel worden opgelost. Het is voor zowel familie/naaste, als de hulpverlener het beste om de klacht eerst met elkaar te bespreken.
                                Verloopt dit niet naar tevredenheid of heb je daar geen behoefte aan? Je kunt dan schriftelijk een formele klacht indienen via de <Link href='https://www.parnassiagroep.nl/hoe-wij-helpen/uw-rechten/klachtenregeling?_ga=2.151674745.1915736437.1701171356-1970662864.1694080243' className='text-primary'>klachtenprocedure van Parnassia Groep</Link>.</p>
                        </div>
                        <div className='flex justify-start gap-5 xl:gap-10'>
                            <p className='text-secondary text-xl'>Onze klachtenfunctionaris kan je meer vertellen over de klachtmogelijkheden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}