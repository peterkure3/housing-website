import React, {useState, useEffect, createContext} from "react";
// import {houseData} from '../data';

export const HouseContext = createContext();

const HouseContextProvider =({children}) => {
   const [houses, setHouses]=useState(housesData); 
   const [country, setCountry]=useState('Location: (any)');
   const [loading, setLoading]=useState(false);
   const [price, setPrice]=useState('Price range (any)');
   const [properties, setProperties]=useState([]);
   const [countries, setCountries]=useState([]);
   const [property, setProperty]=useState('Property type (any)');

    return (<HouseContext.Provider value={{country,setCountry, countries, setCountries, property, setProperty, properties, setProperties, price, setPrice, houses, loading}}>
        {children}
    </HouseContext.Provider>);
};

export default HouseContextProvider;