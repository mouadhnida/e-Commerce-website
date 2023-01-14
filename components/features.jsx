

export default function Features() {
  return (
    <div className=" relative flex min-h-[32rem] w-full items-center justify-center bg-white">
      <div className="flex flex-wrap min-h-[18rem] justify-center gap-1">
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center h-[18.25rem]">
          <i className="fa-solid fa-truck fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl font-semibold">Free shipping</h1>
            <p className=" leading-7 text-gray-600">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vesti bulum mal esuada aliquet libero viverra cursus.
            </p>
          </div>
        </div>
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center">
          <i className="fa-solid fa-hand-holding-dollar fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl font-semibold">100% Money back</h1>
            <p className=" leading-7 text-gray-600">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vesti bulum mal esuada aliquet libero viverra cursus.
            </p>
          </div>
        </div>
        <div className="flex w-[23.75rem] flex-col  justify-around whitespace-normal text-center">
          <i className="fa-solid fa-comments font fa-5x text-stone-700"></i>
          <div className=" flex h-32 flex-col justify-between">
            <h1 className="text-2xl font-semibold">Online support 24/7</h1>
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
