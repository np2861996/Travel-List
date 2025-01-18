import { useState } from "react";
import "../App.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import { PackingList } from "./PackingList.js";
import { Stats } from "./Stats.js";

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
