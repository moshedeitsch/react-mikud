import React, { useContext } from 'react'
import '../style/form.css'
import { useForm } from 'react-hook-form'
import Result from './Result'
import { FormContext } from '../context/FormContext'

const Form = (props) => {



    const { register, handleSubmit, errors } = useForm()

    const context = useContext(FormContext);



    return (
        <div className='container'>

            <form className="form-style-7" onSubmit={handleSubmit(context.onSubmit)}>
                <ul>
                    <li>
                        <label htmlFor="city">עיר</label>
                        <input type="text" name="city" maxLength="100" ref={register({ required: true, minLength: 2 })} />
                        <span>הקלד בבקשה שם עיר</span>
                        {errors.city && <span className='error-message'>עיר חובה</span>}
                    </li>

                    <li>
                        <label htmlFor="street">רחוב</label>
                        <input type="text" name="street" maxLength="100" ref={register({ required: true })} />
                        <span>הקלד בבקשה שם רחוב</span>
                        {errors.street && <span className='error-message'>רחוב חובה</span>}

                    </li>
                    <li>
                        <label htmlFor="homeNumber">מספר בית</label>
                        <input type="number" name="homeNumber" maxLength="100" ref={register({ required: true })} />
                        <span>הקלד בבקשה מספר בית</span>
                        {errors.homeNumber && <span className='error-message'>מספר בית חובה</span>}
                    </li>
                    <li>
                        <label htmlFor="entrance"> כניסה</label>
                        <select name="entrance" ref={register} >
                            <option value="0"></option>
                            <option value="א">א</option>
                            <option value="ב">ב</option>
                            <option value="ג">ג</option>
                            <option value="ד">ד</option>
                            <option value="ה">ה</option>
                            <option value="ו">ו</option>

                        </select>
                        <span>הקלד בבקשה מספר כניסה</span>
                        {errors.entrance && <span className='error-message'>מספר כניסה חובה</span>}

                    </li>
                    <li>
                        <input type="submit" value="חפש" />
                    </li>
                </ul>
            </form>

            <Result />
        </div>
    );
}

export default Form;