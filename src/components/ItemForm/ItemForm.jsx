import { useState } from 'react';
import axios from 'axios';


const ItemForm = ({ getItems }) => {
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    const addItem = (event) => {
        event.preventDefault();

        axios.post('/api/shopping', {
            item: newItem,
            quantity: newQuantity,
            unit: newUnit
        })
        .then((response) => {
            getItems();
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');
        })
        .catch((error) => {
            console.error('Error on add:', error);
        });
    };

    return (
        <form onSubmit={addItem}>
            <label htmlFor="item">Item:</label>
            <input
                id="item"
                type="text"
                onChange={(event) => setNewItem(event.target.value)}
                value={newItem}
            />

            <label htmlFor="quantity">Quantity:</label>
            <input
                id="quantity"
                type="number"
                onChange={(event) => setNewQuantity(event.target.value)}
                value={newQuantity}
            />

            <label htmlFor="unit">Unit:</label>
            <input
                id="unit"
                type="text"
                onChange={(event) => setNewUnit(event.target.value)}
                value={newUnit}
            />

            <button type="submit">Save</button>
        </form>
    );
};

export default ItemForm;

