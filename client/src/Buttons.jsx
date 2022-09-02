import React from 'react';
import styles from './buttons.module.css';

export default function Buttons(props){
    return <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={(e) => props.addTask()}>Add</button> 
        <button className={styles.button} onClick={(e) => props.resetHandler()}>Delete All</button>
        <button className={styles.button} onClick={(e) => props.resetHandler()}>Undo</button>
    </div>
}