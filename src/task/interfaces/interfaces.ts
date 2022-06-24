export interface Task{
    id: string;
    description: string;
    completed: boolean;
}

export interface TaskState{
    taskCount: number;
    tasks: Task[];
    completed: number;
    pending: number;

}

export interface User{
    isAuth: boolean;
    username: string;
    password?: string
}

