import React, { ReactNode, useState } from 'react';
import Close from '@/app/components/icons/close';

interface PopupQaProps {
  children: ReactNode
  title: string
  isPopupOpen: boolean
  setIsPopupOpen: (open: boolean) => void
}

export default function PopupQa({ children, title, isPopupOpen, setIsPopupOpen }: PopupQaProps) {
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <button type='button' onClick={openPopup} className='w-fit px-6 py-2.5 rounded-lg bg-secondary text-font2 font-semibold text-sm'>{title}</button>
      <div className={`${isPopupOpen ? "block" : "hidden"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-boxShadow/50 h-full w-full`}>
        <div className='flex flex-col justify-center items-center h-full m-5'>
          <div className='flex flex-col gap-4 p-5 max-w-[500px] w-full bg-background shadow-cbs rounded-lg outline outline-1 outline-font1/10'>
            <div className='flex flex-row justify-between'>
              <p className="text-xl font-semibold text-primary">{title}</p>
              <button type='button' onClick={closePopup} ><Close className='w-9 px-0.5'/></button>
            </div>
            <hr className='text-font1/20'/>
            { children }
          </div>
        </div>
      </div>
    </>
  )
}
