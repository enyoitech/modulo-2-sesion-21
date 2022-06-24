import React from 'react'
import { TaskList } from './components/TaskList'
import { TaskProvider } from './context/taskContext/TaskProvider'

export const Task = () => {
  return (
    <TaskProvider>
        <h1>App Tareas</h1> 
          <TaskList/>
    </TaskProvider>
  )
}
