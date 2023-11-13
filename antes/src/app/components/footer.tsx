import React from "react";
import Link from "next/link";
import Facebook from "@/app/components/icons/facebook";
import Linkedin from "@/app/components/icons/linkedin";
import Twitter from "@/app/components/icons/twitter";
import Youtube from "@/app/components/icons/youtube";
import Instagram from "@/app/components/icons/instagram";

const context = {
  navigation: [
    { name: "Home", url: "#" },
    { name: "Over ons ", url: "#" },
    { name: "Contact", url: "#" },
  ],
  socialMedia: [
    {
      url: "https://www.facebook.com/AntesZorg/",
      name: "Facebook",
      icon: <Facebook/>,
    },
    {
      url: "https://www.linkedin.com/company/antes/",
      name: "Linkedin",
      icon: <Linkedin/>,
    },
    {
      url: "https://twitter.com/AntesZorg",
      name: "Twitter",
      icon: <Twitter/>,
    },
    // {
    //   url: "",
    //   name: "Youtube",
    //   icon: <Youtube/>,
    // },
    // {
    //   url: "",
    //   name: "Instagram",
    //   icon: <Instagram/>,
    // },
  ],
  year: new Date().getFullYear(),
}

export default function Footer() {
  return (
    <footer className="flex justify-center justify-items-center bg-section shadow-cbs">
      <nav className="flex flex-col gap-5 p-5 max-w-[1040px] w-full text-base font-font1 text-extra fill-extra">
        <p className="text-extra sm:text-left text-center">&copy;{context.year} Antes.</p>
        <hr className="text-extra/50" />
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          <ul className="flex sm:flex-row flex-col gap-8 items-center">
            {context.navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center gap-5">
            {context.socialMedia.map((item) => (
            <li key={item.name}>
              <Link href={item.url} aria-label={item.name} className="sm:[&>*]:h-[24px] [&>*]:h-[28px] [&>*]:fill-extra">
                {item.icon}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  )
}