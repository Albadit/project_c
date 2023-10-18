import React from "react";
import Link from "next/link";
import Calendar from "@/app/components/icons/calendar";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";
import Chat from "@/app/components/icons/chat";

type Props = {
  qa: object;
}

const context = {
  image: "img/q-and-a.png",
  date: "12-12-2024",
  reactions: 12,
  title: "Suggesties voor beginner?",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  profile: "img/profile.png",
  name: "Sara Leekman",
  link: "#",
}

export const QACard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between w-[525px] gap-5 p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1">
      <img src={context.image} alt="event" className="h-[280px] object-cover object-center rounded"/>
      <div className="flex flex-row items-center gap-2 text-extra">
        <Calendar className="fill-extra h-5" />
        <p className="text-sm">{context.date}</p>
        <p>|</p>
        <Chat className="fill-extra h-5" />
        <p className="text-sm">{context.reactions} Reacties</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-primary">{context.title}</h2>
        <p className="text-extra line-clamp-3 lg:line-clamp-6">
          {context.description}
        </p>
      </div>
      <hr className="border-font1/20" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
        <div className="flex flex-row items-center gap-5">
          <img src={context.profile} alt={context.name} className="rounded-full h-[44px]"/>
          <p className="text-extra font-semibold">{context.name}</p>
        </div>
        <Link href={context.link} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}