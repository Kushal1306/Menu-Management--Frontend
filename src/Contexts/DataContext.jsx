import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCategories = () => {
            axios.get('https://menu-management-backend-guestara.vercel.app/Category')
                .then((res) => {
                    console.log('Fetched categories:', res.data);
                    setCategories(res.data);
                })
                .catch((error) => console.error('Error fetching categories:', error));
        };

        const fetchSubcategories = () => {
            axios.get('https://menu-management-backend-guestara.vercel.app/subcategories')
                .then((res) => {
                    console.log('Fetched subcategories:', res.data);
                    setSubcategories(res.data);
                })
                .catch((error) => console.error('Error fetching subcategories:', error));
        };

        const fetchItems = () => {
            axios.get('https://menu-management-backend-guestara.vercel.app/items')
                .then((res) => {
                    console.log('Fetched items:', res.data);
                    setItems(res.data);
                })
                .catch((error) => console.error('Error fetching items:', error));
        };

        fetchCategories();
        fetchSubcategories();
        fetchItems();
    }, []);

    return (
        <DataContext.Provider value={{ categories, subcategories, items }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
