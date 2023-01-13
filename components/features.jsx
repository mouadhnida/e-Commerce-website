import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";

export default function Comment() {
  return (
    <div className=" relative flex h-[35rem] w-full items-center justify-center bg-slate-50">
      <div className=" grid h-72 grid-cols-3 grid-rows-1 gap-20">
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center">
          <i className="fa-solid fa-truck fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl">Free shipping</h1>
            <p className=" leading-7 text-gray-600">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vesti bulum mal esuada aliquet libero viverra cursus.
            </p>
          </div>
        </div>
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center">
          <i class="fa-solid fa-hand-holding-dollar fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl">100% Money back</h1>
            <p className=" leading-7 text-gray-600">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vesti bulum mal esuada aliquet libero viverra cursus.
            </p>
          </div>
        </div>
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center">
          <i class="fa-solid fa-comments font fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl">Online support 24/7</h1>
            <p className=" leading-7 text-gray-600">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vesti bulum mal esuada aliquet libero viverra cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
