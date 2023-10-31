"use client"

import React from 'react';
import { useState, useEffect, useRef} from 'react';
import ArrowDown from './icons/arrow_down';

type SelectOption = {
  id: number;
  name: string;
};

type Props = {
  name: string
  index?: number
  disabled?: boolean
  value: SelectOption[]
}

type MenuItemProps = {
  functions: { id: number; name: string };
  onClick: () => void;
}

const MenuItem = ({ functions: { name }, onClick }: MenuItemProps) => (
  <span className="text-font1 block px-4 py-2 text-sm hover:bg-extra hover:text-font2 rounded cursor-pointer select-none" tabIndex={-1} onClick={onClick}>
    {name}
  </span>
)

export const SelectMenu = (props: Props) => {
  const functionItem = props.value.findIndex(func => func.id === props.index);
  const index = functionItem === -1 ? 0 : functionItem;

  const [value, setValue] = useState(props.value[index]);
  const [disabled] = useState(props.disabled);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const chaneSelected = (functions: SelectOption) => {
    setValue(functions)
    setIsMenuOpen(false);
  }
  
  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', onOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
    };
  }, [isMenuOpen]);


  return (
    <div className="relative text-left w-full text-font1" ref={ref}>
      <label htmlFor={props.name} className="block text-sm font-medium leading-5">{props.name}</label>
      <button type="button"
        id={props.name}
        aria-expanded={isMenuOpen}
        disabled={disabled}
        aria-haspopup="true"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`flex w-full ${value.name ? 'justify-between' : 'justify-end' } rounded bg-[#fff] px-3 py-3 text-font1 text-sm shadow-sm ring-1 ring-font1/20 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75`}>
          {value.name}
        <ArrowDown className='h-5'/>
      </button>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-1.5 w-full origin-top-right rounded bg-[#fff] shadow-sm ring-1 ring-inset ring-font1/20 focus:outline-none`}>
      {props.value.map((role) => (
        <MenuItem key={role.id} functions={role} onClick={() => chaneSelected(role)} />
      ))}
      </div>
    </div>
  )
}