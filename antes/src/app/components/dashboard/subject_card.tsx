import React from "react"
import Link from "next/link"

type subjectItems = {
  id: string
  image: string
  title: string
  description: string
}

type Props = {
  subject: subjectItems;
}

export const SubjectCard = (props: Props) => {
  return (
    <main>
      <Link href={`/elearing/${props.subject.id}`} className="flex flex-col justify-between w-full md:w-[390px] gap-4 p-7 rounded-lg bg-section shadow-cbs">
        <img src={props.subject.image} alt="event" className="h-[220px] object-cover object-center rounded" />
        <h2 className="text-xl font-semibold justify-center text-primary">{props.subject.title}</h2>
        <p>{props.subject.description}</p>
      </Link>
    </main>
  )
}