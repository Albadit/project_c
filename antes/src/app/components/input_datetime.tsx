"use client"
import React from 'react';
import { useState , ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  disabled?: boolean;
  value: string;
  min: string;
  max: string;
}

export const InputDateTime = (props: Props) => {
  const [value, setValue] = useState(props.value);
  const [disabled, setDisabled] = useState(props.disabled);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisabled(newValue === 'disable');
  }

  return (
    <div className='w-full'>
      <label htmlFor={props.name.toLowerCase()} className="block text-sm font-medium leading-5 text-font1">{props.label}</label>
      <div className="mt-2 relative">
        <input
          disabled={disabled}
          value={value}
          id={props.name.toLowerCase()}
          name={props.name.toLowerCase()}
          type="datetime-local"
          autoComplete={props.name.toLowerCase()}
          min={props.min}
          max={props.max}
          required
          onChange={handleChangeInput}
          className={`block w-full rounded border-0 py-2.5 shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75`} 
        />
      </div>
    </div>
  )
}