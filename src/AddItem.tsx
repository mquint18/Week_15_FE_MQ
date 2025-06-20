

import React, { useState } from "react";
import { DefaultItems } from "./DefaultItems";
import ListItems from "./ListItems";


 function AddToList() {


    const newProduct = [
    {
        Name:'Spaghetti',
        Quantity: 4,
        Picture: "src/assets/spaghetti.webp"
    }
    ]
    const [DefaultItems, setNewList] = useState ([{}]);
    const [newItem, setNewItem] = useState(''); 
    
    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };
    
    const handleAddData = () => {
        setNewList([...DefaultItems, newProduct]);

    }
 

 return (

    <div>
            

            <button onClick={handleAddData}>Add Product</button>
            
            
                
                

    </div>
 );
    
    };

export default AddToList;