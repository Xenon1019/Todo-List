import React from 'react';
import { useState } from "react";

import Navbar from "./NavBar"
import TodoList from "./ToDoList";
import Buttons from './Buttons';

export default function App(){
    var defaultList = [
        {
            task: 'Task 1',
            description: 'Todo Sample Task',
            createdOn: '29/08/2022',
        },
        {
            task: 'Task 2',
            description: 'Todo Sample Task',
            createdOn: '29/08/2022',
        },
        {
            task: 'Task 3',
            description: 'Todo Sample Task',
            createdOn: '29/08/2022',
        },
    ];
    var [list, setList] = useState(defaultList);

    return <>
        <Navbar />
        <TodoList todoList={list} setTodoList={setList} />
        <Buttons resetHandler={() => setList([])}/>
    </>;
}