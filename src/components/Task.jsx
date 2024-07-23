import React, { useContext } from 'react'
import MasterContext from '../Contexts/MasterContext'

function Task({ task }) {
    const { deleteTask } = useContext(MasterContext)
    function handleDelete(event) {
        event.stopPropagation()
        deleteTask(task.taskId)
    }
    return (
        <div className="task-container">
            <p>{task.todoTitle}</p>
            <button onClick={handleDelete}>
                <i className="uil uil-trash-alt"></i>
            </button>
        </div>
    )
}

export default Task