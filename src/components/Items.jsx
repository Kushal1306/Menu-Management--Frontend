import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

function Items() {
  const { items } = useContext(DataContext);

  return ( <div>
     <h1 className='text-3xl text-center font-serif font-bold'> Items</h1>
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMTVfaW5kaWFuX2Zvb2Rfb25fd2hpdGVfYmFja2dyb3VuZC1fZTNiYmIxYWItYTlkOS00OTRhLWFmZGYtYjBmZjYyZDcxNTUzLnBuZw.png"
              alt=""
              className="w-full h-auto mb-0.5"
            />
            <div className="text-sm text-gray-600 mb-2">Base Amount: {item.baseAmount}</div>
            <div className="text-sm text-red-600 mb-2">Discount: {item.discount}</div>
            <div className="bg-gray-100 py-1 px-2">
              <span className="text-sm font-semibold">Total Amount: {item.totalAmount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

   
  );
}

export default Items;
