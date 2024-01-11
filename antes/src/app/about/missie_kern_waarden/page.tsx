import Link from "next/link";
import SideMenu from '@/app/about/side_menu_about/page';
import Nav from '@/app/components/home/nav'

export default function MissionCoreValues() {
    return (
        <main>
            <Nav />
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <p className="text-center text-primary text-5xl font-bold drop-shadow-lg">Missie en kernwaarden</p>
                </div>
                <div className='flex justify-center gap-5 2xl:gap-10'>
                    {/* <SideMenu /> */}
                    <div className='hidden sm:flex'><SideMenu /></div>
                    <div className='flex flex-col shadow-2xl justify-between w-full md:w-[900px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
                        <div className='md:hidden'><SideMenu /></div>
                        <div className='flex gap-5 4xl:gap-10'>
                            <div className='text-secondary text-left text-2xl'>Antes is specialist in psychiatrie en verslaving. Antes richt zich als ggz-instelling op het herstel van volwassenen en ouderen met (ernstige) psychiatrische problemen..</div>
                        </div>
                        <div className='flex gap-5 font-semibold 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Missie en kernwaarden</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                Het doel van Antes is mensen met psychische problemen de juiste zorg te bieden, op het juiste moment, zo intensief als mogelijk maar niet langer dan nodig. Wij nemen daarbij het herstel van onze cliënten als uitgangspunt. Samen met de cliënt en diens naastbetrokkenen werken wij aan het hervinden en behouden van de regie over het leven. Antes wil de ernstige gevolgen van een psychische problemen tot een minimum beperken, waardoor onze cliënten weer op eigen kracht verder kunnen, naar eigen wensen sociale relaties kunnen aangaan en kunnen participeren in de samenleving. We werken vanuit drie kernwaarden: deskundig, optimistisch en respectvol.
                            </div>
                        </div>
                        <div className='flex gap-5 font-semibold 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Aanbod</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                Ieder mens is anders. Daarom krijg je bij Antes een behandeling op maat. Onze medewerkers gaan uit van de kracht, mogelijkheden en wensen van de cliënt en zijn omgeving. Vanuit de herstelgedachte behandelen we je zoveel mogelijk op een van onze locaties en zo nodig ook bij je thuis. Als een opname noodzakelijk is, als onderdeel van de ambulante behandeling, kun je terecht in onze gespecialiseerde klinieken. <Link href='https://www.anteszorg.nl/hulp-bij-psychische-klachten' className='text-primary'>Bekijk ons behandelaanbod</Link> en <Link href='https://www.anteszorg.nl/psychische-klachten' className='text-primary'>lees meer over de stoornissen die we behandelen.</Link>
                            </div>
                        </div>
                        <div className='flex gap-5 font-semibold 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>Doelgroepen</div>
                        </div>
                        <div className='flex gap-5 2xl:gap-10'>
                            <div className='text-secondary text-left text-xl'>
                                - Cliënten - Als cliënt kun je bij ons terecht op <Link href="https://www.anteszorg.nl/locaties" className="text-primary">een van onze locaties, in een van onze klinieken</Link> of we helpen je thuis. <Link href="https://www.anteszorg.nl/hulp-bij-psychische-klachten" className="text-primary">Bekijk ons gehele aanbod.</Link>
                                - Familie en naasten - Mogelijk maak je je zorgen om iemand of weet je niet wat je moet doen voor iemand die psychische klachten heeft? <Link href="https://www.anteszorg.nl/familie-en-naasten">Lees wat je als familie kunt doen.</Link>
                                - Verwijzers - Er zijn verschillende mogelijkheden om cliënten door te verwijzen naar Antes. <Link href="https://www.anteszorg.nl/verwijzers" className="text-primary">Bekijk de mogelijkheden.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}