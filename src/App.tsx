import './App.css';
import { useState } from 'react';

const App = () => {

  const createItems = (count: number): Item[] => {
    const items: Item[] = [];

    for (let i = 0; i < count; i++) {
      items.push({
        hasItem: false,
        clicked: false
      });
    }
    const randomIndex = Math.floor(Math.random() * count);
    items[randomIndex].hasItem = true;

    return items;
  };

  const[arr, setArr]  = useState<Item[]>(createItems(36));
  const [tries, setTries] = useState(0);

  const handleClick = (index: number) => {
    const newArr = [...arr];
    const item = newArr[index];

    if (!item.clicked){
      item.clicked = true;
      setTries(tries + 1);
    }
    setArr(newArr);

    if (item.hasItem){
      alert('Awesome,you found it!');
    }
  };

  return(
    <>
      <div className="game-container">
        <div className="grid">
          {arr.map((item, index) => (
            <div
              key={index}
              className={`cell ${item.clicked ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.clicked && (item.hasItem ? <span className="emoji">🥳</span> : '')}
            </div>
          ))}
        </div>

      </div>

      <p>Tries: {tries}</p>
      <button onClick={() => {
        setArr(createItems(36));
        setTries(0);
      }}>Reset</button>
    </>
  );
};

export default App;