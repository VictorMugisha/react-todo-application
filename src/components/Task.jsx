import React from 'react'

function Task({task}) {
    return (
        <div className="task-container">
            <p>{task.todoTitle}</p>
            <button>
                <i className="uil uil-trash-alt"></i>
            </button>
        </div>
    )
}

export default Task