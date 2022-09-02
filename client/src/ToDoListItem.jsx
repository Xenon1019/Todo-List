import React from 'react';
import styles from './ToDoListItem.module.css';
import buttonStyles from './buttons.module.css';


export default function TodoItem(props) {
    let content;
    if (props.editable) {
        content = <>
            <input type='text' 
                value={props.item.task} autoFocus
                onInput={(e) => {props.onEdit(e.target.value)}}
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        props.onEditDone();
                }}
            />
            <button className={buttonStyles.button}
                onClick={props.onEditDone}
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        props.onEditDone();
                }}>Done</button>
        </>;
    } else {
        content = <>
            <span>{props.item.task}</span>
            <span>
                <input type="checkbox" name="done" id={props.listId} onClick={props.done} />
            </span>
        </>;
    }

    return <div className={styles.listItem}>
        {content}
    </div>;
}