import axios from "axios";
const ListItem = ({ item, putFunc, getItems }) => {

  const removeItems=(id)=>{
    axios.delete(`/api/shopping/${id}`)
        .then((response)=>{
            getItems()
        })
        .catch((err)=>{
            console.error('Could not remove item', err)
        })
}

  return (
    <>
      <div>
        <div>
          <h2>{item.name}</h2>
        </div>
        <div>
          <h3>
            {item.quantity}
            {item.unit}
          </h3>
        </div>
        <span>
          {!item.purchased && (
            <button onClick={() => putFunc(item.id, true)}>Buy</button>
          )}
          {!item.purchased ? (
            <button onClick={() => removeItems(item.id)}>Remove</button>
          ) : (
            <h3>Purchased</h3>
          )}
        </span>
      </div>
    </>
  );
};

export default ListItem;
