import React, { useReducer } from 'react'
import { Task, TaskState } from '../../interfaces/interfaces'
import { TaskContext } from './TaskContext'
import { TaskReducer } from './TaskReducer'

const INITIAL_STATE: TaskState = {
  taskCount: 0,
  tasks: [ ],
  completed: 0,
  pending: 0,
  
}


interface IProps{
    children: JSX.Element | JSX.Element[]
}

export const TaskProvider = ({children}:IProps) => {

  const [taskState, dispatch] = useReducer(TaskReducer, INITIAL_STATE);

  const toggleTaskState =(id: string) => {

    dispatch({type: 'toggleTask', payload: {id}})
  }

  const taskiList = async () => {
    
    const URL='http://localhost:3004/tasks';
    try {
      const res = await fetch(URL);
      // validamos que no haya error en la respuesta del comsuno
      if (!res.ok) {
        console.log('aqui ocurrio un error');

        return {
          errorMsn: 'Ha ocurrido un problema al cargar los datos'
        }
      }

      const result = await res.json()
      dispatch({type: 'tasksList', payload: {task: result as Task[]}})
      // return result;
      
      
    } catch (error) {
      return {
        status: 500,
        errorMsn: 'Ha ocurrido un problema al conectar con el servidor'
      }
    }
    
  }
  
  return (
    <TaskContext.Provider value={{
      taskState,
      toggleTaskState,
      taskiList
      
    }}>
        {children}
    </TaskContext.Provider>
  )
}
