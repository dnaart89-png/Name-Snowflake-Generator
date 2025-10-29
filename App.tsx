
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ControlsPanel from './components/ControlsPanel';
import SnowflakeDisplay from './components/SnowflakeDisplay';
import type { SnowflakeOptions } from './types';
import { GOOGLE_FONTS } from './constants';

const App: React.FC = () => {
  const [options, setOptions] = useState<SnowflakeOptions>({
    name: 'Snowflake',
    numArms: 8,
    fontSize: 40,
    armLength: 150,
    tiltAngle: 15,
    joinGap: 5,
    fontFamily: GOOGLE_FONTS[0].value,
    textColor: '#8C1C13', // Cranberry Red
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF5] text-[#3A3A3A]">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ControlsPanel options={options} setOptions={setOptions} />
          </div>
          <div className="lg:col-span-2">
            <SnowflakeDisplay options={options} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
