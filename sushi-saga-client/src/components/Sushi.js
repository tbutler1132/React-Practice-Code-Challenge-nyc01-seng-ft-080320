import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushiClickHandler = () => {
    props.appClickHandler(props.sushiEl)
  }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={sushiClickHandler}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.sushiEl.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiEl.name} - ${props.sushiEl.price}
      </h4>
    </div>
  )
}

export default Sushi