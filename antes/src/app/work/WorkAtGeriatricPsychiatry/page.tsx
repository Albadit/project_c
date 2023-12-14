"use client";

import Link from "next/link";
import SideMenuWork from '@/app/work/side_menu_work/page';
import Nav from '@/app/components/home/nav'
import Video from '@/app/components/video'

export default function WorkAtGeriatricPsychiatry() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Werken bij Ouderenpsychiatrie</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenuWork /> */}
                    <div className='hidden sm:flex'><SideMenuWork /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenuWork /></div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Ouderenpsychiatrie stoffig en saai? Absoluut niet! Sterker nog, er zit meer uitdaging in dan je denkt. De grootste groep is nog zeer vitaal en goed in staat om eigen behandeldoelen te formuleren. </div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Werken in de ouderenpsychiatrie</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Wij bieden specialistische hulp aan mensen vanaf 65 jaar, zowel de specialistische ggz als de basis ggz. Wij voeren diagnostiek uit en behandelen ouderen met psychiatrische en/of psychogeriatrische problematiek waaronder depressie, cognitieve stoornissen (waaronder screening op dementie), angststoornissen, persoonlijkheidsstoornissen, verslaving en psychotische stoornissen. De ouderenpsychiatrie is meer dan alleen psychiatrie. Somatiek, levensfaseproblematiek en systeemproblematiek maken de casussen interessant en uitdagend.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Wij bieden onze zorg vanuit twee klinieken, meerdere gespecialiseerde ambulante teams voor ouderen, deeltijdbehandeling, een ACT-team en een psychodiagnostisch centrum.</div>
                        </div>
                        <Video embedId="-afHkSbXwnM" />
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Onze collega’s vertellen in dit filmpje hoe ze met elkaar en met veel plezier alle ballen hoog houden om te zorgen dat onze oudere cliënten de zorg krijgen die ze nodig hebben.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Hoe is het werken binnen deze teams?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Kliniek</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>De klinieken ouderenpsychiatrie zijn opname-afdelingen met vooral als doel diagnostiek en behandeling. In een later stadium van de behandeling kan het doel resocialisatie zijn in een open setting en wordt er ook nagedacht over passende zorg in de toekomst. Het behandelteam van de ouderenklinieken bestaat uit onder andere uit psychiaters, GZ-psychologen, somatisch arts, arts-assistenten in opleiding tot psychiater en geriater, verpleegkundig specialisten, verpleegkundigen niveau 4 en 5 en verzorgenden.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Bij het werken binnen de klinieken heb je veel eigen inbreng (in afstemming met het team) op de behandeling en invloed op je agenda en hebben wij vertrouwen op je deskundigheid. In de kliniek werk je nauw samen in het multidisciplinair behandelteam. Er zijn gesloten opname-afdelingen en open afdelingen waar je werkzaam bent.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Ambulant</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>De ambulante teams bieden poliklinische en outreachende behandelingen. De teams bestaan uit verschillende disciplines om zo de beste behandeling te kunnen bieden; psychiaters, specialist ouderen geneeskunde, SPV-en, GZ-psychologen, GGZ-agogen, verpleegkundig specialisten, verpleegkundigen, maatschappelijk werk en basispsychologen. De combinatie van poliklinisch en het afleggen van huisbezoeken maakt het werk afwisselend en boeiend.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Binnen de ambulante teams heb je veel eigen inbreng (in afstemming met het team) op de behandeling en invloed op je agenda. Wij vertrouwen op je deskundigheid. Werktijden zijn regelmatig, huisbezoeken plan je zoveel mogelijk in op passende momenten en je kunt deels thuis, onderweg of op verschillende locaties van Antes werken.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Psychodiagnostisch centrum</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Het psychodiagnostisch centrum (PDC) is gespecialiseerd in het uitvoeren van psychodiagnostisch onderzoek en ondersteunt daarmee het werk van de verschillende afdelingen van Antes. Het PDC onderzoekt mensen onder andere op het gebied van persoonlijkheid, psychiatrische stoornissen en neuropsychologie.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>ACT</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'><Link href='https://www.anteszorg.nl/hulp-bij-psychische-klachten/hulp-op-afspraak/act-team-ouderen' className='text-primary'>ACT Ouderen</Link> is een multidisciplinair team. Je werkt nauw samen met een psychiater, meerdere verpleegkundigen, een rehabilitatie medewerker en een vaste teamondersteuner.</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Deeltijdbehandeling</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Op drie locaties wordt een volwaardig deeltijdprogramma aangeboden. Wij bieden hier zowel verbale als non-verbale groepen. Cliënten kunnen vanuit de ambulante teams snel in- en uitstromen.</div>
                        </div>
                        <Video embedId="GxcqEPN39eM" />
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Welke locaties zijn er?</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Klinische locaties in Rotterdam</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                <p className='text-secondary text-left text-xl'><Link href='https://www.anteszorg.nl/locaties/kliniek-ouderenpsychiatrie-nieuwe-binnenweg' className='text-primary'>Nieuwe Binnenweg, Rotterdam</Link></p>
                                <p className='text-secondary text-left text-xl'><Link href='https://www.anteszorg.nl/locaties/kliniek-ouderenpsychiatrie-zorgboulevard' className='text-primary'>Zorgboulevard</Link> (naast het Maasstad Ziekenhuis), Rotterdam</p>
                            </div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Ambulante teams voor Rotterdam Noord</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <p className='text-secondary text-left text-xl'><Link href='https://www.anteszorg.nl/locaties/ouderenpsychiatrie-ambulant-capelle-krimpen-ijssel' className='text-primary'>Poortmolen</Link>, Capelle aan den IJssel</p>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>Ambulante teams voor Rotterdam Zuid</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                <p className='text-secondary text-left text-xl'>Zorgboulevard (naast het Maasstad Ziekenhuis), Rotterdam</p>
                                <p className='text-secondary text-left text-xl'><Link href='https://www.anteszorg.nl/locaties/locatie-hoeklaan-spijkenisse' className='text-primary'>Hoeklaan</Link>, Spijkenisse</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <Link href="https://werkenbijparnassiagroep.nl/vacatures/vrijwilligers?_ga=2.9626995.776596900.1701802004-1970662864.16940802431" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Bekijk onze vacatures</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}