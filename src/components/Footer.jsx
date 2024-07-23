import React, { useContext } from 'react'
import MasterContext from '../Contexts/MasterContext'

function Footer() {
  const { allTasks, deleteAll } = useContext(MasterContext)
  return (
    <div className='footer'>
      <p>You have {allTasks.length} pending tasks</p>
      <button onClick={deleteAll}>Clear All</button>
    </div>
  )
}

export default Footer