import React from 'react'
import User from './components/User'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <h1>Fetch User</h1>
      <User/>
      <h1>Todo</h1>
      <Todo/>
    </div>
  )
}

export default App