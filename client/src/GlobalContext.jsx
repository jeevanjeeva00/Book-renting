import React, {createContext} from 'react'
import useAuthApi from './Api/AuthAPI'

export const GlobalContext = createContext()

function DataProvider(props) {

    let data = {
        auth: useAuthApi()
    }
  return (
    <GlobalContext.Provider value={data}>
        {
            props.children
        }
    </GlobalContext.Provider>
  )
}

export default DataProvider
