import React from 'react'
import styles from './Spinner.module.css'
const Spinner = () => {
    return (
        <div className={styles.pinwheel}>
            <div className={styles.pinwheel__line}></div>
            <div className={styles.pinwheel__line}></div>
            <div className={styles.pinwheel__line}></div>
            <div className={styles.pinwheel__line}></div>
            <div className={styles.pinwheel__line}></div>
            <div className={styles.pinwheel__line}></div>
        </div>
    )
}

export default Spinner