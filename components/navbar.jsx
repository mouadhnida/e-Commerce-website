"use client";

import Script from "next/script";
import Link from "next/link";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-between bg-stone-700 px-20 font-pacifico text-xl text-white m-sm:h-12 m-lg:px-10 shadow-lg">
      <Script
        src="https://kit.fontawesome.com/0f3f34a956.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      ></Script>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
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
        <span className="relative h-0.5 w-8 rounded bg-white transition duration-300 ease-in-out peer-checked:right-2 peer-checked:opacity-0 peer-hover:bg-beige"></span>
        <span className="h-0.5 w-8 rounded bg-white transition duration-300 ease-in-out peer-checked:translate-y-[-0.6rem] peer-checked:rotate-[125deg] peer-hover:bg-beige"></span>
      </label>
      <ul
        className={`z-50 flex w-4/12 justify-between  transition-[right] duration-300 ease-in-out m-sm:relative m-sm:!top-12 m-lg:absolute m-lg:top-16 m-lg:h-80 m-lg:min-w-[14rem] m-lg:max-w-[15rem] m-lg:flex-col m-lg:items-center  m-lg:justify-around m-lg:bg-stone-700 m-xl:w-5/12 ${
          open === false ? "right-[-40rem]" : "right-0"
        }`}
      >
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
      <span
        className={`absolute top-[25rem] m-sm:top-[24rem] z-[999] hidden h-[1px] w-32 bg-white transition-[right] duration-300 ease-in-out m-lg:block ${
          open === false ? "right-[-40rem]" : "right-12"
        }`}
      ></span>
      <ul
        className={`z-50 flex w-32 items-center justify-between transition-[right] duration-300 ease-in-out m-sm:relative m-sm:!top-[23rem] m-lg:absolute m-lg:top-96 m-lg:h-40  m-lg:min-w-[14rem] m-lg:max-w-[15rem] m-lg:w-5/12 m-lg:flex-col  m-lg:items-center m-lg:justify-around m-lg:bg-stone-700 ${
          open === false ? "right-[-40rem]" : "right-0"
        }`}
      >
        <div>
          <i className="fa-regular fa-magnifying-glass hover:cursor-pointer hover:text-beige m-lg:!hidden"></i>
        </div>
        <Link href="/login">
          <i className="fa-solid fa-user hover:text-beige m-lg:!hidden"></i>
          <span className="hidden m-lg:block m-lg:hover:text-beige">
            <i className="fa-solid fa-user pr-1.5 hover:text-beige"></i>Log In
          </span>
        </Link>
        <li className="hover:cursor-pointer">
          <i className="fa-solid fa-cart-shopping shopping-car hover:text-beige m-lg:!hidden"></i>
          <span className="hidden m-lg:block m-lg:hover:text-beige">
            <i className="fa-solid fa-cart-shopping shopping-car pr-1.5 hover:text-beige"></i>
            Cart
          </span>
        </li>
      </ul>
    </div>
  );
}
