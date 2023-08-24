'use client'
import React from 'react';
import House from './House';
import { Link } from 'react-router-dom';

const HouseList = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/property/1">
            <House
              id={1}
              title="Beautiful House 1"
              description="A lovely house with a garden."
              price={250000}
              imageUrl="https://example.com/house1.jpg"
            />
          </Link>
          <Link to="/property/2">
            <House
              id={2}
              title="Cozy Cottage"
              description="A charming cottage in the woods."
              price={180000}
              imageUrl="https://example.com/cottage.jpg"
            />
          </Link>
          {/* Add more House components for each house */}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
