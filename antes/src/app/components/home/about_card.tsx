import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

type Props = {
    aboutus: context;
}

type context = {
    id: number,
    image: string,
    title: string,
    description: string,
    link: string,
}

export const AboutCard = (props: Props) => {
    return (
        <div className="flex flex-col shadow-2xl justify-between w-full md:w-[525px] gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
            {/* <img src={context.image} alt="event" className="h-[280px] object-cover object-center rounded" /> */}
            <div className="flex flex-col justify-center gap-3">
                <h2 className="text-xl font-semibold text-primary">{props.aboutus.title}</h2>
            </div>
            <div className="flex flex-col w-full gap-5">
                <h2>{props.aboutus.description}</h2>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center justify-end gap-5">
                <Link href={props.aboutus.link} className="flex flex-row items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm">
                    Ga verder <ArrowForwardRounded className="fill-font2 h-5" />
                </Link>
            </div>
        </div>
    )
}