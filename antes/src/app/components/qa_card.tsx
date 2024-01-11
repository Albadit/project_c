import React from "react";
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import Chat from "@/app/components/icons/chat";

type QAItems = {
  id: number;
  name: string;
  image: string;
  datetime: string;
  title: string;
  latest_comment: string;
  reactions: number;
  profile: string
  url: string;
}

type Props = {
  qa: QAItems;
}

export const QACard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between md:max-w-[525px] w-full gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={props.qa.image} alt="event" className="h-[280px] object-cover object-center rounded" />
      <div className="flex flex-row items-center gap-2 text-extra">
        <Calendar className="fill-extra h-5" />
        <p className="text-sm">{props.qa.datetime}</p>
        <p>|</p>
        <Chat className="fill-extra h-5" />
        <p className="text-sm">{props.qa.reactions} Reacties</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-primary">{props.qa.title}</h2>
        <p className="text-extra line-clamp-3 lg:line-clamp-6">
          {props.qa.latest_comment}
        </p>
      </div>
      <hr className="border-font1/20" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
        <div className="flex flex-row items-center gap-5">
          <img src={props.qa.profile} alt={props.qa.name} className="rounded-full h-[44px]" />
          <p className="text-extra font-semibold">{props.qa.name}</p>
        </div>
        <Link href={props.qa.url} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}