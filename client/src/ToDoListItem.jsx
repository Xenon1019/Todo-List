import React from 'react';
import styles from './ToDoListItem.module.css';


export default function TodoItem(props){
    
    
    return <div className={styles.listItem}>
        <span>{props.item.task}</span>
        <span>
            <input type="checkbox" name="done" id={props.listId} onClick={props.done}/>
        </span>
    </div>;
}