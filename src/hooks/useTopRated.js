import { addmovie } from '../utils/movieslice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../utils/constants'
import { addbackground } from '../utils/gptslice'

// this is used in browse
function useTopRated() {
  const dispatch = useDispatch()

  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  useEffect(() => {
    async function tmdb() {
      try {
        const raw = await fetch(url, options)

        if (!raw) return
        const data = await raw.json()
        if (!data) return

        dispatch(addmovie({ toprated: data.results }))
      } catch (error) {
        console.error('Error fetching toprated data:', error)
      }
    }
    tmdb()
  }, [])
}

export default useTopRated
