import React, { useContext } from 'react'
import styles from '../style/result.module.css'
import { FormContext } from '../context/FormContext'

const Result = (props) => {
    const context = useContext(FormContext);

    const loading = context.mikud.loading
    const zipCode = context.mikud.mikud.data



    return (
        <div className={styles.result}>
            {loading ? <div className={styles.loader}><div></div><div></div></div> : loading}

            {zipCode ? <div style={{display: 'inline-grid'}}>
                <span>המיקוד לכתובת הינו: {zipCode}</span>
                <br/>
                <button className={styles.resultButton}  onClick={() => { navigator.clipboard.writeText(zipCode) }}>Copy</button>

                </div> : " "}





        </div>
    );
}

export default Result; 