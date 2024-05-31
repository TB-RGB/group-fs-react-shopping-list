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
                    <ListItem item={item} getItems={getItems}/>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default ShoppingList; 
