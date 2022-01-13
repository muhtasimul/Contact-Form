import React,{useState} from 'react'
const Context = React.createContext()

function ContextProvider({children}) {
    const [validated, setValidated] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Context.Provider value={{
            validated, 
            setValidated, 
            name, 
            setName, 
            email, 
            setEmail,
            subject, 
            setSubject,
            description, 
            setDescription

        }}>
           {children} 
        </Context.Provider>
    )
}

export {ContextProvider,Context}
