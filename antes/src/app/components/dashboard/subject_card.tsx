import React from "react";
import Link from "next/link";
import ArrowForward from "@/app/components/icons/arrow_right";

type subjectItems = {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
}

type Props = {
  subject: subjectItems;
}

export const SubjectCard = (props: Props) => {
  return (
    <Link href={props.subject.url} className="flex flex-row items-center justify-center gap-2 rounded-lg text-font2 font-semibold text-sm">
      <div className="flex flex-col shadow-2xl justify-between max-w-[390px] w-full gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
        <img src={props.subject.image} alt="event" className="h-[280px] object-cover object-center rounded" />
        <h2 className="text-xl font-semibold justify-center text-primary">{props.subject.title}</h2>
        <p>{props.subject.description}</p>
      </div>
    </Link>
  )
}