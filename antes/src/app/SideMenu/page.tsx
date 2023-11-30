'use client'
import Link from 'next/link';
import { useState } from 'react';

import About_Us from '@/app/AboutUs/page'
import Bestuur from '@/app/Bestuur/page'
import Jaarcijfers from '@/app/Jaarcijfers/page'
import MissieKernWaarden from '@/app/MissieKernWaarden/page'
import Organogram from '@/app/Organogram/page'
import { useRouter } from 'next/router';

const SideMenu = () => {
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
            <div className="dropdown">
                <a href="/Bestuur" onClick={toggleDropdown1}>
                    {document.URL.includes('/Bestuur') ? <span className='font-bold'>Bestuur</span> : 'Bestuur'}
                    {document.URL.includes('/Bestuur') ? <a href="/Bestuur/Medezeggenschap" onClick={toggleDropdown1}>
                        <p>{document.URL.includes('/Medezeggenschap') ? <span className='font-bold'> {'-'} Medezeggenschap</span> : '+ Medezeggenschap'}</p>
                    </a> : ''}
                </a>
                {/* {dropdownOpen1 && (
                    <div className='gap-2'>
                        <div>
                            <Link href="/services/service1"> {'>'} Medezeggenschap</Link>
                        </div>
                    </div>
                )} */}
            </div>
            <div className="dropdown">
                <a href="/Jaarcijfers" onClick={toggleDropdown2}>
                    {document.URL.includes('/Jaarcijfers') ? <span className='font-bold'>Jaarcijfers</span> : 'Jaarcijfers'}
                    {document.URL.includes('/Jaarcijfers') ? <a href="/Jaarcijfers/Boumanfonds" onClick={toggleDropdown2}>
                        <p>{document.URL.includes('/Boumanfonds') ? <span className='font-bold'> {'-'} Boumanfonds</span> : '+ Boumanfonds'}</p>
                    </a> : ''}
                </a>
                {/* {dropdownOpen2 && (
                    <div className='gap-2'>
                        <div>
                            <Link href="/services/service1"> {'>'} Boumanfonds</Link>
                        </div>
                    </div>
                )} */}
            </div>
            <div className="dropdown">
                <a href="/MissieKernWaarden" onClick={toggleDropdown3}>
                    {document.URL.includes('/MissieKernWaarden') ? <span className='font-bold'>Missie en kernwaarden</span> : 'Missie en kernwaarden'}
                    {document.URL.includes('/MissieKernWaarden') ? <span className=''><p><Link href="/services/service1"> {'>'} Rookvrije organisatie</Link></p></span> : ''}
                    {document.URL.includes('/MissieKernWaarden') ? <span className=''><p><Link href="/services/service2"> {'>'} Corona</Link></p></span> : ''}
                </a>
                {/* {dropdownOpen3 && (
                    <div className='gap-2'>
                        <div>
                            <Link href="/services/service1"> {'>'} Rookvrije organisatie</Link>
                        </div>
                        <div>
                            <Link href="/services/service2"> {'>'} Corona</Link>
                        </div>
                    </div>
                )} */}
            </div>
            <div>
                <a href="/Organogram" onClick={toggleDropdown3}>
                    {document.URL.includes('/Organogram') ? <span className='font-bold'>Organogram</span> : 'Organogram'}
                </a>
                {/* <Link href="/Organogram">Organogram</Link> */}
            </div>
        </div>
    );
};

export default SideMenu;
