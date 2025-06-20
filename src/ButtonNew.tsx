
import React from "react";
import AddProduct from "./AddProduct";

function MyButton() {
    const handleButtonClick = (a) => {
        <AddProduct/>;
    
    };

    return (
        
        <button onClick={() => {handleButtonClick}}> Add Item </button>
       
    );
}

export default MyButton;