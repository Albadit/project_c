"use client"
import styles from "@/css/utils.module.css";
import Link from 'next/link';
import React, { useState } from "react";

const Submenu = ({
  subitem1,
  subitem2,
}: {
  subitem1?: subItem;
  subitem2?: subItem;
}) => {
  return (
    <div className="submenu">
      <ul>
        <li><Link href={subitem1?.path ?? ""}>&nbsp;{subitem1?.label ?? ""}</Link></li>
        <li><Link href={subitem2?.path ?? ""}>&nbsp;{subitem2?.label ?? ""}</Link></li>
      </ul>
    </div>
  )
}

interface subItem {
  label: string;
  path: string;
}
interface Item {
  label: string;
  path: string;
}
const DropdownMenu = ({
  showSubmenu,
  handleMouseEnter,
  handleMouseLeave,
  item1,
  item2,
  item3,
  item4,
  subitem3,
  subitem4,
}: {
  showSubmenu: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  item1?: Item;
  item2?: Item;
  item3?: Item;
  item4?: Item;
  subitem3?: subItem;
  subitem4?: subItem;
}) => {
  return (
    <div
      className="dropdown-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li><Link href={item1?.path ?? ""}>{item1?.label}</Link></li>
        {item2 && (<li><Link href={item2?.path ?? ""}>{item2?.label}</Link></li>)}
        {item3 && (<li><Link href={item3?.path ?? ""}>{item3?.label}</Link></li>)}
        {item4 && (<li><Link href={item4?.path ?? ""}>{item4?.label}</Link></li>)}
        <li>{showSubmenu && <Submenu subitem1={subitem3} subitem2={subitem4} />}</li>
      </ul>
    </div>
  );
};

function App() {
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter1 = () => {
    setDropdownVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownVisible1(false);
    setShowSubmenu(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
    setShowSubmenu(false);
  };

  const handleMouseEnter3 = () => {
    setDropdownVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownVisible3(false);
    setShowSubmenu(false);
  };

  const handleMouseEnterMenu4 = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeaveMenu4 = () => {
    setShowSubmenu(false);
  };
  const item1: Item = {
    label: "> Medezeggenschap",
    path: "/about/board/codetermination",
  };

  const item2: Item = {
    label: "> Boumanfonds",
    path: "/about/annual_figures/bouman_fonds",
  };
  const item3: Item = {
    label: "> Rookvrije organisatie",
    path: "/about/missie_kern_waarden/non_smoking",
  };
  const item4: Item = {
    label: "> Corona",
    path: "/about/missie_kern_waarden/corona",
  };
  const Item5: Item = {
    label: " > Cliëntenraad",
    path: "/about/board/codetermination/client_council",
  };
  const Item6: Item = {
    label: " > Familieraad",
    path: "/about/board/codetermination/family_council",
  };
  const subItem3: subItem = {
    label: " > Cliëntenraad",
    path: "/about/board/codetermination/client_council",
  };
  const subItem4: subItem = {
    label: " > Familieraad",
    path: "/about/board/codetermination/family_council",
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className={styles.sidebar}>
        <Link href="/about">
          <div>Over Ons</div>
        </Link>
        <div
          className="menu hidden md:flex"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
        <Link href='/about/board'>Bestuur </Link>
        {isDropdownVisible1 && (
          <DropdownMenu
            showSubmenu={showSubmenu}
            handleMouseEnter={handleMouseEnterMenu4}
            handleMouseLeave={handleMouseLeaveMenu4}
            item1={item1}
            subitem3={subItem3}
            subitem4={subItem4}
          />
        )}
      </div>
      <div
        className="menu flex md:hidden"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <Link href='/about/board'>Bestuur </Link>
        {isDropdownVisible1 && (
          <DropdownMenu
            showSubmenu={showSubmenu}
            handleMouseEnter={handleMouseEnterMenu4}
            handleMouseLeave={handleMouseLeaveMenu4}
            item1={item1}
            item2={Item5}
            item3={Item6}
          />
        )}
      </div>
      <div
        className="menu"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <Link href='/about/annual_figures'>Jaarcijfers</Link>
        {isDropdownVisible2 && (
          <DropdownMenu
            showSubmenu={showSubmenu}
            handleMouseEnter={() => { }}
            handleMouseLeave={() => { }}
            item1={item2}
          />
        )}
      </div>
      <div
        className="menu"
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
          <Link href='/about/missie_kern_waarden'>Missie en kernwaarden</Link>
          {isDropdownVisible3 && (
            <DropdownMenu
              showSubmenu={showSubmenu}
              handleMouseEnter={() => { }}
              handleMouseLeave={() => { }}
              item1={item3}
              item2={item4}
            />
          )}
        </div>
        <Link href="/about/organogram">
          <div>Organogram</div>
        </Link>
      </div>
    </div>
  );
}

export default App;
