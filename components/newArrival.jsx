"use client";

import tee from "../public/tee.jpeg";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewArrival() {
  const [newArrival, setNewArrival] = useState([]);
  useEffect(() => {
    async function fetchNewArrival() {
      const data = await axios.get("/api/newArrival");
      const items = data.data.data;
      setNewArrival(items.slice(0, 4));
    }
    fetchNewArrival();
  }, []);

  return (
    <div className="relative z-10 h-[600px] bg-white px-6 pt-24 pb-20 m-sm:px-2 m-sm:pt-0">
      <div className="flex items-center justify-between pb-7">
        <div className="text-3xl font-semibold m-sm:text-2xl">
          Trending Products
        </div>
        <Link href={"/"}>
          <div className=" group/arrow float-right flex items-center pr-5 font-semibold text-stone-600 m-sm:pr-1">
            See everything
            <span className="relative left-0 pt-1 transition-all duration-300 ease-in-out group-hover/arrow:left-1 ">
              <BsArrowRightShort />
            </span>
          </div>
        </Link>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-24 m-2xl:gap-7">
        {newArrival.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              <div className="group h-[30rem] w-80 rounded-lg border border-gray-300">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={320}
                  height={280}
                  className=" h-64 rounded-t-lg rounded-tr-lg group-hover:opacity-75"
                ></Image>
                <div className=" w-full pl-6">
                  <h1 className="py-3 text-lg">{item.name}</h1>
                  <p className=" text-base text-gray-500">{item.description}</p>
                  <p className=" font-[italic] text-gray-500 pt-3">{item.color.length > 1 ? `${item.color.length} colors` : item.color}</p>
                    
                  <h2 className="text-lg">{item.price}$</h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
