import React from 'react'
import {useState} from 'react'

export default function Forms({ addTodo }) {
    
    const [newTodo, setNewTodo] = useState('')

    return (
      <div className='formu'>
            <input type="text" onChange={(e) => setNewTodo(e.target.value)} placeholder='Todo...'/>
            <button onClick={() => addTodo(newTodo)}>Enviar</button>
      </div>
    );
}
