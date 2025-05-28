import { addmovie } from '../utils/movieslice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constants'

// this is used in browse
function useSeries() {
  const dispatch = useDispatch()

  const url =
    'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(url, options)

        if (!raw) return
        const data = await raw.json()
        if (!data) return

        dispatch(addmovie({ series: data.results }))
      } catch (error) {
        console.error('Error fetching series:', error)
      }
    }
    tmdb()
  }, [])
}

export default useSeries
