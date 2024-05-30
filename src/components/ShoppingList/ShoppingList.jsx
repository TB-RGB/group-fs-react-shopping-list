import ListItem from "../ListItem/ListItem"
import axios from "axios"


const ShoppingList = ({ getItems, items })=>{

    const markPurchased=(id,bool)=>{
        axios.put(`/api/shopping/${id}`, {isPurchased: bool})
            .then((response)=>{
                getItems()
            })
            .catch((err)=>{
                console.error('Could not mark purchased', err)
            })
        }
const removeAll=()=>{
    axios.delete('/api/shopping/')
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
                <button onClick={()=>markPurchased(false)}>Reset</button>
                <button onClick={()=>removeAll()}>Clear</button>
            </div>

             <div>
                {items.map((item)=>(
                    <div key={item.id}>
                    <ListItem item={item} putFunc={markPurchased} getItems={getItems}/>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default ShoppingList; 
