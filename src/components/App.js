import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: true },
//   { id: 4, description: "Cards", quantity: 4, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]); //initially empty

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  // delete item component > click to cross for delete will happen inside of an item
  //state lives in an app
  //child to parent communication

  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) setItem([]);
    setItem([]);
  }
  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggle={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

//on submitting form the item should be added to the existing items in the packing list
//but could not do it through props(because they are sibling components and not parent-child components)
//since data flow only in one direction from top to bottom(not up or sideways)
//state and state management comes into play
