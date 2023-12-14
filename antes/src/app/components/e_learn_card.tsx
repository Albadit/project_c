import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type Props = {
    elearing: object;
}

const context = {
    image: "img/E-Learning_picture.png",
    title: "H1. Introduction.",
    learing: {
        user_chapters: 8,
        max_chapters: 11
    },
    link: "#",
}

const progression = Math.ceil(100 / context.learing.max_chapters * context.learing.user_chapters)
const progressBarStyle = { width: `${progression}%` };

export const ELearingCard = (props: Props) => {
    return (
        <div className="flex flex-col shadow-2xl justify-between w-full md:w-[525px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
            <img src={context.image} alt="event" className="h-[280px] object-cover object-center rounded" />
            <div className="flex flex-col justify-center gap-3">
                <h2 className="text-xl font-semibold text-primary">{context.title}</h2>
            </div>
            <div className="flex flex-col w-full gap-5">
                <div className="w-full bg-extra/30 h-3 rounded">
                    <div style={progressBarStyle} className='h-full bg-secondary rounded'></div>
                </div>
                <div className="flex text-sm 2xl:text-lg flex-row justify-between gap-5">
                    <p>{progression} %</p>
                    <p>les {context.learing.user_chapters} van {context.learing.max_chapters}</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
                <Link href={context.link} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
                    Ga verder <ArrowForwardRounded className="fill-font2 h-5" />
                </Link>
            </div>
        </div>
    )
}