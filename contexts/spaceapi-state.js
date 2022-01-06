import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function SpaceApiStateWrapper({ children }) {
  
    const [data, setData] = useState([]);

    //let sharedState = await fetch("/spaceapi.json").then(response => response.json())

    useEffect(() => {
        fetch('/spaceapi.json')
            .then(response => response.json())
            .then(json => {
                setData(json)                
            })
    }, []);

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

export function useSpaceApiContext() {
  return useContext(AppContext);
}