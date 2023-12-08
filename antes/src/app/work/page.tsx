"use client";

import Link from "next/link";
import { AboutCard } from '@/app/components/home/about_card';
import SideMenuWork from '@/app/work/side_menu_work/page';
import Nav from '@/app/components/home/nav'
import Video from '@/app/components/video'

const workwithus1 = {
    id: 1,
    image: "",
    title: "Vacatures Antes",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "https://werkenbijparnassiagroep.nl/vacatures/antes?_ga=2.77328083.776596900.1701802004-1970662864.1694080243",
}
const workwithus2 = {
    id: 2,
    image: "",
    title: "Solicitatieprocedure",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "https://werkenbijparnassiagroep.nl/over-ons/sollicitatieprocedure",
}
const workwithus3 = {
    id: 3,
    image: "",
    title: "Arbeidsvoorwaarden",
    description: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
    link: "https://werkenbijparnassiagroep.nl/over-ons/jouw-arbeidsvoorwaarden",
}


export default function WorkWithUs() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Werken Bij Ons</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    <SideMenuWork />
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[1000px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='flex flex-row gap-5'>
                            <AboutCard aboutus={workwithus1} />
                            <AboutCard aboutus={workwithus2} />
                            <AboutCard aboutus={workwithus3} />
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary font-bold text-left text-2xl'>Werken en leren</div>
                        </div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Wij gaan verder waar anderen stoppen. Omdat wij geloven dat er altijd, hoe klein ook, verbetering mogelijk is voor de cliënt en zijn of haar omgeving.</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Antes als werkgever</div>
                        </div>
                        <Video embedId="GxcqEPN39eM" />
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Wat betekent werken bij Antes?</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>
                                <p className=''>Wij geven onze professionals de ruimte om vanuit hun deskundigheid, in gezamenlijkheid met het team, te kunnen doen wat goed is. Wij kunnen hierbij putten uit meer dan 100 jaar ervaring en onderzoek in psychiatrie en verslavingszorg. Omdat wij uitgaan van de kracht van onze collega’s en van onze cliënten zijn wij in staat om het verschil te maken. Zo dragen wij bij aan de kwaliteit van leven van onze cliënten en aan de leefbaarheid van Rotterdam en omstreken. Wil jij ook je steentje bijdragen en onderdeel worden van ons team van professionals?</p>
                            </div>
                        </div>
                        <Link href="https://werkenbijparnassiagroep.nl/vacatures/vrijwilligers?_ga=2.9626995.776596900.1701802004-1970662864.16940802431" text-primary><button className="text-[#FAFAFA] bg-secondary py-2 px-4 rounded">Bekijk onze vacatures!</button></Link>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-2xl font-bold'>Waar wil jij waarde toevoegen?</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Echte waarde toevoegen aan de kwaliteit van leven van onze cliënten kunnen wij doordat wij op meerdere levensgebieden onze cliënten helpen en een keten van zorg aanbieden. Zo komen wij thuis als dat nodig is, zoeken wij mensen op in de stad om ze te verleiden om in zorg te komen, bieden wij tijdelijke crisisopvang en bedden als dat nodig is en hebben wij beschermde woonvormen. Dit maakt dat wij goed in kunnen spelen op de zorgbehoefte en de intensiteit en inhoud van de zorg makkelijk kunnen aanpassen. Je kunt bij ons kiezen voor die zorg die het beste bij jou past.</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Daarnaast kun je kiezen voor de doelgroep die jou het meest aanspreekt. Zo bieden we zorg aan cliënten met een intensieve zorgvraag (zoals forensische zorg of bij ernstige of multi-problematiek) of minder intensieve zorgvraag. We bieden verslavingszorg en zorg aan ouderen en cliënten met een niet-aangeboren hersenletsel, waarbij naast psychische zorg ook lichamelijke zorg vaak een belangrijke rol speelt.</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>De belangrijkste werkvelden van Antes:
                                <p className='text-primary'>werken in de kliniek</p>
                                <p className='text-primary'>werken in de wijk, bij cliënten thuis</p>
                                <p className='text-primary'>werken als woonbegeleider</p>
                                <p className='text-primary'>werken in de verslavingszorg</p>
                                <p className='text-primary'>werken in de ouderenpsychiatrie</p>
                                <p className='text-primary'>werken in de zorg bij niet-aangeboren hersenletsel (NAH)</p>
                                <p className='text-primary'>werken in de zorg bij ernstige psychiatrische problemen en multi-problematiek</p>
                                <p className='text-primary'>werken in de forensische Zorg</p>
                                <p className='text-primary'>werken als ervaringsdeskundige</p>
                                <p className='text-primary'>werken in de Flexpool</p>
                            </div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl font-bold'>​​Hoe kun je jezelf en je loopbaan ontwikkelen?</div>
                        </div>
                        <div className='flex gap-5 3xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Goede zorg kunnen wij alleen leveren met goede professionele collega’s. Daarom geven we niet alleen ruimte om vanuit je eigen deskundigheid de goede zorg te leveren, maar investeren ook in jou om je deskundigheid op peil te houden en te vergroten. Omdat wij onderdeel zijn van Parnassia Groep kunnen wij veel faciliteiten bieden. Zo hebben wij een eigen opleidingsacademie, een intern loopbaan- en coachingsbureau, specialismegroepen die kennis vergroten en bundelen en een eigen onderzoeksbureau en data-analyse afdeling. Wanneer je bij ons werkt, krijg je een eigen opleidingsbudget en wordt er door je leidinggevende samen met jou gekeken welke ondersteuning nodig is om jouw ontwikkeldoelen te halen. Omdat we een grote instelling zijn, hebben wij veel loopbaanmogelijkheden, zowel bij Antes als bij Parnassia Groep.</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}