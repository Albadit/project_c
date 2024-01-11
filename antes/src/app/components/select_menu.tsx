"use client"
import React from 'react';
import { useState} from 'react';

type SelectOption = {
  id: string;
  name: string;
};

type Props = {
  label: string
  name: string
  index?: number
  disabled?: boolean
  options: SelectOption[]
}

export const SelectMenu = (props: Props) => {
  const [disabled] = useState(props.disabled);

  return (
    <div className="relative text-left w-full text-font1">
      <label htmlFor={props.name} className="block text-sm font-medium leading-5">{props.label}</label>
      <div className='mt-2 relative'>
        <select
          id={props.name.toLowerCase()}
          name={props.name.toLowerCase()}
          disabled={disabled}
          required
          className='block w-full rounded border-0 py-2.5 shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none'>
          <option hidden value="">-- kies je functie --</option>
          {props.options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}