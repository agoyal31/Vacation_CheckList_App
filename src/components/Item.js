export default function Item({ itemObj, onDeleteItem, onToggle }) {
    return (
      <li>
        <input
          type="checkbox"
          value={itemObj.packed}
          onChange={() => onToggle(itemObj.id)}
        />
        <span style={itemObj.packed ? { textDecoration: "Line-through" } : {}}>
          {itemObj.quantity} {itemObj.description}
        </span>
        <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
      </li>
    );
  }