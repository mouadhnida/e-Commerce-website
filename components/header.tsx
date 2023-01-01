import Image from "next/image";
import headerImage from "../public/header-image.jpg";
import {HiOutlineShoppingBag} from "react-icons/hi2"

export default function () {
  return (
    <div>
      <div className="absolute top-40 z-50 flex h-96 w-full flex-col items-center justify-around text-white">
        <div className="flex h-1/3 flex-col items-center justify-around">
          <h1 className="h-16 text-5xl font-bold">Fashion & Clothing Store</h1>
          <h3 className="text-2xl">Extraordinary Collections</h3>
        </div>
        <a
          href="#_"
          className="group relative bottom-16 text-xl"
        >
          <span className="relative z-10 flex h-16 w-52  items-center justify-center overflow-hidden rounded-lg border-2 border-stone-700 px-5 py-3 text-center font-medium leading-tight text-stone-700 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-stone-50 px-5 py-3"></span>
            <span className="ease absolute top-10 left-0 -ml-2 h-56 w-56 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-stone-700 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative"><span className="fa-solid fa-cart-shopping shopping-car"></span> Shop Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-16 w-full rounded-lg bg-stone-700 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <Image
        src={headerImage}
        alt="header image"
        className="w-full brightness-50"
      />
    </div>
  );
}
