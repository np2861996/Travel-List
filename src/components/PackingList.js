import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  function HandleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    setItems([]);
  }

  //Add Line
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, Packed: !item.Packed } : item
      )
    );
  }

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.Packed) - Number(b.Packed));

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.Description.localeCompare(b.Description));

  return (
    <div className="list-container">
      <ul className="item-list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemove={HandleRemoveItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div class="add-frm">
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
        </div>

        <button
          className="add-btn"
          onClick={(e) => handleClearList(e.target.value)}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
