//Imports the components from other tsx files.

import React from "react";
import {DefaultItems} from "./DefaultItems";
import ListItems from "./ListItems";
import Toolbar from "./Toolbar";
import MakeList from "./MakeList";
import List from "./AddItem"
import AddToList from "./AddItem";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import { ListComponent } from "./ListComponent";
import { useState } from "react";
import MyButton from "./ButtonNew";

export default function App() {


  
  return (
  <div>
    <div className="container-fluid">
    <h1 className = "bg-warning text-center text-primary" >Shopping List App</h1> {/*Page header/title */}
    </div>
      <div className= "container-fluid"> {/* container for the Toolbar with buttons from ./Toolbar */}
      <Toolbar/>
      </div>
        <div className = 'col-md-12 text-center col-flex' >
        <div className=''>
            <h2 className='text-center my-3'>Shopping List</h2> {/*Subheading for List */}
            </div>
      <ProductList/>
</div> 
      <div>
       <AddToList></AddToList>
           </div>
           
       <button className = 'add-btn' onClick={()=> alert("Add Item")}>Add Item2</button>
       <MyButton/>

         </div>
  )
    }

  




          