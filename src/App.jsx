import React, { useState } from 'react'
import "./App.css"
import Home from './components/Home'
import MasterContext from "./Contexts/MasterContext"

function App() {
  const [allTasks, setAllTasks] = useState([])

  function createTask(task) {
    setAllTasks(prevTasks => {
      return [task, ...prevTasks]
    })
  }

  function deleteTask(taskId) {
    setAllTasks(prevTasks => {
      return prevTasks.filter(task => task.taskId !== taskId)
    })
  }

  function deleteAll() {
    setAllTasks([])
  }

  const providerValue = {
    allTasks,
    createTask,
    deleteTask,
    deleteAll
  }

  return (
    <MasterContext.Provider value={providerValue}>
      <Home />
    </MasterContext.Provider>
  )
}

export default App