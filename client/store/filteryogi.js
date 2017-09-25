import axios from 'axios'
import history from '../history'

//ACTION TYPES
const FILTER_YOGIS = 'FILTER_YOGIS'

//ACTION CREATORS
const filter = yogis => ({type: FILTER_YOGIS, yogis})

//REDUCER
export default function reducer (yogis = [], action) {
  switch (action.type){
    
    case FILTER_YOGIS:
      return [...action.yogis]

    default:
      return [...yogis]    
  }
}  