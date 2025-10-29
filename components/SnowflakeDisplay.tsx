import React, { useRef, useMemo, useState } from 'react';
import type { SnowflakeOptions } from '../types';
import { SVG_SIZE } from '../constants';
import { FacebookIcon, XIcon, PinterestIcon, PngIcon, SvgIcon } from './icons';

interface SnowflakeDisplayProps {
  options: SnowflakeOptions;
}

// FIX: Modified Snowflake to forward a ref to the underlying SVG element
const Snowflake = React.forwardRef<SVGSVGElement, SnowflakeOptions>((options, ref) => {
  const { name, numArms, fontSize, armLength, tiltAngle, joinGap, fontFamily, textColor } = options;

  const arms = useMemo(() => {
    return Array.from({ length: numArms }, (_, i) => {
      const angle = (360 / numArms) * i;
      return { angle };
    });
  }, [numArms]);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g transform={`translate(${SVG_SIZE / 2}, ${SVG_SIZE / 2})`}>
        {arms.map(({ angle }, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <g transform={`translate(0, ${-armLength}) rotate(${tiltAngle})`}>
              <text
                x="0"
                y={-joinGap / 2}
                dy="0.35em"
                textAnchor="middle"
                style={{
                  fontFamily: `'${fontFamily}', sans-serif`,
                  fontSize: `${fontSize}px`,
                  fill: textColor,
                }}
              >
                {name}
              </text>
              <text
                x="0"
                y={joinGap / 2}
                dy="0.35em"
                textAnchor="middle"
                transform="scale(1, -1)"
                style={{
                  fontFamily: `'${fontFamily}', sans-serif`,
                  fontSize: `${fontSize}px`,
                  fill: textColor,
                }}
              >
                {name}
              </text>
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
});
Snowflake.displayName = 'Snowflake';


const SnowflakeDisplay: React.FC<SnowflakeDisplayProps> = ({ options }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDownloadingPng, setIsDownloadingPng] = useState(false);

  const getSvgString = (svgNode: SVGSVGElement | null): string => {
    if (!svgNode) return '';
    svgNode.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    return svgNode.outerHTML;
  }

  const download = (href: string, filename: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };
  
  const handleDownloadSVG = () => {
    const svgString = getSvgString(svgRef.current);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    download(url, 'name-snowflake.svg');
  };

  const handleDownloadPNG = (background: 'transparent' | 'white') => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const svgString = getSvgString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const scale = 2; // for higher resolution
    canvas.width = SVG_SIZE * scale;
    canvas.height = SVG_SIZE * scale;

    const img = new Image();
    img.onload = () => {
      ctx.scale(scale, scale);
      if (background === 'white') {
        ctx.fillStyle = '#FDFBF5'; // Cream background
        ctx.fillRect(0, 0, SVG_SIZE, SVG_SIZE);
      }
      ctx.drawImage(img, 0, 0);
      const url = canvas.toDataURL('image/png');
      download(url, 'name-snowflake.png');
      setIsDownloadingPng(false);
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
  };
  
  const share = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 h-full">
      <div className="w-full aspect-square border-2 border-dashed border-amber-600/30 rounded-xl p-2 bg-white/20">
        {/* FIX: Removed wrapping div and passed ref directly to Snowflake component */}
        <Snowflake {...options} ref={svgRef} />
      </div>

      <div className="w-full mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
                onClick={handleDownloadSVG}
                className="flex items-center justify-center gap-2 w-full bg-[#084C61] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#063a4b] transition-colors shadow-md"
            >
                <SvgIcon className="w-5 h-5" /> Download SVG
            </button>
            <div className="relative">
                <button 
                    onClick={() => setIsDownloadingPng(p => !p)}
                    className="flex items-center justify-center gap-2 w-full bg-[#084C61] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#063a4b] transition-colors shadow-md"
                >
                    <PngIcon className="w-5 h-5" /> Download PNG
                </button>
                {isDownloadingPng && (
                    <div className="absolute bottom-full mb-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-10 p-2 space-y-2">
                        <button onClick={() => handleDownloadPNG('transparent')} className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">Transparent Background</button>
                        <button onClick={() => handleDownloadPNG('white')} className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">White Background</button>
                    </div>
                )}
            </div>
        </div>
        
        <div className="pt-4 text-center">
            <p className="text-sm font-semibold text-[#084C61] mb-3">Share your creation!</p>
            <div className="flex justify-center items-center gap-4">
                <button onClick={() => share(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&hashtag=%23MyNameSnowflake`)} className="text-[#3b5998] hover:opacity-75 transition-opacity"><FacebookIcon className="w-8 h-8" /></button>
                <button onClick={() => share(`https://twitter.com/intent/tweet?text=${encodeURIComponent('I created a unique snowflake with my name!')}&url=${encodeURIComponent(window.location.href)}&hashtags=MyNameSnowflake`)} className="text-[#14171A] hover:opacity-75 transition-opacity"><XIcon className="w-7 h-7" /></button>
                <button onClick={() => share(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent('I created a unique snowflake with my name! #MyNameSnowflake')}`)} className="text-[#E60023] hover:opacity-75 transition-opacity"><PinterestIcon className="w-8 h-8" /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SnowflakeDisplay;
