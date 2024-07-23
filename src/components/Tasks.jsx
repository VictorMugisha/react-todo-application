import React, { useContext } from 'react'
import Task from './Task'
import MasterContext from '../Contexts/MasterContext'

function Tasks() {

  const { allTasks } = useContext(MasterContext)

  return (
    <section className="tasks-container">
      {
        allTasks.length ?
        allTasks.map(task => (
          <Task key={task.taskId} task={task} />
        )) :
        <p>No task added yet</p>
      }
    </section>
  )
}

export default Tasks