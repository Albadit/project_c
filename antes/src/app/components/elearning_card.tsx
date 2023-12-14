import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type ElearingItems = {
  id: number;
  image: string;
  title: string;
  user_chapters: number;
  max_chapters: number;
  url: string;
}

type Props = {
  elearing: ElearingItems;
}

// const context = {
//   image: "img/e_learing.png",
//   props.elearing: "H1. Introduction.",
//   user_chapters: 8,
//   max_chapters: 11,
//   link: "#",
// }

export const ELearingCard = (props: Props) => {
  
  const progression = Math.ceil(100 / props.elearing.max_chapters * props.elearing.user_chapters)
  const progressBarStyle = { width: `${progression}%` };

  return (
    <div className="flex flex-col justify-between w-full md:w-[525px] gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={props.elearing.image} alt="event" className="h-[280px] object-cover object-center rounded" />
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-xl font-semibold text-primary">{props.elearing.title}</h2>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full bg-extra/30 h-3 rounded">
          <div style={progressBarStyle} className='h-full bg-secondary rounded'></div>
        </div>
        <div className="flex felx-row justify-between gap-5">
          <p>{progression} %</p>
          <p>les {props.elearing.user_chapters} van {props.elearing.max_chapters}</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
        <Link href={props.elearing.url} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Ga veder <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}
