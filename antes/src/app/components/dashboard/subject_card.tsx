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

const context = {
  image: "img/e_learing.png",
  title: "Psychiatrie",
  subject: "La lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet.",
  link: "#",
}

export const SubjectCard = (props: Props) => {
  return (
    <Link href={props.subject.url} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg hover:bg-[#EBEBEB] text-font2 font-semibold text-sm">
      <div className="flex flex-col shadow-2xl justify-between w-full md:w-[425px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
        <img src={props.subject.image} alt="event" className="h-[280px] object-cover object-center rounded" />
        <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold justify-center text-primary">{props.subject.title}</h2>
        </div>
        <div className='flex justify-center'>
            <p>{props.subject.description}</p>
        </div>
        {/* <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
        <Link href={props.subject.url} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary hover:bg-[#9D0C33] text-font2 font-semibold text-sm">
            Ga verder <ArrowForward className="fill-font2 h-5" />
        </Link>
      </div> */}
      </div>
    </Link>
  )
}