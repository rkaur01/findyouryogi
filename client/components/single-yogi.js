import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Iframe from 'react-iframe'

/**
 * COMPONENT
 */
export const SingleYogi = (props) => {
  //styles
  let imgStyle = {
    height: 450,
    width: 600
  }

  let iFrameStyle = {
    width:"450",
    height:"450",
    display:"initial",
    position:"relative"
  }

  let mainDivStyle = {
    backgroundColor:'#dbe8ff',
    paddingTop: .15,
    color: '#4286f4',
    paddingBottom: 25
  }

  const {yogi} = props

  return (
    <div style = {mainDivStyle}>
      {Object.keys(yogi) &&
        <div>
          <h3 style={{color: '#41b5f4'}}>{yogi.name}</h3>
          <img style={imgStyle} src ={yogi.imageUrl}/>
          <p>{yogi.quote}</p>
          <p>Currently in: {yogi.location}</p>
          <p>Class difficulty: {yogi.difficulty}</p>
          <p>Average Cost: ${yogi.costPerClass}.00 per class</p>
          <p>Studio Playlist:</p> 
          <Iframe url="https://open.spotify.com/embed?uri=spotify:user:rkohr:playlist:26RcfKekMN41fKgTW0D5Hx" width="450px" height="450px" frameborder="0" allowtransparency="true" display="initial" position="relative"/>
        </div>
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  const yogiId = Number(ownProps.match.params.yogiId)
  const selectedYogi = state.yogis.length ? state.yogis.filter(yogi => yogi.id == yogiId)[0] : {}
  return {
    yogi: selectedYogi
  }
}

export default connect(mapState)(SingleYogi)

/**
 * PROP TYPES
 */
SingleYogi.propTypes = {
  yogi: PropTypes.object
}
