import { createContext, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [myChar, setMyChar] = useState ({})

    const values = {
        myChar,
        setMyChar,
    }


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider