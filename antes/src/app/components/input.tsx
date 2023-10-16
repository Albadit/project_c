"use client"

import React from 'react';
import { useState , FC, ChangeEvent } from 'react';
import EyeClose from '@/app/components/icons/eye_close';
import EyeOpen from '@/app/components/icons/eye_open';
import ArrowDown from './icons/arrow_down';

type ValidInputTypes = "text" | "password" | "email" | "select";
type ValidInputValue = string | object;

interface InputProps {
  name: string
  type: ValidInputTypes
  value: ValidInputValue
  placeholder: string
  disabled: boolean
}

const functies = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook'},
]

const PasswordToggle: FC<{ showPassword: boolean; onClick: () => void }> = ({ showPassword, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
  >
    {showPassword ? (
      <EyeClose className='material-icons-outlined fill-font1/75 h-1/2' />
    ) : (
      <EyeOpen className='material-icons-outlined fill-font1/75 h-1/2' />
    )}
  </button>
);

const MenuItem: FC<{ person: { id: number; name: string }; onClick: () => void }> = ({ person, onClick }) => (
  <span className="text-font1 block px-4 py-2 text-sm" tabIndex={-1} onClick={onClick}>
    {person.name}
  </span>
);


export const Input: FC<InputProps> = ({ name, type, placeholder, value: propValue, disabled: propDisabled }) => {
  const [value, setValue] = useState(propValue);
  const [disabled, setDisabled] = useState(propDisabled);
  const [showPassword, setShowPassword] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(functies[1])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisabled(newValue === 'disable');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const chaneSelected = (person: React.SetStateAction<{ id: number; name: string; }>) => {
    setSelected(person)
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {type !== 'select' && (<>
        <label htmlFor={name} className="block text-sm font-medium leading-5">{name}</label>
        <div className="mt-2 relative">
          <input
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            id={name.toLowerCase()}
            name={name.toLowerCase()}
            type={showPassword ? 'text' : type}
            required
            onChange={handleChange}
            className={`block w-full rounded border-0 py-2.5 ${type === 'password' ? 'pr-10' : ''} shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`} 
          />
          {type === 'password' && <PasswordToggle showPassword={showPassword} onClick={togglePasswordVisibility} />}
        </div>
      </>)}
      {type === 'select' && (
      <div className="relative text-left w-full text-font1">
        <label htmlFor={name} className="block text-sm font-medium leading-5">{name}</label>
        <div className="mt-2 relative">
          <button type="button" 
            id="menu-button"
            aria-expanded={isMenuOpen}
            disabled={disabled}
            aria-haspopup="true"
            onClick={toggleMenu}
            className="flex w-full justify-between rounded bg-[#fff] px-3 py-3 text-sm shadow-sm ring-1 ring-inset ring-font1/20">
              {selected.name}
            <ArrowDown className='h-5'/>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-full origin-top-right rounded bg-[#fff] shadow-sm ring-1 ring-inset ring-font1/20 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
          <div className="py-1">
          {functies.length === 0 && selected.id !>= functies.length ? (
            <span className="text-font1 block px-4 py-2 text-sm" tabIndex={-1}>
              No people available
            </span>
          ) : (
            functies.map((role) => (
              <MenuItem key={role.id} person={role} onClick={() => chaneSelected(role)} />
            ))
          )}
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
