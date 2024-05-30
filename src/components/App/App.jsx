
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios.get('/shopping')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log('Error with getItems()', error);
      });
  };

  const addItem = (newItem) => {
    axios.post('/shopping', newItem)
      .then(response => {
        setItems([items, response.data]);
      })
      .catch(error => {
        console.log('Error with addItem()', error);
      });
  };

/*
const deleteItem=(id) =>{
    axios.delete('/shopping/${id}')
    .then(()={})
}
*/
 


  return (
    <div className="App">
      <Header />
      <main>
        <ItemForm addItem={addItem} />
        <ShoppingList items={items} />
      </main>
    </div>
  );
}

export default App;





