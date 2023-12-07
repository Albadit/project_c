'use client'
import { useState } from 'react';
import Link from "next/link";


const context =  {
    urlAbout: "/about",
    urlAboutBoard: "/about/board",
    url3: "/about",
    url4: "/about",
    url5: "/about",
}

export default function SideMenuAboutUs() {
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
                <Link href={context.urlAbout} onClick={toggleDropdown3}>
                    {<span className='font-bold'>Over Ons</span>}
                </Link>
            </div>
            <div className="dropdown">
                <Link href={context.urlAboutBoard} onClick={toggleDropdown1}>
                    {document.URL.includes('/board') ? <span className='font-bold'>Bestuur</span> : 'Bestuur'}
                    {document.URL.includes('/board') ? 
                    <Link href="/about/board/codetermination" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/codetermination') ? <span className='flex font-bold'> {'-'} Medezeggenschap</span> : '+ Medezeggenschap'}</p>
                    </Link> : ''}
                    {document.URL.includes('/codetermination') ? 
                    <Link href="/about/board/codetermination/client_council" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/client_council') ? <span className='flex font-bold'>  {'-'} Cliëntenraad</span> : '+ Cliëntenraad'}</p>
                    </Link> : ''}
                    {document.URL.includes('/codetermination') ? 
                    <Link href="/about/board/codetermination/family_council" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/family_council') ? <span className='flex font-bold'>  {'-'} Familieraad</span> : '+ Familieraad'}</p>
                    </Link> : ''}
                </Link>
            </div>
            <div className="dropdown">
                <Link href="/about/annual_figures" onClick={toggleDropdown2}>
                    {document.URL.includes('/annual_figures') ? <span className='font-bold'>Jaarcijfers</span> : 'Jaarcijfers'}
                    {document.URL.includes('/annual_figures') ? 
                    <Link href="/about/annual_figures/Boumanfonds" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/Boumanfonds') ? <span className='font-bold'> {'-'} Boumanfonds</span> : '+ Boumanfonds'}</p>
                    </Link> : ''}
                </Link>
            </div>
            <div className="dropdown">
                <Link href="/about/missie_kern_waarden" onClick={toggleDropdown3}>
                    {document.URL.includes('/missie_kern_waarden') ? <span className='font-bold'>Missie en kernwaarden</span> : 'Missie en kernwaarden'}
                    {document.URL.includes('/missie_kern_waarden') ? 
                    <Link href="/about/missie_kern_waarden/non_smoking" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/non_smoking') ? <span className='font-bold'> {'-'} Rookvrije organisatie</span> : '+ Rookvrije organisatie'}</p>
                    </Link> : ''}
                    {document.URL.includes('/missie_kern_waarden') ? 
                    <Link href="/about/missie_kern_waarden/corona" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/corona') ? <span className='font-bold'> {'-'} Corona</span> : '+ Corona'}</p>
                    </Link> : ''}
                </Link>
            </div>
            <div>
                <Link href="/about/organogram" onClick={toggleDropdown3}>
                    {document.URL.includes('/organogram') ? <span className='font-bold'>Organogram</span> : 'Organogram'}
                </Link>
            </div>
        </div>
    );
};