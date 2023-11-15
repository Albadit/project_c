"use client"

import React from 'react';
import Link from 'next/link';
import InputLogin from '@/app/components/InputLogin';
import TermsConditon from '@/app/components/terms_conditions';



export default function register() {
    return (
      <div className="flex flex-row items-center gap-12">
        <img
          src="img/Rectangle2756.png"
          alt=""
          className="w-[950px] h-full"
        />
        <div className="flex center stretch flex-col gap-12">
        <img
          src="img/image2.png"
          alt=""
          className="w-[271px] h-[69px]"
        />
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-2">
            <p>Voornaam</p>
            <InputLogin/>
          </div>
          <div className="flex flex-col gap-2">
            <p>Achternaam</p>
            <InputLogin/>
          </div>
          <div className="flex flex-col gap-2">
            <p>Functie</p>
            <InputLogin/>
          </div>
          <div className="flex flex-col gap-2">
            <p>Wachtwoord</p>
            <InputLogin/>
          </div>
          <div className="flex flex-col gap-2">
            <p>Bevestig Wachtwoord</p>
            <InputLogin/>
          </div>
          <div className="flex flex-col gap-2">
            <TermsConditon/>
          </div>
          
          
        </div>
  
      </div>
      </div>
  
  
    );
  }
  

