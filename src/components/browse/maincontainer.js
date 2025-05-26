import useTrailer from '../../hooks/useTrailer'
import { useSelector } from 'react-redux'
import Videobackground from './videobackground'

const Maincontainer = () => {
  const key = useTrailer()
  const select = useSelector((store) => store?.movieslice?.items)
  const maincontainer = select?.[0]?.movies?.[0]
  if (!maincontainer) return null

  const { overview, original_title } = maincontainer

  return (
    <div className="relative overflow-x-hidden">
      <Videobackground tkey={key} />
      <div className="absolute z-10  bottom-0 my-44 text-sm font-bold w-1/3 pl-20 text-white opacity-80 font-light">
        {overview}
      </div>
      <div className="absolute z-10 bottom-0 my-72 pl-20 text-2xl font-bold  text-white ">
        {original_title}
      </div>
      <div className="absolute z-10 bottom-0 my-24 pl-20">
        {' '}
        <button className="bg-white w-28 h-12 mr-8 rounded-lg bg-transparent opacity-90">
          Watch now
        </button>{' '}
        <button className="bg-white  w-28 h-12 rounded-lg opacity-90 ">
          more info
        </button>
      </div>
      <div className="absolute top-0 w-full h-full  bg-gradient-to-r from-slate-950 "></div>
      <div className="absolute bottom-0 w-full h-24  bg-gradient-to-t from-slate-950 "></div>

      <div className="absolute w-full h-full bg-black"></div>
    </div>
  )
}

export default Maincontainer
