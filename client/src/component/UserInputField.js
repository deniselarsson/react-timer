import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export const UserInputField = () => {

    const [text, setText] = useState([])
    const [name, setName] = useState("")

 
     const addName = (e) => {

        e.preventDefault();

        const newText = {
            title: name, 
            id: uuidv4(),
            timestamp: new Date().toLocaleString()
        }
            setText(prev => [newText, ...prev])
    }


    return (
        <div>
            <hr/>
            <div>
                <form onSubmit={addName}>
                <input onChange={e =>setName(e.target.value) } type ='text' placeholder ="Name"></input>
                <input type='submit' value="Add"></input>
                </form>
            </div>
        </div>
    )
}
export default UserInputField;
