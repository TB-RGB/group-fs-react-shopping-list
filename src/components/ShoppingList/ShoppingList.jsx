<form onSubmit={handleSubmitGrocery}>
<label>
  <span>Name:</span>
  <input
    id="name"
    onChange={handleChangeOfName}
    value={nameValue}
  />
</label>
<label>
  <span>Quantity:</span>
  <input
    id="quantity"
    onChange={handleChangeOfQuantity}

    value={quantityValue}
  />
</label>
<label>
  <span>Unit:</span>
  <input
    id="unit"
    onChange={handleChangeOfUnit}
    value={unitValue}
  />
</label>
<button type="submit">Save</button>
</form>

export default AddGroceryForm;



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