"use client"

import React from 'react';
import { useState , FC, ChangeEvent } from 'react';
import Chat from '@/app/components/icons/chat';

type ValidInputTypes = "text" | "password" | "email";
interface InputProps {
  name: string
  type: ValidInputTypes
  value: string
  placeholder: string
  disabled: boolean
}

export const Input: FC<InputProps> = ({ name, type, placeholder, value: propValue, disabled: propDisabled }) => {
  const [value, setValue] = useState(propValue);
  const [disabled, setDisabled] = useState(propDisabled);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisabled(newValue === 'disable');
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-5">{name}</label>
      <div className="mt-2">
        <input
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          type= {type}
          required
          onChange={handleChange}
          className="block w-full rounded border-0 py-2.5 shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>
    </div>
  )
}
