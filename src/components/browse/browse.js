import useNowMovieplaying from '../../hooks/useNowMovieplaying'
import Maincontainer from './maincontainer'

import useTopRated from '../../hooks/useTopRATED'
import useUpcoming from '../../hooks/useUpcoming'
import useSeries from '../../hooks/useSeries'

const Browse = () => {
  useNowMovieplaying()
  useTopRated()
  useUpcoming()
  useSeries()
  return (
    <div>
      <Maincontainer />
    </div>
  )
}

export default Browse
