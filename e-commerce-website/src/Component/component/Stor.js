import React from 'react'
import "../Style/Stor.css"

const Stor = (props) => {
  return (
    <>
      <div className="stor-faceility-box">
        <div className="stor-img">
            <img src={props.img} alt="" />
        </div>
        <div className="stor-heading">
            <h1>{props.title}</h1>
        </div>
        <div className="stor-info">
          <p>{props.info}</p>
        </div>
      </div>
    </>
  )
}

export default Stor
