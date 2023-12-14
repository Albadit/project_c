import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type Props = {
    bestuur: context;
}

type context = {
    id: number,
    image: string,
    name: string,
    description: string,
    link: string,
}

export const Board_card = (props: Props) => {
    return (
        <div className="flex flex-col shadow-2xl justify-between w-full md:w-[350px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
            <img src={props.bestuur.image} alt="event" className="h-[300px] w-[300px] object-center rounded" />
            <div className="flex flex-col justify-center gap-3">
                <h2 className="text-xl font-semibold text-primary">{props.bestuur.name}</h2>
            </div>
            <div className="flex flex-col text-secondary w-full gap-5">
                <h2>{props.bestuur.description}</h2>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
                <Link href={props.bestuur.link} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
                    Lees verder <ArrowForwardRounded className="fill-font2 h-5" />
                </Link>
            </div>
        </div>
    )
}