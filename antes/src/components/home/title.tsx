import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/components/icons/arrow_right";

const context = {
  title: "Hoe kunnen wij je helpen?",
  link_text: "Meer informatie",
  link: "/about",
}

export default function Title() {
  return (
    <section className="flex flex-col justify-center items-center gap-12 w-full min-h-[500px] text-base font-font2 text-font1 bg-title bg-no-repeat bg-cover bg-center px-2">
      <h1 className="text-font2 lg:text-8xl text-center text-6xl">
        {context.title}
      </h1>
      <Link href={context.link} className="flex flex-row items-center justify-center gap-2 px-6 py-3 rounded-lg bg-section text-font1 text-xl">
        {context.link_text} <ArrowForwardRounded className="fill-font1 h-6" />
      </Link>
    </section>
  )
}
