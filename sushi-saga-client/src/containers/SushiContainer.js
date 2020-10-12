import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    sushiStart: 0,
    sushiEnd: 4
  }
  
  createSushiCard = () => {
    let sushiArray = this.props.sushi
    const totalSushiArray = sushiArray.map(sushiObj => <Sushi key={sushiObj.id} sushiEl={sushiObj} appClickHandler={this.props.appClickHandler}/>)
    return totalSushiArray.slice(this.state.sushiStart, this.state.sushiEnd)
  }

  sushiContainerClickHandler = (e) => {
    this.setState({sushiStart: this.state.sushiStart + 4, sushiEnd: this.state.sushiEnd + 4})
  }

  
  render(){
    return (
      <Fragment>
        <div className="belt">
          {
          this.createSushiCard()
          }
          <MoreButton sushiContainerClickHandler={this.sushiContainerClickHandler}/>
        </div>
      </Fragment>
    )
  }  
}

export default SushiContainer