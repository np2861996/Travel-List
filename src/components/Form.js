import { useState } from "react";

export default function Form({ items, setItems }) {
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
