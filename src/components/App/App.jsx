import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import ItemForm from "../ItemForm/ItemForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("/api/shopping")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log("Error with getItems()", error);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ItemForm getItems={getItems} />
        <ShoppingList getItems={getItems} items={items} />
      </main>
    </div>
  );
}

export default App;
