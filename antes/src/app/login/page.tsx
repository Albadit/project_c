import React from 'react'
import InputLogin from '@/app/components/InputLogin';
import ToggleSwitch from '@/app/components/toggle_switch';

export default function login() {
  return (
    <div className="flex flex-row items-center gap-12">
      <img
        src="img/Rectangle2756.png"
        alt=""
        className="w-[950px] h-full"
      />
      <div className="flex flex-col gap-12">
      <img
        src="img/image2.png"
        alt=""
        className="w-[271px] h-[69px]"
      />
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-2">
          <p>Email</p>
          <InputLogin/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Wachtwoord</p>
          <InputLogin/>
        </div>
        <div className="flex flex-row w-[390px]">
        <ToggleSwitch/>
        <a href="/another-page" className="">
        Wachtwoord vergeten
        </a>
        </div>
      </div>

    </div>
    </div>


  );
}
