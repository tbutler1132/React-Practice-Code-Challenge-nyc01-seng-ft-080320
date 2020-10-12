import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushi: []
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json()).then(data => this.setState({sushi: data}))
  }
  
  appClickHandler = (sushiObj) => {
    const options = {
      method: "DELETE"
    }
    
    fetch(API + sushiObj.id, options)
    .then(response => response.json())
    .then(data => {
      const newArray = [...this.state.sushi]
      const removeEl = newArray.indexOf(sushiObj)
      newArray.splice(removeEl, 1)
      this.setState({sushi: newArray})
    })
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} appClickHandler={this.appClickHandler}/>
        <Table />
      </div>
    );
  }
}

export default App;