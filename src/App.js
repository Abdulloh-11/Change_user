import React from 'react'
import UsersForm from './Component/task-2/UsersForm';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <div className='container'>
      <Routes>
       
        <Route path='/' element={<UsersForm />}/>     
      </Routes>

    </div>
  )
}
