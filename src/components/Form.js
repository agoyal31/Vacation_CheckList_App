import { useState } from "react";
export default function Form({ onAddItems }) {
  //controlled elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //   function handleAddItems(item) {
  //     setItem((items) => [...items, item]);
  //   }

  //to prevent the app to reload when adding new item
  //common with forms to reload once new item is being added
  //since react is single page application => to avoid the above behaviour(preventDefault is used when it is being submitted)
  function handleSubmit(e) {
    e.preventDefault();

    //ON SUBMITTING EMPTY FORM NOTHING SHOULD BE RETURNED/HAPPEN
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    //once submission is done form should take/set to its initial state
    //use the setter functions(useState) to update the state(automatically keep the updated state in sync with the form elements) of fields after submission
    //beauty of react -> controls, owns and being incharge of form and its fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
