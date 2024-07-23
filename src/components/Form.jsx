import React, { useState } from 'react'

function Form() {
  const [input, setInput] = useState({
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
  return (
    <form>
      <input type="text" placeholder="Add your new todo" name="todoTitle" value={input.todoTitle} onChange={handleChange} />
      <button><i class="uil uil-plus"></i></button>
    </form>
  )
}

export default Form