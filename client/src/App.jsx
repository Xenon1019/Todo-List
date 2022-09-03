import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppList from './components/AppList';
import Login from './components/Login';

export default function App(){
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to='/login' replace={true} />} />
            <Route path='login' element={<Login />}/>
            <Route path='app' element={<AppList />}/>
        </Routes>
    </BrowserRouter>;
}