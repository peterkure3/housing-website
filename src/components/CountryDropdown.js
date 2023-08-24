'use client'
import React, { useState } from 'react';
import { RiMapPin2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';

const CountryDropdown = () => {
  const countries = ['Location (any)','Country 1', 'Country 2', 'Country 3']; // Hardcoded country list
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full left-text"
      >
        <RiMapPin2Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {selectedCountry}
          </div>
          <div>Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-primary" />
          )}
        </div>
      </Menu.Button>

      {isOpen && ( // Show the dropdown menu only if isOpen is true
        <Menu.Items className="dropdown-menu">
          {countries.map((country, index) => (
            <Menu.Item
              onClick={() => setSelectedCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          ))}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default CountryDropdown;
