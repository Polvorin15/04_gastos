import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const GlobalContext = createContext();

function useGlobalContext(){
    return useContext(GlobalContext);
}

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, {transactions:[]});

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}

export {useGlobalContext, GlobalProvider}
