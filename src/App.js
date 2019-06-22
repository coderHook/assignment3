import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import { addComputer } from './actions'

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

class App extends Component  {
  state = {
  }

  updateSelection = (event) => {

    this.setState({model: event.target.value})
  }

  handleClick = () => {
    console.log('handleClick:', this.state)

    const computerData = data.filter(model => model.name === this.state.model)[0]
      
    this.props.addComputer(computerData)
  }

  render(){

    console.log('this.state', this.state)
    return (
      <div className="App">
        <select value={this.state.model} onChange={ this.updateSelection}>
          <option value="">-- pick a model --</option>
          {
            data.map( map => {
              return <option key={map.name} value={map.name}> {map.name} ({map.year})</option>
            })
          }
        </select>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default connect(null, { addComputer })(App);