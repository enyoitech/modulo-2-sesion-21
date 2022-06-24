import { TaskContext } from '../context/taskContext/TaskContext';
import { useContext } from 'react';


export const useTasks = () => {
    const { taskState, toggleTaskState, taskiList } = useContext(TaskContext);
    const { tasks } = taskState;

    return {
            tasks: tasks,
            pending: tasks.filter(tarea => !tarea.completed).length,
            completed: tasks.filter(tarea => tarea.completed).length,
            toggleTaskState,
            taskiList
           }

}