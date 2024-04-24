import React, { Component } from 'react';

//Context lets components pass information deep down without explicitly passing props
//Create a context that components can provide or read
//parameter is a default value. In this case, an empty object {}
const AppContext = React.createContext({});
export const AppConsumer = AppContext.Consumer;

const AppProvider = ({children}) => {

    return(
        <AppContext.Provider>
            {children}
            {/* other global component  */}
        </AppContext.Provider>
    ) 
}

export default AppProvider;