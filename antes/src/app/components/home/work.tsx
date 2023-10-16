import React from "react";
import Link from "next/link";
import ArrowForwardRounded from "@/app/components/icons/arrow_right";

const context = {
  title: "Werken bij Antes!",
  description:
    "Wij hebben jou veel te bieden. Om aan te sluiten op jouw wensen, talenten en ambities kijken we samen waar jij het beste tot je recht komt. Jij staat centraal.",
  extra:
    "Een vak met toekomst<br>Verschillende specialisaties<br>Volop uitdagingen",
  link: "#",
};

export default function Work() {
  return (
    <div className="flex justify-between lg:flex-row-reverse flex-col lg:h-[380px] lg:w-full w-[525px] gap-5 p-7 rounded-lg bg-background shadow-cbs text-base font-font1 text-font1">
      <img
        src="img/work.png"
        alt="work"
        className="lg:w-[470px] w-full lg:h-full object-cover object-center rounded"
      />
      <div className="flex flex-col justify-between items-start grow gap-5 max-w-[600px]">
        <h2 className="lg:text-4xl text-xl font-semibold text-primary">
          {context.title}
        </h2>
        <p className="text-extra line-clamp-6 lg:line-clamp-7">
          {context.description}
        </p>
        <p
          className="text-extra"
          dangerouslySetInnerHTML={{ __html: context.extra }}
        ></p>
        <Link
          href={context.link}
          className="flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-sm"
        >
          Lees meer <ArrowForwardRounded className="fill-font2 h-5" />
        </Link>
      </div>
    </div>
  );
}
