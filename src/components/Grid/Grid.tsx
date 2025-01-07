import Cell from "../Cell/Cell.tsx";
import "./Grid.css";

const Grid = ({
  items,
  onCellClick,
}: {
  items: Item[];
  onCellClick: (index: number) => void;
}) => {
  return (
    <div className="game-container">
      <div className="grid">
        {items.map((item, index) => (
          <Cell key={index} item={item} onClick={() => onCellClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Grid;