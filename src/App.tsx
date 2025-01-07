import "./App.css";
import { useState } from "react";
import Grid from "./components/Grid/Grid.tsx";
import TriesCounter from "./components/TriesCounter/TriesCounter.tsx";
import ResetButton from "./components/ResetButton/ResetButton.tsx";

const App = () => {
  const createItems = (count: number): Item[] => {
    const items: Item[] = [];

    for (let i = 0; i < count; i++) {
      items.push({
        hasItem: false,
        clicked: false,
      });
    }
    const randomIndex = Math.floor(Math.random() * count);
    items[randomIndex].hasItem = true;

    return items;
  };

  const [arr, setArr] = useState<Item[]>(createItems(36));
  const [tries, setTries] = useState(0);

  const handleClick = (index: number) => {
    const newArr = [...arr];
    const item = newArr[index];

    if (!item.clicked) {
      item.clicked = true;
      setTries(tries + 1);
    }
    setArr(newArr);

    if (item.hasItem) {
      alert("Awesome,you found it!");
    }
  };

  const handleReset = () => {
    setArr(createItems(36));
    setTries(0);
  };

  return (
    <>
      <Grid items={arr} onCellClick={handleClick} />
      <TriesCounter tries={tries} />
      <ResetButton onReset={handleReset} />
    </>
  );
};

export default App;