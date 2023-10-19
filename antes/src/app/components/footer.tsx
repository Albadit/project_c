import React from "react";
import Link from "next/link";
import Facebook from "@/app/components/icons/facebook";
import Linkedin from "@/app/components/icons/linkedin";
import Twitter from "@/app/components/icons/twitter";
import Youtube from "@/app/components/icons/youtube";
import Instagram from "@/app/components/icons/instagram";

const iconStyle = "h-[22px] fill-extra";

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
      icon: <Facebook className={iconStyle} />,
    },
    {
      url: "https://www.linkedin.com/company/antes/",
      name: "Linkedin",
      icon: <Linkedin className={iconStyle} />,
    },
    {
      url: "https://twitter.com/AntesZorg",
      name: "Twitter",
      icon: <Twitter className={iconStyle} />,
    },
    {
      url: "",
      name: "Youtube",
      icon: <Youtube className={iconStyle} />,
    },
    {
      url: "",
      name: "Instagram",
      icon: <Instagram className={`${iconStyle}`} />,
    },
  ],
  year: new Date().getFullYear(),
}

export default function Footer() {
  return (
    <footer className="flex justify-center justify-items-center bg:background shadow-cbs">
      <nav className="flex flex-col gap-5 p-5 max-w-[1040px] w-full text-base font-font1 text-extra fill-extra">
        <p className="text-extra">&copy;{context.year} Antes</p>
        <hr className="text-extra/50" />
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <ul className="flex gap-x-10">
            {context.navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
            ))}
          </ul>
          <ul className="flex items-center gap-x-4">
            {context.socialMedia.map((item) => (
            <li key={item.name}>
              <Link href={item.url} aria-label={item.name}>
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