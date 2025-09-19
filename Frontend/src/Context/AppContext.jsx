import {createContext } from "react";

export const AppContext= createContext()
const AppContextProvider=({children})=>{
  const values={
  }
    return <AppContext.Provider values={values}>
    {children}
    </AppContext.Provider>
  
}
export default AppContextProvider