
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-6 space-y-4">
      {/* Google AdSense Banner Placeholder */}
      <div className="w-full max-w-2xl h-24 mx-auto bg-gray-200/50 flex items-center justify-center rounded-lg border border-dashed border-gray-400/50">
        <span className="text-gray-500">Google AdSense Banner</span>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Name Snowflake Studio</p>
    </footer>
  );
};

export default Footer;
