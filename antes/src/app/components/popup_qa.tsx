import React, { useState } from 'react'
import { Input } from '@/app/components/input';
import Close from '@/app/components/icons/close';
import { InputDateTime } from '@/app/components/input_datetime';

export default function PopupQa() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentDate = new Date().toISOString().split('.')[0]

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  const closeDivPopup = (event:any) => {
    if (event.target === event.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  return (
    <>
      <button type='button' onClick={openPopup} className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Maak nieuwe Q&A</button>

      <div onClick={closeDivPopup} className={`${isPopupOpen ? "block" : "hidden"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-boxShadow/50 h-full w-full`}>
        <div className='flex flex-col justify-center items-center h-full'>
          <div className='flex flex-col gap-4 p-5 max-w-[500px] w-full bg-background shadow-cbs rounded-lg outline outline-1 outline-font1/10'>
            <div className='flex flex-row justify-between'>
              <p className="text-xl font-semibold text-primary">Nieuwe Q&A</p>
              <button type='button' onClick={closePopup} ><Close className='w-9 px-0.5'/></button>
            </div>
            <hr />
            <form className='flex flex-col gap-4 items-end'>
              <Input label='Vraag' name='title' type='textarea' value=""/>
              <Input label='Foto banner' name='image' type='text' value=""/>
              <InputDateTime label='Foto banner' name='image' value="" min={currentDate} max=''/>
              <button type='submit' className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>Opslaan</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
