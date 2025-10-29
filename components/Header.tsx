
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 bg-transparent">
      <h1 style={{ fontFamily: 'Playfair Display' }} className="text-4xl md:text-5xl font-bold text-[#8C1C13]">
        Name Snowflake Generator
      </h1>
      <p style={{ fontFamily: 'Great Vibes' }} className="text-2xl md:text-3xl text-[#084C61] mt-2">
        Each Snowflake is Uniquely Yours
      </p>
    </header>
  );
};

export default Header;
