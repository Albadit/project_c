'use client'
import Link from 'next/link';
import { useState } from 'react';

import About_Us from '@/app/AboutUs/page'
import Bestuur from '@/app/AboutUs/Board/page'
import Jaarcijfers from '@/app/AboutUs/Annualfigures/page'
import MissieKernWaarden from '@/app/AboutUs/MissieKernWaarden/page'
import Organogram from '@/app/AboutUs/Organogram/page'
import { useRouter } from 'next/router';

const SideMenuAboutUs = () => {
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
                <a href="/AboutUs" onClick={toggleDropdown3}>
                    {<span className='font-bold'>Over Ons</span>}
                </a>
            </div>
            <div className="dropdown">
                <a href="/AboutUs/Board" onClick={toggleDropdown1}>
                    {document.URL.includes('/Board') ? <span className='font-bold'>Bestuur</span> : 'Bestuur'}
                    {document.URL.includes('/Board') ? <a href="/AboutUs/Board/Codetermination" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/Codetermination') ? <span className='flex font-bold'> {'-'} Medezeggenschap</span> : '+ Medezeggenschap'}</p>
                    </a> : ''}
                    {document.URL.includes('/Codetermination') ? <a href="/AboutUs/Board/Codetermination/ClientCouncil" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/ClientCouncil') ? <span className='flex font-bold'>  {'-'} Cliëntenraad</span> : '+ Cliëntenraad'}</p>
                    </a> : ''}
                    {document.URL.includes('/Codetermination') ? <a href="/AboutUs/Board/Codetermination/FamilyCouncil" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/FamilyCouncil') ? <span className='flex font-bold'>  {'-'} Familieraad</span> : '+ Familieraad'}</p>
                    </a> : ''}
                </a>
            </div>
            <div className="dropdown">
                <a href="/AboutUs/Annualfigures" onClick={toggleDropdown2}>
                    {document.URL.includes('/Annualfigures') ? <span className='font-bold'>Jaarcijfers</span> : 'Jaarcijfers'}
                    {document.URL.includes('/Annualfigures') ? <a href="/AboutUs/Annualfigures/Boumanfonds" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/Boumanfonds') ? <span className='font-bold'> {'-'} Boumanfonds</span> : '+ Boumanfonds'}</p>
                    </a> : ''}
                </a>
            </div>
            <div className="dropdown">
                <a href="/AboutUs/MissieKernWaarden" onClick={toggleDropdown3}>
                    {document.URL.includes('/MissieKernWaarden') ? <span className='font-bold'>Missie en kernwaarden</span> : 'Missie en kernwaarden'}
                    {document.URL.includes('/MissieKernWaarden') ? <a href="/AboutUs/MissieKernWaarden/Nonsmoking" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/Nonsmoking') ? <span className='font-bold'> {'-'} Rookvrije organisatie</span> : '+ Rookvrije organisatie'}</p>
                    </a> : ''}
                    {document.URL.includes('/MissieKernWaarden') ? <a href="/AboutUs/MissieKernWaarden/Corona" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/Corona') ? <span className='font-bold'> {'-'} Corona</span> : '+ Corona'}</p>
                    </a> : ''}
                </a>
            </div>
            <div>
                <a href="/AboutUs/Organogram" onClick={toggleDropdown3}>
                    {document.URL.includes('/Organogram') ? <span className='font-bold'>Organogram</span> : 'Organogram'}
                </a>
            </div>
        </div>
    );
};

export default SideMenuAboutUs;
