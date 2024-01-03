import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/components/icons/arrow_right";

export type ElearningProps = {
  id: string
  title: string
  description: string
  image: string
  progression: {
    totalLessons: number
    userProgress: number
    percent: number
  }
}

type Props = {
  elearning: ElearningProps;
}

export const ELearningCard = (props: Props) => {
  const progressBarStyle = { width: `${props.elearning.progression.percent}%` };

  return (
    <div className="flex flex-col justify-between w-full max-w-[525px] gap-5 p-7 rounded-lg bg-section shadow-cbs text-base font-font1 text-font1">
      <img src={props.elearning.image} alt="elearning" className="h-[280px] object-cover object-center rounded"/>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-xl font-semibold text-primary">{props.elearning.title}</h2>
      </div>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full bg-extra/30 h-3 rounded">
          <div style={progressBarStyle} className='h-full bg-secondary rounded'></div>
        </div>
        <div className="flex felx-row justify-between gap-5">
          <p>{props.elearning.progression.percent} %</p>
          <p>les {props.elearning.progression.userProgress} van {props.elearning.progression.totalLessons}</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
        <Link href={`elearning/${props.elearning.id}`} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
          Ga veder <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  )
}
