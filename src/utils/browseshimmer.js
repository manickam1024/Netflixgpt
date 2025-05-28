const Browseshimmer = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute z-10  bottom-0 my-44 text-sm font-bold w-1/3 pl-2  opacity-80 font-light"></div>
      <div className="absolute z-10 bottom-0 my-72 pl-20 text-2xl font-bold  text-white "></div>
      <div className="absolute z-10 bottom-0 my-24 pl-20">
        {' '}
        <button className="bg-white w-28 h-12 mr-8 rounded-lg bg-transparent opacity-90">
          Watch now
        </button>{' '}
        <button className="bg-white  w-28 h-12 rounded-lg opacity-90 ">
          more info
        </button>
      </div>
      <div className="absolute top-0 w-full h-full  bg-black "></div>
      <div className="absolute bottom-0 w-full h-24  bg-black "></div>

      <div className="absolute w-full h-full bg-black"></div>
    </div>
  )
}
export default Browseshimmer
