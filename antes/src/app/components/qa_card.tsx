import React from "react";
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import Chat from "@/app/components/icons/chat";

type QaItems = {
  id: string
  title: string
  name: string
  profile: string
  image: string
  dateCreate: string
  reactions: number
  bio: string
}

type Props = {
  qa: QaItems;
}

function formatDate(date: string): string {
  const convert = new Date(date)
  const day = String(convert.getDate()).padStart(2, '0')
  const month = String(convert.getMonth() + 1).padStart(2, '0')
  const year = convert.getFullYear()

  const hours = String(convert.getHours()).padStart(2, '0');
  const minutes = String(convert.getMinutes()).padStart(2, '0');
  const seconds = String(convert.getSeconds()).padStart(2, '0');

  // return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return `${day}-${month}-${year}`
}

export const QACard = (props: Props) => {
  return (
    <div className="flex flex-col md:max-w-[525px] w-full gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={"/img/" + props.qa.image} alt="event" className="h-[280px] object-cover object-center rounded" />
      <div className="flex flex-row items-center gap-2 text-extra">
        <Calendar className="fill-extra h-5" />
        <p className="text-sm">{formatDate(props.qa.dateCreate)}</p>
        <p>|</p>
        <Chat className="fill-extra h-5" />
        <p className="text-sm">{props.qa.reactions} Reacties</p>
      </div>
      <div className="flex flex-col gap-3 grow">
        <h2 className="text-xl font-semibold text-primary">{props.qa.title}</h2>
        <p className="text-extra line-clamp-3 lg:line-clamp-6 ">
          {props.qa.bio}
        </p>
      </div>
      <hr className="border-font1/20" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
        <div className="flex flex-row items-center gap-5">
          <img src={"/img/" + props.qa.profile} alt={props.qa.name} className="rounded-full h-[44px]" />
          <p className="text-extra font-semibold">{props.qa.name}</p>
        </div>
        <Link href={"/qa/" + props.qa.id} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}