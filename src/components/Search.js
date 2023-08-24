// import React, { useContext } from "react";

import CountryDropdown from '../components/CountryDropdown'
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from '../components/PriceRangeDropdown'

import  {RiSearchLine} from 'react-icons/ri';
// import { HouseContext } from "./HouseContext";



const Search =()=>{
    // const {houses} = useContext(HouseContext)
    // console.log(houses);
return(
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 bg-white lg:bg-transparent lg:backdrop:blur-rounded-lg">
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
        <button className ="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
            <RiSearchLine />
        </button>
    </div>
);
}
export default Search;