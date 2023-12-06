'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function SideMenuWork() {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    }
    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    }
    const toggleDropdown3 = () => {
        setDropdownOpen3(!dropdownOpen3);
    };

    return (
        <div className='flex flex-col gap-4 border-solid border-4 border-primary shadow-2xl w-full md:w-[525px] h-full p-7 rounded-lg bg-section text-base font-font1 text-secondary'>
            <div>
                <Link href="/work" onClick={toggleDropdown3}>
                    {<span className='font-bold'>Werken bij Ons</span>}
                </Link>
            </div>
            <div>
                <Link href="https://werkenbijparnassiagroep.nl/vacatures/antes?_ga=2.77328083.776596900.1701802004-1970662864.1694080243" onClick={toggleDropdown3}>
                    {<span className=''>Vacatures Antes</span>}
                </Link>
            </div>
            <div>
                <Link href="https://werkenbijparnassiagroep.nl/over-ons/sollicitatieprocedure" onClick={toggleDropdown3}>
                    {<span className=''>Solicitatieprocedure</span>}
                </Link>
            </div>
            <div>
                <Link href="https://werkenbijparnassiagroep.nl/over-ons/jouw-arbeidsvoorwaarden" onClick={toggleDropdown3}>
                    {<span className=''>Arbeidsvoorwaarden</span>}
                </Link>
            </div>
            <div>
                <Link href="/work/Flexpool" onClick={toggleDropdown3}>
                    {document.URL.includes('/Flexpool') ? <span className='font-bold'>Flexpool</span> : 'Flexpool'}
                </Link>
            </div>
            <div>
                <Link href="/work/VolunteerWork" onClick={toggleDropdown3}>
                    {document.URL.includes('/VolunteerWork') ? <span className='font-bold'>Vrijwilligerswerk</span> : 'Vrijwilligerswerk'}
                </Link>
            </div>
            <div>
                <Link href="https://werkenbijparnassiagroep.nl/vacatures/job-alert" onClick={toggleDropdown3}>
                    {<span className=''>Job Alert</span>}
                </Link>
            </div>
            <div>
                <Link href="/work/WorkWithClients" onClick={toggleDropdown3}>
                    {document.URL.includes('/WorkWithClients') ? <span className='font-bold'>Werken in de wijk, bij cliënten thuis</span> : 'Werken in de wijk, bij cliënten thuis'}
                </Link>
            </div>
            <div>
                <Link href="/work/WorkAsResidentialSupervisor" onClick={toggleDropdown3}>
                    {document.URL.includes('/WorkAsResidentialSupervisor') ? <span className='font-bold'>Werken als woonbegeleider</span> : 'Werken als woonbegeleider'}
                </Link>
            </div>
            <div>
                <Link href="/work/WorkAtGeriatricPsychiatry" onClick={toggleDropdown3}>
                    {document.URL.includes('/WorkAtGeriatricPsychiatry') ? <span className='font-bold'>Werken bij Ouderpsychiatrie</span> : 'Werken bij Ouderpsychiatrie'}
                </Link>
            </div>
        </div>
    );
};