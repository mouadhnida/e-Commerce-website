import Image from "next/image";
import headerImage from "../public/header-image.jpg";
import {HiOutlineShoppingBag} from "react-icons/hi2"
import Button from "./button";

export default function Header() {
  
  return (
    <div className="relative h-[800px]">
      <div className="absolute top-40 z-40 flex h-96 w-full flex-col items-center justify-around text-white">
        <div className="flex h-1/3 flex-col items-center justify-around">
          <h1 className="h-16 text-5xl font-bold m-md:text-3xl m-md:h-1">Fashion & Clothing Store</h1>
          <h3 className="text-2xl">Extraordinary Collections</h3>
        </div>
        <Button name={<><span className="fa-solid fa-cart-shopping shopping-car"></span> Shop Now</>}/>
      </div>
      <Image
        src={headerImage}
        alt="header image"
        className="w-full brightness-50 m-md:h-[40rem] absolute"
      />
    </div>
  );
}
