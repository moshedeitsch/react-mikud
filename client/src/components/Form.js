import React, { useContext } from 'react'
import styles from '../style/form.module.css'
import { useForm } from 'react-hook-form'
import Result from './Result'
import { FormContext } from '../context/FormContext'

const Form = (props) => {



    const { register, handleSubmit, errors } = useForm()

    const context = useContext(FormContext);



    return (
        <div className={styles.container}>

            <form className={styles.formStyle} onSubmit={handleSubmit(context.onSubmit)}>
                <ul>
                    <li>
                        <label htmlFor="city">עיר</label>
                        <input type="text" name="city" maxLength="100" ref={register({ required: true, minLength: 2 })} />
                        <span>הקלד בבקשה שם עיר</span>
                        {errors.city && <span className={styles.errorMessage}>עיר חובה</span>}
                    </li>

                    <li>
                        <label htmlFor="street">רחוב</label>
                        <input type="text" name="street" maxLength="100" ref={register({ required: true })} />
                        <span>הקלד בבקשה שם רחוב</span>
                        {errors.street && <span className={styles.errorMessage}>רחוב חובה</span>}

                    </li>
                    <li>
                        <label htmlFor="homeNumber">מספר בית</label>
                        <input type="number" name="homeNumber" maxLength="100" ref={register({ required: true })} />
                        <span>הקלד בבקשה מספר בית</span>
                        {errors.homeNumber && <span className={styles.errorMessage}>מספר בית חובה</span>}
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
                        {errors.entrance && <span className={styles.errorMessage}>מספר כניסה חובה</span>}

                    </li>
                    <li>
                        <input className={styles.formStyleButton} type="submit" value="חפש" />
                    </li>
                </ul>
            </form>

            <Result />
        </div>
    );
}

export default Form;