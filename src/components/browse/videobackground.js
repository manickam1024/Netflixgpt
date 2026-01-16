const Videobackground = ({ tkey }) => {
  if (!tkey) return null

  const unmute = () => {
    const iframe = document.getElementById('yt-player')
    iframe.src = iframe.src.replace('mute=0', 'mute=1')
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        id="yt-player"
        className="z-0 w-full h-screen scale-125"
        src={`https://www.youtube.com/embed/${tkey}?autoplay=1&mute=0&controls=0&rel=0`}
        allow="autoplay"
        allowFullScreen
      />

      <button
        onClick={unmute}
        className="absolute bottom-20 right-10 z-10 bg-black/70 text-white px-4 py-2 rounded"
      >
        mute 🔊
      </button>
    </div>
  )
}

export default Videobackground
