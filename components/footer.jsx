'use client'

import Link from "next/link";
import { useState } from "react";
import {TbCopyright} from "react-icons/tb"



export default function Footer() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);

    }
  return (
    <div className="relative w-full bg-stone-700 min-h-[30rem] text-slate-50 pb-6">
        <div className=" relative flex flex-wrap w-full min-h-[25rem] m-xl:h-[35rem] justify-between pr-6 pl-16 py-20 m-md:px-6">
            <div className="leading-10 w-44 m-sm:w-24">
                <h1 className="font-semibold">Shop</h1>
                <ul className=" text-[15px] text-gray-200">      
                    <Link href={"/"}><li>Bags</li></Link>
                    <Link href={"/"}><li>Tees</li></Link>
                    <Link href={"/"}><li>Objects</li></Link>
                </ul>
            </div>
            <div className="leading-10 w-44 m-sm:w-24">
                <h1 className="font-semibold">Company</h1>
                <ul className=" text-[15px] text-gray-200">
                    <Link href={"/"}><li>Who we are</li></Link>
                    <Link href={"/"}><li>Terms & Conditions</li></Link>
                    <Link href={"/"}><li>Privacy</li></Link>
                </ul>
            </div>
            <div className="leading-10 w-44 m-md:hidden">
                <h1 className="font-semibold">Account</h1>
                <ul className=" text-[15px] text-gray-200">
                    <Link href={"/"}><li>Manage Account</li></Link>
                    <Link href={"/"}><li>Returns & Exchanges</li></Link>
                    <Link href={"/"}><li>Log Out</li></Link>
                </ul>
            </div>
            <div className="leading-10 w-44 m-sm:w-24">
                <h1 className="font-semibold">Connect</h1>
                <ul className=" text-[15px] text-gray-200">
                    <Link href={"/"}><li>Contact Us</li></Link>
                    <Link href={"/"}><li>Twitter</li></Link>
                    <Link href={"/"}><li>Instagram</li></Link>
                </ul>
            </div>
            <div className="leading-10">
                <h1 className="font-semibold">Sign up for our newsletter</h1>
                <p className="text-[15px]">The latest deals and savings, sent to your inbox weekly.</p>
                <form onSubmit={handleSubmit.bind(this)}>
                    <input type="text" value={email} onChange={handleChange.bind(this)} className="w-72 rounded-lg mr-3 text-black pl-2 m-sm:mb-3" placeholder="Enter your email adress"/>
                    <input type="submit" value="Sign up" className="w-20 bg-beige rounded-lg text-stone-700 cursor-pointer"/>
                </form>
            </div>
        </div>
        <div className="relative w-full">
            <div className="flex justify-center w-11/12">
                <div className=" w-11/12 h-[0.5px] bg-white "></div>
            </div>
            <div className="flex text-sm pt-6 pl-16 text-white opacity-80">Copyright <span className="relative top-0.5 px-1"><TbCopyright/></span> 2023 Clothing Company Inc.</div>
        </div>
    </div>
  )
}
