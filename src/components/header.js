import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { additem, removeitem } from '../utils/slice'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useSelector } from 'react-redux'
import store from '../utils/appstore'
import { changelang, toggleclick } from '../utils/gptslice'
import { languages } from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  const data = useSelector((stor) => stor.authentication.items)
  //getting data of click (true or false) hide or display the gpt component
  const d = useSelector((stor) => stor.gpt.click)
  //getting data of the selectd language after the dispatch
  const lang = useSelector((store) => store.gpt.lang)
  //if it was static i could have used languages.eng ,dynamicallly im getting the object
  // const signout = languages[lang].signout
  if (lang) {
    const search = languages[lang].signout
    console.log(search)
  }

  console.log(lang)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(additem({ email, uid, displayName, photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeitem())
        navigate('/login')
      }
    })

    // ✅ Clean up the listener
    return () => unsubscribe()
  }, [])

  function handlesignout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }

  //for gpt component render
  function ongptclick() {
    dispatch(toggleclick())
  }

  //onchange of the lang fron the user im just getting it through e and changing in gptslice
  function language(e) {
    dispatch(changelang(e.target.value))
  }

  return (
    <div className="h-16 w-full bg-gradient-to-b from-black flex-col absolute z-40">
      <div className="right-0 absolute flex top-4 pr-7 ">
        {d && (
          <select
            name=""
            id=""
            onChange={language}
            className=" w-max bg-red-600 text-white text-l mt-3 font-bold rounded-md relative mr-10 "
          >
            <option value="eng"> eng</option>
            <option value="hindi">hindi</option>
            <option value="japanese">japanese</option>
          </select>
        )}
        <div
          className="p-2 w-max bg-red-600 text-white text-l mt-3 font-bold rounded-md relative mr-10 hover:cursor-pointer"
          onClick={ongptclick}
        >
          {!d ? 'Gptsearch' : 'back'}
        </div>

        <div>
          {' '}
          <button
            onClick={handlesignout}
            className="p-2 w-24 bg-red-600 text-white text-l mt-3 font-bold rounded-md mr-10"
          >
            {!lang ? 'signout' : ' search'}
          </button>
        </div>
        <div className=" text-white text-l font-bold relative top-4">
          {' '}
          <h1>Welcome {data[0]?.displayName} !!</h1>
        </div>

        <br />
      </div>
    </div>
  )
}

export default Header
