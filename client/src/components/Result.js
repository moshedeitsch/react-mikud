import React, { useContext } from 'react'
import '../style/../style/result.css'
import { FormContext } from '../context/FormContext'

const Result = (props) => {
    const context = useContext(FormContext);

    const loading = context.mikud.loading
    const zipCode = context.mikud.mikud.data



    return (
        <div className='result'>
            {loading ? <div className="loader"><div></div><div></div></div> : loading}

            {zipCode ? <div style={{display: 'inline-grid'}}>
                <span>המיקוד לכתובת הינו: {zipCode}</span>
                <br/>
                <button  onClick={() => { navigator.clipboard.writeText(zipCode) }}>Copy</button>

                </div> : " "}





        </div>
    );
}

export default Result; 