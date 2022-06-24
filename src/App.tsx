import { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { RoutesPublic } from './task/Routes/RoutesPublic';
import { RoutesPrivate } from './task/Routes/RoutesPrivate';
import { Login } from './task/components/Login';
import { TaskList } from './task/components/TaskList';
import { NotFound } from './task/components/NotFound';
import { TaskProvider } from './task/context/taskContext/TaskProvider';
import { AuthProvider } from './task/context/authContext/AuthProvider';

function App() {
  

  return (
    <AuthProvider>
       
      <TaskProvider>

        <BrowserRouter>
          <Routes>

            <Route path="/login" element={
              <RoutesPublic  >
                <Login />
              </RoutesPublic>
            } />


            <Route path="/" element={
              <RoutesPrivate >
                <TaskList />
              </RoutesPrivate>
            } />


            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TaskProvider>
      
    </AuthProvider>
  )
}

export default App