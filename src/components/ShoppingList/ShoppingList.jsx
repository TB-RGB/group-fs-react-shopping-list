import React, { useState } from 'react';

//create function for shopping list section 

// create variables for shopping list function with set variables

// on load call fetch function

// fetch shopping list from the server with a get 

// create a add Item function using post that also renders the item


<div>
<AddGroceryForm groceryRefreshCallback={refreshGrocery} />
{groceryList.map((groceryData, dataIndex) => {
    return (   
    <div key={dataIndex}>
        <Header />
        <h3>{groceryData.Name}</h3>
        <p>{groceryData.Quantity}</p>
        <p>{groceryData.Unit}</p>
        <p>{groceryData.Purchased}</p>
        <button onClick={() => handleClickDelete(groceryData.id)}>Delete</button>
    </div>
    );
})}
</div>


