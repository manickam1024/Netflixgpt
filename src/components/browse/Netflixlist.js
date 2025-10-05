// src/components/Netflixlist.js

import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const Netflixlist = ({ subdata, title, length }) => {
  if (!subdata || subdata.length === 0) return null

  return (
    <div className="my-6 h-32 w-72">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

      {/* Scrollable Row */}
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {subdata.map((movie, index) => {
          // Avoid empty or broken posters
          if (!movie.poster_path) return null

          return (
            <div
              key={movie.id || index}
              className="min-w-[200px] cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-white mt-2 truncate">{movie.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Netflixlist
