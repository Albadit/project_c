import React, { SVGProps } from 'react'

export default function Chat(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-font1' viewBox="0 0 24 24" {...props}>
            <path d="M6 14h8v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2ZM2 22V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-4 4Z"></path>
        </svg>
    )
}