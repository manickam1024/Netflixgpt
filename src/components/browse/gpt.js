import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { languages } from '../../utils/constants'
import OpenAI from 'openai'
import { addmovie, addposter } from '../../utils/gptslice'
import { endpoint, token } from '../../utils/constants'
import { options } from '../../utils/constants'
import { clearposter } from '../../utils/gptslice'
import Netflixlist from './Netflixlist'
export const Gpt = () => {
  const lang = useSelector((store) => store.gpt.lang)
  const movielist = useSelector((store) => store.gpt.movielist)
  const posterlist = useSelector((store) => store.gpt.poster)
  const inputRef = useRef(null)
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w400'
  const dispatch = useDispatch()
  const [click, setclick] = useState(false)

  const modelName = 'openai/gpt-4o-mini'

  const search = lang && languages[lang]?.search
  const btn = lang && languages[lang]?.button

  async function results() {
    setclick(true)
    const text = inputRef.current?.value

    try {
      const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token,
        dangerouslyAllowBrowser: true,
      })

      const response = await client.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `give me a movie recommendation for ${text} in a comma separated , just 10 unique movie names, no other text. dont return the content in string`,
          },
        ],
        temperature: 1.0,
        top_p: 1.0,
        model: modelName,
      })
      const dataFromStringToArray =
        response?.choices?.[0]?.message.content.split(',')

      if (dataFromStringToArray) {
        dispatch(addmovie(dataFromStringToArray))
      } else {
        console.warn('No content returned from OpenAI.')
      }
    } catch (error) {
      window.alert('token expired please either change the Ai model')
      window.alert(error)
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      if (!movielist || movielist.length === 0) return

      let poster = []

      dispatch(clearposter())

      for (const movie of movielist) {
        const response = await fetch(
          'https://api.themoviedb.org/3/search/movie?query=' +
            movie +
            '&include_adult=false&language=tamil&page=1',
          options
        )
        const movieData = await response.json()
        if (!movieData) return null
        poster.push(movieData.results[0])
      }

      dispatch(addposter(poster))
    }

    fetchMovies()
  }, [movielist])

  return (
    <div className="relative overflow-x-hidden h-screen w-screen">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg')`,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-65" />

      {/* Content */}
      <div className="relative z-10">
        {/* Search Bar */}
        <div className="flex justify-center mt-48 gap-4">
          <input
            ref={inputRef}
            type="text"
            className="h-10 opacity-80 rounded-xl px-5 w-[600px]"
            placeholder={search}
          />
          <div
            onClick={results}
            className="px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:cursor-pointer"
          >
            {btn}
          </div>
        </div>

        {/* Movie Posters */}
        <div className="mt-20 px-10">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
            {posterlist[0] &&
              posterlist[0].map(
                (movie) =>
                  movie.poster_path && (
                    <div
                      key={movie.id}
                      className="min-w-[150px] cursor-pointer hover:scale-110 transition-transform duration-300"
                    >
                      <img
                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-white mt-2 truncate">
                        {movie.title}
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>

        {/* Loading */}
        {posterlist.length === 0 && click && (
          <div className="text-center text-3xl font-bold text-white mt-28">
            Loading...
          </div>
        )}
      </div>
    </div>
  )
}
