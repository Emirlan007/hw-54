import './Cell.css';

const Cell = ({ item, onClick }: { item: Item; onClick: () => void }) => {
  return (
    <div className={`cell ${item.clicked ? "clicked" : ""}`} onClick={onClick}>
      {item.clicked && (item.hasItem ? <span className="emoji">🥳</span> : "")}
    </div>
  );
};

export default Cell;