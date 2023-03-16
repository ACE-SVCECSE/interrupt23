import React from 'react';
import styles from './Title.module.css'
function Title(props){
    return(
        <div className={props.component !== "Guidelines" ? styles.title : "" }>
                <p className={styles.heading}>&emsp; {props.heading}</p>
                <h1>{props.desc}</h1>
        </div>
    )
}

export default Title;