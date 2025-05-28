import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { options } from '../utils/constants'

function useTrailer() {
  //in my strore i have storeed the list of movies you can see in my browse component
  const select = useSelector((store) => store?.movieslice?.items)
  const [key, setKey] = useState(null)

  //here im  getting all the videos (sneekpeek,bts,teaser,trailer...etc) of that particular video
  useEffect(() => {
    // check if movie exists
    const maincontainer = select?.[0]?.movies?.[0]
    const id = maincontainer?.id
    if (!id) return

    async function dataforvideo() {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        )
        const json = await data.json()

        if (!json?.results || json.results.length === 0) {
          console.warn('No video results found')
          return
        }

        const filterdata = json.results.filter(
          (video) => video.type === 'Trailer'
        )
        // as i said there are multiple videos from tht i need filter the trailer
        const trailer = filterdata.length ? filterdata[0] : json.results[0]

        if (trailer?.key) {
          setKey(trailer.key)
        }
      } catch (error) {
        console.error('Error fetching trailer:', error)
      }
    }

    dataforvideo()
  }, [select]) // important: add 'select' as dependency

  return key
}

export default useTrailer
