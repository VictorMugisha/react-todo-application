import React, { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import MasterContext from '../Contexts/MasterContext'

function Form() {
  const { createTask } = useContext(MasterContext)
  const [input, setInput] = useState({
    taskId: nanoid(),
    todoTitle: '',
    isComplete: false
  })
  function handleChange(event) {
    const { value, name } = event.target
    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(input)
    createTask(input)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add your new todo" name="todoTitle" value={input.todoTitle} onChange={handleChange} />
      <button><i className="uil uil-plus"></i></button>
    </form>
  )
}

export default Form