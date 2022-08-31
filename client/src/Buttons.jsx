import React from 'react';
import styles from './buttons.module.css';

export default function Buttons(props){
    return <div className={styles.buttonContainer}>
        <input type='button' className={styles.button} onClick={(e) => props.resetHandler()} value='Delete All' />
        <div className={styles.button}>Undo</div>
    </div>
}