
import React from 'react';
import type { SnowflakeOptions } from '../types';
import { GOOGLE_FONTS } from '../constants';

interface ControlsPanelProps {
  options: SnowflakeOptions;
  setOptions: React.Dispatch<React.SetStateAction<SnowflakeOptions>>;
}

const ControlItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium text-[#084C61]">{label}</label>
    {children}
  </div>
);

const StyledInput = "w-full p-2 bg-white/50 border border-amber-600/30 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm";
const StyledSelect = "w-full p-2 bg-white/50 border border-amber-600/30 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm";
const StyledSlider = "w-full h-2 bg-amber-200/50 rounded-lg appearance-none cursor-pointer accent-[#8C1C13]";


const ControlsPanel: React.FC<ControlsPanelProps> = ({ options, setOptions }) => {
  const handleOptionChange = (key: keyof SnowflakeOptions, value: string | number) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <h2 style={{fontFamily: 'Cinzel'}} className="text-2xl font-bold text-center mb-6 text-[#8C1C13]">Customize Your Snowflake</h2>
      <div className="space-y-6">
        <ControlItem label="Name or Word">
          <input
            type="text"
            className={StyledInput}
            value={options.name}
            onChange={(e) => handleOptionChange('name', e.target.value)}
            maxLength={15}
          />
        </ControlItem>

        <ControlItem label={`Number of Arms: ${options.numArms}`}>
          <input
            type="range"
            min="3"
            max="24"
            step="1"
            className={StyledSlider}
            value={options.numArms}
            onChange={(e) => handleOptionChange('numArms', parseInt(e.target.value, 10))}
          />
        </ControlItem>

        <ControlItem label={`Font Size: ${options.fontSize}px`}>
          <input
            type="range"
            min="10"
            max="100"
            className={StyledSlider}
            value={options.fontSize}
            onChange={(e) => handleOptionChange('fontSize', parseInt(e.target.value, 10))}
          />
        </ControlItem>

        <ControlItem label={`Arm Length: ${options.armLength}`}>
          <input
            type="range"
            min="50"
            max="300"
            className={StyledSlider}
            value={options.armLength}
            onChange={(e) => handleOptionChange('armLength', parseInt(e.target.value, 10))}
          />
        </ControlItem>

        <ControlItem label={`Tilt Angle: ${options.tiltAngle}°`}>
          <input
            type="range"
            min="-45"
            max="45"
            className={StyledSlider}
            value={options.tiltAngle}
            onChange={(e) => handleOptionChange('tiltAngle', parseInt(e.target.value, 10))}
          />
        </ControlItem>

        <ControlItem label={`Join Gap: ${options.joinGap}px`}>
          <input
            type="range"
            min="0"
            max="50"
            className={StyledSlider}
            value={options.joinGap}
            onChange={(e) => handleOptionChange('joinGap', parseInt(e.target.value, 10))}
          />
        </ControlItem>

        <ControlItem label="Font Style">
          <select
            className={StyledSelect}
            value={options.fontFamily}
            onChange={(e) => handleOptionChange('fontFamily', e.target.value)}
          >
            {GOOGLE_FONTS.map(font => (
              <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                {font.name}
              </option>
            ))}
          </select>
        </ControlItem>

        <ControlItem label="Text Color">
            <div className="relative">
                 <input
                    type="color"
                    className="w-full h-10 p-1 bg-white/50 border border-amber-600/30 rounded-md cursor-pointer"
                    value={options.textColor}
                    onChange={(e) => handleOptionChange('textColor', e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700 font-mono tracking-wider">
                    {options.textColor.toUpperCase()}
                </span>
            </div>
        </ControlItem>
      </div>
    </div>
  );
};

export default ControlsPanel;
