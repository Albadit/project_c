import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

const context = {
  title: "Vind jouw talent",
  description:
    "Wat je doet, doet ertoe binnen Parnassia Groep. Elke dag zetten ruim 13.500 collega's zich in voor mensen met psychische en/of verslavingsproblemen. Vol passie en deskundigheid. Om dagelijks het verschil voor onze cliënten te maken. Help je mee?",
  link: [
    {
      url: "#",
      title: "Bekijk de vacatures",
      link_text: "Antes vacaturebank",
      font_color: "text-font2",
      background_color: "bg-callToAction",
      fill_color: "fill-font2",
    },
    {
      url: "#",
      title: "Kom meer te weten over Antes",
      link_text: "Stel hier je vragen",
      font_color: "text-font2",
      background_color: "bg-callToAction",
      fill_color: "fill-font2",
    },
    {
      url: "#",
      title: "Neem een kijk bij een Antes in jouw buurt",
      link_text: "Plan een afspraak",
      font_color: "text-callToAction",
      background_color: "bg-font2",
      fill_color: "fill-callToAction",
    },
  ],
};

export default function Info() {
  return (
    <div className="flex justify-between flex-col min-h-[600px] lg:w-full w-[525px] gap-10 p-7 rounded-lg bg-info bg-no-repeat bg-cover bg-center shadow-cbs text-base font-font1 text-font2">
      <div className="flex flex-col gap-5 max-w-[450px]">
        <h2 className="lg:text-6xl text-5xl font-semibold">{context.title}</h2>
        <h2 className="text-xl font-light font-font2">{context.description}</h2>
      </div>
      <div className="flex flex-warp lg:flex-row flex-col gap-5 w-full min-h-[175px]">
        {context.link.map((item) => (
          <Link
            href={item.url}
            className={`flex flex-col items-start justify-between w-full gap-2 px-4 py-3 rounded-lg font-semibold ${item.background_color} ${item.font_color}`}
          >
            <p className="lg:text-3xl text-2xl">{item.title}</p>
            <p className="flex flex-row items-center justify-center gap-2 font-semibold text-sm">
              {item.link_text}{" "}
              <ArrowForwardRounded className={`h-5 ${item.fill_color}`} />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
