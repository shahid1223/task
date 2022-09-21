import React from 'react';
import Context from './Context';

const ContextState = (props) => {

    const countryArr = [
        {
            name: "India"
        },
        {
            name: "USA"
        },
        {
            name: "Kuwait"
        },
        {
            name: "Canada"
        },
    ];

    const arr = [];

    const addCountry = (obj) => {
        console.log("clicked", obj)
        arr.push(obj)
        console.log(arr)
    }

    return (
        <Context.Provider value={{ countryArr, arr, addCountry }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState
