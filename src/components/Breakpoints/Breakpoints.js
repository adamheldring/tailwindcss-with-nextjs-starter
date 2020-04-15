const Breakpoints = () => {
  return(
    <div className="absolute top-0 w-full flex flex-col">
      <div className="text-center p-1 bg-teal-400 sm:hidden">
        Breakpoint <i>DEFAULT</i>
      </div>
      <div className="text-center p-1 bg-blue-400 hidden sm:block md:hidden">
        Breakpoint SM
      </div>
      <div className="text-center p-1 bg-green-400 hidden md:block lg:hidden">
        Breakpoint MD
      </div>
      <div className="text-center p-1 bg-yellow-400 hidden lg:block xl:hidden">
        Breakpoint LG
      </div>
      <div className="text-center p-1 bg-red-400 hidden xl:block full:hidden">
        Breakpoint XL
      </div>
      <div className="text-center p-1 bg-pink-400 hidden full:block">
        Breakpoint FULL
      </div>
    </div>
  )
}

export default Breakpoints;