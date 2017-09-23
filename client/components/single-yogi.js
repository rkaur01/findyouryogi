import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Iframe from 'react-iframe'

/**
 * COMPONENT
 */
export const SingleYogi = (props) => {
  const {yogi} = props

  return (
    <div>
      {Object.keys(yogi) &&
        <div>
          <h3>{yogi.name}</h3>
          <img className="singleYogi" src ={yogi.imageUrl}/>
          <p>{yogi.quote}</p>
          <p>Currently in: {yogi.location}</p>
          <p>Class difficulty: {yogi.difficulty}</p>
          <p>Average Cost: ${yogi.costPerClass}.00 per class</p>
          <Iframe url="https://open.spotify.com/embed?uri=spotify:user:rkohr:playlist:26RcfKekMN41fKgTW0D5Hx" width="300" height="380" frameborder="0" allowtransparency="true" />
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
