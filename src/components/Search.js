'use client'
import React, { useState } from "react";
import CountryDropdown from '../components/CountryDropdown'
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from '../components/PriceRangeDropdown'
import { RiSearchLine } from 'react-icons/ri';
import House from './House'; // Import the House component or whatever component displays houses

const Search = () => {
  const [showHouses, setShowHouses] = useState(false);

  const handleClick = () => {
    console.log('Search button clicked');
  };

  const hardcodedHouses = [
    {
      id: 1,
      title: 'Beautiful House 1',
      description: 'A lovely house with a garden.',
      price: 250000,
      imageUrl: 'https://example.com/house1.jpg',
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      description: 'A charming cottage in the woods.',
      price: 180000,
      imageUrl: 'https://example.com/cottage.jpg',
    },
    // Add more house objects as needed
  ];

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 bg-white lg:bg-transparent lg:backdrop:blur-rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={handleClick}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearchLine />
      </button>
      {showHouses && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hardcodedHouses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
