import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import { addComputer } from './actions'
import ModelDetails from './components/ModelDetails'

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
    if(this.state.model ){
      const computerData = data.filter(model => model.name === this.state.model)[0]
    this.props.addComputer(computerData)
    console.log('STATE MAPS', this.props.myModels)
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.props.myModels.map((model, i) => {
           return <ModelDetails key={i} name={model.name} manufacturer={model.manufacturer} year={model.year} origin={model.origin} />
          })
        }

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

export const mapStateToProps = (state) => {
  return {
    myModels: state
  }
}

export default connect(mapStateToProps, { addComputer })(App);