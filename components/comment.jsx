import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb"


export default function Comment() {
  return (
    <div className="bg-white relative">
      <div className=" w-full justify-around flex">
        <div>
          <div className="">
            <TbTruckDelivery/>
            <h1 className="">Free shipping</h1>
            <p className="">Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
          </div>
          <div className="">
            <i class="fa-regular fa-hand-holding-dollar"></i>
            <h1 className="">100% Money back</h1>
            <p className="">Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
          </div>
          <div className="">
            <i class="fa-regular fa-comments"></i>
            <h1 className="">Online support 24/7</h1>
            <p className="">Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
