import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';

function Categories() {
    const { categories } = useContext(DataContext);

    console.log('Categories in component:', categories);  // Debugging log

    return (
       
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-3xl text-center font-serif font-bold">Categories</h2>
            <ul className="space-y-4">
                {categories.map((category) => (
                    <li key={category._id} className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center">
                            <img 
                                src={category.image} 
                                alt={category.categoryName} 
                                className="w-16 h-16 object-cover rounded mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{category.categoryName}</h3>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
   
    );
}

export default Categories;
