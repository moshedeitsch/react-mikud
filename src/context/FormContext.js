import React from 'react'
import axios from 'axios'
export const FormContext = React.createContext()



const FormProvider = (props) => {
    const [state, setState] = React.useState({})
    const [mikud, setmikud] = React.useState({ mikud: null, loading: null })

    const apiUrl = `http://localhost:3000/:${state.city}/:${state.street}/:${state.homeNumber}/:${state.entrance}`
    const apicd = `https://jsonplaceholder.typicode.com/posts/1`


    // eslint-disable-next-line react-hooks/exhaustive-deps


    const onSubmit = (data) => {
        setState({ data })
        setmikud({ data: null, loading: true })
        axios.get(apicd)
            .then(mikud => setmikud({ mikud: JSON.stringify(mikud), loading: false }))
            .catch(err => console.log(err))
    }



    return (
        <FormContext.Provider value={{ state, onSubmit, mikud, }} >
            {props.children}
        </FormContext.Provider>
    )

}

export default FormProvider
