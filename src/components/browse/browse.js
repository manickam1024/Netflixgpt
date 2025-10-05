import useNowMovieplaying from '../../hooks/useNowMovieplaying'
import useTopRated from '../../hooks/useTopRATED'
import useUpcoming from '../../hooks/useUpcoming'
import useSeries from '../../hooks/useSeries'
import Maincontainer from './maincontainer'
import { Gpt } from './gpt'
import { useSelector } from 'react-redux'

const Browse = () => {
  const toggledata = useSelector((store) => store.gpt.click)

  // ✅ Call hooks unconditionally
  useNowMovieplaying()
  useTopRated()
  useUpcoming()
  useSeries()

  // ✅ Conditionally render UI
  return <div>{!toggledata ? <Maincontainer /> : <Gpt />}</div>
}

export default Browse
