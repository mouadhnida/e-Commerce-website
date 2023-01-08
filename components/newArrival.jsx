import tee from "../public/tee.jpeg"
import { BsArrowRightShort } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"

export default function NewArrival() {
  return (
    <div className="h-[600px] z-[999] bg-white relative pt-24 px-6 pb-20">
        <div className="flex justify-between pb-7">
            <div className="text-3xl font-semibold">Trending Products</div>
            <Link href={"/"}><div className=" font-semibold text-stone-600 float-right flex items-center pr-5 group/arrow" >See everything <span className="relative group-hover/arrow:left-1 left-0 transition-all duration-300 ease-in-out pt-1 "><BsArrowRightShort/></span></div></Link>
        </div>
        <div className="flex flex-wrap gap-8">
            <Link href={"/"}><div className="w-96 h-[32rem] rounded-lg border border-gray-300 group">
                <Image src={tee} alt="tee" className=" h-80 rounded-t-lg rounded-tr-lg group-hover:opacity-75"></Image>
                <div className=" w-full pl-6">
                    <h1 className="text-lg py-3">Basic Tee</h1>
                    <p className=" text-base text-gray-500">Look like a visionary CEO and wear the same black t-shirt every day.</p>
                    <p className=" font-[italic] text-gray-500 pt-3">Brown</p>
                    <h2 className="text-lg">$32</h2>
                </div>
            </div></Link>
            <Link href={"/"}><div className="w-96 h-[32rem] rounded-lg border border-gray-300 group">
                <Image src={tee} alt="tee" className="h-80 rounded-t-lg rounded-tr-lg group-hover:opacity-75"></Image>
                <div className=" w-full pl-6">
                    <h1 className="text-lg py-3">Basic Tee</h1>
                    <p className=" text-base text-gray-500">Look like a visionary CEO and wear the same black t-shirt every day.</p>
                    <p className=" font-[italic] text-gray-500 pt-3">Brown</p>
                    <h2 className="text-lg">$32</h2>
                </div>                
            </div></Link>
            <Link href={"/"}><div className="w-96 h-[32rem] rounded-lg border border-gray-300 group">
                <Image src={tee} alt="tee" className="h-80 rounded-t-lg rounded-tr-lg group-hover:opacity-75"></Image>
                <div className=" w-full pl-6">
                    <h1 className="text-lg py-3">Basic Tee</h1>
                    <p className=" text-base text-gray-500">Look like a visionary CEO and wear the same black t-shirt every day.</p>
                    <p className=" font-[italic] text-gray-500 pt-3">Brown</p>
                    <h2 className="text-lg">$32</h2>
                </div>                
            </div></Link>
            <Link href={"/"}><div className="w-96 h-[32rem] rounded-lg border border-gray-300 group">
                <Image src={tee} alt="tee" className="h-80 rounded-t-lg rounded-tr-lg group-hover:opacity-75"></Image>
                <div className=" w-full pl-6">
                    <h1 className="text-lg py-3">Basic Tee</h1>
                    <p className=" text-base text-gray-500">Look like a visionary CEO and wear the same black t-shirt every day.</p>
                    <p className=" font-[italic] text-gray-500 pt-3">Brown</p>
                    <h2 className="text-lg">$32</h2>
                </div>                
            </div></Link>
        </div>
    </div>
  )
}
