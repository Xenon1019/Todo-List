import React from 'react';
import { useState } from 'react';

import Navbar from "./NavBar"
import TodoList from "./ToDoList";
import Buttons from './Buttons';

export default function AppList() {
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
    var [editing, setEdit] = useState(null);
    
    return <>
    <Navbar />
    <TodoList todoList={list} editable={editing}
        doneHandler={() => setEdit(null)}
        setTodoList={setList}
        editTask={(taskIndex, task) => {
            const newList = list.slice();
            newList[taskIndex].task = task;
            setList(newList);
        }}
    />
    <Buttons resetHandler={() => setList([])} edit={{setEdit}} 
        addTask={() => {
            const newList = list.slice();
            newList.push({
                task: 'Enter new task',
                description: 'Todo Simple Task',
                createdOn: new Date(Date.now()).toLocaleDateString()
            });
            setList(newList);
            setEdit(newList.length - 1);
        }}
    />
</>;
}
