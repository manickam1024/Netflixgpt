import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { languages } from '../../utils/constants'
import OpenAI from 'openai'
import { addmovie, addposter } from '../../utils/gptslice'
import { endpoint, token } from '../../utils/constants'
import { options } from '../../utils/constants'
import { clearposter } from '../../utils/gptslice'
import Netflixlist from './netflixlist'
export const Gpt = () => {
  const lang = useSelector((store) => store.gpt.lang)
  const movielist = useSelector((store) => store.gpt.movielist)
  const posterlist = useSelector((store) => store.gpt.poster)
  const inputRef = useRef(null)
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
            content: `give me a movie recommendation for ${text} in a comma separated , just 35 unique movie names, no other text. dont return the content in string`,
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
      alert('Something went wrong while getting movie recommendations.')
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
        poster.push(movieData.results)
      }
      dispatch(addposter(poster))
    }

    fetchMovies()
  }, [movielist])

  return (
    <div>
      <div
        className="overflow-x-hidden h-screen w-screen absolute scrollbar-hide   "
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg')`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="w-screen h-full bg-black opacity-65  "> </div>
        {}
        {posterlist[0]?.map((item, index) => (
          <div
            className="w-screen h-full bg-black opacity-65"
            key={index}
          ></div>
        ))}

        <div>
          {' '}
          <div
            className="absolute right-0 left-0 mx-auto top-0 my-48 flex"
            style={{ width: '600px' }}
          >
            <input
              ref={inputRef}
              type="text"
              className="h-10 opacity-80 rounded-xl p-5"
              style={{ width: '600px' }}
              placeholder={search}
            />
            <div
              onClick={results}
              className="p-2 w-max bg-red-600 text-white text-l font-bold rounded-md mr-10 hover:cursor-pointer ml-4 h-max"
            >
              {btn}
            </div>

            <div
              className="absolute top-20 text-white text-xl font-bold "
              style={{ width: '1150px', left: '-300px' }}
            >
              {posterlist[0] != null &&
                posterlist[0].filter(Boolean).map((movie, index) => {
                  return (
                    movie.length < 5 && (
                      <Netflixlist
                        subdata={movie}
                        title={movie[0]?.title}
                        key={index}
                        length={movie.length}
                      />
                    )
                  )
                })}
            </div>
            <div className="absolute my-44 text-3xl font-bold text-white left-52">
              {posterlist[0] == null && click && 'loading'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
