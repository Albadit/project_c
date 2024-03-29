import React, { ReactNode, useState } from 'react';
import Close from '@/components/icons/close';

interface ModalProps {
  children: ReactNode
  title: string
  bgcolor?: string
  visibility?: boolean
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

export default function Modal({ children, title, bgcolor, visibility, isModalOpen, setIsModalOpen }: ModalProps) {
  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <button type='button' onClick={openModal} className={`${bgcolor ? `${bgcolor} text-font1` : "bg-secondary text-font2"} ${visibility ? "hidden" : "block"} w-fit px-6 py-2.5 rounded-lg font-semibold text-sm`}>{title}</button>
      <div className={`${isModalOpen ? "block" : "hidden"} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-boxShadow/50 h-full w-full`}>
        <div className='flex flex-col justify-center items-center h-full m-5'>
          <div className='flex flex-col gap-4 p-5 max-w-[500px] w-full bg-background shadow-cbs rounded-lg outline outline-1 outline-font1/10'>
            <div className='flex flex-row justify-between'>
              <p className="text-xl font-semibold text-primary">{title}</p>
              <button type='button' onClick={() => setIsModalOpen(false)}>
                <Close className='w-9 px-0.5'/>
              </button>
            </div>
            <hr className='text-font1/20'/>
            <div className='w-full h-full'>
              { children }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
