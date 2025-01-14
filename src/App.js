import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, Description: "Passports", Quanity: 2, Packed: false },
  { id: 2, Description: "Socks", Quanity: 4, Packed: true },
  { id: 3, Description: "Suitcase", Quanity: 1, Packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="App">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;

function Logo() {
  return <h1 className="logo">🌍 Trip Planner</h1>;
}

function Form({ items, setItems }) {
  const [Description, setDescription] = useState("");
  const [Quanity, setQuanity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();

    const newItem = { Description, Quanity, Packed: false, id: Date.now() };
    console.log(newItem);
    setItems([...items, newItem]);

    setDescription("");
    setQuanity(1);
  }

  return (
    <div className="form-container">
      <form className="add-frm" onSubmit={HandleSubmit}>
        <h2>Add Items to Your Packing List</h2>
        <select
          value={Quanity}
          onChange={(e) => setQuanity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter item description..."
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="add-btn">Add Item</button>
      </form>
    </div>
  );
}

function PackingList({ items, setItems }) {
  function HandleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  //Add Line
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, Packed: !item.Packed } : item
      )
    );
  }

  return (
    <div className="list-container">
      <ul className="item-list">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemove={HandleRemoveItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onRemove, handleToggleItem }) {
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

function Stats({ items }) {
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
