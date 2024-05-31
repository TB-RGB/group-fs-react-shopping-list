import ListItem from "../ListItem/ListItem"
import axios from "axios"


const ShoppingList = ({ getItems, items })=>{

const resetAll=(bool)=>{
    axios.put('/api/shopping/items/all', {isPurchased: bool})
        .then((response)=>{
            getItems()
        })
        .catch((err)=>{
            console.error('Could not reset', err)
        })
}
    
const removeAll=()=>{
    axios.delete('/api/shopping/items/all')
        .then((response)=>{
            getItems()
        })
        .catch((err)=>{
            console.error('Error in DELETE', err)
        })
}

const removeItems=(id)=>{
    axios.delete(`/api/shopping/${id}`)
        .then((response)=>{
            getItems()
        })
        .catch((err)=>{
            console.error('Could not remove item', err)
        })
}

const markPurchased=(id,bool)=>{
    axios.put(`/api/shopping/${id}`, {isPurchased: bool})
        .then((response)=>{
            getItems()
        })
        .catch((err)=>{
            console.error('Could not mark purchased', err)
        })
    }
   


    return(
        <>
            <h2>Shopping List</h2>
            <div>
                <button onClick={()=>resetAll(false)}>Reset</button>
                <button onClick={()=>removeAll()}>Clear</button>
            </div>

             <div>
                {items.map((item)=>(
                    <div key={item.id}>
                    <ListItem item={item} markPurchased={markPurchased} removeItems={removeItems}/>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default ShoppingList; 
