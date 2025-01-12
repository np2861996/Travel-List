import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, Description: "Passports", Quanity: 2, Packed: false },
  { id: 2, Description: "Socks", Quanity: 4, Packed: true },
  { id: 3, Description: "Shootcase", Quanity: 4, Packed: false },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>💕Logo</h1>;
}

function Form() {
  function HandleSubmit(e) {
    e.preventDefault();

    const newItem = { Description, Quanity, Packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuanity(1);
  }

  const [Description, setDescription] = useState("");
  const [Quanity, setQuanity] = useState(1);

  return (
    <div>
      <form className="add-frm" onSubmit={HandleSubmit}>
        <h2>What You need for the trip!</h2>
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
          placeholder="items.."
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list-items">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.Packed ? { textDecoration: "line-through" } : {}}>
        {item.Quanity} {item.Description}
      </span>
      <button>X</button>
    </li>
  );
}
function Stats() {
  return <h1>✌️Stats</h1>;
}
