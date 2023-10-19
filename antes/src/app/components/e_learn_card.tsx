import React from "react"
import Link from "next/link"

type Props = {
    elearn: object;
}

const context = {
    image: "/E-Learning_picture.png",
    title: "H1. Introduction.",
    progression: "50%",
    currentlesson: "8",
    maxlesson: "10",
    link: "#",
}

export const ELearnCard = (props: Props) => {
    return (
        <>
            <div className='flex flex-col w-full gap-10 my-12'>
                <div className='flex flex-wrap x1:justify-between justify-center gap-10'>
                    <div className="box-border h-[400px] w-[500px] p-4 shadow-2xl mb-8 shadow-2x1">
                        <div>
                            <img className='mt-2'
                                src={context.image}
                                alt="elearn">
                            </img>
                            <div className="text-primary mb-3 mt-3 text-font1 text-xl font-semibold">{context.title}</div>
                        </div>
                        <div className='mb-8'>
                            <div className='bg-[#ECECEC] relative top-5 h-[10px] w-full rounded-2xl'>
                                <div className='bg-secondary absolute top-0 left-0 flex h-[10px] w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-[#FAFAFA]'>
                                </div>
                            </div>
                            <div className="mt-7 text-xs font-semibold text-[#6b6969]">{context.progression}</div>
                            <div className="mt--6 text-right text-xs font-semibold text-[#6b6969]">les {context.currentlesson} van {context.maxlesson}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}