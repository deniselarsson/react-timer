import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import UserForm from './UserForm';

const UserInputField = () => {

    const [text, setText] = useState([])
    const [name,setName] = useState("")

    const addname = (e) => {

        e.preventDefault();

        const newName = {
            name: name, 
            text: text, 
            id: uuidv4(),
            timestamp: new Date().toLocaleString()
        }
            setText(prev => [newName, ...prev])
    }

    const removePost = (id) => { 
        const filteredList = text.filter(post => post.id !==id)
        setText(filteredList)
    }

    return(
    <div>
        <br/>
        <form onSubmit={addname}>
            <input onChange={e =>setName(e.target.value) } type ='text' placeholder ="Name"></input>
            <input type='submit' value="Add"></input>
        </form>

        {text.map((post) =>{
            return  (
            <div key={post.id}>
                <UserForm 
                name={post.name} 
                text ={post.text} 
                timestamp = {post.timestamp}
                id ={post.id}
                handleClick={removePost}
                />
            </div>
            )
        })
    }
    </div>
    )
}
export default UserInputField