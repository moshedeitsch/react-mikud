import React,{useContext} from 'react'
import '../style/../style/result.css'
import { FormContext } from '../context/FormContext'

const Result = (props) => {
    const context = useContext(FormContext);

    return ( 
        <div className='result'>
            {context.mikud.loading ? <div class="lds-ripple"><div></div><div></div></div> : context.mikud.loading }
            
            {context.mikud.mikud ? <div><span>{context.mikud.mikud}המיקוד לכתובת הינו:</span></div> : " " }
        </div>
     );
}
 
export default Result; 