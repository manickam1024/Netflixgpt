import { useState } from 'react'

const Videobackground = ({ tkey }) => {
  const [loaded, setLoaded] = useState(false)

  if (!tkey) return null

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Optional: Show a loading spinner or black background */}

      <iframe
        className={`z-0 w-full h-screen scale-125 transition-opacity duration-500
        }`}
        src={`https://www.youtube.com/embed/${tkey}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default Videobackground
