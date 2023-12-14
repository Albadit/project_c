"use client";

import Link from "next/link";
import SideMenuWork from '@/app/work/side_menu_work/page';
import Nav from '@/app/components/home/nav'
import Video from '@/app/components/video'

export default function WorkWithClients() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Werken in de wijk, bij cliënten thuis</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenuWork /> */}
                    <div className='hidden sm:flex'><SideMenuWork /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenuWork /></div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Samen in een multidisciplinair team wijkgerichte zorg dichtbij bieden aan onze cliënten met problemen op meerdere leefgebieden.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Wat doen de ggz-wijkteams en expertiseteams?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Bij Antes werken de ggz-wijkteams volgens de FACT-methodiek. In deze teams werken de collega’s vanuit verschillende disciplines met eigen aandachtsgebieden nauw samen om de best passende zorg te bieden. Om ook specialistische zorg te kunnen bieden, werken de ggz teams nauw samen met de expertiseteams. Samen bieden zij een compleet wijkgericht en wijkoverstijgend behandelaanbod.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>De uitdaging in het werk ligt erin om de behandeling uit te voeren en daarbij naasten te betrekken en verder te kijken dan de ziekte, zodat je de mens en de mogelijkheden ziet. Om vanuit de herstelgedachte samen in kleine stapjes te werken aan kwaliteit van leven, in samenwerking met netwerkpartners die op andere levensdomeinen zorg aanbieden.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Hoe is het werken binnen deze teams?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Je maakt deel uit van een multidisciplinair team, waarin je je eigen inbreng en expertise hebt. Wij vertrouwen in je deskundigheid. Werktijden zijn regelmatig, huisbezoeken plan je zoveel mogelijk in op passende momenten en je kunt op verschillende locaties van Antes werken. Wij lopen voorop in het combineren van online behandeling met face-to-face behandeling en groepsbehandeling. Teams bestaan uit 10 tot 15 collega’s. Elk team heeft een meewerkend hoofd behandelzaken die jou helpt je doelen te behalen, je faciliteert in je werk en steunt bij je ontwikkeling. Je krijgt in elk geval de nodige basistrainingen om je werk goed te kunnen doen. Kijk hier hoe een dag bij een FACT team eruit ziet:</div>
                        </div>
                        <Video embedId="8BJXCWRiqFg" />
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Welke locaties zijn er?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Wij bieden ambulante zorg in de regio Rijnmond, voor de Zuid-Hollandse eilanden, Nieuwe Waterweg Noord en voor de Drechtsteden. Dit betekent dat wij daar onze grote locaties hebben<Link href='https://www.anteszorg.nl/locaties' className='text-primary'>. Hier kun je zien welke locaties er zijn en hoe ze eruit zien.</Link> Bij ons heb je veel regie op je agenda indeling. Dit betekent dat je soms ook onderweg, thuis of op een locatie die jou uitkomt kunt werken.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Vacatures</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Word jij onze nieuwe collega?</div>
                        </div>
                        <div className='flex gap-5'>
                            <Link href="https://werkenbijparnassiagroep.nl/vacatures/vrijwilligers?_ga=2.9626995.776596900.1701802004-1970662864.16940802431" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Vacatures Parnassia Groep</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}