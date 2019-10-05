import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import ModelDetails from './ModelDetails'


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {
  state = {
    value: ''
  }


  updateSelection = (event) => {
    // console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  eventHandler = () => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: data.find(computer => computer.name === this.state.value)
    })

  }

  render() {
    return (
      <div className="App">
        <ModelDetails data={this.props.data} />
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {data.map(data =>
            <option key={data.name} value={data.name}>{data.name} ({data.year})</option>
          )}
        </select>
        <button onClick={this.eventHandler}>Add</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state
  }
}



export default connect(mapStateToProps)(App);
