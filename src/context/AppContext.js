import React, { createContext, useReducer, useEffect } from "react"
// allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense => expense.id !== action.payload))
            }
        case 'EDIT_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
}

const initialState = {
    budget: 4000,
    expenses: [
        { id: 12, name: 'shopping', cost: 400 },
        { id: 13, name: 'Holiday', cost: 600 },
        { id: 14, name: 'Grocery', cost: 600 }
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses-data'));
        if (savedExpenses) {
            dispatch({ type: 'LOAD_EXPENSES', payload: savedExpenses });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expenses-data', JSON.stringify(state.expenses));
    }, [state.expenses]);
    

    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}
