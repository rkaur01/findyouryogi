import axios from 'axios'
import history from '../history'

//ACTION TYPES
const INITIALIZE = 'INITIALIZE_YOGIS'

//ACTION CREATORS
const init = yogis => ({type: INITIALIZE, yogis})

//THUNKS
export const fetchYogis = () => dispatch => {
  axios.get('/api/yogis')
       .then(res => dispatch(init(res.data)))
       .catch(console.error)
}; 

//REDUCER
export default function reducer (yogis = [], action) {
  switch (action.type){
    
    case INITIALIZE:
      return [...action.yogis]

    default:
      return [...yogis]    
  }
}  