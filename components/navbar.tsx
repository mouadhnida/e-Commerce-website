'use client'

import Script from "next/script";
import Link from "next/link";
import IonIcon from '@reacticons/ionicons';
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-16 items-center justify-between bg-stone-700 px-20 font-pacifico text-xl text-white m-sm:h-12 m-lg:px-10">
    <Script
      src="https://kit.fontawesome.com/0f3f34a956.js"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    ></Script>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <h1 className="text-4xl font-extrabold hover:cursor-pointer hover:text-beige m-sm:text-3xl">
      Shopart<span className="relative top-0.5 text-sm text-beige">■</span>
    </h1>
    <label
      htmlFor="hamburger-icon"
      className=" flex h-5 w-8 flex-col items-center justify-between lg:hidden"
    >
      <input
      onClick={() => setOpen(!open)}
        type="checkbox"
        className="peer hidden"
        id="hamburger-icon"
      ></input>
      <span className="h-0.5 w-8 rounded bg-white transition duration-300 ease-in-out peer-checked:translate-y-2 peer-checked:rotate-[50deg] peer-hover:bg-beige"></span>
      <span className="h-0.5 w-8 rounded bg-white transition duration-300 ease-in-out relative peer-checked:right-2 peer-checked:opacity-0 peer-hover:bg-beige"></span>
      <span className="h-0.5 w-8 rounded bg-white transition duration-300 ease-in-out peer-checked:translate-y-[-0.6rem] peer-checked:rotate-[125deg] peer-hover:bg-beige"></span>
    </label>
    {/* <div className="text-4xl flex justify-center lg:hidden transition duration-300 ease-in-out" onClick={() => setOpen(!open)}>
    <IonIcon name={open === false ? "menu-outline" : "close-outline" } />
    </div> */}
    <ul className={`flex w-4/12 justify-between m-xl:w-5/12 border  m-lg:absolute m-lg:flex-col m-lg:items-center m-lg:justify-around m-lg:h-96 m-lg:top-16 m-lg:bg-stone-700 m-sm:!top-12 m-sm:relative  transition-[right] duration-300 ease-in-out ${open === false ? "right-[-40rem]" : "right-[-5rem]" }`}>
      <li className="hover:cursor-pointer hover:text-beige">
        <Link href="/landing">Home</Link>
      </li>
      <li className="hover:cursor-pointer hover:text-beige">
        <Link href="/">Men</Link>
      </li>
      <li className="hover:cursor-pointer hover:text-beige">
        <Link href="/">Women</Link>
      </li>
      <li className="hover:cursor-pointer hover:text-beige">
        <Link href="/">Contact</Link>
      </li>
    </ul>
    <ul className="flex w-32 items-center justify-between m-lg:hidden">
      <div>
        <i className="fa-regular fa-magnifying-glass hover:cursor-pointer hover:text-beige"></i>
      </div>
      <Link href="/login">
        <i className="fa-solid fa-user hover:text-beige"></i>
      </Link>
      <li className="hover:cursor-pointer">
        <i className="fa-solid fa-cart-shopping shopping-car hover:text-beige"></i>
      </li>
    </ul>
  </div>
);
}
