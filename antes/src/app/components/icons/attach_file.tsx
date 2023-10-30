import React, { SVGProps } from 'react'

export default function AttachFile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='fill-font1' viewBox="0 0 24 24" {...props}>
      <path d="M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2q1.65 0 2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18q-1.05 0-1.775-.725T9 15.5V6.75q0-.325.213-.537T9.75 6q.325 0 .537.213t.213.537v8.75q0 .425.288.713t.712.287q.425 0 .713-.288t.287-.712V6q0-1.05-.725-1.775T10 3.5q-1.05 0-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5q1.65 0 2.825-1.175T15.5 16.5V6.75q0-.325.213-.537T16.25 6q.325 0 .537.213T17 6.75v9.75q0 2.3-1.6 3.9T11.5 22Z"></path>
    </svg>
  )
}