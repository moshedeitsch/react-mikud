import React from 'react'
import axios from 'axios'
export const FormContext = React.createContext()



const FormProvider = (props) => {
    const [mikud, setmikud] = React.useState({ mikud: {}, loading: false })




    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSubmit = (data) => {
        const apiUrl = `http://localhost:5001/${data.city}/${data.street}/${data.homeNumber}/${data.entrance}`
        setmikud({mikud: {}, loading: true})
        axios.get(apiUrl)
            .then(mikud =>  setmikud({mikud, loading: false}))
            .catch(err => console.log(err))
    }




    return (
        <FormContext.Provider value={{onSubmit, mikud, }} >
            {props.children}
        </FormContext.Provider>
    )

}

export default FormProvider
