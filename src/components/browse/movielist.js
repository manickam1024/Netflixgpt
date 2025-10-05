import { useDispatch } from 'react-redux'
import { addbackground } from '../../utils/gptslice'

const Movielist = ({ subdata, title }) => {
  const dispatch = useDispatch()
  return (
    <div className="my-16 ml-20 overflow-x-scroll scrollbar-hide">
      <div>
        {' '}
        <h2 className="text-white relative ml-3 -top-3 font-bold mt-2 pb-5">
          {title}
        </h2>
      </div>
      <div className="flex gap-4 w-max ">
        {subdata?.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0"
            onClick={() => dispatch(addbackground(movie))}
          >
            <img
              src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
              alt=""
              className="h-44 w-auto rounded"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Movielist
