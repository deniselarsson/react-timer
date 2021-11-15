import React from 'react'

const UserForm = (props) =>{

    const {name, text,timestamp, id,handleClick} = props

    return(
        <div>
            <hr/>
            <h3>{name}</h3>
            <p>{text}</p>
            <p>{timestamp}</p>
            <button onClick= {()=> handleClick(id)}>Remove</button>
            <hr/>
        </div>
    )
}

export default UserForm;