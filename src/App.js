import React, { Component } from 'react'
import './App.css';

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
    value: ''
  }

  updateSelection = (event) => {
    console.log('UpdateSelection', event.target.value)

    this.setState({value: event.target.value})
  }

  render(){

    console.log('this.state', this.state)
    return (
      <div className="App">
        <select value={this.state.value} onChange={ this.updateSelection}>
          <option value="">-- pick a model --</option>
          {
            data.map( map => {
              return <option key={map.name} value={map.name}> {map.name} ({map.year})</option>
            })
          }
        </select>
      </div>
    );
  }
}

export default App;