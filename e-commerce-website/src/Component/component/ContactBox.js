import React from 'react'
import "../Style/ContactBox.css"

const ContactBox = (props) => {
  return (
    <>
      <div className="boxes-info">
        <h1>{props.heading}</h1>
        <p>{props.info}</p>
        <h4>{props.contact}</h4>
      </div>
    </>
  )
}

export default ContactBox
