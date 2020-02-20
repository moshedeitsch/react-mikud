import React,{useContext} from 'react'
import '../style/../style/result.css'
import { FormContext } from '../context/FormContext'

const Result = (props) => {
    const context = useContext(FormContext);

    const loading = context.mikud.loading
    const zipCode = context.mikud.mikud.data  

    return ( 
        <div className='result'>
            {loading ? <div className="loader"><div></div><div></div></div> : loading }
            
            {zipCode ? <div><span>המיקוד לכתובת הינו: {zipCode}</span></div> : " " }
        </div>
     );
}
 
export default Result; 