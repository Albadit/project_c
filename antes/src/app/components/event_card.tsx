import React from "react";
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type EventItems = {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  date: string;
  url: string;
}

type Props = {
  event: EventItems;
}

export const EventCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between md:max-w-[525px] w-full gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={props.event.image} alt="event_card" className="h-[320px] object-cover object-center rounded"/>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-xl font-semibold text-primary">Event: {props.event.title}</h2>
        <p className="text-extra line-clamp-4 lg:line-clamp-5">{props.event.description}</p>
        <p>Locatie: {props.event.location}</p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
        <div className="flex flex-row items-center gap-2">
          <Calendar className="fill-extra h-5" />
          <p className="text-extra text-sm">{props.event.date}</p>
        </div>
        <Link href={props.event.url} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}
