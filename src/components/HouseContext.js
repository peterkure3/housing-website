// import React, {useState, useEffect, createContext} from "react";
// // import {housesData} from '../data';

// // create context
// export const HouseContext = createContext();
    
// const HouseContextProvider =({children}) => {
//    const [houses, setHouses]=useState(housesData); 
//    const [country, setCountry]=useState('Location: (any)');
//    const [countries, setCountries]=useState([]);
//    const [property, setProperty]=useState('Property type (any)');
//    const [properties, setProperties]=useState([]);
//    const [price, setPrice]=useState('Price range (any)');
//    const [loading, setLoading]=useState(false);
// // return all countries
// useEffect(()=>{
//     const allCountries = houses.map((house)=>{
//         return house.country;
//     });
//     const uniqueCountries = ['Location (any)', new Set(allCountries)];
//     // set countries state
//     setCountries(uniquesCountries);
// }, []);
//     return <HouseContext.Provider value={{
//         country, setCountry, countries, setCountries, property, setProperty, properties, price, setPrice,houses, loading
//     }}>
//         {children}
//     </HouseContext.Provider>;
// };

// export default HouseContextProvider;