import { addmovie } from '../utils/movieslice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constants'

// this is used in browse
function useUpcoming() {
  const dispatch = useDispatch()

  const url =
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(url, options)

        if (!raw) return
        const data = await raw.json()
        if (!data) return

        dispatch(addmovie({ upcoming: data.results }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    tmdb()
  }, [])
}

export default useUpcoming
