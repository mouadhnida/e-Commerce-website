import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";

export default function Login() {
  return (
    <div className="h-screen !overflow-y-hidden">
      <div className="flex h-full w-full justify-between border border-blue-500 bg-stone-600 ">
        <div className="relative flex h-full w-[50%] flex-col items-center bg-white m-lg:w-full">
          <h1 className="absolute left-5 top-5 text-4xl font-semibold text-stone-700 m-sm:text-3xl">
            Shopart
            <span className="relative top-0.5 text-sm text-beige">■</span>
          </h1>
          <h1 className="relative top-24 text-4xl font-bold text-stone-600 m-sm:text-3xl">
            Sign in to your account
          </h1>
          <span className="relative top-28 h-1 w-20 bg-stone-600 "></span>
          <div className="relative top-36 flex h-10 w-48 justify-around">
            <div className="flex h-9 w-9 scale-150 items-center justify-center rounded-full border border-[#DB4437]">
              <BsGoogle fill="#DB4437" />
            </div>
            <div className="flex h-9 w-9 scale-150 items-center justify-center rounded-full border border-[#1DA1F2]">
              <BsTwitter fill="#1DA1F2" />
            </div>
            <div className="flex h-9 w-9 scale-150 items-center justify-center rounded-full border border-[#4267B2]">
              <BsFacebook fill="#4267B2" />
            </div>
          </div>
          <div className="relative top-44 z-10 flex w-96 items-center justify-between">
            <div className="relative top-1 h-1 w-32 border-t border-gray-300"></div>
            <div className="">Or continue with</div>
            <div className="relative top-1 h-1 w-32 border-t border-gray-300"></div>
          </div>
          <form className="relative top-48 flex h-64 flex-col justify-between m-sm:items-center">
            <label
              htmlFor="email"
              className="relative text-stone-600 m-sm:right-16"
            >
              Email address
            </label>
            <div className="hidden"></div>
            <input
              type="text"
              id="email"
              className="h-10 w-96 rounded-lg border border-gray-300 pl-1 focus:border-2 focus:border-stone-600 focus:outline-none m-sm:w-64"
            />
            <label
              htmlFor="password"
              className="relative text-stone-600 m-sm:right-20"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="h-10 w-96 rounded-lg border border-gray-300 pl-1 focus:border-2 focus:border-stone-600 focus:outline-none m-sm:w-64"
            />
            <div className="hidden"></div>
            <div className="my-4 flex w-96 items-center justify-between m-sm:w-64">
              <div>
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 accent-stone-600"
                  id="checkbox"
                ></input>
                <label htmlFor="checkbox" className=" text-[15px] m-sm:text-sm">
                  Remember me
                </label>
              </div>
              <Link href={"/"} className="text-[15px] underline m-sm:text-sm">
                Forget password?
              </Link>
            </div>
            <button
              type="submit"
              className="h-10 w-96 rounded-lg bg-stone-600 text-white m-sm:w-64"
            >
              Sign in
            </button>
          </form>
          <Link href={"/"} className="relative top-52 underline">
            Don't have an account ?{" "}
            <span className="text-stone-600"> Sign up</span>
          </Link>
        </div>
        <div className="h-full w-[50%] rounded-r-lg bg-stone-700 bg-blend-screen filter m-lg:hidden">
          <Image
            src={"/mountain-2.jpg"}
            alt=""
            width={1600}
            height={1200}
            className="z-10 h-full w-full rounded-r-lg bg-neutral-800 filter"
          ></Image>
        </div>
      </div>
    </div>
  );
}
