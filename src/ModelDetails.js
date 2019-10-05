import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ModelDetails extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
  }

  render() {
    //console.log(this.props)
    const data = this.props.data
    //console.log("from Model Details", data)

    return (
      <div>
        {data.map(computer => (
          <ul key={computer.name}>
            <li >Name: {computer.name}</li>
            <li>Manufacturer: {computer.manufacturer}</li>
            <li>Year: {computer.year}</li>
            <li>Origin: {computer.origin}</li>
          </ul>
        ))}
      </div>
    )
  }
}