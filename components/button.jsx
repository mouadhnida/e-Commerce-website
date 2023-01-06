
export default function Button(props) {
  return (
    <a
          href="#_"
          className="group relative bottom-16 text-xl m-md:bottom-20"
        >
          <span className="relative z-10 flex h-16 w-52  items-center justify-center overflow-hidden rounded-lg border-2 border-stone-700 px-5 py-3 text-center font-medium leading-tight text-stone-700 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-stone-50 px-5 py-3"></span>
            <span className="ease absolute top-10 left-0 -ml-2 h-56 w-56 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-stone-700 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative"><div>{props.name}</div></span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-16 w-full rounded-lg bg-stone-700 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
  )
}
