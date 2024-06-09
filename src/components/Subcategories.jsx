import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

function Subcategories() {
  const { subcategories } = useContext(DataContext);

  return (
    <div className="text-center">
      <h1 className='text-3xl font-serif font-bold mb-8'>Subcategories</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {subcategories.map((subcategory) => (
          <li key={subcategory._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="p-4">
              <li className="text-lg font-semibold mb-2">Subcategory: {subcategory.subcategoryName}</li>
              <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png" alt="" className="w-full h-auto mb-2" />
              <li className="text-sm text-gray-600 mb-2">Description: {subcategory.description}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subcategories;
