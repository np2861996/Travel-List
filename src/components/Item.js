export function Item({ item, onRemove, handleToggleItem }) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span
        className="item-description"
        style={item.Packed ? { textDecoration: "line-through" } : {}}
      >
        {item.Quanity} {item.Description}
      </span>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        ❌
      </button>
    </li>
  );
}
