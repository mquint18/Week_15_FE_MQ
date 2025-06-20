
import { useState } from "react";
import {DefaultItems} from "./DefaultItems";
import ListItems from "./ListItems";
import AddToList from "./AddItem";



export default function MakeList() {
    
   
 
return(
    <>  
    <AddToList/>

    <div id='itemcard' //makes a new div conatining an item using the map of the Default items array below.
       > 
            {DefaultItems.map((item) => ( <ListItems key={item.Name}  Name= {item.Name} Quantity = {item.Quantity} Picture = {item.Picture} /> ))}
        </div>  
      

</>
)
}