import React from "react";
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type Props = {
  event: object;
}

const context = {
  image: "img/event.png",
  title: "Connectiedag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  location: "Rotterdam",
  date: "12-12-2024",
  link: "/event",
}

export const EventCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between md:max-w-[525px] w-full gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={context.image} alt="event" className="h-[320px] object-cover object-center rounded"/>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-xl font-semibold text-primary">Event: {context.title}</h2>
        <p className="text-extra line-clamp-4 lg:line-clamp-5">{context.description}</p>
        <p>Locatie: {context.location}</p>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
        <div className="flex flex-row items-center gap-2">
          <Calendar className="fill-extra h-5" />
          <p className="text-extra text-sm">{context.date}</p>
        </div>
        <Link href={context.link} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}
