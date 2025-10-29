
import React from 'react';

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.633 7.855 6.357 9.348-.093-.787-.016-2.006.217-2.922.227-.923 1.424-6.024 1.424-6.024s-.363-.725-.363-1.792c0-1.673.968-2.923 2.176-2.923 1.026 0 1.514.772 1.514 1.693 0 1.026-.653 2.558-.99 3.957-.282 1.122.563 2.035 1.657 2.035 1.979 0 3.44-2.571 3.44-6.31c0-3.23-2.268-5.52-5.12-5.52-3.523 0-5.69 2.607-5.69 5.302 0 .989.37 2.046.834 2.611.096.118.11.214.083.335-.083.37-.27.923-.314 1.122-.045.203-.182.258-.337.153-1.292-.66-2.09-2.55-2.09-4.225 0-2.288 1.63-4.57 4.73-4.57 2.502 0 4.482 1.874 4.482 4.312 0 2.63-1.573 4.673-3.738 4.673-.743 0-1.455-.38-1.69- .82-.244-1.31.503-2.52.503-2.52" clipRule="evenodd" />
    </svg>
);

export const PngIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14V10C4 9.44772 4.44772 9 5 9H9C9.55228 9 10 9.44772 10 10V14C10 14.5523 9.55228 15 9 15H5C4.44772 15 4 14.5523 4 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 15V9H17.25C18.2165 9 19 9.7835 19 10.75V10.75C19 11.7165 18.2165 12.5 17.25 12.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SvgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 9.5C5.05228 9.5 5.5 9.05228 5.5 8.5C5.5 7.94772 5.05228 7.5 4.5 7.5C3.94772 7.5 3.5 7.94772 3.5 8.5C3.5 9.05228 3.94772 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12C16.5 12 16.5 16 14 16C11.5 16 11.5 12 9 12C6.5 12 6.5 8 4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V9H15.25C16.2165 9 17 9.7835 17 10.75V10.75C17 11.7165 16.2165 12.5 15.25 12.5H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
