import React from 'react'

const Gpt = () => {
  return (
    <div className="absolute overflow-hidden  ">
      {' '}
      <img
        className="overflow-hidden h-screen w-screen "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
        alt=""
      />
      <div
        className="absolute right-0 left-0 mx-auto  top-0 my-48 flex"
        style={{ width: '600px' }}
      >
        <input
          type="text"
          name=""
          id=""
          className=" h-10  opacity-80 rounded-xl p-5"
          style={{ width: '600px' }}
        />
        <div className="p-2 w-max bg-red-600 text-white text-l  font-bold rounded-md  mr-10  hover:cursor-pointer  ml-4 ">
          search
        </div>
      </div>
    </div>
  )
}

export default Gpt
