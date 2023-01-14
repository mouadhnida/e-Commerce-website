"use client";

import Link from "next/link";
import { useState } from "react";
import { TbCopyright } from "react-icons/tb";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="relative min-h-[30rem] w-full bg-stone-700 pb-6 text-slate-50">
      <div className=" relative flex min-h-[25rem] w-full flex-wrap justify-between py-20 pr-6 pl-16 m-md:px-6 m-xl:h-[35rem]">
        <div className="w-44 leading-10 m-sm:w-24">
          <h1 className="font-semibold">Shop</h1>
          <ul className=" text-[15px] text-gray-200">
            <Link href={"/"}>
              <li>Bags</li>
            </Link>
            <Link href={"/"}>
              <li>Tees</li>
            </Link>
            <Link href={"/"}>
              <li>Objects</li>
            </Link>
          </ul>
        </div>
        <div className="w-44 leading-10 m-sm:w-24">
          <h1 className="font-semibold">Company</h1>
          <ul className=" text-[15px] text-gray-200">
            <Link href={"/"}>
              <li>Who we are</li>
            </Link>
            <Link href={"/"}>
              <li>Terms & Conditions</li>
            </Link>
            <Link href={"/"}>
              <li>Privacy</li>
            </Link>
          </ul>
        </div>
        <div className="w-44 leading-10 m-md:hidden">
          <h1 className="font-semibold">Account</h1>
          <ul className=" text-[15px] text-gray-200">
            <Link href={"/"}>
              <li>Manage Account</li>
            </Link>
            <Link href={"/"}>
              <li>Returns & Exchanges</li>
            </Link>
            <Link href={"/"}>
              <li>Log Out</li>
            </Link>
          </ul>
        </div>
        <div className="w-44 leading-10 m-sm:w-24">
          <h1 className="font-semibold">Connect</h1>
          <ul className=" text-[15px] text-gray-200">
            <Link href={"/"}>
              <li>Contact Us</li>
            </Link>
            <Link href={"/"}>
              <li>Twitter</li>
            </Link>
            <Link href={"/"}>
              <li>Instagram</li>
            </Link>
          </ul>
        </div>
        <div className="leading-10">
          <h1 className="font-semibold">Sign up for our newsletter</h1>
          <p className="text-[15px]">
            The latest deals and savings, sent to your inbox weekly.
          </p>
          <form onSubmit={handleSubmit.bind(this)}>
            <input
              type="text"
              value={email}
              onChange={handleChange.bind(this)}
              className="mr-3 w-72 rounded-lg pl-2 text-black m-sm:mb-3"
              placeholder="Enter your email adress"
            />
            <input
              type="submit"
              value="Sign up"
              className="w-20 cursor-pointer rounded-lg bg-beige text-stone-700"
            />
          </form>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex w-11/12 justify-center">
          <div className=" h-[0.5px] w-11/12 bg-white "></div>
        </div>
        <div className="flex pt-6 pl-16 text-sm text-white opacity-80">
          Copyright{" "}
          <span className="relative top-0.5 px-1">
            <TbCopyright />
          </span>{" "}
          2023 Clothing Company Inc.
        </div>
      </div>
    </div>
  );
}
