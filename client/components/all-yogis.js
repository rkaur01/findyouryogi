import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {filteryogi} from '../store'
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
      (response) => {
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
        
        this.setState({yogis:newYogiList})
        
        
        
      }
    )
    .catch(err => console.log(err))
  }


  render(){
    //styles
    let imgStyle = {
      width: 400,
      height: 300,
      borderRadius: 5
    }

    let navLinkStyle = {
      padding: 15,
      fontSize: 25,
      textDecoration: 'none',
      textAlign: 'center',
      color: '#41b5f4'
    }



    const {yogis} = this.props
    let yogiList = this.state.yogis.length ? this.state.yogis : yogis 
    return (
      <div className="container-fluid">
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
        <h3 style={{textAlign: 'center', color: "#4286f4"}}>FEATURING</h3>
        <div className="row">
        {yogiList && yogiList.map(yogi => {
          return(
            <NavLink
            key = {yogi.id}
            activeClassName="active"
            className="col-xs-4"
            style={navLinkStyle}
            to={`/yogis/${yogi.id}`}>
            <img style={imgStyle} src ={yogi.imageUrl}/>
            <p>{yogi.name}</p>
            </NavLink>
          )
        })}
        </div>
        

      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = (state) => {
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
