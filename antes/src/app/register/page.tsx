import React from 'react';
import Link from 'next/link';
import InputLogin from '@/app/components/InputLogin';
import ToggleSwitch from '@/app/components/toggle_switch';


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
          
          
        </div>
  
      </div>
      </div>
  
  
    );
  }
  


// // import { Input } from '@/app/components/input';
// // import { SelectMenu } from '../components/select_menu';

// const context = {
//   logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo"},
//   account: { url:"/register", text: "Heb je al een account?" },
//   btn: { text: "Registreer" },
//   cacheRegister: { text: "Ga akkoord met de Antes-gebruikersovereenkomst en het privacybeleid" }
// }

// const functies = [
//   { id: 1, name: 'Behavioral neuroscience' },
//   { id: 2, name: 'Behavioral psychology' },
//   { id: 3, name: 'Clinical psychology' },
//   { id: 4, name: 'Cognitive psychology'},
//   { id: 5, name: 'Community psychology'},
// ]

// export default function Login() {
// //   return (
// //     // <main className='flex flex-row justify-center register:h-screen h-fit'>
// //     //   <div className="bg-login bg-center grow bg-cover bg-no-repeat md:block hidden"></div>
// //     //   <div className='flex flex-col gap-12 justify-center w-full max-w-[30.625rem] p-5 md:p-12'>
// //     //     <Link href={context.logo.url}>
// //     //       <img src={context.logo.img} alt={context.logo.alt} className='w-max'/>
// //     //     </Link>
// //     //     <form action="" className='flex flex-col justify-center gap-5'>
// //     //       <Input label="Voornaam" name="first-name" type="text" value=''/>
// //     //       <Input label="Achternaam" name="last-name" type="text" value=''/>
// //     //       <SelectMenu name="Functions" value={functies}/>
// //     //       <Input label="Email" name="email" type="email" value=''/>
// //     //       <Input label="Wachtword" name="password" type="password" value=''/>
// //     //       <Input label="Bevestigen Wachtword" name="confirm-password" type="password" value=''/>
// //     //       <div className='flex flex-row gap-3 items-top text-font1 text-sm'>
// //     //         <input type="checkbox" name="" id="remember" className='rounded text-callToAction border-font1/30 focus:ring-2 focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'/> 
// //     //         <label htmlFor="remember" className='m-[-1px]'>{context.cacheRegister.text}</label>
// //     //       </div>
// //     //       <button type="button" title="register" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>{context.btn.text}</button>
// //     //       <Link href={context.account.url} className='underline text-hyperlink'>{context.account.text}</Link>
// //     //     </form>
// //     //   </div>
// //     // </main>
// //   )
// }
