export function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.Packed).length;

  return (
    <div className="stats">
      <p>
        🧳 Hey, You have packed {packedItems}/{totalItems} items!
      </p>
    </div>
  );
}
