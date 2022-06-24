// import React, { useContext } from 'react'
// import { TaskContext } from '../context/TaskContext'
import { useEffect } from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList = () => {

    // const { taskState } =  useContext(TaskContext);
    // const { tasks } = taskState;

    const {tasks, taskiList}= useTasks()

    useEffect(() => {
      cargarList()
      
    }, [])
    
    const cargarList = async () => {
      try {
          //const data = await taskiList();
         // console.log(data);
          await taskiList();
      } catch (error) {
        console.error(error);
      }

    }

  return (
    <ul>
        {/* {
            tasks.map((tarea) => <li>{tarea.description}</li> )
        } */}
        
        {
             tasks.map((tarea) => {

                 return <TaskItem key={tarea.id} task={tarea} />
                })
        }
    </ul>
  )
}
