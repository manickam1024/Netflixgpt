import { useSelector } from 'react-redux'
import Movielist from './movielist'

const Secondarycontainer = () => {
  const data = useSelector((s) => s.movieslice.items)

  if (!data) return null
  const subdata = data[0]?.movies
  const toprated = data[1]?.toprated
  const upcoming = data[2]?.upcoming
  const series = data[3]?.series

  const title = 'NOW PLAYING'
  return (
    <div className="-mt-40">
      {' '}
      <Movielist subdata={subdata} title={title} />
      <Movielist subdata={toprated} title={'TOP RATED'} />
      <Movielist subdata={upcoming} title={'UPCOMING'} />
      <Movielist subdata={series} title={'SERIES'} />
    </div>
  )
}

export default Secondarycontainer
