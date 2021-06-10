import React, { createContext,useContext,useReducer} from 'react';

export const DataLayerContext = createContext();

export const DataLayer =({reducer,initialState,Children})=>(
    
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}  >
        {Children}
    </DataLayerContext.Provider>
    );

export const useDataLayerValue =()=>useContext(DataLayerContext)