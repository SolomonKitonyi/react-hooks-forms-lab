import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [selected,setSelected] = useState("Produce")
  const [name,setName] = useState("")
  function handleChange(e) {
    setSelected(e.target.value)
  }
  function handleName(e) {
    setName(e.target.value)
  }
  function onItemSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: selected,
    };
    onItemFormSubmit(newItem)

  }
  
  return (
    <form className="NewItem" onSubmit={onItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value = {name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={selected}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
