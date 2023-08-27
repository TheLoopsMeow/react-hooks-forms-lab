import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react"

function ItemForm(props) {
  const [newItem, addNewItem] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")
  const [newestItemVariable, setterFunctionForNewestItem] = useState("")
  const [itemArray, setItemArray] = useState([])

  function handleAddNewItem(e) {
    e.preventDefault()

    addNewItem(e.target.value)
  
  }
  // console.log(newItem)


  function handleNewItemCategory(e){
    e.preventDefault()

    setNewItemCategory(e.target.value)
  }

  function handleNewItemCreation (e) {
      e.preventDefault()

    const newestItem = {
      id: uuid(),
      name: newItem,
      category: newItemCategory
    }

    setterFunctionForNewestItem(newestItem)
    setItemArray([...itemArray,newestItem])
  }

  console.log(itemArray)

  return (
    <form className="NewItem"
      onSubmit={(e)=>{handleNewItemCreation(e)}}
      >
      <label>
        Name:
        <input 
        type="text" 
        value={newItem}
        name="name"  
        onChange={(e)=>{handleAddNewItem(e)}}/>
      </label>

      <label>
        Category:
        <select name="category" 
        value={newItemCategory}
        onChange={(e)=>{handleNewItemCategory(e)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" 
 >Add to List</button>
      
    </form>
  );

}

export default ItemForm;
