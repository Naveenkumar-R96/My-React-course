import React, { useEffect, useState } from 'react';
import Form from './Form';
import Table from './Table';

const Crud = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem('items'));
        if (storedValue && storedValue.length > 0) {
            setItems(storedValue);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const addItem = (item) => {
        setItems([...items, { id: Date.now(), ...item }]);
    };

    return (
        <div className=''>
            <div className="p-5 mb-5 border border-white w-full">
                <h1 className='text-5xl text-center font-medium text-white'>Todo App</h1>
                <Form addItem={addItem} />
                <Table items={items} setItem={setItems}/>
            </div>
        </div>
    );
};

export default Crud;
