export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const packedItems = items.filter((item) => item.packed === true);
  let leftItems = Math.round((packedItems.length / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {leftItems === 100
          ? "💼 You got everything! Ready to go✈"
          : `💼 You have ${items.length} items on your list and you already packed
          ${packedItems.length}(${leftItems}%)`}
      </em>
    </footer>
  );
}
