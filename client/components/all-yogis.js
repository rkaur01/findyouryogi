import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import store from '../store'
require('../../secrets')
const Clarifai = require('clarifai')

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_SECRET
})

/**
 * COMPONENT
 */
export class AllYogis extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      yogis: [],
      filter: 'people'
    }

  }

  handleSubmit = () => {
    let oldList = [...this.props.yogis]
    app.inputs.search({ concept: {name: this.state.filter} }).then(
      function(response) {
        let hitArr = []
        
        response.hits.forEach(hit => {
          hitArr.push(hit.input.id)
        })
        
        let newYogiList = []
        oldList.forEach(yogi => {
          if(hitArr.includes(yogi.clarifaiId)){
            newYogiList.push(yogi)
            
          }
        })
        console.log('new yogi list needs to be my new state', newYogiList)
        
        //SET STATE IS NOT CHANGING,...THE ROOT OF MY PROBLEM IS HERE
        this.setState({yogis: newYogiList})
        
        
      },
      function(err) {
        console.error(err)
      }
    )
  }

  // componentDidMount(){
  //   console.log('what are props', this.props.yogis)
  //   this.setState({yogis: this.props.yogis})
  // }


  render(){
    const {yogis} = this.props
    if(!this.state.yogis && yogis.length) this.setState({yogis: yogis})
    let yogiList = this.state.yogis.length ? this.state.yogis : yogis 
    console.log('state is not changing, this should be equal to newYogiList ', yogiList)
    return (
      <div>
        <form onSubmit= {(evt) => {
          evt.preventDefault()
          this.handleSubmit()
        }}>
          <input 
            type="text"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChange={(filter) => this.setState({filter:filter.target.value})}
            value={this.state.filter}
          />
          </form>
        <h3>FEATURING</h3>
        {yogiList && yogiList.map(yogi => {
          return(
            <NavLink
            key = {yogi.id}
            activeClassName="active"
            to={`/yogis/${yogi.id}`}>
            <img className="allYogis" src ={yogi.imageUrl}/>
            <p>{yogi.name}</p>
            </NavLink>
          )
        })}

      </div>
    )
  }
}

/**
 * CONTAINER
 */
//const mapState = ({yogis}) => ({yogis})
const mapState = (state) => {
  console.log('mapState takes in this state', state)
  return {
      yogis: state.yogis
  }
}

export default connect(mapState)(AllYogis)

/**
 * PROP TYPES
 */
AllYogis.propTypes = {
  yogis: PropTypes.array
}
