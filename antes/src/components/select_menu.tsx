import React, { useState, useEffect } from 'react'

export type SelectOption = {
  id: string
  name: string
}

type SelectProps = {
  label: string
  name: string
  index?: string
  disabled?: boolean
  options: SelectOption[]
  onChange?: (value: string) => void
}

export const SelectMenu = (props: SelectProps) => {
  const [disabled] = useState(props.disabled)
  const [selectedValue, setSelectedValue] = useState<string>(props.index || '')

  useEffect(() => {
    setSelectedValue(props.index || '')
  }, [props.index])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value
    setSelectedValue(newValue)
    props.onChange && props.onChange(newValue)
  }

  return (
    <div className="relative text-left w-full text-font1">
      <label htmlFor={props.name} className="block text-sm font-medium leading-5">
        {props.label} *
      </label>
      <div className="mt-2 relative">
        <select
          id={props.name.toLowerCase()}
          name={props.name.toLowerCase()}
          disabled={disabled}
          required
          value={selectedValue}
          onChange={handleChange}
          className="block w-full rounded border-0 py-2.5 shadow-sm ring-1 ring-inset ring-font1/20 placeholder:font1 focus:ring-2 focus:ring-inset focus:ring-callToAction sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        >
          <option hidden value="">
            -- kies je optie --
          </option>
          {props.options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
