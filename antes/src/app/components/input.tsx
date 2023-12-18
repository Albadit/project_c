"use client"
import React from 'react';
import { useState , ChangeEvent } from 'react';
import EyeClose from '@/app/components/icons/eye_close';
import EyeOpen from '@/app/components/icons/eye_open';

type Props = {
  label: string
  name: string
  type: "text" | "password" | "email" | "textarea"
  required?: boolean
  placeholder?: string
  disabled?: boolean
  value: string
}

type PasswordToggleProps = {
  password: { visible: boolean }
  onClick: () => void
}

const PasswordToggle = ({ password: { visible }, onClick }: PasswordToggleProps) => (
  <button
    title='visible'
    type="button"
    onClick={onClick}
    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
  >
    {visible ? (
      <EyeClose className='material-icons-outlined fill-font1/75 h-1/2' />
    ) : (
      <EyeOpen className='material-icons-outlined fill-font1/75 h-1/2' />
    )}
  </button>
)

export const Input = (props: Props) => {
  const [value, setValue] = useState(props.value);
  const [disabled, setDisabled] = useState(props.disabled);
  const [required, setRequired] = useState(props.required !== undefined ? props.required : true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisabled(newValue === 'disable');
    setRequired(newValue === 'required');
  }
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisabled(newValue === 'disable');
    setRequired(newValue === 'required');
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='w-full'>
      <label htmlFor={props.name.toLowerCase()} className="block text-sm font-medium leading-5 text-font1">{props.label} {required === true ? "*" : ""}</label>
      <div className="mt-2 relative">
        {props.type === 'textarea' ? (
          <textarea
            value={value}
            id={props.name.toLowerCase()}
            name={props.name.toLowerCase()}
            placeholder={props.placeholder}
            disabled={disabled}
            required={required}
            onChange={handleChangeTextArea}
            className='resize-none block w-full rounded border-0 py-2.5 shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75'/>
        ) : (
          <input
            disabled={disabled}
            value={value}
            placeholder={props.placeholder}
            id={props.name.toLowerCase()}
            name={props.name.toLowerCase()}
            type={showPassword ? 'text' : props.type}
            autoComplete={props.type === "password" ? 'off' : props.name.toLowerCase()}
            required={required}
            onChange={handleChangeInput}
            className={`block w-full rounded border-0 py-2.5 ${props.type === 'password' ? 'pr-10' : ''} shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-75`} 
          />
        )}
        {props.type === 'password' && <PasswordToggle password={{ visible: showPassword }} onClick={togglePasswordVisibility} />}
      </div>
    </div>
  )
}