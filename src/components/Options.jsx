import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="bg-gray-800 p-4 flex flex-col items-center">
      <NavLink to="/categories" className="text-white hover:text-gray-300 flex flex-col items-center w-28 mb-4">
        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png" alt="Categories" className="w-10 h-10 mb-1" />
        Categories
      </NavLink>
      <NavLink to="/subcategories" className="text-white hover:text-gray-300 flex flex-col items-center w-28 mb-4">
        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png" alt="Subcategories" className="w-10 h-10 mb-1" />
        Subcategories
      </NavLink>
      <NavLink to="/items" className="text-white hover:text-gray-300 flex flex-col items-center w-28">
        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png" alt="Items" className="w-10 h-10 mb-1" />
        Items
      </NavLink>
    </div>
  );
}

export default Navigation;
