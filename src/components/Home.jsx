import React from 'react'
import Form from './Form'
import Tasks from './Tasks'
import Footer from './Footer'

function Home() {
  return (
    <main className="todo-container">
        <h1>Todo App</h1>
        <Form />
        <Tasks />
        <Footer />
    </main>
  )
}

export default Home