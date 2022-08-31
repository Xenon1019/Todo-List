import React from "react";

import TodoItem from "./ToDoListItem";
import styles from './TodoList.module.css';

export default function TodoList(props){
    let list = props.todoList;
    let setList = props.setTodoList;
    return <ul className={styles.list}>
            {
                list.map((listItem, i) => 
                <li id={i}>
                    <TodoItem item={listItem} lId={i} 
                    done={(e) => {
                        e.preventDefault();
                        setList(list.filter((task, ind) => i != ind));
                    }}/>
                </li>)
            }
        </ul>;
}