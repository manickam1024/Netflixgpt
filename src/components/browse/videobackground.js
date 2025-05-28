const Videobackground = (props) => {
  if (!props.tkey) return null // Don't render if no trailer key

  return (
    <iframe
      className="z-0 w-full h-screen scale-125"
      src={`https://www.youtube.com/embed/${props.tkey}?autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export default Videobackground
