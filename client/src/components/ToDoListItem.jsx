import React from 'react';

import styles from '../css/ToDoListItem.module.css';
import buttonStyles from '../css/buttons.module.css';


export default function TodoItem(props) {
    let content;
    if (props.editable) {
        content = <>
            <input type='text'
                value={props.item.task} autoFocus
                onInput={(e) => { props.onEdit(e.target.value) }}
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
            <input type="checkbox" id={props.listId} onClick={props.done}
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        props.done(e);
                }}
            />
        </>;
    }

    return <div className={styles.listItem}>
        {content}
    </div>;
}