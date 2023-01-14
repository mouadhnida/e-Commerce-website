import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch('http://localhost:3000/api/items');

  if (!res.ok) {

    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function NewArrival() {
  const data = await getData();
  let items = data.data;
  items = items.slice(0,4)

  return (
    <div className="relative  h-auto bg-slate-50 px-6 py-24 m-sm:px-2 m-sm:pt-0">
      <div className="flex items-center justify-between pb-">
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
      <ul className="flex flex-wrap items-center justify-center gap-24 m-2xl:gap-7 relative top-10">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              <div className="group h-[30rem] w-80 rounded-lg border border-grey-300 bg-white">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={320}
                  height={280}
                  className=" h-64 rounded-t-lg rounded-tr-lg group-hover:opacity-75"
                ></Image>
                <div className=" w-full pl-6">
                  <h1 className="py-3 text-lg">{item.name}</h1>
                  <p className=" text-base text-gray-600">{item.description}</p>
                  <p className=" font-[italic] text-gray-600 pt-3">{item.color.length > 1 ? `${item.color.length} colors` : item.color}</p>
                    
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



