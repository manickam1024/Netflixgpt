// src/components/Netflixlist.js

import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'

const Netflixlist = ({ data }) => {
  if (!data || data.length === 0) return null
  console.log(data)
  return (
    <div className="my-6">
      <div className="min-w-[100px] cursor-pointer hover:scale-110 transition-transform duration-300">
        <img
          src={`${IMAGE_BASE_URL}${data.poster_path}`}
          alt={data.title}
          className="rounded-lg shadow-lg mr-8"
        />
        <p className="text-sm text-white mt-2 truncate">{data.title}</p>
      </div>
    </div>
  )
}

export default Netflixlist
