import React from 'react'
import '../Style/Team-Box.css'

const Team_box = (props) => {
    return (
        <>
            <div className="member-box">

                <div className="member-img">
                    <img src={props.img} alt="img" />
                </div>
                <div className="member-info">
                    <h1>{props.name}</h1>
                    <h4>{props.post}</h4>
                </div>

            </div>
        </>
    )
}

export default Team_box
